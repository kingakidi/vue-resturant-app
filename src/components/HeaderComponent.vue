<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Resturant</router-link>
    <router-link to="/update">Update Resturant</router-link>
    <router-link to="/delete">Delete Resturant</router-link>
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
  background: #0e2134;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.router-link,
a {
  display: block;
  text-decoration: none;
  color: #fff;
}
</style>
