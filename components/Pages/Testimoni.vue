<template>
  <section
    class="relative w-full flex text-white py-10 justify-center items-center"
  >
    <div
      class="w-[95%] bg-[#282728] bg-opacity-[48%] rounded-lg md:rounded-3xl shadow-effect relative"
    >
      <div class="flex justify-center text-center">
        <h1 class="text-[30px] lg:text-[44px] mt-5 font-bold">
          {{ title.nonspan[0] }}
          <span class="text-primarycolor font-bold"> {{ title.span[0] }}</span>
          {{ title.nonspan[1] }}
        </h1>
      </div>
      <div class="wrap-slider2 h-[350px] md:h-[400px]" id="js-wrapSlider2">
        <ul class="js-slider2">
          <li
            class="item2 bg-black w-[300px] md:w-[379px] rounded-[13px] shadow-effect relative h-[250px] md:h-[300px] mx-3 md:mx-5 shadow-smallcard pt-2 px-2 md:pt-5 md:px-5"
            v-for="itemtestimoni in testimoni"
            :key="itemtestimoni.id"
          >
            <p class="text-[13px] lg:text-sm font-bold text-justify">
              {{ itemtestimoni.comment }}
            </p>
            <div class="flex pt-3 absolute bottom-3">
              <img
                :src="`/_nuxt/assets/images/testimonial comments/${itemtestimoni.imagePerson}`"
                :alt="itemtestimoni.title"
                class="w-[50px] h-[50px]"
                loading="lazy"
              />
              <div class="flex flex-col pl-3">
                <h1 class="font-bold text-sm">
                  {{ itemtestimoni.underscore }}
                </h1>
                <p class="font-thin text-sm">@{{ itemtestimoni.username }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap-slider2 {
  width: 98%;
  overflow: hidden;
  position: relative;
  margin: auto;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: row;

    li {
      display: block;
      transition: transform 0.3s ease;
    }
    li:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<script scoped>
export default {
  data() {
    return {
      title: {
        span: ["reizigers"],
        nonspan: ["Deze", "hebben we al geholpen"],
      },
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
  mounted() {
    this.setupSlider2();
  },
  methods: {
    setupSlider2() {
      window.requestAnimFrame2 = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();
      const wrapSlider2 = document.querySelector("#js-wrapSlider2");
      const widthWrap2 = wrapSlider2.offsetWidth;

      let items2;
      let sliders2;
      let sliderList2 = [];

      const getSliderList2 = () => {
        sliders2 = document.querySelectorAll(".js-slider2");
        // get the dom elements in a array to better use it
        sliderList2 = [...sliders2];
      };
      // made a function for update later
      getSliderList2();

      const slider2 = document.querySelectorAll(".js-slider2")[0];
      const sliderWidth2 = slider2.offsetWidth;

      const sumIsLargerThanSlider2 = sliderWidth2 >= widthWrap2 + sliderWidth2;

      const iterationItems2 = Math.ceil(
        (widthWrap2 + sliderWidth2) / sliderWidth2
      );

      // we clone number of slider we need
      if (iterationItems2 > 1) {
        for (let i = 0; i < iterationItems2 - 1; i++) {
          const clone2 = slider2.cloneNode(true);
          wrapSlider2.appendChild(clone2);
        }

        getSliderList2();
      }

      // we create an array for knowing the state of each item
      let stateList2 = sliderList2.map((item, i) => {
        let pos2 = 0;
        let start2 = false;

        // here we allow the slide to start fully at left
        if (i < iterationItems2 - 1) {
          pos2 = -widthWrap2 + sliders2[i].offsetWidth * i;
          start2 = true;

          sliders2[i].style.transform = `translate(${pos2}px, -50%)`;
        }

        return {
          pos2,
          start2,
        };
      });

      // logic animation for sliding each item at a time
      const translate2 = () => {
        for (let i = 0; i < sliderList2.length; i++) {
          const slider2 = sliderList2[i];
          const sliderWidth2 = slider2.offsetWidth;
          const nextIndex2 = i != sliderList2.length - 1 ? i + 1 : 0;
          let pos2;

          // if slider should be in movement
          if (stateList2[i].start2) {
            stateList2[i].pos2 -= 1;
            pos2 = stateList2[i].pos2;

            slider2.style.transform = `translate(${pos2}px, -50%)`;
          }

          const isComplete2 = pos2 <= -sliderWidth2;
          const isOutSeen2 = pos2 <= -widthWrap2 - sliderWidth2;

          // if the slider is fully on screen
          if (isComplete2) {
            stateList2[nextIndex2].start2 = true;
          }
          // if the slider finished crossing the slider and has disappeared
          if (isOutSeen2) {
            stateList2[i].start2 = false;
            stateList2[i].pos2 = 0;
          }
        }
      };

      let isPaused2 = false;

      function start2() {
        if (!isPaused2) {
          translate2();
        }

        requestAnimFrame2(start2);
      }

      // wrapSlider2.addEventListener("mouseover", () => {
      //   isPaused2 = true;
      // });
      // wrapSlider2.addEventListener("mouseout", () => {
      //   isPaused2 = false;
      // });

      start2();
    },
  },
};
</script>
