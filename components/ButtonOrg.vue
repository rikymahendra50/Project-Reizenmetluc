<template>
  <a
    :href="link"
    class="text-center buttonOrg text-[12px] sm:text-[12px] md:text-[14px] xl:text-[20px] font-extrabold md:tracking-widest flex flex-wrap w-[95%] h-8 md:h-11 bg-primarycolor justify-center items-center rounded-[7px] cursor-pointer hover:bg-slate-500"
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
