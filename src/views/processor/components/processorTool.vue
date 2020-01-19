<template>
  <div>
    <el-table :data="renderData" border style="width: 100%">
      <el-table-column label="选择">
        <template v-slot="scope">
          <el-checkbox v-model="scope.row.checked">{{ }}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>

    <xh-pagination @getData="getData" :data.sync="paginationData"></xh-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderData: [],
      tableData: [],
      paginationData: {
        current: 1,
        size: 10,
        total: 0
      }
    };
  },
  created() {
    this.tableData = this.createData();
  },
  mounted() {
    this.initData();
  },
  methods: {
    createData() {
      let arr = [];
      for (
        let index = 0;
        index < this.$getRandomIntInclusive(50, 100);
        index++
      ) {
        arr.push(this.randomData());
      }
      return arr;
    },
    randomData() {
      return {
        date: this.$date.dateFormat(
          `${this.$getRandomIntInclusive(
            2019,
            2020
          )}-${this.$getRandomIntInclusive(
            1,
            12
          )}-${this.$getRandomIntInclusive(1, 30)}
            ${this.$getRandomIntInclusive(0, 24)}:${this.$getRandomIntInclusive(
            0,
            59
          )}`,
          "Y-m-d H:i"
        ),
        id: this.$getRandomIntInclusive(0, 24),
        age: this.$getRandomIntInclusive(15, 36)
      };
    },
    initData() {
      this.tableData.forEach(item => this.$set(item, "checked", false));
      let arr = this.tableData.map(item => item.id);
      this.tableData = this.tableData.sort(this.compare("id"));
      let hash = {};
      this.tableData = this.tableData.reduce((t, cv) => {
        hash[cv.id] ? "" : (hash[cv.id] = true && t.push(cv));
        return t;
      }, []);
      this.paginationData.total = this.tableData.length;
      this.getData();
    },
    getData() {
      let arr = JSON.parse(JSON.stringify(this.tableData));
      this.renderData = arr.splice(
        (this.paginationData.current - 1) * this.paginationData.size,
        this.paginationData.size
      );
    },
    compare(property) {
      return (a, b) => {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>