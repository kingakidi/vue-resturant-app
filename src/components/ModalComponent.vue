<template>
  <div class="popup-page" id="popup-page">
    <div class="popup-content" id="popup-content">
      <div class="popup-close form-group text-end">
        <button id="popup-close" @click="modalClose" class="btn btn-danger">
          X
        </button>
      </div>
      <div class="show-popup-content" id="show-popup-content">
        <h1>Update Resturant</h1>
        <div class="form-container">
          <form class="add-resturant" @submit.prevent="updateResturant()">
            <input type="text" v-model="name" placeholder="Resturant Name" />
            <input
              type="text"
              v-model="address"
              placeholder="Resturant Address "
            />

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
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ModalComponent",
  props: ["modalClose", "resturantId"],
  data() {
    return {
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
          `http://localhost:3000/resturants/${this.resturantId}`,
          {
            name: this.name.toLowerCase(),
            address: this.address.toLowerCase(),
            menu: this.menu.toLowerCase(),
          }
        );
        if (postResturant.status === 200) {
          this.error = "Updated Successfully";
          this.name = "";
          this.address = "";
          this.menu = "";
        } else {
          console.log(postResturant);
        }
      } else {
        this.error = "All fields required";
      }
    },
  },
  mounted() {
    console.log(this.resturantId);

    // GET THE RESTURANTS WITH THE PASSED IN ID
    axios
      .get(`http://localhost:3000/resturants?id=${this.resturantId}`)
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
