<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import useServerCreated from "@/composables/useServerCreated";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

console.log("setup .... start");

useServerCreated(async (handlers) => {
  console.log("useServerCreated .... start");
  console.log("useServerCreated ... ", handlers);
  try {
    const response = await axios.get(
      "http://rap2api.taobao.org/app/mock/247994/admin/articles"
    );
    console.log(response.data);
  } catch (error) {
    console.log("error", error);
  }
  console.log("useServerCreated .... end");
});

console.log("setup .... end");
</script>
