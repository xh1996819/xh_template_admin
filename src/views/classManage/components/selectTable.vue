<template>
  <div>
    <el-table :data="tableData" border stripe>
      <el-table-column label="选择" width="60px">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.checked" @change="handleCheckedChange(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="班级名称"></el-table-column>
      <el-table-column prop="population" label="班级人数"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    // table基本数据
    tableData: {
      type: Array,
      default: () => []
    },
    selectData: {
      type: Array,
      default: () => []
    },
    // 选择模式 单选1/多选2
    selectType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      selectOnceList: [],
      selectMultipleList: [],
      // 被选中数据
      selectList: []
    };
  },
  created() {},
  methods: {
    initData() {
      let arr = [];
      arr = this.selectData.map(item => item.name) || [];
      console.log(arr, this.selectData);
      this.tableData.forEach(item => {
        if (arr.includes(item.name)) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    handleCheckedChange(row) {
      this.selectType === 1 ? this.selectOnce(row) : this.selectMultiple(row);
      console.log(this.selectList);
    },
    // 单选情况
    selectOnce(row) {
      if (row.checked) {
        this.selectOnceList = [];
        this.tableData.forEach(item => {
          item.name !== row.name && (item.checked = false);
        });
        this.selectOnceList.push(row);
      } else {
        this.tableData[0].checked = false;
        this.selectOnceList = [];
      }
    },
    // 多选情况
    selectMultiple(row) {
      if (row.checked) {
        this.selectMultipleList.push(row);
      } else {
        this.selectMultipleList = this.selectMultipleList.filter(item => {
          return item.name !== row.name;
        });
      }
    },
    // 数据推送给父级
    exportData() {
      this.selectType === 1
        ? (this.selectList = [...this.selectOnceList])
        : (this.selectList = [...this.selectMultipleList]);
      this.$emit("exportData", this.selectList);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>