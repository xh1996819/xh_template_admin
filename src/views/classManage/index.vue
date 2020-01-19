<template>
  <div>
    <el-button @click="$router.push({name:'ClassManageControl'})"></el-button>
    <el-button type="primary" @click="showDialog"></el-button>

    <xh-table :tableData="classList" :title="title"></xh-table>

    <div v-for="item in selectData" :key="item.name">{{item}}</div>

    <el-dialog title :visible.sync="dialogVisible" @opened="initData" width="60%">
      <select-table
        v-if="reset"
        ref="selectTable"
        :tableData.sync="classList2"
        :selectData.sync="selectData"
        :selectType="2"
        @exportData="importData"
      ></select-table>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import xhTable from "@/components/xhTable";
import selectTable from "./components/selectTable";
export default {
  data() {
    return {
      classList: [
        { name: "张三", time: "2019/9/19", id: "1" },
        { name: "李四", time: "2019/10/20", id: "2" }
      ],
      classList2: [
        { name: "舞蹈特训班1", population: 1, remark: "这里是备注1" },
        { name: "舞蹈特训班2", population: 2, remark: "这里是备注2" },
        { name: "舞蹈特训班3", population: 3, remark: "这里是备注3" }
      ],
      reset: true,
      selectData: [],
      title: ["姓名", "时间", "id"],
      dialogVisible: false
    };
  },
  components: { xhTable, selectTable },
  created() {
    let date = Date.parse(new Date());
    console.log(this.$date.dateFormat(date, "Y/m/d H:i:s"));
  },
  mounted() {
    // this.classList2 = this.syncData();
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    initData() {
      this.$refs.selectTable.initData();
    },
    confirm() {
      this.$refs.selectTable.exportData();
      this.dialogVisible = false;
    },
    importData(val) {
      console.log(val);
      this.selectData = [...val];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>