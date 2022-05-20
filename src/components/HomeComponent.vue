<template>
  <div class="home">
    <HeaderComponent />
    <div class="resturant-list">
      <div
        class="single-resturant"
        v-for="resturant in resturants"
        :key="resturant.id"
      >
        {{ resturant }}

        <router-link :to="updatePath(resturant.id)">Update Link</router-link>
        <a href="" @click.prevent="UpdateResturant(resturant.id)"> Update </a>
      </div>
    </div>

    <ModalComponent
      v-if="showModal"
      :modalClose="closeModal"
      :resturantId="updateResturantId"
    />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  components: {
    HeaderComponent,
    ModalComponent,
  },
  data() {
    return {
      resturants: [],
      showModal: false,
      updateResturantId: null,
    };
  },
  methods: {
    updatePath(id) {
      return `/update/${id}`;
    },
    capitalizeFirstLetters(str) {
      let text = str
        .toLowerCase()
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());

      return text;
    },
    closeModal() {
      this.showModal = false;
    },
    UpdateResturant(resturantId) {
      this.updateResturantId = resturantId;
      this.showModal = true;
    },
  },
  mounted() {
    let loginData = localStorage.getItem("restoUsers");
    if (!loginData) {
      this.$router.push({ name: "LogIn" });
    }

    axios.get("http://localhost:3000/resturants").then((res) => {
      this.resturants = res.data;
      console.log(2);
    });
  },
};
</script>

<style></style>
