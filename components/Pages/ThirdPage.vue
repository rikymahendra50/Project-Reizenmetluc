<!-- <template>
  <section class="mt-20 overflow-hidden text-white">
    <div class="block text-center" data-aos="zoom-in">
      <h1
        class="text-[26px] md:text-[50px] lg:text-[60px] 2xl:text-[84px] font-bold"
      >
        {{ title.firstHeader[0] }}
        <span class="text-primarycolor"> {{ title.firstHeader[1] }}</span>
      </h1>
      <p class="text-[15px] md:text-[20px] lg:text-[30px] 2xl:text-[46px]">
        {{ title.secondHeader[0] }}
        <span class="font-bold"> {{ title.secondHeader[1] }}</span>
        {{ title.secondHeader[2] }}
      </p>
    </div>
    <div class="flex lg:mx-10 py-5">
      <div class="relative flex flex-col w-1/2">
        <div class="md:mt-14">
          <SmallCard
            :img="dataSmallCard[0].img"
            :description="dataSmallCard[0].description"
            :title="dataSmallCard[0].title"
            class="my-10 shadow-effect"
            data-aos="fade-right"
            loading="lazy"
          />
        </div>
        <div class="relative" data-aos="fade-right">
          <div
            class="absolute right-0 sm:right-2 md:right-5 lg:right-10 top-0 max-w-[200px] md:max-w-[332px]"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-3 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect text-white"
            >
              <p
                class="text-[10px] sm:text-[12px] md:text-[22px] lg:text-[34px]"
              >
                <span class="font-bold">
                  {{ LeftContent[0].priceDescription[0].title.span }} </span
                >&nbsp;{{ LeftContent[0].priceDescription[0].title.nonspan }}
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;{{
                    LeftContent[0].priceDescription[0].price.normalPrice
                  }}</span
                >&nbsp;€&nbsp;{{
                  LeftContent[0].priceDescription[0].price.discountPrice
                }}
              </p>
            </div>
          </div>

          <div
            class="absolute bottom-1 sm:bottom-10 md:bottom-4 lg:bottom-10 left-[-5px] max-w-[200px] md:max-w-[237px] ml-2"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-2 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect text-white"
            >
              <p class="text-[8px] sm:text-[12px] md:text-lg lg:text-[22px]">
                <span class="font-bold">{{
                  LeftContent[0].priceDescription[1].title.span
                }}</span
                >&nbsp;{{ LeftContent[0].priceDescription[1].title.nonspan }}
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;{{
                    LeftContent[0].priceDescription[1].price.normalPrice
                  }}</span
                >&nbsp;€&nbsp;{{
                  LeftContent[0].priceDescription[1].price.discountPrice
                }}
              </p>
            </div>
          </div>

          <img
            :src="LeftContent[0].src"
            :alt="LeftContent[0].title"
            class="w-[80%] mx-auto"
            loading="lazy"
          />
        </div>

        <div data-aos="fade-right">
          <SmallCard
            :img="dataSmallCard[1].img"
            :description="dataSmallCard[1].description"
            :title="dataSmallCard[1].title"
            class="my-5 md:my-10"
          />
        </div>

        <div
          class="relative flex md:mt-10 justify-center"
          data-aos="fade-right"
        >
          <img
            :src="LeftContent[1].ImgSmallsrc"
            :alt="LeftContent[1].ImgSmalltitle"
            class="w-[40%] h-[60%] relative left-5 top-6 md:top-16 rounded-2xl max-w-full z-10 shadow-effect"
            loading="lazy"
          />
          <img
            :src="LeftContent[1].ImgBigsrc"
            :alt="LeftContent[1].ImgBigtitle"
            class="w-[70%] rounded-2xl max-w-full relative right-5 md:right-10 shadow-effect"
            loading="lazy"
          />
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <div
          class="relative flex flex-col w-[80%] mx-auto"
          data-aos="fade-left"
        >
          <div class="relative">
            <img
              :src="RightContent[0].ImgRight[0].src"
              :alt="RightContent[0].ImgRight[0].title"
              class="relative"
              loading="lazy"
            />
            <img
              :src="RightContent[0].ImgRight[1].src"
              :alt="RightContent[0].ImgRight[1].title"
              class="rotate-[5deg] absolute bottom-[-10px] sm:bottom-[-15px] md:bottom-[-24px] lg:bottom-[-40px]"
              loading="lazy"
            />
          </div>
        </div>

        <div data-aos="fade-left">
          <SmallCard
            :img="dataSmallCard[2].img"
            :description="dataSmallCard[2].description"
            :title="dataSmallCard[2].title"
            class="my-10"
          />
        </div>

        <div class="relative w-full" data-aos="fade-left">
          <div class="relative w-[80%] mx-auto">
            <img
              :src="RightContent[0].ImgRight[2].src"
              :alt="RightContent[0].ImgRight[2].title"
              class="shadow-effect block rounded-xl"
            />
            <div class="flex justify-end mt-5 md:mt-10">
              <div
                class="text-white flex flex-col bg-[#1E1C1D] max-w-[316px] p-2 md:p-4 lg:py-2 rounded-[3px] md:rounded-[9px] text-start shadow-effect"
              >
                <p class="font-bold text-[10px] md:text-[25px]">
                  {{ RightContent[1].StapVoor.title1 }}
                </p>
                <p class="font-thin text-[8px] md:text-[20px] 2xl:text-[25px]">
                  {{ RightContent[1].StapVoor.title1 }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <SmallCard
            :img="dataSmallCard[3].img"
            :description="dataSmallCard[3].description"
            :title="dataSmallCard[3].title"
            class="mt-5 md:mt-24"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SmallCard from "@/components/SmallCard.vue";
import jsonData from "@/data/ThirdPage.json";

export default {
  components: {
    SmallCard,
  },
  data() {
    return {
      title: jsonData.title,
      LeftContent: jsonData.LeftContent,
      RightContent: jsonData.RightContent,
      dataSmallCard: jsonData.dataSmallCard,
    };
  },
};
</script> -->

<template>
  <section class="bg-white">
    <div
      class="flex flex-col lg:flex-row items-center container-custom lg:h-[900px] relative"
    >
      <div class="flex flex-col w-full lg:w-[40%] z-10">
        <h1
          class="text-[40px] lg:text-[72px] font-bold lg:pr-[150px] lg:leading-[70px] yellow"
        >
          {{ title.firstHeader }}
        </h1>
        <p
          class="text-[20px] lg:text-[40px] font-thin lg:leading-[50px] mt-3 lg:mt-8 desk w-[60%] lg:w-full"
        >
          {{ title.secondHeader }}
        </p>
      </div>
      <div
        class="relative flex flex-col w-full lg:w-[80%] xl:w-[60%] lg:px-10 border-2"
      >
        <div
          class="lg:w-[450px] absolute top-[-90px] md:top-[-150px] lg:top-[-220px] w-[200px] md:w-[300px] right-[-20px] border-2"
        >
          <img
            src="/_nuxt/assets/images/Screenshots for section 3/Brent, Thimo and Laura.png"
            alt="3people"
          />
          <div
            class="absolute left-[-100px] sm:left-[-120px] lg:left-[-200px] top-[40px] sm:top-[35px] lg:top-[145px] py-1 lg:py-2 px-3 rounded-[50px] font-bold text-[8px] sm:text-[11px] md:text-[14px] xl:text-[16px] min-[400px]:text-[12px] text-white bg-primarycolor"
          >
            <p class="relative">
              Stap voor stap naar jou online inkomen
              <span>
                <img
                  src="/_nuxt/assets/images/Screenshots for sections 1/comment-shape-2.svg"
                  alt="shape"
                  class="absolute bottom-0 lg:bottom-[-6px] right-[-19px] w-[5%] lg:w-[10%]"
                  loading="lazy"
                />
              </span>
            </p>
          </div>
        </div>
        <div class="z-10">
          <SmallCard
            :img="dataSmallCard[0].img"
            :description="dataSmallCard[0].description"
            :title="dataSmallCard[0].title"
            class="my-3 sm:my-5 sm:ml-14"
            :customStyle="'rotate-[-2deg] lg:rotate-[-4deg]'"
          />
          <SmallCard
            :img="dataSmallCard[2].img"
            :description="dataSmallCard[2].description"
            :title="dataSmallCard[2].title"
            class="my-3 sm:my-5 sm:mr-14"
            :customStyle="'rotate-[2deg] lg:rotate-[4deg]'"
          />
          <SmallCard
            :img="dataSmallCard[1].img"
            :description="dataSmallCard[1].description"
            :title="dataSmallCard[1].title"
            class="my-3 sm:my-5 sm:ml-14"
            :customStyle="'rotate-[-2deg] lg:rotate-[-4deg]'"
          />
          <SmallCard
            :img="dataSmallCard[3].img"
            :description="dataSmallCard[3].description"
            :title="dataSmallCard[3].title"
            class="my-3 sm:my-5 sm:mr-14"
            :customStyle="'rotate-[2deg] lg:rotate-[4deg]'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from "@/data/ThirdPage.json";
import { convertRegExp } from "@/utils/convertRegExp.js";
import SmallCard from "@/components/SmallCard.vue";

export default {
  data() {
    return {
      title: jsonData.title,
      LeftContent: jsonData.LeftContent,
      RightContent: jsonData.RightContent,
      dataSmallCard: jsonData.dataSmallCard,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>
