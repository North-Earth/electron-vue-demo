<template>
  <div class="rounded-lg shadow-lg bg-gray-400 bg-opacity-25 text-gray-200">
    <Nav v-for="category in resources" :key="category">
      <NavCategory :name="category.name">
        <NavItem v-for="item in category.items" :key="item" :isActive="isActive(item.id)" @click="activate(item.id)">
          <component class="w-5 h-5" :is="item.icon" />
          <p>{{ item.name }}</p>
        </NavItem>
      </NavCategory>
    </Nav>
  </div>
</template>

<script>
  import Nav from "./Nav.vue";
  import NavItem from "./NavItem.vue";
  import NavCategory from "./NavCategory.vue";
  import {
    HomeIcon,
    DownloadIcon,
    AdjustmentsIcon,
    InformationCircleIcon,
    ChartSquareBarIcon,
  } from "@heroicons/vue/outline";

  export default {
    name: "Sidebar",
    props: {
      resources: Array,
    },
    components: {
      Nav,
      NavItem,
      NavCategory,
      HomeIcon,
      DownloadIcon,
      AdjustmentsIcon,
      InformationCircleIcon,
      ChartSquareBarIcon,
    },
    methods: {
      isActive(id) {
        return this.activeItemId === id;
      },
      activate(id) {
        this.activeItemId = id;
      },
    },
    data() {
      return {
        activeItemId: 0,
      };
    },
  };
</script>

<style>
</style>
