<template>
  <div class="bg-gradient-to-b from-temp-pink-100 to-temp-indigo">
    <div class="flex flex-nowrap h-full">
      <div class="flex-none w-80 px-5 py-10">
        <Sidebar class="h-full" :resources="this.resources" />
      </div>
      <div class="flex-grow">
        <component class="h-full" :is="workspaceName"></component>
        <!-- This item will grow -->
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./Sidebar.vue";
  import NavResources from "./NavResources";

  export default {
    name: "TestMain",
    props: {},
    components: {
      Sidebar,
    },
    methods: {},
    data() {
      return {
        resources: NavResources,
      };
    },
  };
</script>

<style>
</style>
