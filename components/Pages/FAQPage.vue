<template>
  <section
    class="flex justify-center py-10 lg:py-20 text-white"
    data-aos="fade-up"
  >
    <div
      class="bg-background2 bg-no-repeat p-10 w-[90%] mx-auto my-auto rounded-[50px]"
    >
      <div class="flex flex-col lg:flex-row lg:h-[677px]">
        <div
          class="flex items-center justify-center font-bold w-full lg:w-[45%]"
        >
          <h1 class="text-[70px] text-[96px]">FAQ</h1>
        </div>
        <div
          class="flex flex-col w-full lg:w-[55%] justify-center items-center"
        >
          <div
            :class="[
              'text-[24px] rounded-[30px] card relative flex flex-col my-5 lg:items-center lg:justify-center',
              activeIndex === index ? 'w-[95%]' : 'w-[90%]',
            ]"
            v-for="(eachFaq, index) in faq"
            :key="eachFaq.id"
          >
            <div
              @click="toggleDetail(index)"
              class="cursor-pointer flex lg:w-[80%] py-5 lg:py-10 flex-col pl-3 w-[80%] lg:pl-0 lg:w-[100%]"
            >
              <h1 class="font-bold text-sm lg:text-[24px]">
                {{ eachFaq.header }}
              </h1>
              <img
                :class="{ rotated: activeIndex === index }"
                src="/_nuxt/assets/images/dropdown-logo.png"
                alt="button-dropdown"
                class="w-[25px] md:w-[30px] absolute flex top-[10px] right-3 lg:right-3 lg:top-3 transition-transform duration-500"
              />
              <div
                v-if="activeIndex === index"
                class="rounded-lg flex items-left w-full"
              >
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
.rotated {
  transform: rotate(180deg);
}
</style>

<script>
import jsonData from "@/data/FAQPage.json";

export default {
  data() {
    return {
      activeIndex: null,
      title: jsonData.title,
      faq: jsonData.faq,
    };
  },
  methods: {
    toggleDetail(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>
