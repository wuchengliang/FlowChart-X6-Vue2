<template>
  <div class="container">
    <div class="water" :class="{ active: nodeData.active }">
      {{ nodeData.title }}
    </div>
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
    };
  },
  mounted() {
    this.curNode = this.getNode();
    this.nodeData = this.curNode?.data ?? {};
    console.log("curNode", this.curNode);
    // 外部更新节点数据时，可监听 data的 change事件来获取
    this.curNode.on("change:data", ({ current }) => {
      this.nodeData = current;
      console.log("nodeDatafffff", current);
    });
  },
  methods: {
    onMyEvent(node) {
      // 节点组件中触发事件，传递数据
      this.$emit("myEvent", "data from FlowNode");
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
.water::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #00bcd4;
  transition: height 8s ease-in-out;
}
.water.active:before {
  height: 100%;
}
</style>
