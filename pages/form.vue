<template>
  <div class="flex items-center justify-center min-h-screen bg-background2">
    <div
      class="px-8 py-6 mx-4 mt-4 text-left bg-white bg-opacity-50 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3"
    >
      <h3 class="text-2xl font-bold text-center">Input Email</h3>
      <form class="mt-8" @submit.prevent="InputEmail">
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700"
            for="username"
          >
            Email
          </label>
          <input
            v-model="emailData.email"
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
            id="username"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        <div class="mb-4 pt-2">
          <button
            class="w-full px-4 py-2 font-bold text-white bg-primarycolor rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailData: {
        email: "",
      },
    };
  },
  methods: {
    InputEmail() {
      if (this.isValidEmail(this.emailData.email)) {
        this.$router.push("/");
      } else {
        alert("Voer het juiste e-mailadres in.");
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
