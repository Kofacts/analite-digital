<template>
  <div class="container">
    <div class="row">
    	<div class="col-sm-6">
    		<div class="head">
    		<span id="home_header">
    			<span id="bh">We are Analite.<br>
    			A Data Driven Digital Agency <b>.</b></span></span>
    			<br><br>
    			<span id="home_subheader">
    				We build Transformative software applications for the ambitious enterprise, designed for purpose and scale.
    			</span>
    			<br><br>
    			<router-link :to="works"><button class="btn hvr-sweep-to-right">See Our Works <i class="zmdi zmdi-long-arrow-right"></i></button></router-link>
    		</div>
    	</div>

    	<div class="col-sm-6 col-lg-6">
    		<div class="home_illustration illustration" >
    			<HelloWorld />
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style type="text/css" scoped>
	.home_illustration
	{
		width: 100% !important;
		overflow-x: hidden;
	}
	div.head
	{
		padding-top: calc(100vh / 10);
	}
	#home_header
	{
		font-size: 3.5vw;
		font-family: 'Graphik-Bold';
		padding-top: 100px !important;
		line-height: 60px;
	}
	#home_subheader
	{
		font-size: 25px;
		text-align: justify;
	}
	.btn
	{
		border-radius: 0px;
		outline: 0px;
		background-color: #6C63FF;
		color: white;
		padding:10px;
	}
	.zmdi-long-arrow-right
	{
		padding-left: 20px;
	}
	.btn:hover
	{

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

</style>