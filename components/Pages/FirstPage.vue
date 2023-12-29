<template>
  <section>
    <div class="flex flex-col md:flex-row items-center">
      <!-- Left Content -->
      <div
        class="flex flex-col md:w-[40%] relative mx-5 md:ml-10 lg:ml-20 mt-10 md:mt-0"
      >
        <h1 class="font-extrabold text-[26px] lg:text-[44px] tracking-widest">
          {{ LeftContent.bigTitle }}
          <span class="text-primarycolor">{{ LeftContent.spanBigtitle }}</span>
        </h1>
        <p class="py-5 font-thin text-[15px] lg:text-[20px] tracking-widest">
          {{ LeftContent.description }}
        </p>
        <ButtonOrg link="page-1" title="Claim Jouw Plek In De Community" />
        <img
          src="/_nuxt/assets/images/Screenshots for sections 1/arrow-nonshadow.png"
          alt="arrow-logo"
          class="hidden lg:block w-[200px] h-[50px] absolute right-[-50px] bottom-[-70px]"
        />
      </div>
      <!-- End Left Content -->
      <!-- Right Content -->
      <div class="flex flex-col md:w-[60%] mt-10 mx-5 md:mx-0 md:mt-5">
        <div class="relative w-[100%] flex">
          <div class="flex">
            <img
              :src="NormalPicture[0].fileName"
              :alt="NormalPicture[0].title"
              class="rounded-lg shadow-effect w-[30%] h-[90%]"
            />
            <!-- comment -->
            <div
              class="relative flex flex-col w-[40%] h-[90%] justify-between px-2 lg:px-5"
            >
              <img
                :src="commentScrenshot[0].fileName"
                :alt="commentScrenshot[0].title"
                class="rounded-sm md:rounded-lg shadow-effect mt-5 md:mt-10"
              />
              <p
                class="bg-primarycolor shadow-effect absolute right-[-60px] top-[65px] sm:top-[90px] md:top-[81px] lg:top-[90px] xl:top-[140px] px-2 rounded-md font-bold min-[400px]:text-[12px] text-[8px] md:text-[12px] lg:text-[14px] tracking-widest z-10 xl:text-[16px]"
              >
                {{ orangeTitle[0].title }}
              </p>
              <img
                :src="commentScrenshot[1].fileName"
                :alt="commentScrenshot[1].title"
                class="rounded-sm md:rounded-lg shadow-effect relative"
              />
            </div>
            <!-- end comment -->
            <div class="relative w-[40%] mt-8">
              <img
                :src="NormalPicture[1].fileName"
                :alt="NormalPicture[1].title"
                class="rounded-lg shadow-effect"
              />
            </div>
          </div>
        </div>
        <div class="relative flex h-[100%]">
          <div class="flex-col flex w-1/2 mt-2 lg:mt-10 mr-5 sm:mr-3">
            <p
              class="bg-primarycolor shadow-effect absolute lg:left-[20px] top-[-3px] md:top-[-10px] lg:top-[-11px] py-1 lg:py-2 px-2 rounded-md font-bold text-[8px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] tracking-widest min-[400px]:text-[12px]"
            >
              {{ orangeTitle[1].title }}
            </p>
            <img
              :src="NormalPicture[2].fileName"
              :alt="NormalPicture[2].title"
              class="ml-[40px] lg:ml-[60px] w-[70%] mt-5 shadow-effect rounded-t-lg"
            />
          </div>
          <div class="w-1/2 relative flex flex-col lg:mt-0 mt-5">
            <p
              class="bg-primarycolor w-[80%] lg:w-[60%] text-[8px] sm:text-[11px] md:text-[10px] lg:text-[14px] shadow-effect rounded-md font-bold lg:mt-5 font-bold py-1 px-2 xl:text-[16px] min-[400px]:text-[12px]"
            >
              {{ orangeTitle[2].title }}
            </p>
            <img
              :src="NormalPicture[3].fileName"
              :alt="NormalPicture[3].title"
              class="w-[90%] mt-2 lg:mt-5 rounded-md md:rounded-[10px] shadow-effect"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative top-0 flex bg-white w-full h-[60px] lg:h-[88px] text-black p-3"
    >
      <div class="flex items-center">
        <h1 class="ml-0 md:ml-5 text-[14px] sm:text-sm md:text-lg">
          <span class="font-bold"> {{ footerFirstPage.title }}</span>
          {{ footerFirstPage.titleSpan }}
        </h1>
        <img
          :src="footerFirstPage.pictureofPeople"
          :alt="footerFirstPage.alt"
          class="w-[70px] ml-2"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      LeftContent: {
        bigTitle: "Join de nieuwe generatie van",
        spanBigtitle: "levensgenieters",
        smallTitle:
          "Ben je klaar met de sleur van het dagelijks leven en is het tijd voor verandering of ga je voor de “ik vind het wel prima zo”?",
        description:
          "Ben je klaar met de sleur van het dagelijks leven en is het tijd voor verandering of ga je voor de “ik vind het wel prima zo”?",
      },
      NormalPicture: [
        {
          id: 1,
          title: "picture-1",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/IMG_0701.webp",
        },
        {
          id: 2,
          title: "picture-2",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/IMG_0708.webp",
        },
        {
          id: 3,
          title: "picture-3",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/Person.webp",
        },
        {
          id: 4,
          title: "picture-4",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/IMG_0702.webp",
        },
      ],
      commentScrenshot: [
        {
          id: 1,
          title: "comment-1",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/IMG_0833.webp",
        },
        {
          id: 2,
          title: "comment-2",
          fileName:
            "/_nuxt/assets/images/Screenshots for sections 1/webp/IMG_0832.webp",
        },
      ],
      orangeTitle: [
        { id: 1, title: "Unlock jouw droomleven" },
        { id: 2, title: "Maak like-minded vrienden" },
        { id: 3, title: " Inspiratie & motivatie op 1 plek - voor jou" },
      ],
      footerFirstPage: {
        title: "3000+ reizigers",
        titleSpan: "leven op dit moment hun droom",
        pictureofPeople:
          "/_nuxt/assets/images/Screenshots for sections 1/People1.png",
        alt: "People",
      },
    };
  },
};
</script>
