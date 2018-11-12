<template>
  <div class="hello">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container padd-round">
        <a class="navbar-brand" href="#">
          <img src="../../assets/Group 7.png" id="img-logo">
        </a>

        <div class=" navbar-collapse" id="navbarSupportedContent">
          <transition name="fade" appear>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item navbar-link" v-if="toggled == 'true'">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item navbar-link" v-if="toggled == 'true'">
                <router-link  class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item navbar-link" v-if="toggled == 'true'">
                <router-link to="/works" class="nav-link" >Our Works</router-link>
              </li>
              <li class="nav-item navbar-link" v-if="toggled == 'true'">
                <router-link to="/contact" class="nav-link">Contact Us</router-link>
              </li>
              <li class="nav-item navbar-link navbar-link-main navbar-mobile navbar-caption-mobile" v-if="toggled == 'false'">
                <a class="nav-link navbar-link-main" href="#">{{activePage | toUpper}}</a>
              </li>
              <li class="nav-item navbar-link navbar-mobile" v-if="toggled == 'false'" @click="switchMenu">
                <a class="nav-link menu-toggle"  href="#">
                  <span class="menu-toggle ">
                      <div class="bar1" :style="bar1Style"></div>
                      <div class="bar2 shrk-5" :style="bar2Style"></div>
                      <div class="bar3 shrk-7" :style="bar3Style"></div>
                  </span>
                </a>
              </li>
              <li class="nav-item navbar-link navbar-mobile" v-else @click="reverseMenu">
                <a class="nav-link menu-toggle"  href="#">
                  <span class="menu-toggle ">
                      <div class="bar1" :style="bar1Style"></div>
                      <div class="bar2 shrk-5" :style="bar2Style"></div>
                      <div class="bar3 shrk-7" :style="bar3Style"></div>
                  </span>
                </a>
              </li>
            </ul>
          </transition>
        </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  },
  data() {
    return {
      bar1Style: "",
      bar2Style: "",
      bar3Style: "",
      toggled: 'false',
      activePage:''
    }
  },
  methods: {
    switchMenu()
    {
      this.toggled = 'true'
      this.bar1Style = "transform: rotate(-45deg) translate(-9px, 6px)"
      this.bar2Style = "opacity:0"
      this.bar3Style = "transform: rotate(45deg) translate(-8px, -8px)"
    },
    reverseMenu()
    {
      this.bar1Style = ""
      this.bar2Style = ""
      this.bar3Style = ""
      this.toggled = 'false'
    }
  },
  mounted()
  {
    this.activePage = this.$route.name
    
  },
  filters: {
    toUpper(string)
    {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      console.log('changed')
      this.reverseMenu()
      this.activePage = this.$route.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padd-round
  {
    padding:20px;
  }
  li.navbar-link
  {
    padding-right: 30px;
    cursor: pointer;
  }
  .navbar-link-main
  {
    color: white !important;
    opacity: 1 !important;
  }
  .navbar-dark,.bg-dark
  {
    background:black !important;
  }
  .shrk-5
  {
    width: 20px !important;
  }
  #img-logo
  {
    width: 70%;
  }

  .bar1, .bar2, .bar3 {
    width: 28px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
  }
  .menu-toggle
  {
    margin-top: -5px !important;
  }
  .fade-enter { opacity: 0 }
.fade-enter-active { transition: opacity 2s ease }
.fade-leave {}
.fade-leave-active { transition: opacity 2s ease; opacity: 0}
@media (max-width: 980px) { 
  li.navbar-mobile
  {
    position: absolute;
    right: 0;
    margin-top: -38px;
  }
  li.navbar-caption-mobile
  {
    padding-right:70px;
  }

}
</style>
