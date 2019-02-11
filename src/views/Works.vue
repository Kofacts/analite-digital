<template>
  <div class="container">
    <div class="row">
    	<div class="col-sm-12 col-lg-6">
    		<div class="generic-header">
    			<span id="generic-header">Our Works</span>
    			<br>
    			<div class="divider divider-pink"></div>
    		</div>

    		<div class="generic-subheader">
    			<span id="generic-subheader">
    				We take pride in creating awesomeness.<br>
    				With our vast experience in branding, web design and development, we collaborate with startups and established brands helping them increase their impact and value. 
    			</span>
    			<br>
    			<div id="">
    				<br><br>
            		<span id="get_dir">Start a Project.</span>
                </div>
    		</div>
    	</div>

    	<div class="col-sm-12 col-lg-6 illustration">
    		<WorksSvg />
    	</div>
    </div>
    <div class="row">
		<div class="col-sm-12 mt-5">
			<h4>Some of Our Work</h4>
			<div class="divider divider-pink"></div>
			<br><br>	
		</div>
	</div>

	<div class="row works">
		<transition name="slide-fade">
		<div class="col-sm-12 ">
			<div class="row">
				<div class="col-sm-6">
					<h3>{{displayContent.name}}</h3>
					<span>{{displayContent.type}}</span>
					<br><br>
					<span>
						{{displayContent.content}}
					</span><br><br>
					<span>
						<small>Case Study</small><br>
						<span v-if="displayContent.status == 'inactive'" id="get_dir">Coming Soon </span>
						<span v-else id="get_dir">Check it Out</span>
					</span>
					<br><br>
					<button @click="prevSlide"  class="slider-btn"><i class="zmdi zmdi-long-arrow-left"></i></button>
					<button @click="nextSlide" class="slider-btn"><i class="zmdi zmdi-long-arrow-right"></i></button>
				</div>

				<div class="col-sm-6">
					<div class="work-img">
						<div class="bg-img" :style="displayContent.bg"></div>
						<img :src="getImgUrl(displayContent.img)" id="work-img">
					</div>
				</div>
			</div>
		</div>
		</transition>
	</div>
    <div class="row">
    	<div class="col-sm-12">
    		<Footer />
    	</div>
    </div>
  </div>
</template>

<script>
import WorksSvg from '@/components/WorksSvg.vue'
import Footer from '@/components/Layout/Footer.vue'
import { Carousel, Slide } from 'vue-carousel';
// @ is an alias to /src
export default {
  name: 'About',
  components: {WorksSvg,Footer,Carousel,Slide},
  data(){
  	return {
  		slides_one: {'id':1,'bg':'background: #6C63FF','img':`works`,'content':
  				`We tinkered on the possibility of managing your network airtime bearing in mind the array of network providers in town. Network providers do provided bonuses for their customers and sometimes its use is restricted to customers of their network and so we decided to design and build a mobile application that visually identifies the network providers of your contacts and enables you to manage your available credit effectively so as to be able to spend as much time as possible with your loved ones.`,'type':'User Experience + Mobile App development','name':'Caller Box','status':'inactive'},
		slides_two: {'id':2,'bg':'background: orange;','img':`yarn`,'content':`Curating feeds has never been structured. We analyzed most entertainment platforms, mostly listicles and came up with a smarter way of engaging audience via contents. This led to Project Yarn. Project Yarn is an Africa initiated Buzzfeed. It's a Buzzfeed for Africans, by Africans `,'type':'User Experience and Design + Web Application','name':'Project Yarn','status':'inactive'},
		slides_three: {'id':3,'bg':'background: purple;','img':`prisma`,'content':`With Prisma, we reimagined how the Debit card request, collection and management process can be made seamless for both banks and their customers. We designed a system where bank customers can easily request for cards from the comfort of their homes and be notified of every step as their new card is being processed. We also, designed a feature that lets people pickup the cards for which they requested at their nearest bank branch or at the comfort of their homes. Bearing in mind the needs of the average bank customer, we also designed an enterprise-scale dashboard for managing card requests and processing so as to make the process easy for banks with virtually no learning curve due to the ease of use built into the design.`,'type':'User Experience and Design','name':'Prisma','status':'active'},
		slides_four: {'id':3,'bg':'background: orange;','img':`Lyrux`,'content':`Ever wondered the possibility of shopping from the comfort of your home seamlessly on international e-commerce platforms without bothering over the possibility of your debit card not being accepted or the possibility of your biases not being considered in the desing of the shop? We collaborated with Lyrux Mart to build an e-commerce web application bearing in mind the possible setbacks that prospective customers might encounter. We leveraged data from already existing platforms as well as user journey maps in other apps that provide same service so as to better understand the need of our client. At the end of the process, we ended up with [www.lyruxmart.com] Lyruxmart.com for which our clients are satisfied as customer retention is on the rise. Also, the percentage of customers who continue to checkout has kept on increasing bearing in mind the unique and comfortable checkout process we integrated into the system`,'type':'User Experience + Web Application','name':'Lyrux Mart','status':'inactive'},
		displayContent: {},
		currentSlide: 1,
  	}
  },
  mounted(){
  	this.displayContent = this.slides_one
  	setInterval(() => {
  		this.nextSlide()
  	},10000)
  },
  methods: {
  	getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  	},
  	nextSlide()
  	{
  		//get current slide
  		if(this.currentSlide == 1)
  		{
  			this.displayContent = this.slides_two
  			this.currentSlide = 2
  		}
  		else if(this.currentSlide == 2)
  		{
  			this.displayContent = this.slides_three
  			this.currentSlide =3
  		}
  		else if(this.currentSlide == 3)
  		{
  			this.displayContent = this.slides_four
  			this.currentSlide = 4
  		}
  	},
  	prevSlide()
  	{
  		if(this.currentSlide == 1)
  		{
  			this.displayContent = this.slides_one
  			this.currentSlide =1
  		}
  		else if(this.currentSlide ==2)
  		{
  			this.displayContent = this.slides_one
  			this.currentSlide = this.currentSlide - 1
  		}
  		else if(this.currentSlide == 3)
  		{
  			this.displayContent = this.slides_two
  			this.currentSlide = this.currentSlide -1
  		}
  		else {
  			this.displayContent = this.slides_three
  			this.currentSlide = this.currentSlide -1
  		}
  	}
  }
}
</script>

