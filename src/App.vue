<template>
  <div class="flex w-screen h-screen bg-blue-400">
    <Sidebar @changeWorkspace="changeWorkspace" :isDisabled="isDisabledSidebar"/>
    <!-- <div class="flex-none w-60 bg-red-400">
      <Start :userName="userName" />
    </div> -->
    <div class="flex-grow overflow-y-auto">
      <component :is="workspaceName"></component>
    </div>
    <!-- <div class="h-full grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3 w-24 bg-red-400">Side</div>
      <div class="col-span-2 bg-yellow-400">Header</div>
      <div class="row-span-2 col-span-2 bg-green-400">
        <div class="overflow-visible h-24 ...">
          Lorem ipsum dolor sit amet...
        </div>
        <Example :text="simpleText" />
        <h2>Alloha, {{ userName }}</h2>
        <input v-model="path" placeholder="Path" />
        <p>Path is: {{ path }}</p>
        <button @click="getFileNames()">Get Files</button><br /><br />
        <button @click="showNotification()">Show Notification</button
        ><br /><br />
        <button @click="getUserName()">Show User Name</button>
        <ul>
          <li v-for="fileName in fileNames" :key="fileName">
            {{ fileName }}
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Home from "./components/home/Home.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Home,
  },
  methods: {
    changeWorkspace(workspace) {
      this.workspaceName = workspace.name;
    },
    showNotification() {
      const props = { title: "Title", body: "Body" };
      window.ipcRenderer.invoke("showNotification", props);
    },
    getFileNames() {
      const props = { path: "/Applications" };
      window.ipcRenderer.invoke("getFileNames", props).then((result) => {
        this.files = result;
      });
    },
    test() {
      console.log(Sidebar);
      console.log(Sidebar.data());
      console.log(Sidebar.data.componentName);
    },
    getUserName() {
      console.log(window);

      window.ipcRenderer.invoke("getUserInfo").then((result) => {
        console.log(result);
        this.userName = result.username;
      });
    },
  },
  data() {
    return {
      workspaceName: "Home",
      isDisabledSidebar: false,
    };
  },
};
</script>

<style>
</style>
