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
        {{ updatePath(resturant.id) }}
        <router-link :to="updatePath(resturant.id)">Update</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "HomeComponent",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      resturants: [],
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

<style>
.resturant-list {
  margin-top: 20px;
  display: flex;
  margin: 10px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  text-align: justify;
}

.single-resturant {
  background: #0e2134;
  color: #fff;
  list-style: none;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
}
.resturant-list ol {
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0px;
}
.resturant-list ol li {
  margin: 8px 0px;
}

.resturant-list ol div {
  background: #e4a3ff;
}
.single-resturant button {
  display: inline-block;
  padding: 10px;
  margin: 5px 0px;
  margin-right: 8px;
}
</style>
