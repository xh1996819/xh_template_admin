<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, i) in chooseGroup" :key="i" :label="item.name"></el-checkbox>
    </el-checkbox-group>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sendCheckList">确 定</el-button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      checkList: [],
      chooseGroup: [],
      sendList: []
    };
  },
  created() {},
  mounted() {
    this.getCheckList();
  },
  methods: {
    getCheckList() {
      setTimeout(() => {
        for (let index = 0; index < 8; index++) {
          var obj = {
            name: `${this.number}号选手`
          };
          this.chooseGroup = [...this.chooseGroup, obj];

          this.number++;
          //   console.log(obj);

          //   console.log(this.chooseGroup);
        }
      }, 150);
    },
    sendCheckList() {
      //   console.log(this.checkList);
      this.sendList.filter(item => !this.checkList.includes(item));
      this.$emit("getCheckList", this.sendList);
    }
  }
  //   watch: {
  //     checkList(nV, oV) {
  //       //   console.log(nV, oV);
  //       let array = [];
  //       array = nV.filter(item => !oV.includes(item));
  //       console.log(array);
  //       this.sendList = array
  //     }
  //   }
};
</script>