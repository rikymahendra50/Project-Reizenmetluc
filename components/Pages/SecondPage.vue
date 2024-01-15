<template>
  <section class="relative overflow-hidden">
    <div class="text-center pt-10 lg:pt-20" data-aos="flip-up">
      <h1
        class="bgSpanPrimary text-[25px] md:text-[44px] font-bold pb-3 tracking-widest text-center"
      >
        {{ title.firstHeader }}
      </h1>
      <p class="bold text-[15px] md:text-[20px] font-light tracking-widest">
        {{ title.secondHeader }}
      </p>
    </div>
    <!-- Slider -->
    <Slider />
  </section>
</template>

<script>
import jsonData from "@/data/SecondPage.json";
import Slider from "@/components/Slider.vue";
import { convertRegExp } from "@/utils/convert.js";

export default {
  data() {
    return {
      title: jsonData.title,
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
