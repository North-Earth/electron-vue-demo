<template>
  <li>
    <a
      href="#"
      class="flex items-center space-x-2 text-base my-2 p-1"
      :class="{ 'bg-opacity-25 bg-gray-300 rounded-lg': isActive }"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: "TestMain",
  props: {
    isActive: Boolean,
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
