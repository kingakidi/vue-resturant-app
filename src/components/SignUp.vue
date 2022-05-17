<template>
  <div>
    <h1>SignUp</h1>
    <form action="" class="signup" @submit.prevent="signup()">
     <input type="text" v-model="resturantName" placeholder="Resturant Name">
     <input type="email"  v-model="resturantEmail" placeholder="Enter Email Address">
     <input type="password" v-model="resturantPassword" placeholder="Enter Password">
     <input type="submit" value="Register Resturant" >
     <div> {{error}}</div>
    </form>
  </div>
</template>
<script>
  export default {
    name: "SignUp", 
    data(){
      return {
        resturantName: "", 
        resturantEmail: "", 
        resturantPassword: "", 
        error: ""
      }
    }, 
   methods: {
     clean(val){
       return val.length
     },
     signup(){
    
     if ( this.clean(this.resturantName) && this.clean(this.resturantPassword) > 0 && this.clean(this.resturantPassword)) {
        // console.log(this.resturantName.length, this.resturantEmail, this.resturantPassword)
        console.log()
        this.error = "Loading..."
     }else{
       this.error = "All fields required"
     }
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