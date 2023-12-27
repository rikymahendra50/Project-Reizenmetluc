<template>
  <section class="py-10">
    <div class="block text-center my-5" data-aos="zoom-in">
      <h1
        class="text-[26px] md:text-[50px] lg:text-[60px] 2xl:text-[84px] font-bold"
      >
        Dit is wat <span class="text-primarycolor">jij ontvangt</span>
      </h1>
      <p class="text-[15px] md:text-[20px] lg:text-[30px] 2xl:text-[46px]">
        In de <span class="font-bold">ik wil reizen</span> community
      </p>
    </div>
    <div class="flex lg:mx-10">
      <!-- Class Left -->
      <div class="relative flex flex-wrap flex-col w-1/2">
        <!-- Content 1 -->
        <div class="md:mt-14">
          <SmallCard
            img="/_nuxt/assets/images/emoji/brain.png"
            description="Toegang tot de tips, tools & kennis van onze remote inkomen coaches"
            title="brain"
            class="my-10 shadow-effect"
            data-aos="fade-right"
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
              <p class="text-[10px] sm:text-md md:text-[22px] lg:text-[34px]">
                <span class="font-bold">Retour</span>&nbsp;Malediven
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;899</span
                >&nbsp;€&nbsp;256
              </p>
            </div>
          </div>

          <div
            class="absolute bottom-1 sm:bottom-10 md:bottom-4 lg:bottom-10 left-[-5px] max-w-[200px] md:max-w-[237px] md:h-[93px] ml-2"
          >
            <div
              class="w-[100%] py-1 lg:py-2 px-2 md:px-2 bg-[#1E1C1D] rounded-md md:rounded-lg shadow-effect"
            >
              <p class="text-[8px] sm:text-[12px] md:text-lg lg:text-[22px]">
                <span class="font-bold">Hotel Room:</span>&nbsp;2 beds
              </p>
              <p
                class="text-[8px] sm:text-sm md:text-lg lg:text-2xl font-bold text-right"
              >
                <span class="line-through text-red-600 font-extralight"
                  >€&nbsp;156</span
                >&nbsp;€&nbsp;35
              </p>
            </div>
          </div>

          <img
            src="/_nuxt/assets/images/Screenshots for section 3/view.png"
            alt="view-1"
            class="w-[80%] mx-auto"
          />
        </div>

        <!-- Content 3 -->
        <div data-aos="fade-right">
          <SmallCard
            img="/_nuxt/assets/images/emoji/meditation.png"
            description="Leer hoe jij ook remote gaat werken met onze 9 delige video course"
            title="meditation"
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
          />
          <img
            src="/_nuxt/assets/images/Screenshots for section 3/IMG_0723.PNG"
            alt="thailand"
            class="w-[70%] rounded-2xl max-w-full relative right-5 md:right-10 shadow-effect"
          />
        </div>
        <!-- End of class 1 -->
      </div>

      <!-- Class 2 -->
      <div class="flex flex-wrap flex-col w-1/2 overflow-hidden">
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
            />
            <img
              src="/_nuxt/assets/images/arrow.png"
              alt="arrow"
              class="rotate-[5deg] absolute bottom-[-15px] md:bottom-[-24px] lg:bottom-[-40px]"
            />
          </div>
        </div>

        <!-- Content 2 -->
        <div data-aos="fade-left">
          <SmallCard
            img="/_nuxt/assets/images/emoji/shushing-face.png"
            description="Unlock de beste tip, tricks & deals om makkelijker en goedkoper te reizen"
            title="brain"
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
            <div class="flex justify-end mt-10">
              <div
                class="flex flex-col bg-[#1E1C1D] max-w-[316px] p-2 md:pl-4 lg:pr-10 pr-5 lg:py-2 rounded-[9px] text-start shadow-effect"
              >
                <p class="font-bold text-[10px] md:text-[20px] lg:text-[25px]">
                  Stap voor stap
                </p>
                <p class="font-thin text-[8px] md:text-[20px] lg:text-[25px]">
                  naar jou online inkomen
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content 4 -->
        <div data-aos="fade-left">
          <SmallCard
            img="/_nuxt/assets/images/emoji/airplane.png"
            description=" Maak en deel de moosite herinneringen samen maken we jou dromen waar"
            title="brain"
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
};
</script>
