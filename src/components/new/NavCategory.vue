<template>
  <li>
    <p class="mt-2 p-1 text-sm text-gray-300">{{ name }}</p>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "TestMain",
  props: {
    name: String,
  },
  components: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>
</style>
