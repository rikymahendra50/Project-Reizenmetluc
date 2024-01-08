<template>
  <section class="bg-white">
    <div class="h-[608px]" data-aos="flip-up">
      <!-- Slider -->
      <div class="slider-overlay text-right container-custom">
        <div class="w-full lg:w-[50%] float-right flex flex-col">
          <div class="mt-5 mr-[2.138rem]">
            <img
              :src="`/_nuxt/assets/images/${images.secondImage}`"
              alt="star"
              class="float-right pt-5 sm:pt-10 w-[5rem] md:w-[88px]"
            />
            <img
              :src="`/_nuxt/assets/images/${images.firstImage}`"
              alt="star"
              class="float-right w-[80px] md:w-[88px]"
            />
          </div>
          <div class="text-[#282728] md:mt-[-2.1rem] pr-5 md:pr-32 relative">
            <h1
              class="header br comment text-[3rem] lg:text-[4rem] font-bold leading-[4.5rem] md:leading-[5rem] relative"
            >
              {{ title.firstHeader }}
            </h1>
            <p
              class="desk br text-[1rem] md:text-[1.25rem] leading-[24px] tracking-wider float-right mr-5 lg:mr- mt-3 md:mt-5"
            >
              {{ title.secondHeader }}
            </p>
          </div>
        </div>
      </div>
      <div class="h-full flex items-center justify-center">
        <img
          :src="`/_nuxt/assets/images/section 2/${images.background1}`"
          alt="bg-1"
          class="w-[363px] absolute top-[-70px] left-0"
        />
        <img
          :src="`/_nuxt/assets/images/section 2/${images.background2}`"
          alt="bg-1"
          class="w-[634px] absolute bottom-[-30px]"
        />
        <Slider />
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";
import jsonData from "@/data/SecondPage.json";
import { convertRegExp } from "@/utils/convertRegExp.js";

export default {
  data() {
    return {
      sliderItems: jsonData.sliderItems,
      title: jsonData.title,
      images: jsonData.images,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>

<style>
.wrap-slider {
  width: 100%;
  overflow: hidden;
  height: 510px;
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

    li {
      display: block;
      padding-right: 20px;

      video {
        border-radius: 20px;
        object-fit: cover;
        background-size: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.upVideo {
  transition: transform 0.1s ease;
}

.downVideo {
  margin-top: 15px;
  transition: transform 0.2s ease;
}

.upVideo:hover {
  transform: translateY(-15px);
  transition: transform 0.3s ease;
}

.downVideo:hover {
  transform: translateY(15px);
  transition: transform 0.3s ease;
}
</style>
