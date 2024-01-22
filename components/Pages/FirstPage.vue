<template>
  <section>
    <div class="flex flex-col sm:flex-row">
      <!-- Left Content -->
      <div
        class="flex flex-col sm:w-[40%] relative mx-5 md:ml-10 lg:ml-20 mt-10 md:mt-0 justify-center"
      >
        <h1
          class="textSpanPrimary font-extrabold text-2xl md:text-3xl lg:text-4xl lg:tracking-widest"
        >
          {{ LeftContent.title }}
        </h1>
        <p
          class="py-5 font-thin text-[14px] md:text-[18px] 2xl:[20px] lg:tracking-widest"
        >
          {{ LeftContent.description }}
        </p>
        <ButtonOrg
          :link="LeftContent.buttonLink"
          :title="LeftContent.buttonTitle"
          :widthCustom="false"
        />
        <img
          :src="LeftContent.img"
          alt="leftimg"
          class="hidden sm:block w-[150px] h-[50px] lg:w-[250px] lg:h-[70px] mt-5 md:mt-10 self-end mr-[-60px] lg:mr-[-110px]"
        />
      </div>
      <!-- End Left Content -->
      <!-- Right Content -->
      <div class="flex flex-col sm:w-[60%] mt-6 mx-5 md:mx-0 md:mt-5">
        <div class="relative flex">
          <div class="flex w-[100%] justify-end">
            <img
              :src="NormalPicture[0].fileName"
              :alt="NormalPicture[0].title"
              class="rounded-lg shadow-effect max-w-[185px] w-[30%] h-[90%]"
              loading="lazy"
            />
            <!-- comment -->
            <div
              class="relative flex flex-col max-w-[263px] w-[40%] h-[90%] justify-between px-2 lg:px-5"
            >
              <img
                :src="commentScrenshot[0].fileName"
                :alt="commentScrenshot[0].title"
                class="rounded-sm md:rounded-lg shadow-effect mt-5 md:mt-10"
                loading="lazy"
              />
              <img
                :src="commentScrenshot[1].fileName"
                :alt="commentScrenshot[1].title"
                class="rounded-sm md:rounded-lg shadow-effect relative"
                loading="lazy"
              />
            </div>
            <!-- end comment -->
            <div class="relative w-[40%] max-w-[255px] mt-8 flex items-center">
              <img
                :src="NormalPicture[1].fileName"
                :alt="NormalPicture[1].title"
                class="rounded-lg shadow-effect"
                loading="lazy"
              />
              <div
                class="bg-primarycolor shadow-effect absolute left-[-80px] md:left-[-90px] mt-[-30px] sm:left-[-90px] lg:left-[-140px] sm:mt-[-60px] md:mt-[-40px] px-1 md:py-1 md:px-2 rounded-lg flex items-center justify-center"
              >
                <p
                  class="font-bold text-[10px] min-[420px]:text-[14px] sm:text-[11px] lg:text-base xl:tracking-widest"
                >
                  {{ orangeTitle[0].title }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex">
          <div class="w-[55%] flex-col flex mr-5 sm:mr-3">
            <div
              class="bg-primarycolor shadow-effect rounded-lg sm:py-1 px-2 mt-[-5px] lg:tracking-widest absolute ml-3 sm:ml-2 md:ml-6 xl:ml-24 flex items-center justify-center"
            >
              <p
                class="font-bold text-[10px] min-[420px]:text-[14px] sm:text-[11px] lg:text-base"
              >
                {{ orangeTitle[1].title }}
              </p>
            </div>

            <img
              :src="NormalPicture[2].fileName"
              :alt="NormalPicture[2].title"
              class="max-w-[280px] w-[60%] shadow-effect rounded-t-lg mt-5 sm:mt-10 self-end mr-2 lg:mr-5"
              loading="lazy"
            />
          </div>
          <div class="w-[45%] relative flex flex-col lg:mt-0 mt-5">
            <div
              class="bg-primarycolor w-[90%] lg:w-[80%] shadow-effect rounded-lg md:mt-5 md:py-1 py-[3px] px-2 flex items-center justify-center"
            >
              <p
                class="text-[8px] min-[420px]:text-[12px] sm:text-[11px] lg:text-[14px] xl:text-[16px] font-bold xl:tracking-widest"
              >
                {{ orangeTitle[2].title }}
              </p>
            </div>
            <img
              :src="NormalPicture[3].fileName"
              :alt="NormalPicture[3].title"
              class="mt-2 lg:mt-5 rounded-md md:rounded-[10px] shadow-effect"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative flex items-center bg-white h-[60px] lg:h-[88px] text-black p-3"
    >
      <h1 class="ml-0 md:ml-5 text-[12px] sm:text-[14px] sm:text-sm md:text-lg">
        <span class="font-bold"> {{ footerFirstPage.title }}</span>
        {{ footerFirstPage.titleSpan }}
      </h1>
      <img
        :src="footerFirstPage.pictureofPeople"
        :alt="footerFirstPage.alt"
        class="w-[50px] sm:w-[70px] ml-2"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
import jsonData from "@/data/FirstPage.json";
import { convertRegExp } from "@/utils/convert.js";
export default {
  data() {
    return {
      LeftContent: jsonData.LeftContent,
      NormalPicture: jsonData.NormalPicture,
      commentScrenshot: jsonData.commentScrenshot,
      orangeTitle: jsonData.orangeTitle,
      footerFirstPage: jsonData.footerFirstPage,
    };
  },
  mounted() {
    this.$nextTick(() => {
      convertRegExp(this.$el);
    });
  },
};
</script>
