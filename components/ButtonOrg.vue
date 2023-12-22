<template>
  <a
    :href="link"
    class="buttonOrg text-sm lg:text-[18px] font-bold tracking-widest flex flex-wrap w-[90%] h-10 md:h-14 bg-primarycolor justify-center items-center rounded-[7px] cursor-pointer hover:bg-slate-500"
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
  transition: 0.3s;
}

.buttonOrg:hover {
  background-color: grey;
}
</style>
