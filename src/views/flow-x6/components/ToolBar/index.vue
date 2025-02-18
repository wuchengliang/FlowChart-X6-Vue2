<template>
  <div class="bar">
    <el-tooltip
      class="item"
      effect="dark"
      content="清除 (Cmd + D)"
      placement="bottom"
    >
      <el-button
        name="delete"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        delete
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="撤销 (Cmd + Z)"
      placement="bottom"
    >
      <el-button
        :disabled="!canUndo"
        name="undo"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        undo
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="Redo (Cmd + Shift + Z)"
      placement="bottom"
    >
      <el-button
        :disabled="!canRedo"
        name="redo"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        redo
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="复制 (Cmd + Shift + Z)"
      placement="bottom"
    >
      <el-button
        name="copy"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        copy
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="剪切 (Cmd + X)"
      placement="bottom"
    >
      <el-button
        name="cut"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        cut
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="粘贴 (Cmd + V)"
      placement="bottom"
    >
      <el-button
        name="paste"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        paste
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="保存PNG (Cmd + S)"
      placement="bottom"
    >
      <el-button
        name="savePNG"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        savePNG
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="保存SVG (Cmd + S)"
      placement="bottom"
    >
      <el-button
        name="saveSVG"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        saveSVG
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="打印 (Cmd + P)"
      placement="bottom"
    >
      <el-button
        name="print"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        print
      </el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="导出 (Cmd + P)"
      placement="bottom"
    >
      <el-button
        name="toJSON"
        @click="handleClick"
        class="item-space"
        size="small"
      >
        toJSON
      </el-button>
    </el-tooltip>
    <el-button
      name="create"
      @click="handleClick"
      class="item-space"
      size="small"
    >
      生成流程图
    </el-button>
  </div>
