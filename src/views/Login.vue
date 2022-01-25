<template>
  <div
    class="p-4 mx-auto mt-6 bg-white border-2 border-gray-300 md:w-2/4 drop-shadow-lg rounded-2xl"
  >
    <h1 class="pt-6 text-3xl font-bold text-center text-green-700 capitalize">add money network</h1>
    <h1 class="pt-3 pb-6 text-3xl font-bold text-center text-green-700">
      {..Login..}
    </h1>
    <form
      class="flex flex-col mx-auto md:w-3/4 gap-4"
      action="javascript:;"
      @submit="login"
    >
      <p
        class="px-2 py-2 text-center text-white bg-red-400 rounded-xl"
        v-if="show_error"
      >
        Usuario invalido
      </p>
      <div class="flex flex-col">
        <label class="text-gray-500" for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="p-2 border border-green-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
        />
      </div>
      <div class="flex flex-col">
        <label class="text-gray-500" for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="p-2 border border-green-600 rounded-xl focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
        />
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      show_error: false,
      email: "",
      password: "",
      error_message: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async login() {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        await this.LogIn({ email: this.email, password: this.password });
        this.show_error = false;
        this.$router.push("/");
        console.log(user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/wrong-password") {
          this.error_message = errorMessage;
          this.show_error = true;
        }
      }
    },
  },
};
</script>
