<template>
  <div v-click-outside>
    <el-input type="text" :value="formatDate" style="width: 20%" @focus="focus" @blur="blur"></el-input>
    <div v-if="isVisible">
      contenet
      <el-button type="primary"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    clickOutside: {
      bind(el, bindings, vnode) {
        let handler = e => {
          if (el.contains(e.target)) {
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };
        el.handler = handler;
        document.addEventListener("click", handler);
      }
    }
  },
  props: {
    value: {
      type: Date,
      default: () => new Date() // 返回的默认值必须是一个函数类型
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    formatDate() {
      return this.$date.dateFormat(new Date());
    }
  },
  methods: {
    focus() {
      this.isVisible = true;
    },
    blur() {
      this.isVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>