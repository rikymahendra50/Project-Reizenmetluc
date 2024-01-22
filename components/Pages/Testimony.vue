<template>
  <section
    class="relative w-full flex text-white md:py-10 justify-center items-center"
  >
    <div
      class="w-[95%] bg-[#282728] bg-opacity-[48%] rounded-lg lg:rounded-3xl shadow-effect relative"
    >
      <div class="flex justify-center text-center">
        <h1
          class="textSpanPrimary text-[25px] sm:text-[30px] lg:text-[44px] mt-5 font-bold"
        >
          {{ title }}
        </h1>
      </div>
      <div
        class="wrap-slider2 h-[200px] sm:h-[350px] md:h-[390px] flex justify-center"
        id="js-wrapSlider2"
      >
        <ul class="js-slider2 flex items-center">
          <li
            v-for="itemtestimony in testimony"
            :key="itemtestimony.id"
            class="item2 w-[200px] md:w-[400px] mx-5"
          >
            <img
              :src="itemtestimony.imageSrc"
              :alt="itemtestimony.id"
              loading="lazy"
              class="rounded-sm md:rounded-lg lg:rounded-2xl"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.wrap-slider2 {
  width: 100%;
  overflow: hidden;
  position: relative;

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
    will-change: transform;

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

<script>
import { convertRegExp } from "@/utils/convert.js";
import jsonData from "@/data/Testimony.json";

export default {
  data() {
    return {
      title: jsonData.title,
      testimony: jsonData.testimony,
    };
  },
  mounted() {
    this.setupSlider2();
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
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

      // deskop
      wrapSlider2.addEventListener("mouseover", () => {
        isPaused2 = true;
      });
      wrapSlider2.addEventListener("mouseout", () => {
        isPaused2 = false;
      });

      // mobile
      wrapSlider2.addEventListener("touchstart", (event) => {
        isPaused2 = true;
      });

      wrapSlider2.addEventListener("touchend", (event) => {
        isPaused2 = false;
      });

      start2();
    },
  },
};
</script>
