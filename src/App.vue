<template>
  <div>
    <!-- HomePage -->
    <v-app dark v-if="this.$route.path == '/'">
      <v-content>
        <router-view />
      </v-content>
    </v-app>

    <!-- BlogPage -->
    <v-app id="wrapper" dark v-else>
      <AppSideMenuBar></AppSideMenuBar>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppSideMenuBar from "./components/AppSideMenuBar.vue";

export default {
  name: "App",
  components: {
    AppSideMenuBar
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
#wrapper {
  padding-left: 300px;
}
</style>
