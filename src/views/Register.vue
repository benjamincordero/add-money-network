<template>
    <div class="p-4 bg-gray-100 border-2 border-gray-300 drop-shadow-lg rounded-2xl">
      <h1 class="mt-6 mb-2 text-3xl font-bold text-center text-gray-500 capitalize">register user</h1>
      <form class="flex flex-col w-3/4 mx-auto gap-4" action="javascript:;" @submit="submit">
        <div class="flex flex-col">
          <label class="text-gray-500" for="name">Name</label>
          <input type="text" placeholder="Name" v-model="user.name" class="p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50">
        </div>
        <div class="flex flex-col">
          <label class="text-gray-500" for="email">Email</label>
          <input type="email" placeholder="Email" v-model="user.email" class="p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50">
        </div>
        <div class="flex flex-col">
          <label class="text-gray-500" for="password">Password</label>
          <input type="password" placeholder="Password" v-model="user.password" class="p-2 border border-blue-500 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50">
        </div>
        <div class="flex justify-end">
          <button type="submit" class="inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-xl hover:bg-green-700">Register</button>

        </div>
      </form>
    </div>
  
</template>
<script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { mapActions } from "vuex";
  

  export default{
    name: 'Register',
    data(){
      return{
        user:{
          name:'',
          password:'',
          email:'',
        }
      }
    },
    methods:{
      ...mapActions(["Register"]),
      async submit(){
        try{
          const auth = getAuth();
          const credentialUser = await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
          await this.Register(this.user);
          this.$router.push('/');
          console.log(credentialUser.user);
        }catch(err){
          
          throw new Error(err);
        }
      }
    },


  }

</script>
