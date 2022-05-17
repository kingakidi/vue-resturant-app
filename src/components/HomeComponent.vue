<template>
  <div class="home">
    <h1>Welcome to Home Page</h1>
    <router-link to="/logout"> Logout </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  mounted() {
    let loginData = localStorage.getItem("restoUsers");
    if (!loginData) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
