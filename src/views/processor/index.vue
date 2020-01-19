<template>
  <div>
    <el-button @click="radio" type="primary">单选</el-button>
    <el-button @click="check" type="warning">多选</el-button>
    <el-dialog :visible.sync="dialogVisible" width="60%">
      <processor-tool></processor-tool>
    </el-dialog>
  </div>
</template>

<script>
import processorTool from "./components/processorTool";
export default {
  components: { processorTool },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    radio() {
      this.dialogVisible = true;
    },
    check() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>