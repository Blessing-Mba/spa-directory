
<template>
  <body class="dashboard-body">
    <div class="mobile-nav">
       <div class="logo">
          
       </div>
       <div>
         <div class="mobile-sign-up">
            <div class="ash"></div>
            <div class="text">Hi, Joshua</div>
            <div class="img"><img src="" ></div>
        </div>

       </div>
    </div>
       <div class="navbar">
        <div class="logo">
            
        </div>
        <div class="sign-up">
            <div class="ash"></div>
            <div class="text">Hi, Joshua</div>
            <div class="img"><img src="" ></div>
        </div>
    </div>
       <div class="dashboard-container">
        <div class="first-box">
            <div class="first-content">
                <div><img src="../assets/img/icon.png"></div>
                <div><img src="../assets/img/users.png" id="user"></div>
                <div><img src="../assets/img/cards.png"></div>
            </div>
        </div>
        <div class="second-box">
            <div class="employee-head">
                <div class="employee-text"><h3>Employee Log</h3></div>
                <div><button class="employee-btn"  @click="openModal" >Add New</button>
                </div>
                 <div v-if ="showModal"><modal></modal><Test/></div>
            </div>
            <div class="address">
                <div><h2>Mel's Spa</h2></div>
                <div><h4>62, Bode Thomas, Surulere, Lagos</h4></div>
            </div>
            <div class="roles">
                <div class="role-control">
                    <div class="form-box">
                        <form action="">
                            <select name="country" id="" class="form-control">
                              <option value="Change">Change role</option>
                              <option value="admin">Admin</option>
                              <option value="staff"> Staff</option>
                          </select>
                          </form>
                    </div>
                    <div class="change-box">
                        <button id="change-btn">Change</button>
                    </div>
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="Enter Staff name here">
                        <button type="submit" class="searchButton">
                            <i class="material-icons">search</i>
            
                       </button>
                    </div>
                </div>
                <div class="dash-number">
                    <div> 1 of 2</div>
                    <div class="dash-box">
                        <button id="dash-btn">
                            <img src="">
                        </button>
                        <button id="dash-btn">
                            <img src="">
                        </button>
                    </div>
                </div>
            </div>
               <div class="table-box">
                <table class="table">
                    <thead>
                    <th><img src=""></th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>ROLE</th>
                    </thead>
                    <tr v-for="(employee, index) in employees" :key="index">
                    <td><img src=""></td>
                    <td  data-label="FIRST NAME">{{employee.firstName}}</td>
                    <td  data-label="LAST NAME">{{employee.lastName}}</td>
                    <td data-label="EMAIL">{{employee.email}}</td>
                    <td  data-label="PHONE">{{employee.contact}}</td>
                    <td  data-label="ROLE">{{employee.role}}</td>
                    </tr>
                </table>
                </div>
        </div>
       </div>
       

    </body>
</template>

<script>
import Modal from '../components/ModalView.vue'
import Test from '../components/test.vue'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
       showModal: false,
    };
  },

  async mounted() {
    await this.fetchEmployees()

    console.log(this.$store.state)
    console.log(this.employees)
  },

  components: {Modal, Test},
  methods: {

  openModal() {
   this.showModal = true
  },

  ...mapActions({
    fetchEmployees: 'fetchEmployees',
  }),
},
computed: {
    employees () {
      return this.$store.state.employees;
    }
  }
}


</script>
<style>@media only screen 
  and (min-device-width: 200px) 
  and (max-device-width: 840px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait){
    .dashboard-container{
  margin-top: 0 !important;
  width: 100%; 
  padding-left: 0.7rem;
}

    };
  
</style>
<style scoped>
.mobile-nav{
    display: none;
    
}
  .dashboard-body{
    margin: 0;
}
 .navbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 4rem;
    background: #FFFFFF;
}
#logo{
    padding-top: 0.5rem;
}
.logo{
    height: 100px;
    width: 150px;
    background: url('../assets/img/Spa\ logo.jpg');
    background-repeat: no-repeat;
}
.sign-up{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 8%;
    margin-right:  4.5rem;
    padding-top: 0.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

.ash{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #6A7E8A;
}
.text, .img{
    padding-top: 0.5rem;
}
.dashboard-container{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   height: 1000px;
   margin-left: 0;
   margin-right: 0;
}
.first-box{
    width: 5%;
    background-color: #fff;
}
.first-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20rem;
    margin-top: 7rem;
    padding-left: 1.5rem;
    padding-right: 1rem;
}
.second-box{
    width: 95%;
    background-color: #E5E5E5;
    margin-top: 5rem !important;
}
.employee-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem;
    margin-top: 3rem;
}
.employee-text{
    font-weight: 500;
    font-size: 26px;
    line-height: 15px;
    display: flex;
    letter-spacing: -0.65px;
    color: #013C61;
}
.employee-btn{
    color: white;
    background-color: palevioletred;
    border: none;
    height: 44px;
    width: 200px;
    border-radius: 3px;
    margin-top: 1.8rem;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}
