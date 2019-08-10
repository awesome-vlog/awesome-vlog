<template>
  <div>
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

#profile {
  margin-bottom: 50px;
}

#profileName {
  font-size: 40px;
}

#sideBar {
  float: left;
  width: 300px;
  height: 100%;
  padding: 40px;
  background-color: gray;
  text-align: center;
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
