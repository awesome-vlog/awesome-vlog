<template>
  <div>
    <v-app dark>
      <SideMenuBar></SideMenuBar>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SideMenuBar from "./components/AppSideMenuBar.vue";

export default {
  name: "App",
  components: {
    SideMenuBar
  },
  data: () => ({
    //
  })
};
</script>
