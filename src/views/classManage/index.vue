<template>
  <div>
    <el-button @click="$router.push({name:'ClassManageControl'})"></el-button>
    <xh-table :tableData="classList" :title="title"></xh-table>
    <div class="input-box">
      <input
        v-for="item in 4"
        :key="item"
        :ref="`input${item}`"
        maxlength="1"
        type="text"
        @keyup="nextFocus(item)"
      />
    </div>
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
  },
  mounted() {},
  methods: {
    nextFocus(item) {
      if (item <= 3) {
        this.$refs[`input${item + 1}`][0].focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  input {
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    text-align: center;
  }
}
</style>