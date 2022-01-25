<template>
  <div class="p-3 mx-auto mt-4 bg-gray-50 rounded-2xl drop-shadow-xl">
    <h2
      class="pl-1 mt-2 mb-4 text-lg font-semibold text-gray-600 border-b-2 border-gray-400"
    >
      Add Payment
    </h2>
    <div class="flex flex-col mx-auto md:w-3/4 gap-4">
      <div class="flex flex-col">
        <label for="amount" class="text-gray-500">Amount</label>
        <input
          type="text"
          v-model="amount"
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          placeholder="Amount"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="dollar_price" class="text-green-500"
          ><ion-icon name="logo-usd"></ion-icon>Dollar Price</label
        >
        <input
          type="text"
          v-model="dollar_price"
          class="p-1 border-2 border-green-400 rounded-lg focus:border-indigo-500"
          placeholder="Dollar Price"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="date" class="text-gray-500">Date</label>
        <input
          type="date"
          v-model="created"
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          placeholder="Date"
        />
      </div>
      <div class="flex flex-col mt-5">
        <label for="type" class="text-gray-500">Currency</label>
        <select
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          v-model="type"
        >
          <option value="">Select...</option>
          <option value="usd">Dollar American</option>
          <option value="bs">Bolivares</option>
        </select>
      </div>
      <div class="flex justify-end mt-5">
        <button
          @click="add"
          class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 drop-shadow-2xl hover:drop-shadow-none"
        >
          <ion-icon name="add-circle-outline"></ion-icon>&nbsp;Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../firebase";

export default {
  name: "Add",
  data() {
    return {
      amount: 0,
      created: new Date().toISOString().split("T")[0],
      type: "bs",
      dollar_price: 0,
    };
  },
  methods: {
    async add() {
      let current_usd_amount = this.amount;
      let current_bs_amount = this.amount;

      if (this.type == "bs") {
        current_usd_amount = this.amount / this.dollar_price;
      } else {
        current_bs_amount = this.amount * this.dollar_price;
      }
      try {
        await addDoc(collection(db, "payments"), {
          id: this.getId,
          bs_amount: current_bs_amount,
          usd_amount: current_usd_amount,
          created: this.created,
          type: this.type,
          dollar_price: this.dollar_price,
        });

        this.$router.push("/");
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  computed: {
    getId() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
  },
  async created() {
    const dollar_price_query = await getDocs(collection(db, "dollar_price"));
    let data_dollar_ref = {};

    dollar_price_query.forEach((doc) => {
      this.dollar_ref = doc.id;
      data_dollar_ref = doc.data();
    });
    this.dollar_price = data_dollar_ref.dollar_price;
    console.log(this.dollar_price);
  },
};
</script>
