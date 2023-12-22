<template>
  <div
    class="flex rounded-lg items-center w-[90%] mx-auto h-auto bg-black shadow-effect bg-opacity-60"
  >
    <img
      :src="img"
      :alt="title"
      class="bg-black rounded-lg w-[40px] md:w-[100px] md:h-[91px] p-2 lg:p-4 h-auto shadow-smallcard"
    />
    <p
      class="text-[8px] lg:text-lg text-white sm:p-4 md:pl-3 rounded-r-xl font-bold"
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
  },
};
</script>
