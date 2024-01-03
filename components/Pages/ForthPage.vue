<template>
  <section class="py-10 mt-3 lg:mt-10 sm:mt-0">
    <div class="flex flex-col text-center mb-10 mx-2" data-aos="zoom-in">
      <h1
        class="header text-[22px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-bold pb-3"
      >
        {{ header.title }}
      </h1>
      <p class="desk text-[12px] sm:text-[15px] lg:text-[20px] font-light">
        <!-- <span class="font-bold">2 kopjes koffie</span> per maand voor
        <span class="font-bold">jouw droom leven</span>, dat is pas een
        <span class="font-bold">goeie deal</span> -->
        {{ header.description }}
      </p>
    </div>
    <div class="flex sm:flex-row flex-col md:mx-4">
      <!-- Content 1 -->
      <div
        class="sm:w-1/3 relative mb-5"
        data-aos="flip-left"
        v-for="itemPageCard in ForthPageCard"
        :key="itemPageCard.id"
      >
        <div
          class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-5 py-8 shadow-effect"
        >
          <h1
            class="text-[24px] lg:text-[30px] font-bold lg:flex lg:justify-between lg:items-center"
          >
            {{ itemPageCard.title }}
            <span class="text-[#BFBFBF] font-bold text-[24px]">{{
              itemPageCard.price
            }}</span>
          </h1>
          <p class="desk text-[14px] my-3 font-extraligh">
            {{ itemPageCard.description }}
          </p>
          <!-- Ini code nya -->
          <ul class="flex flex-col mb-5">
            <li
              v-for="item in itemPageCard.list"
              :key="item.id"
              class="flex my-2 items-center"
            >
              <img
                src="/_nuxt/assets/images/checklist.png"
                alt="checklist"
                class="w-5 h-5 lg:w-10 lg:h-10"
              />
              <p class="font-bold text-[12px] lg:text-[18px] pl-3">
                {{ item }}
              </p>
            </li>
          </ul>
          <div class="flex justify-center">
            <ButtonOrg
              :link="itemPageCard.Button.link"
              :title="itemPageCard.Button.title"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* CSS empty */
</style>

<script>
import CustomLink from "@/components/ButtonOrg.vue";
import jsonData from "@/data/ForthPage.json";

export default {
  components: {
    CustomLink,
  },

  data() {
    return {
      ForthPageCard: jsonData.ForthPageCard,
      header: jsonData.header,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const pElements = this.$el.querySelectorAll(".desk");
      const pElementsBorder = this.$el.querySelector(".header");
      pElements.forEach((pElement) => {
        let newTextContent = pElement.innerHTML;

        newTextContent = newTextContent.replace(
          /\*\*(.*?)\*\*/g,
          '<span class="font-bold">$1</span>'
        );

        pElement.innerHTML = newTextContent;
      });
      let newBorder = pElementsBorder.innerHTML;
      newBorder = newBorder.replace(
        /\*\*(.*?)\*\*/g,
        '<span class="h-3 border-b-4 sm:h-5 sm:border-b-8 border-primarycolor">$1</span>'
      );
      pElementsBorder.innerHTML = newBorder;
    });
  },
};
</script>
