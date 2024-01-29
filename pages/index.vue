<template>
  <section class="bg-background2 bg-no-repeat bg-cover text-white font-thin">
    <SectionFirstPage />

    <SectionSecondPage />

    <SectionThirdPage />

    <SectionTestimony />

    <SectionForthPage />

    <SectionFAQPage />

    <SectionPopUp />
  </section>
</template>

<style scoped>
/*  */
</style>

<script setup>
const showPopup = ref(true);

useHead({
  title: "home",
});
</script>