<style type="text/css" scoped>
	body{
		overflow-x: hidden !important;
	}
	#work-img
	{
		width: 100% !important;
		position: absolute;
		margin-top: -250px;
		z-index: 9999;
		height: auto;
	}
	.works2
	{
		margin-top: 100px;
	}
	button.slider-btn,button.slider-btn:hover
	{
		margin: 10px;
		border-radius: 100px;
		width: 50px;
		height: 50px;
		background: transparent;
		border:1px solid #6C63FF;
		color:white;
		outline: 0px;
	}
	.works
	{
		margin-bottom: 100px !important;
		padding-bottom: 200px;
	}
	div.bg-img
	{
		width: 100%;
		height: 300px;
		margin-left: 50px;
	}
	@media (max-width: 980px) { 
		#client-logo
		{
			width: 50% !important;
			float: center !important;
			margin-top: 20px !important;
		}
		.s-card
		{
			padding-bottom: 40px !important;
		}
		#generic-header
		{
			font-size: 25px !important;
		}
		#generic-subheader
		{
			font-size: 15px !important;
		}
		.text-overlap
		{
			margin-top: -450px !important;
		}
		#work-img
		{
			width: 100vw !important;
		}
		div.bg-img
		{
			width: 250px !important;
			height: 300px !important;
		}
	}
	#client-logo
	{
		width: 70%;
		filter: grayscale(100%);
	}
	    #get_dir{
        background:black;
        filter:brightness(100%);
        width: ;
        padding-left:2px;
        padding-bottom: 10px;
        padding-top: 5px;
        cursor: pointer;
        border-bottom: 1px solid #6C63FF;
    }
    #get_dir:hover
    {
        background:#6C63FF;
        filter:brightness(50%);
        width: 200px;
        transition: background 1s ease-out;
    }
	.btn-start
	{
		width: 150px;
		padding:10px;
	}
	h4#generic-subheader
	{
		line-height: 50px;
		padding-top: 10px;
	}
	.text-overlap
	{
		margin-top: -300px;
		position: absolute !important;
		z-index: 9999;
	}
	.services
	{
		margin-bottom: 100px;

	}
	li
	{
		list-style-type: none;
	}
	ul#li li
	{
		margin-left: -30px;
		padding-top:  5px;
	}
	.card
	{
		border-radius: 0px;
	}
	#service-title
	{
		font-weight: 600;
	}
	div.service-content
	{
		margin-left: 15px;
		color: black;
	}
	.services-card
	{
		padding-bottom: 20px;
	}
	#client-logo:hover
	{
		filter: grayscale(0%);
		transition: filter 1s ease-out;
	}
	#services-logo
	{
		width: 130px;
		height: auto;
		padding-left: 15px;
	}
	.services-card
	{
		height: 100%;
	}

</style>