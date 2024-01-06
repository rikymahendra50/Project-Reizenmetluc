<template>
  <section class="text-white font-thin bg-black">
    <!-- <FirstPage />

    <SecondPage />

    <ThirdPage /> -->

    <!-- <ForthPage /> -->

    <!-- <Testimony /> -->
    <SwiperComponent />
    <FAQPage />
  </section>
</template>

<script>
// Impor komponen FirstPage.vue dan SecondPage.vue
import FirstPage from "@/components/Pages/FirstPage.vue";
import SecondPage from "@/components/Pages/SecondPage.vue";
import ThirdPage from "@/components/Pages/ThirdPage.vue";
import ForthPage from "@/components/Pages/ForthPage.vue";
import Testimony from "@/components/Pages/Testimony.vue";
import FAQPage from "@/components/Pages/FAQPage.vue";
import SwiperComponent from "@/components/Pages/SwiperComponent.vue";

export default {
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    Testimony,
    SwiperComponent,
  },
};
</script>

<style></style>
