<template>
  <div class="modal">
    <div class="modal-box">
      <div class="modal-body">
        <h3>Add New</h3>
        <form class="dash-form">
          <div class="dash-control">
            <label for="name">First name</label>
            <input type="name" id="fname" />
          </div>
          <div class="dash-control">
            <label for="name">Last name</label>
            <input type="name" id="lname" />
          </div>
          <div class="dash-control">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="dash-control">
            <label for="phone number">Phone name</label>
            <input type="number" id="number" />
          </div>
          <div class="dash-control">
            <label for="role">Role</label>
            <input type="name" id="role" />
          </div>
          <button class="modal-btn">Update</button>
        </form>
      </div>

      <img class="close" src="" alt="close" />
    </div>
  </div>
</template>


<script>
export default {
  name: "Modal",
};

</script>
<style scoped></style>
