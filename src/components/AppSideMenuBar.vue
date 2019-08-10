<template>
  <div id="sideBarContainer">
    <div id="sideBar">
      <ul>
        <li id="profile">
          <div id="profileImg"></div>
          <div id="profileName">vuelog</div>
          <div id="profileDesc">안녕하세요</div>
        </li>
        <li>HOME</li>
        <li>POST</li>
        <li>CARTEGORY</li>
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
  margin-left: -300px;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  top: 0;
  overflow: hidden;
}

#sideBar {
  width: 300px;
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
}
</style>
