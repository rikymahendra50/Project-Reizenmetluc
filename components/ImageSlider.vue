<template>
  <!-- Testimoni -->
  <div id="js-wrapSliderImage">
    <div class="flex js-sliderImage">
      <p class="text-[13px] lg:text-sm font-bold text-justify">
        {{ comment }}
      </p>
      <!-- Profile -->
      <div class="flex pt-3 absolute bottom-3">
        <img :src="img" :alt="title" class="w-[50px] h-[50px]" />
        <div class="flex flex-col pl-3">
          <h1 class="font-bold text-sm">{{ username }}</h1>
          <p class="font-thin text-sm">@{{ underscore }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    underscore: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
};
</script>
