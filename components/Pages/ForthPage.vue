<template>
  <section class="bg-background1 bg-no-repeat bg-cover container-custom border">
    <div class="flex flex-col ml-3 lg:ml-10 my-10" data-aos="zoom-in">
      <h1
        class="header text-[40px] md:text-[60px] lg:text-[72px] font-extrabold lg:leading-[100px]"
      >
        {{ header.title }}
      </h1>
      <p class="desk text-[20px] font-light py-5">
        {{ header.description }}
      </p>
    </div>
    <div class="flex sm:flex-row flex-col items-center">
      <div
        v-for="itemPageCard in ForthPageCard"
        :key="itemPageCard.id"
        class="sm:w-1/3 relative mb-5 mr-2 mx-auto"
        data-aos="flip-left"
      >
        <div
          class="card bg-opacity-50 rounded-[10px] py-8 px-8 xl:py-10 relative"
        >
          <span
            v-if="
              itemPageCard.price !== undefined && itemPageCard.price !== null
            "
            class="font-bold text-2xl xl:text-[32px] absolute bg-[#46E809] rounded-full top-[-20px] xl:top-[-27px] right-4 px-4 py-2"
          >
            {{ itemPageCard.price }}
          </span>
          <h1 class="text-[24px] lg:text-5xl font-bold py-2">
            {{ itemPageCard.title }}
          </h1>
          <p class="desk text-[12px] sm:text-[14px] font-extralight">
            {{ itemPageCard.description }}
          </p>
          <ul class="flex flex-col my-5">
            <li
              v-for="item in itemPageCard.list"
              :key="item.id"
              class="flex mt-2 items-center"
            >
              <img
                src="/_nuxt/assets/images/checklist.png"
                alt="checklist"
                class="w-[20px] sm:w-[30px] lg:w-[40px]"
              />
              <p
                class="font-bold text-[12px] sm:text-[14px] lg:text-[18px] pl-2 leading-snug"
              >
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
.card {
  background: linear-gradient(
    210deg,
    rgba(255, 255, 255, 0.48) 1.44%,
    rgba(255, 255, 255, 0.18) 52.73%,
    rgba(255, 255, 255, 0.6) 98.94%
  );
  border-radius: 50px;
}
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
        '<span class="h-3 bg-primarycolor px-5 xl:px-7 rounded-full relative">$1<img src="/_nuxt/assets/images/icon-lock.svg" alt="lock" class="absolute top-[-55px] right-[-40px] lg:right-[-50px] lg:top-[-67px] w-[90px] lg:w-[110px]"></span> '
      );

      newBorder = newBorder.replace(/\.\./g, "<br>");

      pElementsBorder.innerHTML = newBorder;
    });
  },
};
</script>
