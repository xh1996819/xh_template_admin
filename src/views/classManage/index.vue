<template>
  <div>
    <el-button @click="$router.push({name:'ClassManageControl'})"></el-button>
    <xh-table :tableData="classList" :title="title"></xh-table>
  </div>
</template>

<script>
import xhTable from "@/components/xhTable";
export default {
  data() {
    return {
      classList: [
        { name: "张三", time: "2019/9/19", id: "1" },
        { name: "李四", time: "2019/10/20", id: "2" }
      ],
      title: ["姓名", "时间", "id"]
    };
  },
  components: { xhTable },
  created() {
    let date = Date.parse(new Date());
    console.log(this.$date.dateFormat(date, "Y/m/d H:i:s"));
  }
};
</script>

<style lang="scss" scoped>
</style>