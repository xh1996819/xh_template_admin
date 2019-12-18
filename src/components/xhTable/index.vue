<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in tableData.length + 1"
      :key="item"
      :prop="propList[item - 1]"
      :label="title[item - 1]"
      width="180"
    ></el-table-column>
    <!-- <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>-->
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: []
    },
    title: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      propList: []
    };
  },
  created() {
    this.tableData.forEach(item => {
      this.propList = Object.keys(item);
    });
    console.log(this.propList);
  }
};
</script>

<style lang="scss" scoped>
</style>