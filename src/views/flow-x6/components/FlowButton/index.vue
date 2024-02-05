<template>
  <div class="container">
    <div  class="containerButton">{{ nodeData.title }}</div>
  </div>
</template>
<script>
export default {
  name: "FlowButton",
  inject: ["getGraph", "getNode"],
  data() {
    return {
      curNode: null,
      nodeData: { title: "" },
    };
  },
  mounted() {
    this.curNode = this.getNode();
    this.nodeData = this.curNode?.data ?? {};
    // 外部更新节点数据时，可监听 data的 change事件来获取
    this.curNode.on("change:data", ({ current }) => {
      this.nodeData = current;
    });
  },
  methods: {
    // onMyEvent(node) {
    //   // 节点组件中触发事件，传递数据
    //   this.$emit("myEvent", "data from FlowNode");
    // },
    // onClick() {
    //   this.nodeData.onEvent();
    //   console.log("this.nodeData", this.nodeData);
    // },
  },
};
</script>
<style lang="less">
.container {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: red;
}
.containerButton {
  border: 1px solid black;

  height: 100%;
  width: 100%;
  cursor: pointer;
}
</style>
