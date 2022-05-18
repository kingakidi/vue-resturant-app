<template>
  <div>
    <HeaderComponent />
    <h1>Add Resturant</h1>
    <div class="form-container">
      <form class="add-resturant" @submit.prevent="addResturant()">
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
import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "AddResturant",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      error: "",
      name: "",
      address: "",
      menu: "",
    };
  },
  methods: {
    clean($val) {
      return $val.length;
    },
    async addResturant() {
      if (
        this.clean(this.name) > 0 &&
        this.clean(this.address) > 0 &&
        this.clean(this.menu) > 0
      ) {
        let postResturant = await axios.post(
          "http://localhost:3000/resturants",
          {
            name: this.name.toLowerCase(),
            address: this.address.toLowerCase(),
            menu: this.menu.toLowerCase(),
          }
        );
        if (postResturant.status === 201) {
          this.error = "Resturant Created Successfully";
          this.name = "";
          this.address = "";
          this.menu = "";
        }
      } else {
        this.error = "All fields required";
      }
    },
  },
};
</script>

<style></style>
