<template>
  <div class="container">
    <div class="imgbox">
      <img
        id="example1"
        :src="imgUrl"
        :rel:animated_src="imgUrlGIF"
        rel:auto_play="0"
        width="467"
        height="375"
      />
    </div>
    <div>
      <div
        v-for="(item, index) in tabrooms"
        :key="index"
        class="itembox"
        @click="tabClickfun(item, index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import SuperGif from "libgif";
export default {
  inject: ["getGraph", "getNode"],
  data() {
    return {
      isActive: false,
      curNode: null,
      nodeData: { title: "" },
      imgUrl: require("@/assets/icons8-bookmark.gif"),
      imgUrlGIF: require("@/assets/icons8-bookmark.gif"),
      tabrooms: ["Pause", "Play", "Restart", "Step forward", "Step back"],
      sup1: null,
    };
  },
  async mounted() {
    this.curNode = this.getNode();
    this.nodeData = this.curNode?.data ?? {};
    console.log("curNode", this.curNode);
    // 外部更新节点数据时，可监听 data的 change事件来获取
    this.curNode.on("change:data", ({ current }) => {
      this.nodeData = current;
      console.log("nodeDatafffff", current);
    });
    try {
      this.InitSuperGif();
    } catch (e) {
      console.error("程序错误", e);
    }
  },
  methods: {
    onMyEvent(node) {
      // 节点组件中触发事件，传递数据
      this.$emit("myEvent", "data from FlowNode");
    },
    InitSuperGif() {
      // 通过异步函数，获取gif文件
      var sup1 = new SuperGif({
        gif: document.getElementById("example1"),
        progressbar_foreground_color: "#9254de",
        progressbar_background_color: "#ebeef5",
        progressbar_height: 10,
      });

      sup1.load();
      this.sup1 = sup1;
    },
    tabClickfun(item, index) {
      //["Pause", "Play", "Restart", "Step forward", "Step back"]
      if (item === "Pause") {
        this.sup1.pause();
      } else if (item === "Play") {
        this.sup1.play();
      } else if (item === "Restart") {
        this.sup1.move_to(0);
      } else if (item === "Step forward") {
        this.sup1.move_relative(1);
      } else if (item === "Step back") {
        this.sup1.move_relative(-1);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  width: 120px;
  height: 200px;
  background-color: #eee;
  border: 1px solid black;
}
.Buttonbox {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-left: 90px;
  margin-top: 30px;
  .itembox {
    width: 96px;
    padding: 0 15px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    background: coral;
    margin-right: 10px;
    color: #fff;
    &:hover {
      background: rgb(219, 148, 122);
    }
  }
}
</style>
