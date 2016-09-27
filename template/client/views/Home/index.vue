<template>
<div class="home"   v-loading.fullscreen="fullscreenLoading">
  <h1>Just Fun</h1>
  <h3>Powered By Vue2</h3>
  <a target="__black" href="https://github.com/dingyiming/template">
    <el-button type="primary">  Click Here!</el-button>
  </a>
  <el-rate
    v-model="value5"
    disabled
    show-text
    text-color="#ff9900"
    text-template="{value}">
  </el-rate>
</div>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: true,
      value5: 5,
    };
  },
  mounted() {
    this.closeLoading();
  },
  methods: {
    closeLoading() {
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1500);
    },
  },
}
</script>

<style lang="sass">
.home {
  text-align:center;
  padding-top: 30%;
  color: #20A0FF;
  img {
    width: 10rem;
  }
}
</style>
