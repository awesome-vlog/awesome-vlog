<template>
  <div id="container">
    <!-- title -->
    <div id="title">
      <h1>{{ sectionName }}</h1>
      <span id="titleDetail">cartegory</span>
      <span id="titleDetail">11 Aug 2019</span>
    </div>

    <div id="titleLine"></div>

    <!-- content -->
    <div id="content">
      {{ sectionName }}
    </div>
  </div>
</template>

<script>
import startCase from "lodash/startCase";

export default {
  name: "blogPage",
  computed: {
    sectionName() {
      return startCase(this.$route.params.sectionSlug);
    }
  }
};
</script>

<style scoped>
#container {
  padding: 50px 80px 50px 80px;
}

#title {
  padding-bottom: 15px;
}

#titleLine {
  width: 80%;
  border: 0.5px solid #efeeee;
  margin-bottom: 80px;
}

#titleDetail {
  padding: 20px 20px 0 0;
  color: #b2b2b2;
}

#content {
  color: #454545;
}
</style>
