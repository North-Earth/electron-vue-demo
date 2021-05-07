<template>
  <Example :text="simpleText" />
  <h2>Alloha, {{ userName }}</h2>
  <input v-model="path" placeholder="Path" />
  <p>Path is: {{ path }}</p>
  <button @click="getFileNames()">Get Files</button><br /><br />
  <button @click="showNotification()">Show Notification</button><br /><br />
  <button @click="getUserName()">Show User Name</button>
  <ul>
    <li v-for="fileName in fileNames" :key="fileName">
      {{ fileName }}
    </li>
  </ul>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Example from "./components/Example.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Example,
  },
  methods: {
    showNotification() {
      const props = { title: "Title", body: "Body" };
      window.ipcRenderer.invoke("showNotification", props);
    },
    getFileNames() {
      const props = { path: this.path };
      window.ipcRenderer.invoke("getFileNames", props).then((result) => {
        this.fileNames = result;
      });
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
      simpleText: "Example",
      userName: window.userInfo.username,
      path: "",
      fileNames: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
