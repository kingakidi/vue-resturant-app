<template>
  <div class="home">
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      resturants: [],
    };
  },

  mounted() {
    let loginData = localStorage.getItem("restoUsers");
    if (!loginData) {
      this.$router.push({ name: "LogIn" });
    }

    axios.get("http://localhost:3000/users").then((res) => {
      this.resturants = res.data;
    });
  },
};
</script>

<style></style>
