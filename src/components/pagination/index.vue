<template>
  <el-pagination
    @size-change="changeSize"
    @current-change="changeCurrent"
    :current-page="data.current"
    :page-sizes="[5, 10, 20, 30, 40, 50]"
    :page-size.sync="data.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total.sync="data.total"
  ></el-pagination>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        current: 1,
        size: 10,
        total: 0
      })
    }
  },
  methods: {
    changeSize() {
      this.$emit("getData");
    },
    changeCurrent() {
      this.$emit("getData");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>