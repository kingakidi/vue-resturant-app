<template>
  <div class="form-container">
    <h1>Login</h1>
    <form action="" class="login" @submit.prevent="login()">
      <input type="email" v-model="email" placeholder="Enter Email Address" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <input type="submit" value="Login" />
      <div>
        Don't have an account?
        <router-link to="/signup"> Create account </router-link>
      </div>
      <div>{{ error }}</div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    clean(val) {
      return val.length;
    },
    async login() {
      if (this.clean(this.email) > 0 && this.clean(this.password)) {
        this.error = "Loading...";
        const login = await axios.get(
          `http://localhost:3000/users?email=${this.email.toLowerCase()}&password=${
            this.password
          }`
        );

        // console.log(login.status, login.data);
        if (login.status === 200) {
          if (login.data.length > 0) {
            this.error = "Login successful";
            localStorage.setItem("restoUsers", JSON.stringify(login.data));
            this.$router.push({ name: "HomeComponent" });
          } else {
            this.error = "Invalid Login Credentials";
          }
        } else {
          this.error = "Unable to connect";
        }
      } else {
        this.error = "All fields required";
      }
    },
  },
  mounted() {
    let loginCheck = localStorage.getItem("restoUsers");
    console.log(loginCheck);
    if (loginCheck) {
      this.$router.push({ name: "HomeComponent" });
    }
  },
};
</script>

<style></style>
