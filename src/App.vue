<template>
  <div id="app">
    <div id="nav">
      <navbar> </navbar>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
    <footer> </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
export default {
  props: {
    msg: String
  },
  components: {Navbar,Footer},

}
</script>
<style>
@font-face {
  font-family: "Graphik-Bold";
  src: url("./assets/fonts/Graphik-700-Bold.otf");
}
@font-face {
  font-family: "Graphik-Regular";
  src: url("./assets/fonts/Graphik-400-Regular.otf");
}
@font-face {
  font-family: "Graphik-Medium";
  src: url("./assets/fonts/Graphik-500-Medium.otf");
}
body
{
  font-family: 'Graphik-Regular' !important;
  background:black !important;
  color: white !important;
  overflow-x: hidden !important;
  width: 100% !important;
}
  .btn
  {
    border-radius: 0px !important;
    outline: 0px;
    background-color: #6C63FF;
    color: white;
    padding:10px;
  }
  /* Sweep To Right */
.hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
  color: #6C63FF;
}
.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
::-moz-selection { 
background-color: #BA9EB0; 
color: #ffffff;
}

::selection {
background-color: #6C63FF;
opacity: .2;
color: #ffffff;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/

#nav a.router-link-exact-active {
  color: white;
}
.generic-header
  {
    margin-top: 30px;
  }
  span#generic-header
  {
    font-size: 35px;
    font-family: 'Graphik-Medium'
  }
  .services-card
  {
    height: 60px;
    width: 90%;
    margin: 0 auto;
    border-radius: 0px;
  }
  .generic-subheader
  {
    margin-top: 10px;
  }
  span#generic-subheader{
    line-height: 28px;
    text-align: left !important;
  }
  .divider
  {
  height: 10px;
    width: 20px;
    display: inline-block;
    margin: .3em 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .divider-pink {
    background: #6C63FF;
  }
  /* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
@media (max-width: 980px) { 
  .illustration{
    display: none;
  }
  #home_header
  {
    font-size: 25px !important;
    line-height: 40px !important;
  }
  #home_subheader
  {
    font-size: 20px !important;
  }
  #bh
  {
    line-height: -10px !important;
  }
      #generic-header
    {
      font-size: 25px !important;
    }
    #generic-subheader
    {
      font-size: 15px !important;
    }
    .b-enqu
    {
      margin-top: 20px;
    }
    .footer-contact
    {
      margin-top: 50px;
      margin-right: 20px;
    }
  }
@media(max-width:  320px)
{
  #img-logo
  {
    width: 50% !important;
  }
}
</style>
