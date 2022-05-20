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
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup,
.login,
.add-resturant {
  width: 350px;
  padding: 20px;
  /* background-color: #eee; */
}
.signup input,
.login input,
.add-resturant input {
  display: block;
  margin-bottom: 10px;
  width: 350px;

  padding: 10px;
  box-sizing: border-box;
}

.signup input:focus,
.login input:focus,
.add-resturant input:focus {
  outline: 1px rgba(0, 0, 0, 0.39);
  padding: 13px;
}

.signup input[type="submit"],
.login input[type="submit"],
.add-resturant input[type="submit"] {
  background: rgb(9, 238, 226);
  border: solid rgba(0, 0, 0, 0.39) 1px;
}

/* HOME COMPONENT STYLING  */

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
/* POPUp  STYLING  */
.popup-page {
  position: fixed;
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000f0;
  /* display: none; */
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  background: #0e2134;
  color: #fff;

  /* padding: 20px; */
  /* height: 90%; */
  overflow-y: auto;
  border-radius: 5px;
}
.single-request {
  /* background: #0e2134; */

  color: #fff;
  list-style: none;
  /* margin: 20px; */
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
}

.single-request button {
  display: inline-block;
  text-decoration: none;
  color: #0e2134;
  height: 100%;
  padding: 15px;
  border-radius: 3px;
  background-color: #fff;
  margin: 0px 10px;
  border: none;
  font-weight: 600;
}

/* toggle TABS  */

.toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  box-sizing: border-box;
}

.btn-toggle {
  display: inline-block;
  margin: 10px 0px;
  padding: 10px 60px;
  background-color: #ff933b;
  color: #fff;
  border: none;
}
.btn-toggle:first-child {
  background-color: #060301;
}

.btn-toggle:hover {
  padding: 15px 62px;
}

@media (max-width: 550px) {
  #app {
    width: 90%;
  }
}
@media (max-width: 450px) {
  #popup-content {
    width: 90%;
  }
}
</style>
