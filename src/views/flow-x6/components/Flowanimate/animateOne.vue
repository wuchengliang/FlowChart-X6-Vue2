<template>
  <div class="container" ref="contaninerRef">
    <div class="water" ref="waterRef" :class="{ active: nodeData.active }">
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
    // background: `url(' + ${require(nodeData.imageUrl)} + '})`, 
    //   'background-size': '100% 100%'
    this.curNode = this.getNode();
    const nodeData = this.curNode?.data ?? {}
    this.nodeData = nodeData;
    console.log('nodeDATA',nodeData);
   
    this.$refs.contaninerRef.style.width = `${nodeData.width}px`
    this.$refs.contaninerRef.style.height = `${nodeData.height}px`
    // this.$refs.contaninerRef.style.background = `url(' + ${nodeData.imageUrl} + '})`,
    this.$refs.contaninerRef.style.backgroundSize = `100% 100%`,
    // this.$refs.waterRef.style.width = `${nodeData.innerWidth}px`
    // this.$refs.waterRef.style.height = `${nodeData.innerHeight}px`
    // this.$refs.waterRef.style.bottom = `${nodeData.innerPosition?.bottom}px`
    // this.$refs.waterRef.style.right = `${nodeData.innerPosition?.right}px`
    // console.log('ref',this.$refs.contaninerRef );
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
  // width:160px;
  // height: 190px;
  background: url('@/assets/songyang/06.png');
  background-size: 100% 100%;
  // border: 1px solid black;
}
.water {
-webkit-clip-path: polygon(35% 33%, 69% 33%, 69% 48%, 64% 57%, 64% 82%, 40% 82%, 40% 56%, 35% 48%);
clip-path: polygon(35% 33%, 69% 33%, 69% 48%, 64% 57%, 64% 82%, 40% 82%, 40% 56%, 35% 48%);
height: 100%;
width: 100%;
}
.water::before {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 0;
  width: 100%;
  background-color: rgba(7,149,237);
  
  transition: height 11s ease-in-out;
}
.water.active:before {
  height: 100%;
}
</style>
