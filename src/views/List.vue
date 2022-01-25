<template>
  <div class="p-4 bg-white border border-gray-300 drop-shadow-lg rounded-2xl">
       <div class="flex flex-col justify-center border-b-2 border-gray-300 md:justify-between md:flex-row">
          <h1 class="pl-1 mb-4 text-xl font-semibold text-center text-gray-600 md:text-left">Listado de Pagos</h1>
          <input type="month" @change="changeMonth()" v-model="current_date" class="inline-flex items-center px-2 mx-auto mb-4 border md:mx-0 rounded-xl focus:border-gray-200">
          <div class="inline-flex items-center justify-center mb-4 text-center text-gray-600 md:justify-start md:text-left">
            Dollar Price:
            <span @click="show_modal = !show_modal" class="px-2 py-1 bg-green-500 cursor-pointer hover:bg-green-600 rounded-xl text-gray-50">{{dollar_price}} Bs</span>
          </div>
       </div>
      <div class="max-w-full overflow-x-auto">
         <table class="w-full text-center">
            <thead>
              <tr class="text-gray-600 border-t-0 border-b bg-gray-50 md:text-md">
                <th class="text-md">Monto en Bs</th>
                <th class="text-md">Monto en USD</th>
                <th class="text-md">Dollar Price</th>
                <th class="text-md">Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" v-bind:key="index" class="text-gray-500" :class="{'bg-gray-50' : index%2 != 0}">
                <td class="py-5 text-sm border-b border-gray-200 md:px-5">
                  {{ parseFloat(payment.bs_amount).toLocaleString("eu", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) }} Bs
                </td>
                <td class="py-5 text-sm border-b border-gray-200 md:px-5">
                  {{ parseFloat(payment.usd_amount).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) }} USD
                </td>

                <td class="py-5 text-sm font-bold text-green-600 border-b border-gray-200 md:px-5">
                  {{ parseFloat(payment.dollar_price).toLocaleString("eu", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) }} Bs

                </td>
                <td class="py-5 text-sm border-b border-gray-200 md:px-5">{{ formatDate(payment.created) }}</td>
                <td class="flex flex-col justify-center py-5 text-sm border-b border-gray-200 md:flex-row md:px-5 gap-1">
                  <router-link :to="{name:'Edit', params:{ref:payment.ref}}" class="items-center p-1 font-bold text-gray-500 hover:text-green-500 md:inline-flex" @click="edit(payment.ref);">
                    <ion-icon name="create-outline" id="icon-table"></ion-icon>
                  </router-link >
                  <button @click="remove(payment.ref);" class="inline-flex items-center p-1 font-semibold text-gray-500 hover:text-red-400 hover:font-bold">
                    <ion-icon name="trash-outline"></ion-icon> 
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-gray-100">
                <td>
                  {{ parseFloat(totalBs).toLocaleString("eu", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) 
                  }} Bs 
                </td>
                <td>{{ parseFloat(totalUsd).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }) 
                  }} USD</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>

      </div>
    </div>
    <ModalDollarPrice v-bind:dollar_price="dollar_price" @change_dollar_price="updateDollar" @close_modal="close_modal" :show_modal="show_modal"></ModalDollarPrice>
</template>
<script>

import { collection, getDocs, doc, deleteDoc, updateDoc, addDoc, query, where, orderBy } from "firebase/firestore";
import { mapGetters } from "vuex";
import db from "../firebase"
import ModalDollarPrice from '../components/ModalDollarPrice.vue';

const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

  export default{
    name:'List',
    components:{ModalDollarPrice},
    data(){
      return {
        payments:[],
        current_date:'',
        show_modal:false,
        dollar_price:0,
      }            
    },
    methods:{
      formatDate(date){
        let split_date = date.split('-');
        return split_date[1]+'-'+split_date[2]+'-'+split_date[0]
      },
      async loadData(){
        let final_payments = [];
        let data_with_ref = {};
        console.log(this.current_date)
        const q = query(collection(db, "payments"), 
          where("created", ">", this.current_date+'-01'),  
          where("created", "<", this.current_date+'-31'),
          orderBy("created")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data_with_ref = doc.data();
          data_with_ref.ref = doc.id;
          final_payments.push(data_with_ref);
        });
        this.payments = final_payments;
      },
      remove(ref){
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async(result) => {
         if (result.isConfirmed) {
            await deleteDoc(doc(db, "payments", ref));
            this.payments = this.payments.filter((payment)=>{
              return payment.ref != ref;
            })
            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
         }
        });
      },
      changeMonth(){
       this.loadData();
      },
      close_modal(){
        this.show_modal = false;
      },
      async updateDollar(price){
        try{
          const dollar_price = doc(db, "dollar_price", this.dollar_ref);
          await updateDoc(dollar_price, {
            dollar_price: price
          });
          this.dollar_price = price;
          this.show_modal = false;
        }catch(err){
          throw new Error(err);
        }
      },
    },
    async created(){
      let complete_current_date = new Date();
      let mes = month[complete_current_date.getMonth()];
      this.current_date = complete_current_date.getFullYear()+'-'+mes;

      this.loadData();
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
      this.dollar_price = data_dollar_ref.dollar_price;
    },
    computed:{
      ...mapGetters({Posts: "StatePosts", User: "StateUser"}),
      totalUsd(){
        return this.payments.reduce((i, current) => parseFloat(i) + parseFloat(current.usd_amount), 0);
      },
      totalBs(){
        return this.payments.reduce((i, current) => parseFloat(i) + parseFloat(current.bs_amount), 0);
      }
    },
  }

</script>
<style>
ion-icon{
  font-size: 25px;
}
</style>
