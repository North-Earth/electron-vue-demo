<template>
  <div>
    <component class="h-screen" :is="workspaceName"></component>
  </div>

  <!-- <div class="flex flex-col h-screen bg-gradient-to-tl from-gradients-greenStart to-gradients-greenEnd">
      <header class="py-3 bg-white text-center shadow-lg">
        Sticky Header and Footer with Tailwind
      </header>
      <main class="flex-1 overflow-y-auto p-7">
        <component class="h-full" :is="workspaceName"></component>
      </main>
      <footer class="py-3 bg-white text-center shadow-lg">
        Tailwind is Awesome 😎
      </footer>
    </div> -->

  <!-- <Sidebar @changeWorkspace="changeWorkspace" :isDisabled="isDisabledSidebar"/> -->
  <!-- <div class="flex-none w-60 bg-red-400">
      <Start :userName="userName" />
    </div> -->

  <!-- <div class="flex-none bg-white w-30 mr-1 shadow-lg">
      <nav class="p-4">
        <ul class="flex space-x-2">
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-md bg-amber-100 text-amber-700"
              >Home</a
            >
            <a
              href="#"
              class="block px-4 py-2 rounded-md bg-amber-100 text-amber-700"
              >Updater</a
            >
            <a
              href="#"
              class="block px-4 py-2 rounded-md bg-amber-100 text-amber-700"
              >Settings</a
            >
            <a
              href="#"
              class="block px-4 py-2 rounded-md bg-amber-100 text-amber-700"
              >About</a
            >
          </li>
        </ul>
      </nav>
    </div> -->

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
</template>

<script>
  import Main from "./components/new/Main.vue";

  export default {
    name: "App",
    components: {
      Sidebar,
      Home,
      FileUpdater,
      Main,
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
        // console.log(Sidebar);
        // console.log(Sidebar.data());
        // console.log(Sidebar.data.componentName);
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
        workspaceName: "Main",
        isDisabledSidebar: false,
        isActive: true,
      };
    },
  };
</script>

<style>
</style>
