<template>
  <div class="app-container">
    <!-- 添加按钮 -->
    <el-row type="flex" justify="end" style="margin-bottom: 20px;">
      <el-button type="primary" align="right">添加</el-button>
    </el-row>
    <!-- 表格 -->
    <el-table :data="classData" size="medium" border style="width: 100%">
      <el-table-column align="center" prop="name" label="教室名称" width="180"></el-table-column>
      <el-table-column align="center" prop="info" label="描述" width="180"></el-table-column>
      <el-table-column align="center" prop="date" label="创建时间"></el-table-column>
      <el-table-column align="center" label="操作">
        <el-button type="primary" icon="el-icon-edit" style="margin-right:50px;" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      align="center"
      style="margin-top: 200px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classData: [
        {
          name: "A201教室",
          info: "这个教室是舞蹈室",
          date: "2019/03/02 02:01"
        },
        {
          name: "A201教室",
          info: "这个教室是舞蹈室",
          date: "2019/03/02 02:01"
        },
        {
          name: "A201教室",
          info: "这个教室是舞蹈室",
          date: "2019/03/02 02:01"
        },
        {
          name: "A201教室",
          info: "这个教室是舞蹈室",
          date: "2019/03/02 02:01"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
    .app-container {
        width: 100%;
        height: 100%;
    }
</style>