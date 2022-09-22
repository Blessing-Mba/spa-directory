<template>
  <div class="container">
     <div class="left">
      <ul class="slides">
                <input type="radio" name="radio-buttons" id="img-1" checked />
                <li class="slide-container">
                  <div class="slide-image">
                    <img src="../assets/img/girl.jpg">
                  </div>
                  <div class="carousel-controls">
                    <label for="img-3" class="prev-slide">
                      <span>&lsaquo;</span>
                    </label>
                    <label for="img-2" class="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                  </div>
                </li>
                <input type="radio" name="radio-buttons" id="img-2" />
                <li class="slide-container">
                  <div class="slide-image">
                    <img src="../assets/img/Object.png">
                  </div>
                  <div class="carousel-controls">
                    <label for="img-1" class="prev-slide">
                      <span>&lsaquo;</span>
                    </label>
                    <label for="img-3" class="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                  </div>
                </li>
                <div class="carousel-dots">
                  <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                  <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                </div>
              </ul>
     </div>
     <div class="right">
        <div class="right-container">
                    <h2>Create your free account</h2>
                    <h4>Already registered? <span>Sign in</span></h4>
                    <div class="right-box">
                      <div class="first-form">
                           <div>
                            <form>
                                <label>First name</label>
                                <br>
                                <input type="text" name="name" placeholder="Tunde">
                                
                            </form>
                           </div>
                           <div>
                            <form>
                                <label>Last name</label>
                                <br>
                                <input type="text" name="name" placeholder="Bakere">
                               
                            </form>
                           </div>
                       </div>
                        <div class="second-form">
                        <form>
                            <label>Email</label>
                            <br>
                            <input  class="second-input" type="email" name="name" placeholder="josh.bakery@gmail.com">
                            
                        </form>
                       </div>
                       <div class="second-form">
                        <form>
                            <label>Password</label>
                            <br>
                            <input  class="second-input" type="password" name="name" placeholder="*************">
                           
                        </form>
                       </div>
                       <div class="btn-box">
                        <button id="btn"  @click="goToPage()">Continue</button>
                       </div>
                        
                    </div>
        </div>
         <div class="footer-box">
                          <div>By signing up, you agree to our<span> Terms</span> and <span>Privacy Policy</span></div>
                          <div>© 2019 Tinylabs. All rights reserved.</div>
                        </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
   data() {
    return {
      email: "",
      password: ""
    }
   },
   methods:{
   goToPage(){
   this.$router.push('/dash'); 
      }
  }
}
</script>
<style>
  body{
  margin: 0 !important;
}
</style>
<style scoped>

.container{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.left{
  width: 50%;

}
.carousel {
    width: 40%;
}
.right{
    width: 60%;
}
ul.slides {
    display: block;
    position: relative;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

ul.slides input {
    display: none; 
}


.slide-container { 
    display: block; 
}

.slide-image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    transition: all .7s ease-in-out;
}   

.slide-image img {
    width: auto;
    min-width: 100%;
    height: 100%;
}

.carousel-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    font-size: 100px;
    line-height: 600px;
    color: #fff;
}

.carousel-controls label {
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity .2s;
    cursor: pointer;
}

.slide-image:hover + .carousel-controls label{
    opacity: 0.5;
}

.carousel-controls label:hover {
    opacity: 1;
}

.carousel-controls .prev-slide {
    width: 49%;
    text-align: left;
    left: 0;
}

.carousel-controls .next-slide {
    width: 49%;
    text-align: right;
    right: 0;
}

.carousel-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 999;
    text-align: center;
}

.carousel-dots .carousel-dot {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 10px;
}

input:checked + .slide-container .slide-image {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
     display: block; 
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
	opacity: 1;
}


input:checked + .slide-container .nav label { display: block; }

.right-container{
    padding-left: 10rem;
    margin-top: 5rem !important;
}
.right-box{
    height: 400px;
    width: 490px;
    box-shadow: 0px 20px 50px 0px #EAEEE9;
    margin-top: 2rem !important;
}
h2{
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.4px;
}
h4{
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.102857px;
}
h2, h4{
    color:  #013C61;
}
span{
    color: palevioletred;
}
.right-box{
    padding: 2.5rem;
}
input{
    border: none;
    border-bottom: 1px solid #E6E7EB;
    margin-top: 0.5rem;
    width: 14rem;
}
.second-input{
    width: 31rem;
}
label{
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #6A7E8A;
}
.first-form{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
}
.second-form{
    padding-top: 3rem;
}
#btn{
    color: white;
    background-color: palevioletred;
    border: none;
    width: 10rem;
    height: 2rem;
    float: right;
    border-radius: 3px;
    margin-top: 6rem !important;
}
.footer-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:  5rem  !important;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.08px;
    color: #6A7E8A;
    padding-left: 3rem;
    padding-right: 3rem;
}


@media only screen 
  and (min-device-width: 200px) 
  and (max-device-width: 840px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait){
    body{
  margin: 0 !important;
}
    .container{
      position: relative;
      width: 100%;
      height: 120vh;
     
      background: #F6F8F8;
    }
    .left{
      display: none;
    }
    .right{
      width: 100%;
      padding-left: 1rem;
      padding-right: 2rem;
      
    }
   
    .right-container{
      padding: 0;
      width: 100%;
      margin: 0;
    }
    .right-box{
       width: 100% !important;
      height: 600px !important;
      text-align: left;
      background: #FFFFFF;
      margin-top: 11rem !important;
      padding: 0;
      align-content: center;
      margin: 0;
      padding-top: 2rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
   
    h2{
      position: absolute;
      width: 234px;
      height: 23px;
      left: 56.2px;
      top: 79px;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.235294px;
    }
    h4{
      position: absolute;
      width: 250px;
      height: 18px;
      left: 63px;
      top: 113px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height, or 129% */

      text-align: center;
      letter-spacing: -0.08px;
    }
      
    
    .first-form, .second-form{
      display: block;
      width: 100%;
      margin-top: 3rem;
    }
    .second-form{
      padding-top: 0;
    }
    input{
      margin-bottom: 30px !important;
      padding: 0;
    }
    .second-input, input{
      width: 100%;
      
    }
    form{
      margin-top: 2rem;
    }
    .btn-box
    {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;
     
    }
    #btn{
       margin-top: 1rem !important;
      float: none;
      height: 44px;
        width: 260px;
        left: 0px;
        top: 0px;
        border-radius: 3px;

    }
    .footer-box{
      display: block;
      width: 100%;
      background: none;
      margin-top: 2rem !important;
    }
  }
</style>