<template>
  <a
    :href="link"
    class="buttonOrg text-[12px] sm:text-sm md:text-[18px] lg:text-[20px] font-extrabold tracking-widest flex flex-wrap w-[93%] h-8 md:h-11 bg-primarycolor justify-center items-center rounded-[7px] cursor-pointer hover:bg-slate-500"
    target="_blank"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.buttonOrg {
  transition: 0.2s;
}

.buttonOrg:hover {
  background-color: grey;
}
</style>
