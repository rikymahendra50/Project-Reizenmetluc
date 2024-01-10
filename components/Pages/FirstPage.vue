<template>
  <section class="bg-white">
    <div
      class="bg-background1 bg-no-repeat bg-cover w-[98%] mx-auto my-10 rounded-[54px] relative lg:h-[535px] items-center"
    >
      <img
        :src="`/_nuxt/assets/images/${Logo}`"
        alt="logo"
        class="w-[40%] md:w-[30%] ml-8 sm:ml-0 sm:container-custom py-[39px] lg:absolute"
      />
      <div class="flex flex-col lg:flex-row h-full items-center">
        <div
          class="flex flex-col container-custom w-[88%] lg:w-[47%] text-white relative"
        >
          <h1
            class="font-bold text-[30px] lg-[10px] 2xl:text-[40px] leading-snug relative desk button"
          >
            {{ LeftContent.bigTitle }}

            <a :href="LeftContent.buttonLink">{{ LeftContent.button }}</a>
          </h1>
          <p class="mt-3 lg:mt-5">
            {{ LeftContent.description }}
          </p>
        </div>
        <div
          class="w-[90%] lg:w-[53%] grid grid-cols-2 grid-rows-1 mb-20 mt-10 md:mt-5 lg:mt-20"
        >
          <div class="grid mt-14 lg:mt-20 relative">
            <img
              :src="`/_nuxt/assets/images/Screenshots for sections 1/webp/${Picture[3].fileName}`"
              alt="comment"
              class="rounded-[0.813rem] w-[252px] md:w-[90%] lg:w-[80%] justify-self-end mr-2 lg:mr-5 lg:mr-10"
            />
            <div class="relative md:w-[60%] justify-self-end">
              <img
                :src="`/_nuxt/assets/images/Screenshots for sections 1/webp/${Picture[0].fileName}`"
                alt="comment"
                class="rounded-[0.813rem] w-[199px] mt-5"
              />
              <div
                class="bg-primarycolor absolute right-[-150px] sm:right-[-200px] lg:right-[-300px] top-[50px] sm:top-[75px] lg:top-[45px] py-1 lg:py-2 px-3 rounded-[50px] font-bold text-[8px] sm:text-[11px] md:text-[14px] xl:text-[16px] min-[400px]:text-[12px] text-white z-10"
              >
                <p class="relative">
                  {{ orangeTitle[2].title }}
                  <span>
                    <img
                      src="/_nuxt/assets/images/Screenshots for sections 1/comment-shape-2.svg"
                      alt="shape"
                      class="absolute bottom-[-3px] lg:bottom-[-5px] left-[-16px] w-[9%] scale-x-[-1]"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="grid mx-1 lg:mx-5">
            <div class="relative">
              <img
                :src="`/_nuxt/assets/images/Screenshots for sections 1/webp/${Picture[1].fileName}`"
                alt="picture"
                class="rounded-[0.813rem] w-[222px] justify-self-start md:w-[80%] md:ml-10 lg:ml-0"
              />
              <div
                class="absolute left-[-100px] sm:left-[-120px] lg:left-[-150px] top-[40px] sm:top-[35px] lg:top-[45px] py-1 lg:py-2 px-3 rounded-[50px] font-bold text-[8px] sm:text-[11px] md:text-[14px] xl:text-[16px] min-[400px]:text-[12px] text-white bg-primarycolor"
              >
                <p class="relative">
                  {{ orangeTitle[0].title }}
                  <span>
                    <img
                      src="/_nuxt/assets/images/Screenshots for sections 1/comment-shape-2.svg"
                      alt="shape"
                      class="absolute bottom-0 lg:bottom-[-8px] right-[-15px] w-[10%] lg:w-[20%]"
                    />
                  </span>
                </p>
              </div>
            </div>
            <img
              :src="`/_nuxt/assets/images/Screenshots for sections 1/webp/${Picture[5].fileName}`"
              alt="comment"
              class="rounded-[0.563rem] w-[263px] md:w-[80%] lg:w-[90%] justify-self-end"
            />
          </div>
        </div>
      </div>
      <div
        class="absolute bottom-0 w-full lg:w-[50%] bg-[#f2f1ed] bg-opacity-60 h-[67px] rounded-se-[54px] rounded-bl-[54px] flex items-center justify-center"
      >
        <p
          class="lg:pr-[30px] pl-[10px] text-[10px] sm:text-[14px] w-[70%] desk"
        >
          {{ footer.title }}
        </p>
        <img
          src="/_nuxt/assets/images/Screenshots for sections 1/People1.png"
          alt="People1"
          class="w-[20%] sm:w-[15%] z-20"
        />
      </div>
    </div>
  </section>
</template>

<style>
/* style */
</style>

<script>
import ButtonSmall from "@/components/ButtonSmall.vue";
import jsonData from "@/data/FirstPage.json";
import { convertRegExp } from "@/utils/convertRegExp.js";

export default {
  components: {
    ButtonSmall,
  },
  data() {
    return {
      Logo: jsonData.Logo,
      LeftContent: jsonData.LeftContent,
      Picture: jsonData.Picture,
      orangeTitle: jsonData.orangeTitle,
      footer: jsonData.footer,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>
