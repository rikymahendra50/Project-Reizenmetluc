<template>
  <section
    class="relative w-full bg-cover bg-no-repeat bg-center flex flex-col text-white py-10"
  >
    <div class="block text-center my-5" data-aos="zoom-in">
      <h1 class="text-[26px] md:text-[50px] font-bold">
        Dit is wat <span class="text-primarycolor">jij ontvangt</span>
      </h1>
      <p class="text-[15px] md:text-[20px]">
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
          <img
            src="../assets/images/Screenshots for section 3/retour-maladiven(cut).png"
            alt="retour-maladiven"
            class="w-[60%] absolute right-0 top-[-10px] md:top-[-30px]"
          />
          <img
            src="../assets/images/Screenshots for section 3/hotel-room(cut).png"
            alt="hotel-room"
            class="w-[40%] absolute bottom-4 sm:bottom-10 left-[-5px]"
          />
          <img
            src="../assets/images/Screenshots for section 3/view.png"
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
            class="shadow-effect my-5 md:my-10"
          />
        </div>

        <!-- Content 4 -->
        <div
          class="relative flex md:mt-10 justify-center"
          data-aos="fade-right"
        >
          <img
            src="../assets/images/Screenshots for section 3/girls-on-the-beach.jpg"
            alt="girl-beach"
            class="w-[40%] h-[60%] relative left-5 top-6 md:top-16 rounded-2xl max-w-full z-10 shadow-effect"
          />
          <img
            src="../assets/images/Screenshots for section 3/IMG_0723.PNG"
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
              src="../assets/images/people3.png"
              alt="people"
              class="relative"
            />
            <img
              src="../assets/images/arrow.png"
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
            class="my-10 shadow-effect"
          />
        </div>

        <!-- Content 3 -->
        <div class="relative w-full" data-aos="fade-left">
          <div class="relative w-[80%] mx-auto">
            <img
              src="../assets/images/Screenshots for section 3/code-remote.png"
              alt="code-remote"
              class="shadow-effect block rounded-xl"
            />
            <div class="flex justify-end">
              <img
                src="../assets/images/Screenshots for section 3/stap-voor-stap(cut).png"
                alt="stap-voor"
                class="w-[60%]"
              />
            </div>
          </div>
        </div>

        <!-- Content 4 -->
        <div data-aos="fade-left">
          <SmallCard
            img="/_nuxt/assets/images/emoji/airplane.png"
            description=" Maak en deel de moosite herinneringen samen maken we jou dromen waar"
            title="brain"
            class="mt-10 md:mt-24 shadow-effect"
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
