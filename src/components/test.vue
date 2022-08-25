<template>
  <h2>Add New</h2>
  <div class="modal">
    <div class="modal-box">
      <div class="modal-body">
       
        <form class="dash-form">
          <div class="dash-control">
            <label for="name">First name</label>
            <br>
            <input type="name" id="fname" />
          </div>
          <div class="dash-control">
            <label for="name">Last name</label>
            <br>
            <input type="name" id="lname" />
          </div>
          <div class="dash-control">
            <label for="email">Email</label>
            <br>
            <input type="email" id="email" />
          </div>
          <div class="dash-control">
            <label for="phone number">Phone number</label>
            <input type="number" id="number" />
          </div>
          <div class="dash-control">
            <label for="role">Role</label>
            <br>
            <input type="name" id="role" />
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
</style>