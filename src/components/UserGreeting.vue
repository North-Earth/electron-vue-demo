<template>
  <div class="grid justify-items-center">
    <a href="#" @click="this.changeGreetingText()" class="text-xl">{{ greetingText }}</a>
    <p class="text-lg">{{ userName }}</p>
    <a
      href="#"
      @click="this.changeGreetingText()"
      class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
    >
      Change Greeting
    </a>
  </div>
</template>

<script>
export default {
  name: "UserGreeting",
  props: {
    userName: String,
    greetings: Array,
  },
  components: {},
  methods: {
    getRandomGreetingText() {
      const key = Math.floor(Math.random() * this.greetings.length);
      console.log(key);
      return this.greetings[key];
    },
    changeGreetingText() {
      this.greetingText = this.getRandomGreetingText();
    },
  },
  data() {
    return {
      greetingText: this.getRandomGreetingText(),
    };
  },
};
</script>

<style>
</style>
