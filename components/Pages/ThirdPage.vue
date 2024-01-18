<template>
  <section class="mt-20 overflow-hidden">
    <div class="block text-center" data-aos="zoom-in">
      <h1
        class="textSpanPrimary text-[26px] md:text-[50px] lg:text-[60px] 2xl:text-[84px] font-bold"
      >
        {{ title.firstHeader }}
      </h1>
      <p class="bold text-[15px] md:text-[20px] lg:text-[30px] 2xl:text-[46px]">
        {{ title.secondHeader }}
      </p>
    </div>
    <div class="flex lg:mx-10 py-5">
      <!-- Content Left -->
      <div class="relative flex flex-col w-1/2">
        <!-- Content 1 -->
        <div class="md:mt-14">
          <SmallCard
            :img="dataSmallCard[0].img"
            :description="dataSmallCard[0].description"
            :title="dataSmallCard[0].title"
            class="my-10 shadow-effect"
            data-aos="zoom-in"
            loading="lazy"
          />
        </div>
        <!-- Content 2 -->
        <div class="relative" data-aos="zoom-in">
          <div
            class="absolute right-0 sm:right-2 md:right-5 lg:right-10 top-0 max-w-[200px] md:max-w-[332px]"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-3 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect"
            >
              <p
                class="bold text-[10px] sm:text-[12px] md:text-[22px] lg:text-[34px]"
              >
                {{ LeftContent[0].priceDescription[0].title }}
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
              class="w-[100%] py-1 lg:py-2 px-2 md:px-2 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect"
            >
              <p
                class="bold text-[8px] sm:text-[12px] md:text-lg lg:text-[22px]"
              >
                {{ LeftContent[0].priceDescription[1].title }}
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

        <!-- Content 3 -->
        <div data-aos="zoom-in">
          <SmallCard
            :img="dataSmallCard[1].img"
            :description="dataSmallCard[1].description"
            :title="dataSmallCard[1].title"
            class="my-5 md:my-10"
          />
        </div>

        <!-- Content 4 -->
        <div class="relative flex md:mt-10 justify-center" data-aos="zoom-in">
          <img
            :src="LeftContent[1].ImgSmallsrc"
            :alt="LeftContent[1].ImgSmalltitle"
            class="w-[40%] h-[60%] relative left-5 top-6 md:top-16 rounded-2xl z-10 shadow-effect max-w-[257px]"
            loading="lazy"
          />
          <img
            :src="LeftContent[1].ImgBigsrc"
            :alt="LeftContent[1].ImgBigtitle"
            class="w-[70%] rounded-2xl relative right-5 md:right-10 shadow-effect max-w-[417px]"
            loading="lazy"
          />
        </div>
        <!-- End of class left -->
      </div>

      <!-- Content Right -->
      <div class="flex flex-col w-1/2">
        <!-- Content 1 -->
        <div class="relative flex flex-col w-[80%] mx-auto" data-aos="zoom-in">
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
              class="rotate-[5deg] absolute bottom-[-15px] sm:bottom-[-15px] md:bottom-[-24px] lg:bottom-[-40px]"
              lazy="lazy"
            />
          </div>
        </div>

        <!-- Content 2 -->
        <div data-aos="zoom-in">
          <SmallCard
            :img="dataSmallCard[2].img"
            :description="dataSmallCard[2].description"
            :title="dataSmallCard[2].title"
            class="my-10"
          />
        </div>

        <!-- Content 3 -->
        <div class="relative w-full" data-aos="zoom-in">
          <div class="relative w-[80%] mx-auto">
            <img
              :src="RightContent[0].ImgRight[2].src"
              :alt="RightContent[0].ImgRight[2].title"
              class="shadow-effect block rounded-xl"
              loading="lazy"
            />
            <div class="flex justify-end mt-5 md:mt-10">
              <div
                class="flex flex-col bg-[#1E1C1D] max-w-[316px] p-2 md:p-4 lg:py-2 rounded-[3px] md:rounded-[9px] text-start shadow-effect"
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

        <!-- Content 4 -->
        <div data-aos="zoom-in">
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
import { convertRegExp } from "@/utils/convert.js";

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
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>
