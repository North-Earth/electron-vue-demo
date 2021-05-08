<template>
  <div class="grid justify-items-center">
    <p href="#" class="text-3xl">{{ greetingText }}</p>
    <p class="text-2xl">{{ username }}</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  components: {},
  props: {
    username: String,
    greetings: Array,
  },
  methods: {
    getRandomGreetingText() {
      const key = Math.floor(Math.random() * this.greetings.length);
      console.log(key);
      return this.greetings[key];
    },
  },
  data() {
    return {
      greetingText: this.getRandomGreetingText(),
    };
  },
};
</script>

<style scoped>
</style>
