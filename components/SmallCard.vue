<template>
  <div
    class="flex rounded-lg items-center w-[90%] mx-auto h-auto bg-[#202737] shadow-effect"
  >
    <img
      :src="img"
      :alt="title"
      class="bg-[#292728] rounded-lg w-[20%] xl:h-[91px] p-1 h-full p-2 lg:p-4 shadow-smallcard"
    />
    <p
      class="text-[6px] min-[400px]:text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] text-white md:px-3 rounded-r-xl font-bold ml-2"
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
