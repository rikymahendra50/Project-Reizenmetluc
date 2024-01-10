<template>
  <section
    class="container-custom relative bg-no-repeat bg-cover my-5 text-white"
  >
    <div class="flex flex-col">
      <h1
        class="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter top-0 pt-5 lg:w-[30%] lg:absolute yellow"
      >
        {{ title }}
      </h1>
      <div
        class="flex pt-5"
        v-for="(eachJsonData, index) in testimony"
        :key="eachJsonData.id"
      >
        <div
          class="w-full flex justify-center mt-5"
          :class="
            index % 2 === 0 ? 'flex lg:justify-end' : 'flex lg:justify-start'
          "
        >
          <div
            class="w-[90%] lg:w-[60%] p-3 pl-8 leading-tight md:p-8 lg:p-10 rounded-3xl sm:rounded-full relative flex items-center flex-wrap"
            :class="[
              index === 0 ? 'bg-primarycolor' : 'bg-[#282728] 2xl:mx-[262px]',
            ]"
          >
            <div
              class="flex items-center absolute left-[-29px] md:left-[-50px] w-[70px] md:w-[80px] lg:w-[100px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="99"
                viewBox="0 0 100 99"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M93.5707 71.6417C96.9398 64.9611 98.8373 57.4115 98.8373 49.4187C98.8373 22.1255 76.7118 0 49.4187 0C22.1255 0 0 22.1255 0 49.4187C0 76.7118 22.1255 98.8373 49.4187 98.8373C60.6799 98.8373 71.0615 95.0706 79.3721 88.7284L98.3839 90.3172C99.2773 90.3919 99.8977 89.2736 99.428 88.51C97.7665 85.809 95.038 80.3207 93.5707 71.6417Z"
                  fill="#D9D9D9"
                />
                <image
                  :href="`/_nuxt/assets/images/testimonial comments/${eachJsonData.imagePerson}`"
                  width="100"
                  height="99"
                  x="0"
                  y="0"
                  clip-path="url(#clip-shape)"
                />
                <defs>
                  <clipPath id="clip-shape">
                    <path
                      d="M93.5707 71.6417C96.9398 64.9611 98.8373 57.4115 98.8373 49.4187C98.8373 22.1255 76.7118 0 49.4187 0C22.1255 0 0 22.1255 0 49.4187C0 76.7118 22.1255 98.8373 49.4187 98.8373C60.6799 98.8373 71.0615 95.0706 79.3721 88.7284L98.3839 90.3172C99.2773 90.3919 99.8977 89.2736 99.428 88.51C97.7665 85.809 95.038 80.3207 93.5707 71.6417Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col pl-4 md:pl-8 justify-between">
              <p
                class="text-[12px] lg:text-[14px] font-bold flex flex-col justify-center items-center text-justify w-[95%] leading-5"
              >
                {{ eachJsonData.comment }}
              </p>
              <p class="font-bold text-[12px] lg:text-[16px] pt-5">
                {{ eachJsonData.username }}
              </p>
              <p class="text-[12px] lg:text-[16px]">
                @{{ eachJsonData.underscore }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from "@/data/Testimony.json";

import { convertRegExp } from "@/utils/convertRegExp.js";

export default {
  data() {
    return {
      title: jsonData.title,
      testimony: jsonData.testimony,
      convertRegExp: jsonData.convertRegExp,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
  // methods: {
  //   textYellow(yellowText) {
  //     if (yellowText) {
  //       let newYellow = yellowText.replace(
  //         /\#(.*?)\#/g,
  //         '<span class="text-primarycolor">$1</span>'
  //       );
  //       return newYellow;
  //     }
  //     return "";
  //   },
  // },
};
</script>
