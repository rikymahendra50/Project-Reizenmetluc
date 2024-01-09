<template>
  <a
    :href="link"
    class="font-extrabold flex flex-wrap h-[50px] xl:h-[60px] bg-primarycolor rounded-[50px] cursor-pointer hover:bg-slate-500 justify-center w-full items-center"
    target="_blank"
  >
    <div class="flex items-center justify-between w-full px-2">
      <p class="flex text-center w-full justify-center pl-5">
        {{ title }}
      </p>
      <span
        class="bg-black rounded-full flex items-center p-2 md:w-[45px] md:h-[40px] justify-center box-border"
      >
        <img src="~/assets/images/arrow2.svg" alt="arrow" fetchpriority="low" />
      </span>
    </div>
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
