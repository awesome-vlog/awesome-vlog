<template>
  <div id="sideBarContainer">
    <div id="sideBar">
      <ul>
        <!-- profile -->
        <li id="profile">
          <div id="profileAvatarImage"></div>
          <div id="profileName">vuelog</div>
          <div id="profileDesc">안녕하세요</div>
        </li>

        <!-- sideMenu -->
        <v-list id="sideMenu" flat>
          <!-- sideMenuHome -->
          <v-list-item id="nonSubMenuTitle" @click.prevent="updateMenu('home')">
            Home
          </v-list-item>

          <!-- sideMenuCartegory -->
          <v-list-group @click.prevent="updateMenu('cartegory')">
            <template v-slot:activator>
              <v-list-item-title id="subMenuTitle">
                Category
              </v-list-item-title>
            </template>

            <!-- sideMenuCartegory-subMenu -->
            <div v-for="(item, index) in menuItems" :key="index">
              <v-list-item
                id="subMenu"
                href="#"
                @click.prevent="openSection(item)"
              >
                {{ item.name }}
              </v-list-item>
            </div>
          </v-list-group>

          <!-- sideMenuContact -->
          <v-list-item id="nonSubMenuTitle">Contact</v-list-item>
        </v-list>
      </ul>
    </div>
  </div>
</template>

<script>
import menuData from "./support/menu-data";
import kebabCase from "lodash/kebabCase";

export default {
  name: "SideMenuBar",
  data() {
    return {
      contextSection: "",
      menuItems: [],
      menuData: menuData,
      activeSubMenu: ""
    };
  },
  methods: {
    updateMenu(context) {
      this.contextSection = context;
      this.menuItems = this.menuData[context];

      if (context === "home") {
        this.$router.push("/");
      }
    },
    openSection(item) {
      this.activeSubMenu = item.name;
      this.$router.push(this.getUrl(item));
    },
    getUrl(item) {
      let sectionSlug = kebabCase(item.name);
      return `${item.link}/${sectionSlug}`;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0 !important;
  margin-top: 150px;
}

#sideBarContainer {
  position: fixed;
  margin-left: -270px;
  width: 270px;
  height: 100%;
  overflow-y: auto;
  top: 0;
  overflow: hidden;
}

#sideBar {
  width: 270px;
  height: 100%;
  padding: 40px;
  background-color: gray;
  text-align: center;
  position: fixed;
}

#profile {
  margin-bottom: 50px;
}

#profileName {
  font-size: 40px;
}

#profileAvatarImage {
  background-image: url("../assets/img/profile.jpg");
  background-size: cover;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin: auto;
}

#subMenuTitle {
  text-align: left !important;
}

#sideMenu {
  background-color: rgb(255, 255, 255, 0);
}

#subMenu {
  padding-left: 32px !important;
}
</style>
