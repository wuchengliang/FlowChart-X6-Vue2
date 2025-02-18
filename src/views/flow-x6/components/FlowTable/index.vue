<template>
  <div>
    <el-table
      class="custom-table-no-border"
      :data="tableData"
      stripe
      :height="200"
    >
      <el-table-column label="序号" align="center" type="index" width="70">
        <template #default="scope">
          {{
            scope.$index + 1 + (queryParams.pageNum - 1) * queryParams.pageSize
          }}
        </template>
      </el-table-column>
      <el-table-column
        prop="projectname"
        label="工程名称"
        min-width="210"
        header-align="center"
        show-overflow-tooltip
      />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
       tableData:[{
           projectname:'测试1'
       },
       {
           projectname:'测试2'
       },
       ],
       queryParams:{
           pageNum:1,
           pageSize:10
       }
    };
  },
  mounted() {},
  methods: {
    onMyEvent(node) {
      // 节点组件中触发事件，传递数据
      //   this.$emit("myEvent", "data from FlowNode");
    },
    onSetNum() {
      //   if (this.number < this.maxNumber) {
      //     setTimeout(() => {
      //       this.number = this.number + 1;
      //       this.onSetNum();
      //     }, 1000);
      //   }
    },
  },
};
</script>

<style scoped></style>
