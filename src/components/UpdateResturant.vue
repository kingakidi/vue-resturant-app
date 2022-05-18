<template>
  <div>
    <HeaderComponent />
    <h1>Update Resturant</h1>
    <div class="form-container">
      <form class="add-resturant">
        <input type="text" v-model="name" placeholder="Resturant Name" />
        <input type="text" v-model="address" placeholder="Resturant Address " />

        <input
          type="text"
          v-model="menu"
          placeholder="List Menu seperate with comma"
        />
        <input type="submit" value="Add Resturant" />
        <div>{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateResturant",
  data() {
    return {
      updateId: this.$route.params.id,
      name: "",
      address: "",
      menu: "",
      error: "",
    };
  },
  mounted() {
    // GET THE RESTURANTS WITH THE PASSED IN ID
    axios
      .get(`http://localhost:3000/resturants?id=${this.$route.params.id}`)
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          let data = res.data[0];
          this.name = data.name;
          this.address = data.address;
          this.menu = data.menu;

          // this.name = data.name;
          // this.address = data.address;
          // this.menu = data[0].address;
        } else {
          this.$router.push({ name: "HomeComponent" });
        }
      });
  },
};
</script>

<style></style>
