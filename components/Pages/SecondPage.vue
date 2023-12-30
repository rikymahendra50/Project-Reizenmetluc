<template>
  <section class="relative overflow-hidden">
    <div class="text-center pt-10 lg:pt-20" data-aos="flip-up">
      <h1
        class="text-[25px] md:text-[44px] font-bold pb-3 tracking-widest text-center"
      >
        {{ title.firstHeader[0] }}
        <span class="bg-primarycolor rounded-[10px] px-3 pb-1">{{
          title.firstHeader[1]
        }}</span>
        {{ title.firstHeader[2] }}
        <span class="bg-primarycolor rounded-[10px] px-3 pb-1">{{
          title.firstHeader[3]
        }}</span>
      </h1>
      <p class="text-[15px] md:text-[20px] font-light tracking-widest">
        <span class="font-bold">{{ title.secondHeader[0] }}</span>
        {{ title.secondHeader[1] }}
        <span class="font-bold">{{ title.secondHeader[2] }}</span>
        {{ title.secondHeader[3] }}
        <span class="font-bold">{{ title.secondHeader[4] }}</span>
        {{ title.secondHeader[5] }}
        <span class="font-bold">{{ title.secondHeader[5] }}</span>
      </p>
    </div>
    <!-- Slider -->
    <Slider />
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";

export default {
  data() {
    return {
      title: {
        // first to last word
        firstHeader: ["Voor", "reizigers", "door", "reizigers"],
        secondHeader: [
          "Inspireer, leer",
          "en",
          "motiveer.",
          "We",
          "staan",
          "altijd",
          "voor elkaar klaar",
        ],
      },
    };
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
