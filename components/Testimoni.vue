<template>
  <section
    class="relative w-full flex flex-col text-white py-10 justify-center items-center"
  >
    <div
      class="w-[90%] bg-black bg-opacity-[48%] rounded-lg md:rounded-3xl shadow-effect relative"
    >
      <div class="flex justify-center text-center">
        <h1 class="text-[30px] lg:text-[44px] my-5 font-bold">
          Deze <span class="text-primarycolor font-bold">reizigers</span> hebben
          we al geholpen
        </h1>
      </div>
      <div
        class="relative flex md:flex-row flex-col justify-between lg:mx-10 h-auto"
      >
        <!-- card testimoni -->
        <div
          class="flex flex-col bg-black md:w-1/3 mx-5 md:mx-2 rounded-2xl p-5 justify-between shadow-effect h-[250px] md:h-[300px] my-5 relative"
          v-for="itemtestimoni in testimoni"
          :key="itemtestimoni.id"
        >
          <ImageSlider
            :img="
              '/_nuxt/assets/images/testimonial comments/' +
              itemtestimoni.imagePerson
            "
            :comment="itemtestimoni.comment"
            :username="itemtestimoni.username"
            :underscore="itemtestimoni.underscore"
            :title="itemtestimoni.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
export default {
  data() {
    return {
      testimoni: [
        {
          id: 1,
          comment:
            "Dankzij Luc heb ik morgen mijn eerste bijles student via GoStudent, echt superblij dat deze tip zo snel resultaat heeft gebracht! Nu al blij dat deze community op mijn pad is gekomen.",
          imagePerson: "persontestimoni.png",
          username: "Dennis Mooren",
          underscore: "DennisMore",
          title: "persontestimoni",
        },
        {
          id: 2,
          comment:
            "Je hebt me ook na laten denken en ik ga stoppen met me baan en leven in Valencia binnenkort. Ben klaar met al dat serieuze gedoe en ik ga nu helemaal los!",
          imagePerson: "persontestimoni2.png",
          username: "Sarah op Roodt",
          underscore: "sarah.gram",
          title: "persontestimoni2",
        },
        {
          id: 3,
          comment:
            "Alleen al door de 1-op-1 call met Luc zou ik de VIP aan iedereen kunnen aanraden. Binnen een uur heb je helder op een rijtje wat je wil gaan bereiken en hoe je dat gaat doen. Daarnaast houdt hij je accountable om te zorgen dat je ook écht aan de slag gaat. ",
          imagePerson: "persontestimoni3.png",
          username: "Kimberley kijzers",
          underscore: "kijzer.kim",
          title: "persontestimoni3",
        },
      ],
    };
  },

  components: {
    ImageSlider,
  },
};
</script>
