<template>
  <div class="wrap-slider" id="js-wrapSlider">
    <ul class="js-slider">
      <li
        v-for="item in sliderItems"
        :key="item.id"
        class="item w-[245px] md:h-[446px]"
      >
        <video
          :src="'/videos/' + item.src"
          :alt="item.title"
          muted
          autoplay
          preload="auto"
          loop
          class="shadow-effect-video"
          oncanplay="this.muted=true"
          playsinline
        ></video>
      </li>
    </ul>
  </div>
</template>

<script>
import jsonData from "@/data/SecondPage.json";

export default {
  data() {
    return {
      sliderItems: jsonData.sliderItems,
    };
  },
  mounted() {
    this.setupSlider();
  },
  methods: {
    setupSlider() {
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      // odd and even for up and down video
      const videos = document.querySelectorAll(".js-slider video");

      videos.forEach((video, index) => {
        if (index % 2 === 0) {
          // even
          video.classList.add("upVideo");
          video.classList.remove("downVideo");
        } else {
          // odd
          video.classList.add("downVideo");
          video.classList.remove("upVideo");
        }
      });

      const wrapSlider = document.querySelector("#js-wrapSlider");
      const widthWrap = wrapSlider.offsetWidth;

      let items;
      let sliders;
      let sliderList = [];

      const getSliderList = () => {
        sliders = document.querySelectorAll(".js-slider");
        // get the dom elements in a array to better use it
        sliderList = [...sliders];
      };

      // made a function for update later
      getSliderList();

      const slider = document.querySelectorAll(".js-slider")[0];
      const sliderWidth = slider.offsetWidth;

      const sumIsLargerThanSlider = sliderWidth >= widthWrap + sliderWidth;

      const iterationItems = Math.ceil((widthWrap + sliderWidth) / sliderWidth);

      // clone number of slider need
      if (iterationItems > 1) {
        for (let i = 0; i < iterationItems - 1; i++) {
          const clone = slider.cloneNode(true);
          wrapSlider.appendChild(clone);
        }

        getSliderList();
      }

      // create an array for knowing the state of each item
      let stateList = sliderList.map((item, i) => {
        let pos = 0;
        let start = false;

        // allow the slide to start fully at left
        if (i < iterationItems - 1) {
          pos = -widthWrap + sliders[i].offsetWidth * i;
          start = true;

          sliders[i].style.transform = `translate(${pos}px, -50%)`;
        }

        return {
          pos,
          start,
        };
      });

      // logic animation for sliding each item at a time
      const translate = () => {
        for (let i = 0; i < sliderList.length; i++) {
          const slider = sliderList[i];
          const sliderWidth = slider.offsetWidth;
          const nextIndex = i != sliderList.length - 1 ? i + 1 : 0;
          let pos;

          // if slider should be in movement
          if (stateList[i].start) {
            stateList[i].pos -= 1;
            pos = stateList[i].pos;

            slider.style.transform = `translate(${pos}px, -50%)`;
          }

          const isComplete = pos <= -sliderWidth;
          const isOutSeen = pos <= -widthWrap - sliderWidth;

          // if the slider is fully on screen
          if (isComplete) {
            stateList[nextIndex].start = true;
          }
          // if the slider finished crossing the slider and has disappeared
          if (isOutSeen) {
            stateList[i].start = false;
            stateList[i].pos = 0;
          }
        }
      };

      let isPaused = false;

      function start() {
        if (!isPaused) {
          translate();
        }

        requestAnimFrame(start);
      }

      // function for pause the animation
      // wrapSlider.addEventListener("mouseover", () => {
      //   isPaused = true;
      // });
      // wrapSlider.addEventListener("mouseout", () => {
      //   isPaused = false;
      // });

      start();
    },
  },
};
</script>
