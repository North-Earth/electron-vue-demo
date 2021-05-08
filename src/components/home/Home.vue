<template>
  <div class="m-5">
    <Greeting :username="username" :greetings="greetings" />
  </div>
</template>

<script>
import Greeting from "./Greeting.vue";

export default {
  name: "Home",
  components: {
    Greeting,
  },
  props: {},
  methods: {},
  data() {
    return {
      username: window.userInfo.username,
      greetings: [
        "Alloha",
        "今日は",
        "Olá",
        "Привет",
        "Hola",
        "Buna ziua",
        "Hej",
        "Hallo",
        "Bonjour",
        "Ahoj",
        "Cześć",
      ],
    };
  },
};
</script>

<style scoped>
</style>
