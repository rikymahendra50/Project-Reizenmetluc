<template>
  <section class="bg-background2 bg-no-repeat h-full bg-cover text-white">
    <FirstPage />

    <SecondPage />

    <ThirdPage />

    <ForthPage />

    <Testimoni />
  </section>
</template>

<script>
// Impor komponen FirstPage.vue dan SecondPage.vue
import FirstPage from "@/components/Pages/FirstPage.vue";
import SecondPage from "@/components/Pages/SecondPage.vue";
import ThirdPage from "@/components/Pages/ThirdPage.vue";
import ForthPage from "@/components/Pages/ForthPage.vue";
import Testimoni from "@/components/Pages/Testimoni.vue";

export default {
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    Testimoni,
  },
  head() {
    return {
      title: "Judul Baru Halaman",
    };
  },
};
</script>

<style></style>
