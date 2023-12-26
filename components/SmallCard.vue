<template>
  <div
    class="flex rounded-lg items-center w-[90%] mx-auto h-auto bg-[#202737] shadow-effect"
  >
    <img
      :src="img"
      :alt="title"
      class="bg-[#292728] rounded-lg w-[40px] md:w-[100px] md:h-[91px] p-2 lg:p-4 h-auto shadow-smallcard"
    />
    <p
      class="text-[8px] sm:text-[12px] md:text-[15px] lg:text-xl 2xl:text-[25px] text-white sm:p-4 md:pl-3 rounded-r-xl font-bold"
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
