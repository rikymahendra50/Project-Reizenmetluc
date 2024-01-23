<template>
  <div class="wrap-slider h-[410px] md:h-[510px]" id="js-wrapSlider">
    <ul class="js-slider">
      <li
        v-for="item in sliderItems"
        :key="item.id"
        class="item w-[200px] h-[346px] md:w-[245px] md:h-[446px]"
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
      const requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };

      const wrapSlider = document.querySelector("#js-wrapSlider");
      const videos = wrapSlider.querySelectorAll(".js-slider video");

      videos.forEach((video, index) => {
        const isEven = index % 2 === 0;
        video.classList.add(isEven ? "upVideo" : "downVideo");
        video.classList.remove(isEven ? "downVideo" : "upVideo");
      });

      let sliderList = Array.from(wrapSlider.querySelectorAll(".js-slider"));
      const slider = sliderList[0];
      const sliderWidth = slider.offsetWidth;
      const widthWrap = wrapSlider.offsetWidth;
      const sumIsLargerThanSlider = sliderWidth >= widthWrap + sliderWidth;
      const iterationItems = Math.ceil((widthWrap + sliderWidth) / sliderWidth);

      // Clone number of sliders needed
      if (iterationItems > 1) {
        for (let i = 0; i < iterationItems - 1; i++) {
          const clone = slider.cloneNode(true);
          wrapSlider.appendChild(clone);
        }
        sliderList = Array.from(wrapSlider.querySelectorAll(".js-slider"));
      }

      // Create an array for knowing the state of each item
      let stateList = sliderList.map((item, i) => {
        let pos = 0;
        let start = false;

        // Allow the slide to start fully at left
        if (i < iterationItems - 1) {
          pos = -widthWrap + sliderList[i].offsetWidth * i;
          start = true;
          sliderList[i].style.transform = `translate(${pos}px, -50%)`;
        }

        return {
          pos,
          start,
        };
      });

      // Logic animation for sliding each item at a time
      const translate = () => {
        sliderList.forEach((slider, i) => {
          const sliderWidth = slider.offsetWidth;
          const nextIndex = i !== sliderList.length - 1 ? i + 1 : 0;
          let pos;

          // If slider should be in movement
          if (stateList[i].start) {
            stateList[i].pos -= 1;
            pos = stateList[i].pos;
            slider.style.transform = `translate(${pos}px, -50%)`;
          }

          const isComplete = pos <= -sliderWidth;
          const isOutSeen = pos <= -widthWrap - sliderWidth;

          // If the slider is fully on screen
          if (isComplete) {
            stateList[nextIndex].start = true;
          }
          // If the slider finished crossing the slider and has disappeared
          if (isOutSeen) {
            stateList[i].start = false;
            stateList[i].pos = 0;
          }
        });
      };

      let isPaused = false;

      function start() {
        if (!isPaused) {
          translate();
        }

        requestAnimFrame(start);
      }

      start();
    },
  },
};
</script>
