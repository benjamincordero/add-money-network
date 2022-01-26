<template>
  <div class="mx-auto lg:w-2/3">
    <nav v-if="isLoggedIn" class="mx-2 my-4 bg-white drop-shadow-md rounded-xl dark:bg-gray-800">
      <div
        class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <div>
            <router-link
              class="inline-flex items-center text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              to="/"
              ><ion-icon name="wifi-sharp"></ion-icon>&nbsp;Network</router-link
            >
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden" @click="isOpen = !isOpen">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6" :class="[isOpen ? 'block' : 'hidden', hidden]">
            <router-link
              to="/"
              class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >Payments</router-link
            >
            <router-link
              class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/add"
              >Add Payment</router-link
            >
            <router-link
              class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/register"
              >Register</router-link
            >
            
          </div>

          <div class="flex lg:justify-center md:block" :class="[isOpen ? 'block' : 'hidden', hidden]">
            <div
              class="flex my-1 text-sm font-medium text-gray-700 cursor-pointer transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              @click="logout"
            >
              Logout&nbsp;<ion-icon name="log-out"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="mx-1 mb-6 md:mx-4">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return {
      isOpen:true
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut", null);
      this.$router.push("/login");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>
