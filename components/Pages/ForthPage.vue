<template>
  <section class="py-10 mt-3 lg:mt-10 sm:mt-0">
    <div class="flex flex-col text-center mb-10 mx-2" data-aos="zoom-in">
      <h1
        class="textSpanPrimary text-[22px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-bold pb-3"
      >
        {{ header.title }}
      </h1>
      <p class="bold text-[12px] sm:text-[15px] lg:text-[20px] font-light">
        {{ header.description }}
      </p>
      <div class="flex items-center justify-center mt-6">
        <p class="font-bold text-[12px] sm:text-[15px] lg:text-2xl">
          {{ toggle.gratis }}
        </p>
        <input
          type="checkbox"
          class="toggle toggle-lg toggle-success mx-3"
          checked
          v-model="isYearly"
        />
        <p class="font-bold text-[12px] sm:text-[15px] lg:text-2xl">
          {{ toggle.jaarlijks }}
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-row">
        <div
          v-if="!isYearly && !showThirdCard"
          v-for="(itemPageCard, index) in ForthPageCard.slice(0, 2)"
          :key="itemPageCard.id"
          class="w-full relative max-w-[430px]"
          data-aos="flip-left"
        >
          <div
            class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-3 lg:px-10 py-4 lg:py-8 shadow-effect"
          >
            <h1
              class="text-[18px] sm:text-[24px] lg:text-[30px] font-bold lg:flex lg:items-center"
            >
              {{ itemPageCard.title }}&nbsp;
              <span
                class="text-[#BFBFBF] font-bold text-[18px] sm:text-[24px] lg:text-[30px]"
                >{{ itemPageCard.price }}
              </span>
            </h1>
            <p
              class="bold text-[10px] sm:text-[14px] my-2 lg:my-3 font-extraligh"
            >
              {{ itemPageCard.description }}
            </p>
            <ul class="flex flex-col mb-3 lg:mb-5">
              <li
                v-for="item in itemPageCard.list"
                :key="item.id"
                class="flex pt-1 lg:pt-2 items-center"
              >
                <img
                  :src="iconList"
                  alt="checklist"
                  class="w-5 h-5 lg:w-[31px] lg:h-[31px]"
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

      <div
        v-if="isYearly || (!isYearly && showThirdCard)"
        v-for="itemPageCard in ForthPageCard.slice(2, 3)"
        :key="itemPageCard.id"
        class="w-1/2 relative max-w-[430px]"
        data-aos="flip-left"
      >
        <div
          class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-3 lg:px-10 py-4 lg:py-8 shadow-effect"
        >
          <h1
            class="text-[18px] sm:text-[24px] lg:text-[30px] font-bold lg:flex lg:items-center"
          >
            {{ itemPageCard.title }}&nbsp;
            <span class="text-[#BFBFBF] font-bold text-[24px]">{{
              itemPageCard.price
            }}</span>
          </h1>
          <p
            class="desk text-[10px] sm:text-[14px] my-2 lg:my-3 font-extraligh"
          >
            {{ itemPageCard.description }}
          </p>
          <ul class="flex flex-col mb-5">
            <li
              v-for="item in itemPageCard.list"
              :key="item.id"
              class="flex pt-2 items-center"
            >
              <img
                src="/_nuxt/assets/images/checklist.png"
                alt="checklist"
                class="w-5 h-5 lg:w-[31px] lg:h-[31px]"
              />
              <p class="font-bold text-[12px] sm:text-[18px] pl-3">
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
/* test */
</style>

<script>
import { convertRegExp } from "@/utils/convert.js";
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
      toggle: jsonData.toggle,
      iconList: jsonData.iconList,
      isYearly: false,
      showThirdCard: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>
