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
          imageUrl: getSongImg("09.png"),
          id: "1",
          width: 460,
          height: 330,
          x: 1330,
          y: 360,
          ports: { ...basicPorts },
        },
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
          imageUrl: getSongImg("06.png"),
          id: "4",
          width: 180,
          height: 180,
          x: 1040,
          y: 455,
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
          imageUrl: getSongImg("04.png"),
          id: "6",
          width: 160,
          height: 190,
          x: 935,
          y: 444,
        },
        {
          imageUrl: getSongImg("03.png"),
          id: "7",
          width: 210,
          height: 140,
          x: 845,
          y: 505,
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
        },
        {
          imageUrl: getSongImg("00-1.png"),
          id: "10",
          width: 530,
          height: 460,
          x: 365,
          y: 288,
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
