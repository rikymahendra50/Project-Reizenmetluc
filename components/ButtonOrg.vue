<template>
  <a :href="link" :class="buttonStyle" target="_blank">
    <div class="flex items-center justify-between w-full px-2">
      <p
        class="flex text-center w-full justify-center pl-5 text-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px]"
      >
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
    buttonStyle: {
      type: String,
      default: "",
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
