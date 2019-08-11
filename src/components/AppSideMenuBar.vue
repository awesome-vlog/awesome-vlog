<template>
  <div id="sideBarContainer">
    <div id="sideBar">
      <ul>
        <li id="profile">
          <div id="profileImg"></div>
          <div id="profileName">vuelog</div>
          <div id="profileDesc">안녕하세요</div>
        </li>

        <!-- sideMenu -->
        <v-list id="sideMenu" flat>
          <v-list-item id="nonSubMenuTitle">Home</v-list-item>

          <v-list-group value="true">
            <template v-slot:activator>
              <v-list-item-title id="subMenuTitle">Category</v-list-item-title>
            </template>

            <!-- subMenu -->
            <v-list-item id="subMenu">ai</v-list-item>
            <v-list-item id="subMenu">bigdata</v-list-item>
          </v-list-group>

          <v-list-item id="nonSubMenuTitle">Contact</v-list-item>
        </v-list>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuBar"
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

#profileImg {
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
