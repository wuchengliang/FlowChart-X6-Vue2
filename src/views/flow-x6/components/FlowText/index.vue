<template>
  <div class="container">
    <div class="water">实时水位：{{ number }}m</div>
  </div>
</template>
<script>
export default {
  inject: ["getGraph", "getNode"],
  data() {
    return {
      isActive: false,
      curNode: null,
      nodeData: { title: "" },
      number: 0,
      maxNumber: 0,
    };
  },
  mounted() {
    this.curNode = this.getNode();
    console.log("text11curNode", this.curNode);
    // this.nodeData = this.curNode?.data ?? {};
    // 外部更新节点数据时，可监听 data的 change事件来获取
    this.curNode.on("change:data", ({ current }) => {
      this.nodeData = current;
      this.maxNumber = current.number;
      this.onSetNum();
    });
  },
  methods: {
    onMyEvent(node) {
      // 节点组件中触发事件，传递数据
      this.$emit("myEvent", "data from FlowNode");
    },
    onSetNum() {
      if (this.number < this.maxNumber) {
        setTimeout(() => {
          this.number = this.number + 1;
          this.onSetNum();
        }, 1000);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 120px;
  height: 40px;
  background-color: #eee;
  // border: 1px solid black;
}
</style>
