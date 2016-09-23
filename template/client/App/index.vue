<template>
<div class="app-container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>

<style lang="sass">
@import 'style/reset.scss';
@import '~mobi.css/src/mobi';
@import 'style/init.scss';

body{
  background: #fbf9fe;
}
</style>
