<template>
  <div class="container">
    <div class="row">
    	<div class="col-sm-12 col-lg-6">
    		<div class="generic-header">
    			<span id="generic-header">About Us</span>
    			<br>
    			<div class="divider divider-pink"></div>
    		</div>

    		<div class="generic-subheader">
    			<span id="generic-subheader">
    				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    			</span>
    			<br><br>
    			<h4>Our Thought Process ?</h4>
    			<span id="generic-subheader">
    				A cast of highly motivated Engineers, Data Scientists, Designers, Strategists and Thinkers with a common flair for innovation and excellence. Intelia vets talent using one of the most stringent assessment methodologies in the industry to ensure that our promise of exceeding satisfaction is kept
    			</span>
    		</div>
    	</div>

    	<div class="col-sm-12 col-lg-6 illustration">
    		<AboutSvg />
    	</div>
    </div>
    <div class="row">
	<div class="col-sm-12">
		<br><br>
		<h4>Companies We've Worked with:</h4>
		<br><br>
		<div class="row container">
			<div class="col-sm-6 col-lg-3">
				<img src="@/assets/clients/tp.png" id="client-logo">
			</div>

			<div class="col-sm-6 col-lg-3">
				<img src="@/assets/clients/msme.png" id="client-logo">
			</div>

			<div class="col-sm-6 col-lg-3">
				<img src="@/assets/clients/mine.png" id="client-logo">
			</div>

			<div class="col-sm-6 col-lg-3">
				<img src="@/assets/clients/callerbox.png" id="client-logo">
			</div>
			</div>
		</div>
	</div>
    <div class="row services">
    	<div class="col-sm-12">
    		<br><br>
    		<h4>Our Services include:</h4>
    		<br><br>
    		<div class="row">
    			<div class="col-sm-12 col-lg-4 s-card">
    				<div class="card services-card">
    					<img src="@/assets/monitor-window.png" id="services-logo">
    					
    					<div class="service-content">
    						<h5 id="service-title">Software Development</h5>
    						<ul id="li">
    							<li>Web Apps</li>
    							<li>Mobile Apps</li>
    							<li>Desktop Apps</li>
    						</ul>
    					</div>
    					
    				</div>
    			</div>

    			<div class="col-sm-12 col-lg-4 s-card">
    				<div class="card services-card">
    					<img src="@/assets/monitor-cash-credit-card.png" id="services-logo">
    					<div class="service-content">
    						<h5 id="service-title">Product Strategy</h5>
    						<ul id="li">
    							<li>Prototyping</li>
    							<li>Content Strategy</li>
    							<li>Responsive Design</li>
    						</ul>
    					</div>
    				</div>
    			</div>

    			<div class="col-sm-12 col-lg-4 s-card">
    				<div class="card services-card">
    					<img src="@/assets/programmer-male.png" id="services-logo">
    					<div class="service-content">
    						<h5 id="service-title">Analytics and Data.</h5>
    						<ul id="li">
    							<li>Data Analysis</li>
    							<li>Machine Learning</li>
    							<li>Structured/Targeted Marketing</li>
    						</ul>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="row">
    	<div class="col-sm-12" style="height:400px">
    		<vue-particles style="height:400px !important"></vue-particles>
    		<div  class="text-overlap">
    		<span id="generic-header">Ready to start a project?</span>
    		<br>
    		<h4 id="generic-subheader">
    			Let's build something awesome together!<br>
				Say hello@analitedigital.site or call +07089605331
    		</h4>
    		<br>
    		<router-link to="/contact" href="#"><button class="btn btn-start hvr-sweep-to-right">Start Project</button></router-link>
    		</div>
  		</div>
    </div>
    <div class="row">
    	<div class="col-sm-12">
    		<Footer />
    	</div>
    </div>
  </div>
</template>

<script>
import AboutSvg from '@/components/AboutSvg.vue'
import Footer from '@/components/Layout/Footer.vue'
// @ is an alias to /src
export default {
  name: 'About',
  components: {AboutSvg,Footer}
}
</script>

<style type="text/css" scoped>
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
	}
	#client-logo
	{
		width: 70%;
		filter: grayscale(100%);
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