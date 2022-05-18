<template>
  <h1>Logout Page</h1>
</template>

<script>
export default {
  name: "LogOut",
  mounted() {
    const store = localStorage.removeItem("restoUsers");
    console.log(store);
    this.$router.push({ name: "LogIn" });
  },
};
</script>

<style></style>
