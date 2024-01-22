<template>
  <section class="py-10 mt-3 lg:mt-10 sm:mt-0">
    <div class="flex flex-col text-center mx-2" data-aos="zoom-in">
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
          class="toggle toggle-md lg:toggle-lg toggle-success mx-3"
          checked
          v-model="showThirdCard"
        />
        <p class="bold text-[12px] sm:text-[15px] lg:text-2xl">
          {{ toggle.jaarlijks }}
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-10 md:mt-20">
      <div class="flex flex-row w-full relative max-w-[430px]">
        <div
          v-for="(itemPageCard, index) in ForthPageCard.slice(0, 1)"
          :key="itemPageCard.id"
          data-aos="flip-right"
        >
          <div
            class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-3 lg:px-10 py-4 lg:py-8 shadow-effect"
          >
            <h1
              class="text-[14px] sm:text-[24px] lg:text-[30px] font-bold lg:flex lg:items-center"
            >
              {{ itemPageCard.title }}&nbsp;
              <span
                class="text-[#BFBFBF] font-bold text-[18px] sm:text-[24px] lg:text-[30px]"
                >{{ itemPageCard.price }}
              </span>
            </h1>
            <!-- <p
              class="bold text-[10px] sm:text-[14px] my-2 lg:my-3 font-extraligh"
            >
              {{ itemPageCard.description }}
            </p> -->
            <ul class="flex flex-col mb-3 lg:mb-5">
              <li
                v-for="(item, index) in itemPageCard.list"
                :key="item.id"
                class="flex pt-1 lg:pt-2 items-center"
              >
                <img
                  v-if="index >= 3"
                  :src="iconX"
                  alt="iconX"
                  class="w-3 h-3 md:w-5 md:h-5 lg:w-[31px] lg:h-[31px]"
                />
                <img
                  v-else
                  :src="iconList"
                  alt="checklist"
                  class="w-3 h-3 md:w-5 md:h-5 lg:w-[31px] lg:h-[31px]"
                />
                <p
                  class="font-bold text-[10px] md:text-[12px] lg:text-[18px] pl-2 md:pl-3"
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

      <div class="flex flex-row w-full relative max-w-[430px]">
        <div
          v-if="!showThirdCard"
          v-for="(itemPageCard, index) in ForthPageCard.slice(1, 2)"
          :key="itemPageCard.id"
          data-aos="flip-right"
        >
          <span
            class="absolute bg-primarycolor px-2 py-1 z-10 mt-[-29px] md:mt-[-37px] font-bold ml-5 rounded-tl-xl rounded-tr-xl text-sm md:text-xl"
            >Meest Gekozen</span
          >
          <div
            class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-3 lg:px-10 py-4 lg:py-8 shadow-effect"
          >
            <h1
              class="text-[14px] sm:text-[24px] lg:text-[30px] font-bold lg:flex lg:items-center"
            >
              {{ itemPageCard.title }}&nbsp;
              <span
                class="text-[#BFBFBF] font-bold text-[14px] sm:text-[24px] lg:text-[30px]"
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
                class="flex pt-1 items-center"
              >
                <img
                  :src="iconList"
                  alt="checklist"
                  class="w-3 h-3 sm:w-5 sm:h-5 lg:w-[31px] lg:h-[31px]"
                />
                <p
                  class="font-bold text-[10px] md:text-[12px] lg:text-[16px] pl-2 sm:pl-3"
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
        <div
          v-if="showThirdCard"
          v-for="itemPageCard in ForthPageCard.slice(2, 3)"
          :key="itemPageCard.id"
          data-aos="flip-left"
        >
          <div
            class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-3 lg:px-10 py-4 lg:py-8 shadow-effect"
          >
            <h1
              class="text-[14px] sm:text-[24px] lg:text-[30px] font-bold lg:flex lg:items-center"
            >
              {{ itemPageCard.title }}&nbsp;
              <span
                class="text-[#BFBFBF] font-bold text-[14px] sm:text-[24px] lg:text-[30px]"
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
                  class="w-3 h-3 md:w-5 md:h-5 lg:w-[31px] lg:h-[31px]"
                />
                <p
                  class="font-bold text-[10px] md:text-[12px] lg:text-[18px] pl-2 md:pl-3"
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
    </div>
  </section>
</template>

<style>
/* style */
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
      iconList: jsonData.iconChecklist,
      iconX: jsonData.iconX,
      settingHeight: true,
      alwaysShow: true,
      showThirdCard: false,
      showThirdCard2: false,
      showThirdCard3: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
  methods: {
    toggleShowThirdCard() {
      this.showThirdCard = !this.showThirdCard;
      this.showThirdCard2 = !this.showThirdCard2;
      this.showThirdCard3 = !this.showThirdCard3;
    },
  },
  watch: {
    showThirdCard: function () {
      this.$nextTick(() => {
        convertRegExp(this.$el);
      });
    },
  },
};
</script>