.address{
    height: 114px;
    width: 93.5%;
    margin-left: 3rem;
    top: 236px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
h2{
    font-weight: 500;
    font-size: 36px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.9px;
    color: #013C61;
    padding-left: 2rem;
}
h4{
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.55px;
    color: #013C61;
    padding-right: 4rem;
}
.roles{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem;
    margin-top: 0.5rem;
    
}
.role-control{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.form-control{
    border: 1px solid #6A7E8A66;
    background: #FFFFFF;
    border-radius: 3px;
    width: 146px;
    height: 34px;
    box-sizing: border-box;
}
#change-btn{
    width: 118px;
    height: 34px;
    background: palevioletred;
    border-radius: 3px;
    border: none;
 }
 .search{
    margin-top: -0.3rem;
 }
 .searchTerm{
    box-sizing: border-box;
    width: 332px;
    height: 34px;
    margin-top: -1rem;
    background: #FFFFFF;
    border: 1px solid rgba(106, 126, 138, 0.4);
    border-radius: 3px;
 }
 #user{
    filter: grayscale(10);
 }
 .dash-number{
    width: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
 }
 .dash-box{
    display: flex;
    flex-direction: row;
 }
 #dash-btn{
    width: 1rem;
    height: 1rem;
    background-color: palevioletred;
    border: none;
    margin-left: 0.3rem;
    border-radius: 50%;
 }
 .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .modal-box {
    margin: 10% auto;
    width: 400px;
    background: #fff;
    color: #333;
    position: relative;
    animation: modalopen 1s;
    margin-top: 5rem;
    height: 35rem;
  }
  
  @keyframes modalopen {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  
  .modal-body {
    padding: 30px;
  }
  
  .modal-body h3 {
    font-weight: bold;
  }
  
  .modal-body .btn {
    width: 100%;
    margin-top: 20px;
  }
  .modal-btn{
    margin: 0;
    padding: 0;
    display: flex;
    float: right;
    width: 5rem;
    height: 2rem;
    font-size: 18px;
  }
  .modal .close {
    cursor: pointer;
    height: 23px;
    width: 23px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .dash-form{
    margin: 0;
    padding: 0;
  }
  .dash-control{
    margin: 20px 0;
  }
  .dash-control input {
    width: 100%;
    border: 2px #ccc solid;
    border-radius: 5px;
    height: 20px;
}
.table-box{
    padding-left: 3rem;
    padding-right: 3rem;
}
 .table{
    width: 100%;
    border-collapse: collapse;
    padding-left: 1rem;
 }
 .table td,
.table th {
  padding: 12px 15px;
  border: none;
  text-align: center;
  font-size: 16px;
}

.table tbody tr:nth-child(even) {
  background-color: #fff
}



@media only screen 
  and (min-device-width: 200px) 
  and (max-device-width: 840px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait){
    .mobile-nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 20px;
        
    }
    
    .navbar, .first-box{
        display: none;
    }
    .mobile-sign-up{
        display: flex;
    }
    .employee-head, .address{
        display: block;
        margin: 0 auto !important;
        text-align: center;
    }
     .employee-text{
        text-align: center;
        width: 100%;
        font-size: 32px;
    }
    
    h2{
        font-size: 24px;
        
    }
    h4{
        font-size: 16px;
        text-align: center;
    }
   .role-control{
    display: block;
   }
    .employee-btn{
        margin-top: 3rem !important;
        width: 7rem;
    }
    .table thead{
        display: none;
    }
    table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }
  .table td {
    padding-left: 50%;
    text-align: left;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 45%;
    padding-left: 10px;
    font-size: 8px;
    font-weight: bold;
    text-align: left;
  }
  .searchTerm{
    width: 12rem;
  }
  .dashboard-body{
    margin: 0;
  }
 
}

  
</style>