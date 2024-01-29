<template>
  <dialog ref="my_modal_4" class="modal">
    <div class="w-[95%] bg-white flex flex-col rounded-lg relative">
      <div class="flex flex-row">
        <div class="w-[40%] flex justify-center items-center flex-col lg:mx-2">
          <!-- <div
            class="bg-background2 text-white w-[90%] min-[400px]:w-[80%] lg:w-[70%] md:h-[90%] px-4 py-2 min-[420px]:py-5 lg:py-10 flex flex-col justify-center lg:px-10 cover"
          >
            <h1
              class="min-[320px]:text-[12px] text-[18px] sm:text-[20px] md:text-[27px] lg:text-[34px] bgSpanPrimary font-bold"
            >
              De ultieme <br />
              <span class="bg-primarycolor px-1">IK WIL REIZEN</span>
              Bespaarguide
            </h1>
            <p
              class="min-[320px]:text-[12px] text-[18px] sm:text-[20px] md:text-[27px] underline1 py-2 font-bold"
            >
              Bespaar <span class="underline-primary">€300 tot €500</span> per
              maand
            </p>
            <div class="relative">
              <span
                ><img
                  src="/images/arrow-nonshadow.png"
                  alt="arrow"
                  class="w-[50px] sm:w-[70px] lg:w-[100px] rotate-[-110deg] absolute right-2"
              /></span>
              <ul
                class="bg-black rounded-lg p-1 md:py-3 md:px-3 md:mt-5 relative"
              >
                <li
                  v-for="(itemList, index) in PopUp1.list"
                  :key="index"
                  class="flex items-center"
                >
                  <img
                    :src="PopUp1.iconList[index]"
                    alt="checklist"
                    class="w-3 h-3 sm:w-5 sm:h-5"
                  />
                  <p
                    class="min-[320px]:text-[8px] sm:text-[14px] pb-1 sm:pb-2 pl-2"
                  >
                    {{ itemList }}
                  </p>
                </li>
              </ul>
            </div>
          </div> -->
          <img
            src="/images/bookLucComunity.png"
            alt="bookLucComunnity"
            class="w-[100%] md:w-[60%]"
          />
        </div>
        <div
          class="bg-background2 w-[60%] text-white px-4 py-4 lg:px-10 lg:py-20 flex flex-col justify-center"
        >
          <h1
            class="text-[12px] sm:text-[16px] lg:text-[24px] textSpanPrimary font-bold"
          >
            <span class="text-primarycolor">De methode</span> hoe ik al 2 jaar
            de wereld over reis en
            <span class="text-primarycolor">€300 tot €500</span> per maand
            bespaar
          </h1>
          <p
            class="text-[14px] md:text-[20px] 2xl:text-[24px] greenText LineThrought my-1 lg:my-4 font-bold"
          >
            Nu voor <span class="text-green-500">19,95</span> ipv
            <span class="strikethrough">39,95</span>
          </p>
          <div class="relative">
            <NuxtLink
              to="/form"
              class="bg-primarycolor text-[8px] min-[400px]:text-[12px] sm:text-[14px] lg:text-[20px] p-1 md:p-2 rounded-md my-2 px-2 md:px-5 min-[320px]:w-[100%] min-[400px]:w-[79%] sm:w-[55%] md:w-[65%] font-bold text-center"
            >
              {{ PopUp2.buttonTitle }}</NuxtLink
            >
            <p
              class="flex items-center justify-center md:mt-1 px-2 w-[80px] sm:w-[150px] max-w-[140px] bg-black sm:py-1 rounded-b-lg text-[8px] sm:text-[14px] font-bold ml-1"
            >
              Eenmalige deal
            </p>
          </div>
          <ul class="flex flex-col mt-3 md:mt-5 sm:mt-2">
            <li
              v-for="(itemList, index) in PopUp2.list"
              :key="index"
              class="flex items-center"
            >
              <img
                :src="PopUp2.iconList"
                alt="checklist"
                class="w-3 h-3 sm:w-5 sm:h-5"
              />
              <p
                class="text-[10px] sm:text-[14px] md:text-[18px] pl-2 md:pl-3 bold"
              >
                {{ itemList }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="hover:bg-slate-500 bg-black absolute top-[-10px] right-[-10px] w-[30px] h-[30px] lg:w-[2.9rem] lg:h-[2.9rem] rounded-full flex items-center justify-center cursor-pointer"
        @click="closeModal($event)"
      >
        X
      </div>
    </div>
  </dialog>
</template>

<style>
.cover {
  background: linear-gradient(
      to right,
      rgb(60, 13, 20) 3px,
      rgba(255, 255, 255, 0.5) 5px,
      rgba(255, 255, 255, 0.25) 7px,
      rgba(255, 255, 255, 0.25) 10px,
      transparent 12px,
      transparent 16px,
      rgba(255, 255, 255, 0.25) 17px,
      transparent 22px
    ),
    url("/images/Background2.png");
  margin: auto;
  border-radius: 5px;
  background-size: cover;
  box-shadow: -5px 0 5px -5px black, -40px 40px 10px -10px rgb(123, 123, 123),
    inset -1px 1px 2px rgba(255, 255, 255, 0.5);
}
</style>

<script>
import jsonData from "@/data/PopUp.json";
import { convertRegExp } from "@/utils/convert.js";

export default {
  data() {
    return {
      PopUp1: jsonData.PopUp1,
      PopUp2: jsonData.PopUp2,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
  setup() {
    const my_modal_4 = ref(null);

    onMounted(() => {
      my_modal_4.value.showModal();
    });

    const closeModal = (event) => {
      my_modal_4.value.close();
    };

    return {
      my_modal_4,
      closeModal,
    };
  },
};
</script>
