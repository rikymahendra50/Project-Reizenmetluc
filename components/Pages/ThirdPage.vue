<template>
  <section class="pt-10 overflow-hidden">
    <div class="block text-center my-5" data-aos="zoom-in">
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
    <div class="flex lg:mx-10">
      <!-- Class Left -->
      <div class="relative flex flex-col w-1/2">
        <!-- Content 1 -->
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
        <!-- Content 2 -->
        <div class="relative" data-aos="fade-right">
          <div
            class="absolute right-0 sm:right-2 md:right-5 lg:right-10 top-0 max-w-[200px] md:max-w-[332px]"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-3 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect"
            >
              <p
                class="text-[10px] sm:text-[12px] md:text-[22px] lg:text-[34px]"
              >
                <span class="font-bold">
                  {{ priceDescription[0].title.span }} </span
                >&nbsp;{{ priceDescription[0].title.nonspan }}
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;{{ priceDescription[0].price.normalPrice }}</span
                >&nbsp;€&nbsp;{{ priceDescription[0].price.discountPrice }}
              </p>
            </div>
          </div>

          <div
            class="absolute bottom-1 sm:bottom-10 md:bottom-4 lg:bottom-10 left-[-5px] max-w-[200px] md:max-w-[237px] ml-2"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-2 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect"
            >
              <p class="text-[8px] sm:text-[12px] md:text-lg lg:text-[22px]">
                <span class="font-bold">{{
                  priceDescription[1].title.span
                }}</span
                >&nbsp;{{ priceDescription[1].title.nonspan }}
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;{{ priceDescription[1].price.normalPrice }}</span
                >&nbsp;€&nbsp;{{ priceDescription[1].price.discountPrice }}
              </p>
            </div>
          </div>

          <img
            src="/_nuxt/assets/images/Screenshots for section 3/view.png"
            alt="view-1"
            class="w-[80%] mx-auto"
            loading="lazy"
          />
        </div>

        <!-- Content 3 -->
        <div data-aos="fade-right">
          <SmallCard
            :img="dataSmallCard[1].img"
            :description="dataSmallCard[1].description"
            :title="dataSmallCard[1].title"
            class="my-5 md:my-10"
          />
        </div>

        <!-- Content 4 -->
        <div
          class="relative flex md:mt-10 justify-center"
          data-aos="fade-right"
        >
          <img
            src="/_nuxt/assets/images/Screenshots for section 3/girls-on-the-beach.jpg"
            alt="girl-beach"
            class="w-[40%] h-[60%] relative left-5 top-6 md:top-16 rounded-2xl max-w-full z-10 shadow-effect"
            loading="lazy"
          />
          <img
            src="/_nuxt/assets/images/Screenshots for section 3/IMG_0723.PNG"
            alt="thailand"
            class="w-[70%] rounded-2xl max-w-full relative right-5 md:right-10 shadow-effect"
            loading="lazy"
          />
        </div>
        <!-- End of class 1 -->
      </div>

      <!-- Class 2 -->
      <div class="flex flex-col w-1/2">
        <!-- Content 1 -->
        <div
          class="relative flex flex-col w-[80%] mx-auto"
          data-aos="fade-left"
        >
          <div class="relative">
            <img
              src="/_nuxt/assets/images/people3.png"
              alt="people"
              class="relative"
              loading="lazy"
            />
            <img
              src="/_nuxt/assets/images/arrow.png"
              alt="arrow"
              class="rotate-[5deg] absolute bottom-[-10px] sm:bottom-[-15px] md:bottom-[-24px] lg:bottom-[-40px]"
              lazy="lazy"
            />
          </div>
        </div>

        <!-- Content 2 -->
        <div data-aos="fade-left">
          <SmallCard
            :img="dataSmallCard[2].img"
            :description="dataSmallCard[2].description"
            :title="dataSmallCard[2].title"
            class="my-10"
          />
        </div>

        <!-- Content 3 -->
        <div class="relative w-full" data-aos="fade-left">
          <div class="relative w-[80%] mx-auto">
            <img
              src="/_nuxt/assets/images/Screenshots for section 3/code-remote.png"
              alt="code-remote"
              class="shadow-effect block rounded-xl"
            />
            <div class="flex justify-end mt-5 md:mt-10">
              <div
                class="flex flex-col bg-[#1E1C1D] max-w-[316px] p-2 md:p-4 lg:py-2 rounded-[3px] md:rounded-[9px] text-start shadow-effect"
              >
                <p class="font-bold text-[10px] md:text-[25px]">
                  {{ StapVoor.title1 }}
                </p>
                <p class="font-thin text-[8px] md:text-[20px] 2xl:text-[25px]">
                  {{ StapVoor.title2 }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content 4 -->
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

export default {
  components: {
    SmallCard,
  },
  data() {
    return {
      title: {
        // first to last word
        firstHeader: ["Dit is wat ", "jij ontvangt"],
        secondHeader: ["In de", "ik wil reizen", "community"],
      },
      priceDescription: [
        {
          title: {
            span: "Retour",
            nonspan: "Malediven",
          },
          price: {
            normalPrice: "899",
            discountPrice: "256",
          },
        },
        {
          title: {
            span: "Hotel Room:",
            nonspan: "2 beds",
          },
          price: {
            normalPrice: "35",
            discountPrice: "156",
          },
        },
      ],
      StapVoor: {
        title1: "Stap voor stap",
        title2: "naar jou online inkomen",
      },
      dataSmallCard: [
        {
          img: "/_nuxt/assets/images/emoji/brain.png",
          description:
            "Toegang tot de tips, tools & kennis van onze remote inkomen coaches",
          title: "brain",
        },
        {
          img: "/_nuxt/assets/images/emoji/meditation.png",
          description:
            "Leer hoe jij ook remote gaat werken met onze 9 delige video course",
          title: "meditation",
        },
        {
          img: "/_nuxt/assets/images/emoji/shushing-face.png",
          description:
            "Unlock de beste tip, tricks & deals om makkelijker en goedkoper te reizen",
          title: "shushing",
        },
        {
          img: "/_nuxt/assets/images/emoji/airplane.png",
          description:
            " Maak en deel de moosite herinneringen samen maken we jou dromen waar",
          title: "brain",
        },
      ],
    };
  },
};
</script>
