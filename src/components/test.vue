<template>
  <h2>Add New</h2>
  <div class="modal">
    <div class="modal-box">
      <div class="modal-body">
       
        <form class="dash-form">
          <div class="dash-control">
            <label for="name">First name</label>
            <br>
            <input type="text" v-model="firstName" id="fname" />
          </div>
          <div class="dash-control">
            <label for="name">Last name</label>
            <br>
            <input type="text" v-model="firstName" id="lname" />
          </div>
          <div class="dash-control">
            <label for="email">Email</label>
            <br>
            <input type="email" v-model="email" id="email" />
          </div>
          <div class="dash-control">
            <label for="phone number">Phone number</label>
            <input type="number" v-model="contact" id="number" />
          </div>
          <div class="dash-control">
            <label for="role">Role</label>
            <br>
            <input type="name" v-model="role" id="role" />
          </div>
          <button class="modal-btn">Update</button>
        </form>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "Test"

}
</script>

<style scoped>
  .modal{
    height: 350px;
    width: 250px;
    background-color: #FFFFFF;
    border-radius: 5px;
   

  }
  input{
    border: 1px solid gray;
    height: 20px;
    margin-top: 5px;
  }
  .modal-box, .modal-body, .dash-form{
    margin-top: 1rem !important;
  }
  .modal-box{
     display: flex;
    align-content: center;
    justify-content: center;
    margin-left: 36px !important;
  }
 .dash-control{
    margin-top: 6px;
 }
 .modal-btn{
    margin-top: 1rem;
 }
 @media only screen 
  and (min-device-width: 200px) 
  and (max-device-width: 840px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait){
    .modal{
      margin-left: 2rem;
    }
    .modal-box{
      margin-left: 0 !important;
    }
  }
</style>