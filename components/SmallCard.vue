<template>
  <div
    class="flex rounded-[50px] items-center w-[90%] mx-auto h-auto bg-[#3D414A] shadow-effect md:h-[83px]"
  >
    <div
      class="bg-white w-[35%] md:w-[30%] md:h-[96px] xl:h-[91px] p-4 md:p-6 rounded-[50px] flex items-center justify-center"
      :class="customStyle"
    >
      <img :src="img" :alt="title" class="w-[50px] md:w-[60px]" />
    </div>
    <p
      class="text-[10px] md:text-[15px] lg:text-[18px] 2xl:text-[25px] text-white md:px-3 rounded-r-xl font-bold ml-2 pl-1 pr-3"
    >
      {{ description }}
    </p>
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
    description: {
      type: String,
      required: true,
    },
    customStyle: {
      type: String,
      default: "",
    },
  },
};
</script>
