<template>
  <section :class="{'app-main': key !== '/dashboard'}">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 66px);
    position: relative;
    overflow-y: scroll;
    background: #fff;
    margin: 15px 30px 0 15px;
    position: relative;
    border-top: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
    border-left: 1px solid #e7e7e7;
    border-radius: 4px;
  }
  .fixed-header+.app-main {
    padding-top: 50px;
  }
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
