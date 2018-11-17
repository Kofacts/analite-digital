<template>
  <div class="container">
    <div class="row">
    	<div class="col-sm-12 col-lg-6">
    		<div class="generic-header">
    			<span id="generic-header">Contact Us</span>
    			<br>
    			<div class="divider divider-pink"></div>
    		</div>

    		<div class="generic-subheader">
    			<span id="generic-subheader">
    				Looking to get us hop' on that next big thing, or just want to grab a cup of coffee with us?
                    We are always ready for that.<br>
                    We’d love to have you at the office anytime between 10 am and 4 pm, as long as you have an appointment. Fridays, weekends and holidays are excluded.
    			</span>
    			<br><br>
    			<h4>Our Address</h4>
    			<span id="generic-subheader">
    				3 Oluwadare, Folagoro<br>
                    Shomolu, Lagos State.<br>
                    <div id="">
                        <span id="get_dir">Get Directions.</span>
                    </div>
    			</span>
    		</div>
    	</div>

    	<div class="col-sm-12 col-lg-6 illustration">
    		<ContactSvg />
    	</div>
    </div>
    
    <div class="row b-enqu">
        <div class="col-sm-12">
            <h4>Business Inquiries ?</h4>
            <h6>Fill out this form and we would reach out ASAP!</h6>
        </div>
        <div class="col-sm-12 form-sec">
            <div class="row">
                <div class="col-sm-12 col-lg-12">
                    <div class="row">
                        <div class="col-sm-12 col-lg-3">
                            <label for="name">
                                <small>Full Name</small>
                            </label><br>
                            <input type="text" v-model="name" id="name" name="">
                        </div>
                        <div class="col-sm-12 col-lg-3 float-left">
                            <label for="name">
                                <small>Email Addres</small>
                            </label><br>
                            <input type="email" v-model="email" id="name" name="">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-12 col-lg-3">
                            <label for="name">
                                <small>Phone Number</small>
                            </label><br>
                            <input type="text" v-model="phone" id="name" name="">
                        </div>
                        <div class="col-sm-12 col-lg-3 float-left">
                            <label for="name">
                                <small>Company</small>
                            </label><br>
                            <input type="email" v-model="company" id="name" name="">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <label for="name">
                                <small>Project Description</small>
                            </label><br>
                            <textarea type="text" id="name" v-model="desc" name=""></textarea>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-12 col-lg-3">
                            <button class="btn"  @click="sendMail">Let's Do This.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12 footer-contact">
            <Footer />
        </div>
    </div>
  </div>
</template>

<script>
import ContactSvg from '@/components/ContactSvg.vue'
import Footer from '@/components/Layout/Footer.vue'
import axios from 'axios'
// @ is an alias to /src
export default {
  name: 'Contact Us',
  components: {ContactSvg,Footer},
  data() {
    return {
          name,
          desc,
          company,
          email,
          phone,
          request_data : {"personalizations": [
            {
              "to": [
                {
                  "email": "mp3horseofficial@gmail.com"
                }
              ],
              "subject": "Analite Digital Contact Form"
            }
          ],
          "from": {
            "email": this.email
          },
          "content": [
            {
              "type": "text/plain",
              "value": `Hello Analite, My name is ${name} and i run ${company}. I am looking to work with you guys on ${desc}. You can reach out to me via ${phone}`
            }
          ],
        },
        api: 'https://api.sendgrid.com/v3/mail/send',
        tokenStr: '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'
    }
  },
  methods: {
    sendMail(){
        console.log('Sending Mail ..')
        axios.post(this.api,this.request_data,{ headers: {"Authorization" : `Bearer ${this.tokenStr}`} })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }
}
</script>

<style type="text/css" scoped>
	#client-logo
	{
		width: 70%;
		filter: grayscale(100%);
	}
    .form-sec
    {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    input,textarea,input:focus,input:hover,textarea:focus,textarea:hover
    {
        background-color: transparent;
        color: white;
        outline: 0px;
        border:0px;
        border-bottom:1px solid white;
        width: 100%
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
		margin-top: -500px;
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