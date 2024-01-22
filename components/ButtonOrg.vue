<template>
  <a
    :href="link"
    class="buttonOrg font-extrabold lg:tracking-widest flex bg-primarycolor justify-center rounded-[7px] cursor-pointer hover:bg-slate-500"
    target="_blank"
    :class="{
      'w-[99%] px-1 md:px-2 py-1 md:py-2 xl:py-3 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[18px]':
        widthCustom,
      'w-[100%] lg:w-[95%] py-2 px-2 text-[11px] md:text-[14px] lg:text-[16px] xl:text-[18px]':
        !widthCustom,
    }"
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
    widthCustom: {
      type: Boolean,
      required: false,
      default: true,
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
