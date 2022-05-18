<template>
  <div class="form-container">
    <h1>SignUp</h1>
    <form action="" class="signup" @submit.prevent="signup()">
      <input type="text" v-model="resturantName" placeholder="Resturant Name" />
      <input
        type="email"
        v-model="resturantEmail"
        placeholder="Enter Email Address"
      />
      <input
        type="password"
        v-model="resturantPassword"
        placeholder="Enter Password"
      />
      <input type="submit" value="Register Resturant" />
      <div>
        Already have an account?
        <router-link to="/login"> Login </router-link>
      </div>
      <div>{{ error }}</div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      resturantName: "",
      resturantEmail: "",
      resturantPassword: "",
      error: "",
    };
  },
  methods: {
    clean(val) {
      return val.length;
    },
    async signup() {
      if (
        this.clean(this.resturantName) &&
        this.clean(this.resturantPassword) > 0 &&
        this.clean(this.resturantPassword)
      ) {
        this.error = "Loading...";
        let register = await axios.post("http://localhost:3000/users", {
          name: this.resturantName.toLowerCase(),
          email: this.resturantEmail.toLowerCase(),
          password: this.resturantPassword,
        });

        if (register.status === 201) {
          this.error = "Account Created Successfully";
          this.resturantName = "";
          this.resturantEmail = "";
          this.resturantPassword = "";
          localStorage.setItem("restoUsers", JSON.stringify(register.data));
          this.$router.push({ name: "HomeComponent" });
        } else {
          this.error = register.statusText;
        }
      } else {
        this.error = "All fields required";
      }
    },
  },
  mounted() {
    let loginData = localStorage.getItem("restoUsers");

    if (loginData) {
      this.$router.push({ name: "HomeComponent" });
    }
  },
};
</script>
<style></style>
