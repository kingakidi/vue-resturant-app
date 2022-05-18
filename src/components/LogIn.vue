<template>
  <h1>SignUp</h1>
  <form action="" class="login" @submit.prevent="login()">
    <input type="email" v-model="email" placeholder="Enter Email Address" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <input type="submit" value="Login" />
    <div>{{ error }}</div>
  </form>
</template>

<script>
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
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
