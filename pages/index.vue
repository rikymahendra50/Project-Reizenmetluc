<template>
  <section
    class="bg-background2 bg-no-repeat h-full bg-cover text-white font-thin"
  >
    <FirstPage />

    <SecondPage />

    <ThirdPage />

    <ForthPage />

    <Testimony />
  </section>
</template>

<script>
// Impor komponen FirstPage.vue dan SecondPage.vue
import FirstPage from "@/components/Pages/FirstPage.vue";
import SecondPage from "@/components/Pages/SecondPage.vue";
import ThirdPage from "@/components/Pages/ThirdPage.vue";
import ForthPage from "@/components/Pages/ForthPage.vue";
import Testimony from "@/components/Pages/Testimony.vue";

export default {
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    Testimony,
  },
};
</script>

<style></style>
