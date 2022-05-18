<template>
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
    <div>{{ error }}</div>
  </form>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      error: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
