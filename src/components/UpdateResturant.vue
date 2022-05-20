<template>
  <div>
    <HeaderComponent />
    <h1>Update Resturant</h1>
    <div class="form-container">
      <form class="add-resturant" @submit.prevent="updateResturant()">
        <input type="text" v-model="name" placeholder="Resturant Name" />
        <input type="text" v-model="address" placeholder="Resturant Address " />

        <input
          type="text"
          v-model="menu"
          placeholder="List Menu seperate with comma"
        />
        <input type="submit" value="Update Resturant" />
        <div>{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "UpdateResturant",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      updateId: this.$route.params.id,
      name: "",
      address: "",
      menu: "",
      error: "",
    };
  },
  methods: {
    clean($val) {
      return $val.length;
    },
    async updateResturant() {
      if (
        this.clean(this.name) > 0 &&
        this.clean(this.address) > 0 &&
        this.clean(this.menu) > 0
      ) {
        this.error = "Loading...";
        let postResturant = await axios.put(
          `http://localhost:3000/resturants/${this.$route.params.id}`,
          {
            name: this.name.toLowerCase(),
            address: this.address.toLowerCase(),
            menu: this.menu.toLowerCase(),
          }
        );
        if (postResturant.status === 200) {
          let updatedData = postResturant.data;
          this.error = "Updated Successfully";
          this.name = updatedData.name;
          this.address = updatedData.address;
          this.menu = updatedData.menu;
        } else {
          console.log(postResturant);
        }
      } else {
        this.error = "All fields required";
      }
    },
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
