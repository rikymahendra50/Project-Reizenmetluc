<template>
  <section class="relative flex flex-col py-10 mt-3 lg:mt-10 sm:mt-0">
    <div
      class="inline-block text-center my-3 mx-5 items-start"
      data-aos="flip-up"
    >
      <h1 class="text-[30px] md:text-[44px] font-bold pb-3 tracking-widest">
        Voor
        <span class="bg-primarycolor rounded-[10px] px-3 pb-1">reizigers</span>
        door
        <span class="bg-primarycolor rounded-[10px] px-3 pb-1">reizigers</span>
      </h1>
      <p class="text-[20px] font-light tracking-widest">
        <span class="font-bold">Inspireer, leer</span> en
        <span class="font-bold">motiveer</span>.We
        <span class="font-bold">staan </span>altijd
        <span class="font-bold">voor elkaar klaar</span>
      </p>
    </div>
    <!-- Slider -->
    <Slider />
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";
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
