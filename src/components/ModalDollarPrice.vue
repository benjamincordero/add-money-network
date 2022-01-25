<template>
  <div class="max-w-2xl mx-auto">
    <!-- Main modal -->
    <div id="authentication-modal" aria-hidden="true"  class="fixed items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-gray-400 bg-opacity-75 top-4 md:inset-0" :class="[show_modal ? 'flex' : 'hidden', hidden]">
        <div class="relative w-full h-full max-w-md px-4 md:h-auto">
            <!-- Modal content -->
            <div class="relative mt-5 bg-white rounded-lg shadow md:mt-0 dark:bg-gray-700">
                <div class="flex justify-end p-2">
                  <button type="button" @click="$emit('close_modal')" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                  </button>
                </div>
                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" @submit="submit" action="javascript:;">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">Dollar Price Update</h3>
                    <div>
                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                      <input type="number" step="any" v-model="price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Dollar Price" required="">
                    </div>
                    <div class="flex justify-end">
                      <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update 
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../firebase"
  export default{
    name: 'ModalDollarPrice',
    props:['show_modal', 'dollar_price'],
    emits: ['close_modal', 'change_dollar_price'],
    data(){
      return {
        price: this.dollar_price
      }
    },
    methods:{
      submit(){
        this.$emit('change_dollar_price', this.price)
      }
    },
    async created(){
      const dollar_price_query = await getDocs(collection(db, "dollar_price"));
      let data_dollar_ref = {}; 

      dollar_price_query.forEach((doc) => {
        this.dollar_ref = doc.id;
        data_dollar_ref = doc.data();
      });
      if(this.dollar_ref == ''){
        await addDoc(collection(db, "dollar_price"), {
          dollar_price: 1
        });
      }
      this.price = data_dollar_ref.dollar_price;
    }
  }

</script>
