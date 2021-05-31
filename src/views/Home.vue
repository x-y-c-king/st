<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <hr />

    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { onMounted } from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(props, context) {
    onMounted(() => {
      console.log("hello world");
      console.log(context)
    });
    console.log(...arguments)
  },
};
</script>
