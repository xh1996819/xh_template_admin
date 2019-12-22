<template>
  <div>
    <date-picker></date-picker>
  </div>
</template>

<script>
import DatePicker from "@/components/date-picker.vue";
export default {
  components: { DatePicker },
  data() {
    return {
      now: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>