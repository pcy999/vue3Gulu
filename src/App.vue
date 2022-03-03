<!--
 * @Description: vue入口
 * @Autor: pcy
 * @Date: 2022-03-03 11:30:32
 * @LastEditTime: 2022-03-03 14:52:26
-->

<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
export default {
  name: "App",
  setup(props) {
    const menuVisible = ref(true);
    provide("menuVisible", menuVisible);
  },
};
</script>
