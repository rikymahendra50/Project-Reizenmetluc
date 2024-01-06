<template>
  <section class="bg-white border-2 border-red-100">
    <div
      class="bg-background1 bg-no-repeat bg-cover object-fit w-[98%] h-[500px] mx-auto my-10 rounded-[54px] relative"
    >
      <img
        src="~/assets/images/logo.png"
        alt="logo"
        class="max-w-[191px] container-custom pt-[39px]"
      />
      <div class="flex flex-row">
        <div class="flex flex-col h-full container-custom items-center">
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from "@/data/FirstPage.json";
export default {
  data() {
    return {
      LeftContent: jsonData.LeftContent,
      NormalPicture: jsonData.NormalPicture,
      commentScrenshot: jsonData.commentScrenshot,
      orangeTitle: jsonData.orangeTitle,
      footerFirstPage: jsonData.footerFirstPage,
    };
  },
};
</script>
