<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup,
.login {
  width: 350px;
  padding: 20px;
  /* background-color: #eee; */
}
.signup input,
.login input {
  display: block;
  margin-bottom: 10px;
  width: 350px;

  padding: 10px;
  box-sizing: border-box;
}

.signup input:focus,
.login input:focus {
  outline: 1px rgba(0, 0, 0, 0.39);
  padding: 13px;
}

.signup input[type="submit"],
.login input[type="submit"] {
  background: rgb(9, 238, 226);
  border: solid rgba(0, 0, 0, 0.39) 1px;
}
</style>
