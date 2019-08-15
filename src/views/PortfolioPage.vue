<template>
  <div>
    <!-- 이미지 배너 -->
    <v-layout class="tmpImage">
      <v-flex xs12>
        <p class="display-4 BannerTitle ">Image & Banner</p>
      </v-flex>
    </v-layout>
    <v-container pa-10>
      <!-- 프로필 -->
      <v-layout row wrap>
        <v-flex xs12 mt-5>
          <p class="SubjectTitle">Introduction</p>
        </v-flex>
        <v-flex
          xs12
          sm5
          pa-12
          class="d-flex align-justify-end justify-sm-center"
        >
          <img src="../assets/portfolio/person.png" />
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout col wrap>
            <v-flex xs12 mb-5>
              <h1>Who am I</h1>
              <p>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </p>
            </v-flex>
            <v-flex xs12 mb-5>
              <h1>About me</h1>
              <p>
                License : 정보처리기사.... <br />
                항목2 : 일단 위치만 대충 <br />
                항목2 : 일단 위치만 대충 <br />
              </p>
            </v-flex>
            <v-flex xs12>
              <h1>Social Contacts</h1>
              <p>
                <!-- fontawesome package 추가로 대체하기 -->
                <i class="fab fa-instagram SocialIcon"></i>
                <i class="fab fa-github-square SocialIcon"></i>
                <i class="fab fa-facebook-square SocialIcon"></i>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- 연혁 -->
      <v-layout row wrap justify-center my-6>
        <v-flex xs12 my-5>
          <p class="SubjectTitle">History</p>
        </v-flex>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="n in 4" :key="n" color="blue">
            <v-card class="elevation-2">
              <v-card-title>
                <v-flex xs12 sm9>
                  Lorem ipsum
                </v-flex>
                <v-flex xs12 sm3 class="subtitle-1 text-right"> 201{{ 10 - n }}.12.31 </v-flex>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-layout>
      <v-layout row wrap my-12>
        <v-flex xs12 mt-12>
          <p class="SubjectTitle">Skill</p>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(color, i) in 4" :key="color">
              <!-- 이중 v-for문으로 출력 -->
              <v-sheet color="#E6E6E6" height="100%" tile>
                <v-layout row wrap fill-height align-center justify-center>
                  <v-flex sm3 hidden-xs-only>
                    <img src="../assets/portfolio/vueIcon.png" />
                  </v-flex>
                  <v-flex xs3 class="display-2" style="color:black !important;">
                    Slide {{ i + 1 }}
                  </v-flex>
                  <v-flex xs4>
                    <!-- https://vuetifyjs.com/en/components/progress-linear#stream -->
                    <v-rating
                      v-model="rating"
                      full-icon="fas fa-circle"
                      empty-icon="far fa-circle"
                      background-color="grey darken-1"
                      half-increments
                      hover
                      readonly
                    ></v-rating>
                  </v-flex>
                  <v-flex sm3 hidden-xs-only>
                    <img src="../assets/portfolio/vueIcon.png" />
                  </v-flex>
                  <v-flex xs3 class="display-2"> Slide {{ i + 1 }} </v-flex>
                  <v-flex xs4>
                    <v-rating
                      v-model="rating"
                      background-color="grey darken-1"
                      empty-icon="$vuetify.icons.ratingFull"
                      half-increments
                      hover
                      readonly
                    ></v-rating>
                  </v-flex>
                  <v-flex sm3 hidden-xs-only>
                    <img src="../assets/portfolio/vueIcon.png" />
                  </v-flex>
                  <v-flex xs3 class="display-2"> Slide {{ i + 1 }} </v-flex>
                  <v-flex xs4>
                    <v-rating
                      v-model="rating"
                      background-color="grey darken-1"
                      empty-icon="$vuetify.icons.ratingFull"
                      half-increments
                      hover
                      readonly
                    ></v-rating>
                  </v-flex>
                </v-layout>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 mt-12>
          <p class="SubjectTitle">Project</p>
          <div class="ProjectWeb">
            <p class="ProjectWeb_screen" />
          </div>
          <div class="ProjectMobile"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4
  })
};
</script>

<style>
.tmpImage {
  height: 100vh;
  background-image: url("https://material-portfolio-dark.vuetifyjs.com/img/hero.e530afc6.png");
  background-position: center;
  background-size: cover;
}
.BannerTitle {
  line-height: 100vh !important;
  text-align: center;
  color: white;
}
.SubjectTitle {
  font-size: 5vw;
  font-weight: bold;
  color: #2e9afe;
  margin-bottom: 20px;
}
.SocialIcon {
  font-size: 40px;
  margin: 5px 5%;
}
.ProjectWeb {
  background-image: url("../assets/portfolio/com.png");
  background-size: contain;
  background-position: center;
  min-height: 400px;
  height: 600px;
}
.ProjectWeb_screen {
  background-image: url("../assets/portfolio/exam1.png");
  background-size: contain;
  background-position: center;
  margin: 0 auto;
  width: 84%;
  min-height: 540px;
  min-width: 268px;
  max-width: 500px;
}
@media (min-width: 500px) {
  .ProjectWeb_screen {
    position: relative;
    bottom: 5%;
  }
}
@media (min-width: 501px) and (max-width:700px) {
  .ProjectWeb_screen {
    position: relative;
    bottom: 3%;
  }
}
</style>
