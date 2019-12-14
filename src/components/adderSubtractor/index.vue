<template>
  <div class="add-sub-container">
    <el-button @click="add" type="success" icon="el-icon-plus" circle></el-button>
    <el-button @click="reset" icon="el-icon-refresh" circle></el-button>
    <el-button @click="reduce" type="danger" icon="el-icon-minus" circle></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$emit("add");
    },
    reset() {
      this.$emit("reset");
    },
    reduce() {
      this.$emit("reduce");
    }
  }
};
</script>