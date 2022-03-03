<!--
 * @Description: vue入口
 * @Autor: pcy
 * @Date: 2022-03-03 11:30:32
 * @LastEditTime: 2022-03-03 14:52:26
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    导航栏|
    <router-link to="/">1</router-link>|
    <router-link to="/111">2</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
