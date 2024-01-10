<template>
  <a href=""></a>
</template>

<script>
export default {
  props: {
    link: {
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
