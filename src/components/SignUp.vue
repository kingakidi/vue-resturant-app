<template>
  <div>
    <h1>SignUp</h1>
    <form action="" class="signup" @submit.prevent="signup()">
     <input type="text" placeholder="Resturant Name">
     <input type="email" placeholder="Enter Email Address">
     <input type="password" placeholder="Enter Password">
     <input type="submit" value="Register Resturant" >
    </form>
  </div>
</template>
<script>
  export default {
    name: "SignUp", 
    data(){
      return {
        fullname: "", 
        email: "", 
        password: ""
      }
    }, 
   methods: {
     signup(){
       console.log("YOu have signup")
       alert("You clicked on signup")
     }
   }

  }
</script>
<style scoped>
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .signup {
    width: 350px;
    padding: 20px;
    background-color: #eee;

  }
  .signup input{
    display: block;
    margin-bottom: 10px;
    width: 350px;
    
    padding: 10px;
    box-sizing: border-box;
  }

  .signup input:focus {
    outline: 1px rgba(0, 0, 0, 0.39);
    padding: 13px;
  } 
</style>