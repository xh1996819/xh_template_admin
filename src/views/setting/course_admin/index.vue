<template>
  <div class="container">
    <div class="num-box">{{number}}</div>
    <adder-subtractor @add="add" @reset="reset" @reduce="reduce"></adder-subtractor>
  </div>
</template>

<script>
import adderSubtractor from "@/components/adderSubtractor";
import { adderSubtractorMixin } from "@/mixins/adderSubtractor.js";
export default {
  data() {
    return {
      number: 0
    };
  },
  components: { adderSubtractor },
  mixins: [adderSubtractorMixin],
  methods: {}
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .num-box {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>