<template>
  <div class="relative h-screen bg-white">
    <div class="grid justify-items-center">
      <img class="p-4" src="../assets/logo.png" height="120" width="120" />
      <UserGreeting :userName="userName" :greetings="this.greetings" />
      <a
        href="#"
        @click="this.test()"
        class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
      >
      <div><BeakerIcon class="h-5 w-5 text-blue-500" /></div>
        Change Greeting
      </a>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-8 ...">
      <div class="grid grid-cols-3 divide-x divide-green-500">
        <div>1</div>
        <div>2</div>
        <div><BeakerIcon class="h-5 w-5 text-blue-500" /></div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Example from "./components/Example.vue";
import UserGreeting from "./UserGreeting.vue";
import { BeakerIcon } from "@heroicons/vue/solid";

export default {
  name: "Sidebar",
  props: {
    userName: String,
  },
  components: {
    UserGreeting,
    BeakerIcon,
  },
  methods: {
    test() {
      this.greetings = [123,345,567];
    },
  },
  data() {
    return {
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

<style>
</style>
