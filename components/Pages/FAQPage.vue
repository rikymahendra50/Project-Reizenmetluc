<template>
  <section class="flex justify-center text-white" data-aos="fade-up">
    <div class="w-[90%] rounded-[50px]">
      <div class="flex flex-col lg:flex-row lg:h-[900px]">
        <div
          class="flex flex-wrap items-center justify-center font-bold w-full lg:w-[45%] title-container"
        >
          <h1 class="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[96px]">
            {{ title }}
          </h1>
        </div>
        <div class="flex flex-col lg:w-[55%] justify-center items-center">
          <div
            :class="[
              'text-[24px] rounded-[30px] cardFaq relative flex flex-col my-5 lg:items-center lg:justify-center px-2 h-auto',
              activeIndex === index ? 'w-[100%]' : 'w-[90%]',
            ]"
            v-for="(eachFaq, index) in faq"
            :key="eachFaq.id"
          >
            <div
              @click="toggleDetail(index)"
              class="cursor-pointer lg:w-[92%] flex-col py-10 px-5"
            >
              <div class="grid grid-cols-12">
                <h1
                  class="font-bold text-lg sm:text-2xl col-span-11 justify-self-start"
                >
                  {{ eachFaq.header }}
                </h1>
                <img
                  :class="{ rotated: activeIndex === index }"
                  :src="icon"
                  alt="button-dropdown"
                  class="w-[20px] md:w-[25px] transition-transform duration-500 justify-self-end lg:mr-[-15px] mt-[-20px]"
                />
              </div>
              <div v-if="activeIndex === index">
                <p class="text-[16px] text-justify mt-2 lg:mt-5 font-normal">
                  {{ eachFaq.detail }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.title-container {
  transition: none;
}
.rotated {
  transform: rotate(180deg);
}

.cardFaq {
  transition: max-height 0.5s, width 0.5s;
  /* overflow: hidden; */
}

.cardFaq.active {
  max-height: 1000px;
  width: 100%;
}
</style>

<script>
import jsonData from "@/data/FAQ.json";

export default {
  data() {
    return {
      activeIndex: null,
      title: jsonData.title,
      faq: jsonData.faq,
      icon: jsonData.icon,
    };
  },
  methods: {
    toggleDetail(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  },
};
</script>
