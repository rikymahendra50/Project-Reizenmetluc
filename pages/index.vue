<template>
  <section class="font-thin overflow-hidden">
    <FirstPage />
    <SecondPage />
    <div
      class="bg-background2 bg-no-repeat bg-cover border-2 gradient-background"
      loading="lazy"
    >
      <ThirdPage />

      <ForthPage />

      <Testimony />

      <FAQPage />
    </div>
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

export default {
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    Testimony,
    FAQPage,
  },
};
</script>

<style></style>
