
<template>
  <div class="flex-none w-16 bg-white">
    <div class="grid justify-center">
      <button @click="changeWorkspace('Home')" :disabled="isDisabled">1</button>
      <button @click="changeWorkspace('FileUpdater')" :disabled="isDisabled">2</button>
      <button @click="changeWorkspace('Settings')" :disabled="isDisabled">3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    userName: String,
    isDisabled: Boolean,
  },
  components: {
  },
  methods: {
    changeWorkspace(workspaceName) {
      this.$emit("changeWorkspace", {
        name: workspaceName,
      });
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
