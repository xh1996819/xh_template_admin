<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, i) in chooseGroup" :key="i" :label="item.name"></el-checkbox>
    </el-checkbox-group>
    <slot :data="checkList"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 123,
      number: 1,
      checkList: [],
      chooseGroup: [],
      sendList: []
      // isFirstSend: false
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
      // this.isFirstSend = true;
      this.sendList = this.checkList;
      //   console.log(this.checkList);
      // this.sendList.filter(item => !this.checkList.includes(item));
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