</template>
<script>
import FlowGraph from "../../graph";
import {
  basicPorts,
  customPorts,
  outerPorts,
  outerPorts8,
  outerPorts7,
  outerPorts6,
  outerPorts4,
  outerPorts1,
  outerPorts10,
  outerPorts9
} from "../../graph/ports";
import { DataUri } from "@antv/x6";
import { getImg, getSongImg } from "@/utils";
export default {
  data() {
    return {
      canUndo: null,
      canRedo: null,
      active: [false, false],
      numbers: [0, 0],
    };
  },
  created() {
    this.myInit();
  },
  methods: {
    myInit() {
      const { graph } = FlowGraph;
      const { history } = graph;
      this.canUndo = history.canUndo();
      this.canRedo = history.canRedo();
      history.on("change", () => {
        this.canUndo = history.canUndo();
        this.canRedo = history.canRedo();
      });
      graph.bindKey("ctrl+z", () => {
        if (history.canUndo()) {
          history.undo();
        }
        return false;
      });
      graph.bindKey("ctrl+shift+z", () => {
        if (history.canRedo()) {
          history.redo();
        }
        return false;
      });
      graph.bindKey("ctrl+d", () => {
        graph.clearCells();
        return false;
      });
      graph.bindKey("ctrl+s", () => {
        graph.toPNG((datauri) => {
          DataUri.downloadDataUri(datauri, "chart.png");
        });
        return false;
      });
      graph.bindKey("ctrl+p", () => {
        graph.printPreview();
        return false;
      });
      graph.bindKey("ctrl+c", this.copy);
      graph.bindKey("ctrl+v", this.paste);
      graph.bindKey("ctrl+x", this.cut);
    },
    copy() {
      const { graph } = FlowGraph;
      const cells = graph.getSelectedCells();
      if (cells.length) {
        graph.copy(cells);
      }
      return false;
    },

    cut() {
      const { graph } = FlowGraph;
      const cells = graph.getSelectedCells();
      if (cells.length) {
        graph.cut(cells);
      }
      return false;
    },

    paste() {
      const { graph } = FlowGraph;
      if (!graph.isClipboardEmpty()) {
        const cells = graph.paste({ offset: 32 });
        graph.cleanSelection();
        graph.select(cells);
      }
      return false;
    },

    handleClick(event) {
      const { graph } = FlowGraph;
      const name = event.currentTarget.name;
      switch (name) {
        case "undo":
          graph.history.undo();
          break;
        case "redo":
          graph.history.redo();
          break;
        case "delete":
          graph.clearCells();
          break;
        case "savePNG":
          graph.toPNG(
            (dataUri) => {
              // 下载
              DataUri.downloadDataUri(dataUri, "chartx.png");
            },
            {
              backgroundColor: "white",
              padding: {
                top: 20,
                right: 30,
                bottom: 40,
                left: 50,
              },
              quality: 1,
            }
          );
          break;
        case "saveSVG":
          graph.toSVG((dataUri) => {
            // 下载
            DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), "chart.svg");
          });
          break;
        case "print":
          graph.printPreview();
          break;
        case "copy":
          this.copy();
          break;
        case "cut":
          this.cut();
          break;
        case "paste":
          this.paste();
          break;
        case "toJSON":
          console.log("Json", graph.toJSON());
          window.localStorage.setItem(
            "graphJson",
            JSON.stringify(graph.toJSON())
          );
          // graph.fromJSON({cells:[graph.toJSON().cells[0],graph.toJSON().cells[1]]})
          break;
        case "create":
          this.getflowChart();
          break;
        default:
          break;
      }
    },
    getflowChart() {
      const { graph } = FlowGraph;
      const imageList = [
        {
          imageUrl: getSongImg("08.png"),
          id: "2",
          width: 210,
          height: 210,
          x: 1212,
          y: 503,
        },
        {
          imageUrl: getSongImg("07.png"),
          id: "3",
          width: 207,
          height: 207,
          x: 1181,
          y: 505,
        },
        {
          imageUrl: getSongImg("05.png"),
          id: "5",
          width: 160,
          height: 160,
          x: 1010,
          y: 480,
        },
        {
          imageUrl: getSongImg("03.png"),
          id: "7",
          width: 210,
          height: 140,
          x: 845,
          y: 505,
          ports: { ...outerPorts7 },
        },
        {
          imageUrl: getSongImg("02.png"),
          id: "8",
          width: 150,
          height: 150,
          x: 806,
          y: 500,
          ports: { ...outerPorts8 },
        },
        {
          imageUrl: getSongImg("00-01.png"),
          id: "9",
          width: 550,
          height: 470,
          x: 220,
          y: 320,
          ports:{...outerPorts9}
        },
        {
          imageUrl: getSongImg("00-1.png"),
          id: "10",
          width: 530,
          height: 460,
          x: 365,
          y: 288,
          ports:{...outerPorts10 }
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "11",
          width: 140,
          height: 150,
          x: 810,
          y: 492,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "12",
          width: 140,
          height: 150,
          x: 700,
          y: 492,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "13",
          width: 140,
          height: 150,
          x: 1280,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "14",
          width: 140,
          height: 150,
          x: 1150,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "15",
          width: 140,
          height: 150,
          x: 1020,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "16",
          width: 140,
          height: 150,
          x: 895,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "17",
          width: 140,
          height: 150,
          x: 770,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "18",
          width: 140,
          height: 150,
          x: 640,
          y: 525,
        },
        {
          imageUrl: getSongImg("00-02.png"),
          id: "19",
          width: 140,
          height: 150,
          x: 510,
          y: 525,
        },
      ];

      const nodeList = [
        {
          imageUrl: getSongImg("04.png"),
          id: "6",
          width: 160,
          height: 190,
          innerWidth: 50,
          innerHeight: 50,
          innerPosition: {
            bottom: 0,
            right: 0,
          },
          x: 935,
          y: 444,
          ports: { ...outerPorts6 },
        },
        {
          imageUrl: getSongImg("06.png"),
          id: "4",
          width: 180,
          height: 180,
          x: 1040,
          y: 455,
          innerPosition: {
            bottom: 0,
            right: 0,
          },
          ports: { ...outerPorts4 },
        },
        {
          imageUrl: getSongImg("09.png"),
          id: "1",
          width: 460,
          height: 330,
          x: 1395,
          y: 360,
          ports: { ...outerPorts1 },
        },
      ];
      imageList.forEach((item) => {
        graph.addNode({
          shape: "image",
          id: item.id,
          imageUrl: item.imageUrl,
          attrs: {
            image: {
              // fill: 'yellow',
            },
          },
          width: item.width,
          height: item.height,
          x: item.x,
          y: item.y,
          ports: item.ports,
        });
      });
      nodeList.forEach((item, index) => {
        const a = ["flow-animate", "flow-animate-one", "flow-animate-two"];
        graph.addNode({
          shape: a[index],
          id: item.id,
          width: item.width,
          height: item.height,
          x: item.x,
          y: item.y,
          ports: item.ports,
          data: {
            imageUrl: item.imageUrl,
            width: item.width,
            height: item.height,
            innerWidth: item.innerWidth,
            innerHeight: item.innerHeight,
            innerPosition: item.innerPosition,
            active: false,
          },
        });
      });

      const textList = [{
        shape: "flow-chart-rect",
        id: "99",
        attrs: {
          text: {
            text: "模拟流程",
          },
        },
        x: 420,
        y: 320,
      },{
        shape: "flow-chart-rect",
        id: "33",
        attrs: {
          text: {
            text: "源水进水管",
          },
        },
        x: 790,
        y: 592,
        width:100,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "34",
        attrs: {
          text: {
            text: "反应沉淀器",
          },
        },
        x: 1000,
        y: 443,
        width:80,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "35",
        attrs: {
          text: {
            text: "反冲洗水箱",
          },
        },
        x: 1100,
        y: 443,
        width:80,
        height:20
      },
      {
        shape: "flow-chart-rect",
        id: "44",
        attrs: {
          text: {
            text: "过滤器",
          },
        },
        x: 1110,
        y: 630,
        width:50,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "36",
        attrs: {
          text: {
            text: "清水出水管",
          },
        },
        x: 1250,
        y: 640,
        width:100,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "38",
        attrs: {
          text: {
            text: "清水池",
          },
        },
        x: 1450,
        y: 443,
        width:100,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "39",
        attrs: {
          text: {
            text: "消毒剂投加",
          },
        },
        x: 390,
        y: 630,
        width:100,
        height:20
      },{
        shape: "flow-chart-rect",
        id: "40",
        attrs: {
          text: {
            text: "混凝剂投加",
          },
        },
        x: 600,
        y: 590,
        width:100,
        height:20
      },]
      textList.forEach((item)=>{
        graph.addNode({
        shape: item.shape,
        id: item.id,
        attrs: item.attrs,
        x: item.x,
        y: item.y,
        width:item.width,
        height:item.height
        })
      })
    },
  },
};
</script>
<style scoped>
.bar {
  width: 100%;
  z-index: 99999;
  margin-right: 16px;
}

.item-space {
  margin-left: 16px;
}
</style>
