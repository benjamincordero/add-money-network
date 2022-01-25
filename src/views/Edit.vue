<template>
  <div class="p-3 mx-auto mt-4 bg-white rounded-2xl drop-shadow-xl">
    <h2
      class="pl-1 mt-2 mb-4 text-lg font-semibold text-gray-600 border-b-2 border-gray-400"
    >
      Edit Payment
    </h2>
    <div class="flex flex-col mx-auto md:w-3/4 gap-4">
      <div class="flex flex-col">
        <label for="amount" class="text-gray-500">Amount</label>
        <input
          type="text"
          v-model="payment.amount"
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          placeholder="Amount"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="dollar_price" class="text-green-600"
          ><ion-icon name="logo-usd"></ion-icon>Dollar Price</label
        >
        <input
          type="text"
          v-model="payment.dollar_price"
          class="p-1 border-2 border-green-600 rounded-lg focus:border-indigo-500"
          placeholder="Dollar Price"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="date" class="text-gray-500">Date</label>
        <input
          type="date"
          v-model="payment.created"
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          placeholder="Date"
        />
      </div>
      <div class="flex flex-col mt-5">
        <label for="type" class="text-gray-500">Currency</label>
        <select
          class="p-1 border border-gray-400 rounded-lg focus:border-indigo-500"
          v-model="payment.type"
        >
          <option value="">Select...</option>
          <option value="usd">Dollar American</option>
          <option value="bs">Bolivares</option>
        </select>
      </div>
      <div class="flex justify-end mt-5">
        <button
          @click="update"
          class="inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-2xl drop-shadow-2xl hover:drop-shadow-none hover:bg-green-500"
        >
          <ion-icon name="sync"></ion-icon>&nbsp;Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";
import db from "../firebase";

export default {
  name: "Add",
  data() {
    return {
      payment: {
        amount: 0,
        created: "",
        type: "",
        dollar_price: 0,
      },
    };
  },
  methods: {
    async update() {
      let current_usd_amount = this.payment.amount;
      let current_bs_amount = this.payment.amount;

      if (this.payment.type == "bs") {
        current_usd_amount = this.payment.amount / this.payment.dollar_price;
      } else {
        current_bs_amount = this.payment.amount * this.payment.dollar_price;
      }

      try {
        const payment = doc(db, "payments", this.$route.params.ref);
        await updateDoc(payment, {
          bs_amount: current_bs_amount,
          usd_amount: current_usd_amount,
          created: this.payment.created,
          type: this.payment.type,
          dollar_price: this.payment.dollar_price,
        });
        this.$router.push("/");
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  async created() {
    let data_save = {};
    const docRef = doc(db, "payments", this.$route.params.ref);
    const payment = await getDoc(docRef);

    data_save = payment.data();
    this.payment.type = data_save.type;
    this.payment.created = data_save.created;
    this.payment.dollar_price = data_save.dollar_price;

    if (data_save.type == "usd") {
      this.payment.amount = data_save.usd_amount;
      console.log(data_save);
    } else {
      this.payment.amount = data_save.bs_amount;
    }
  },
};
</script>
