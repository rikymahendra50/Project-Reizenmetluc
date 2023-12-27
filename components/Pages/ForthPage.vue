<template>
  <section>
    <div class="flex flex-col text-center mb-10 mx-2" data-aos="zoom-in">
      <h1
        class="text-[22px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-bold pb-3"
      >
        Hier is wat jij gaat
        <span class="h-3 border-b-4 sm:h-5 sm:border-b-8 border-primarycolor"
          >unlocken</span
        >
      </h1>
      <p class="text-[12px] sm:text-[15px] lg:text-[20px] font-light">
        <span class="font-bold">2 kopjes koffie</span> per maand voor
        <span class="font-bold">jouw droom leven</span>, dat is pas een
        <span class="font-bold">goeie deal</span>
      </p>
    </div>
    <div class="flex sm:flex-row flex-col md:mx-4">
      <!-- Content 1 -->
      <div
        class="sm:w-1/3 relative mb-5"
        data-aos="flip-left"
        v-for="itemPageCard in ForthPageCard"
        :key="itemPageCard.id"
      >
        <div
          class="flex flex-col relative bg-black bg-opacity-50 rounded-[10px] mx-2 px-5 py-8 shadow-effect"
        >
          <h1
            class="text-[24px] lg:text-[30px] font-bold lg:flex lg:justify-between lg:items-center"
          >
            {{ itemPageCard.title }}
            <span class="font-extralight text-[24px]">{{
              itemPageCard.price
            }}</span>
          </h1>
          <p class="desk text-[14px] my-3 font-extraligh">
            {{ itemPageCard.description }}
          </p>
          <!-- Ini code nya -->
          <ul class="flex flex-col mb-5">
            <li
              v-for="item in itemPageCard.list"
              :key="item.id"
              class="flex my-2 items-center"
            >
              <img
                src="/_nuxt/assets/images/checklist.png"
                alt="checklist"
                class="w-5 h-5 lg:w-10 lg:h-10"
              />
              <p class="font-bold text-[12px] lg:text-[18px] pl-3">
                {{ item }}
              </p>
            </li>
          </ul>
          <div class="flex justify-center">
            <ButtonOrg
              :link="itemPageCard.Button.link"
              :title="itemPageCard.Button.title"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Properti CSS kosong */
</style>

<script>
import CustomLink from "@/components/ButtonOrg.vue";

export default {
  components: {
    CustomLink,
  },
  data() {
    return {
      ForthPageCard: [
        {
          id: 1,
          title: "Gratis",
          description:
            "Deze groep is perfect voor als je gezellig met wil andere reizigers chatten, inspiratie op wilt doen en opzoek bent naar die handige travel hacks en deals.",
          list: [
            "Chat met like-minded reizigers",
            "Vind jouw nieuwe travel buddy",
            "Unlock handige reis tips",
            "Laat jezelf inspireren",
          ],
          Button: {
            title: "Pak Gratis Toegang",
            link: "https://discord.com/invite/wu59fp7XAW",
          },
        },
        {
          id: 2,
          title: " Maandelijks /",
          price: "€7,77",
          description:
            "Verbreed je netwerk, leer de juiste kennis om online geld te verdienen en ontdekt hoe jij van reizen en werken je lifestyle gaat maken.",
          list: [
            "Alles van de vorige +",
            "7+ online verdien modellen",
            "Unlock extra geld door onze bespaar tips",
            "Dagelijks remote vacatures",
            "Netwerk van remote werkers",
            "Stel direct al je vragen aan onze coaches",
          ],
          Button: {
            title: "Ik Start Vandaag Nog",
            link: "https://checkout.stripe.com/c/pay/cs_live_a1eE9ms4UoYNUMyREPpF1HKFkfz21RmqtFgyQI3veJFCLSoG2Ko7blIrk7#fidkdWxOYHwnPyd1blppbHNgWjA0SEBwY3dGQVdDbzBmR19JMlJRUW1UMDNOUGlib20yPUhOX2g8f0x%2FQUs1ckltTk9Kdz00dWxXZ0JRcVdKZ1FQPGF9b1A9ZFdIamBrdHJXMzJCXUJCZnY3NTVNYmdmd2RqNicpJ3VpbGtuQH11anZgYUxhJz8nZ0xcNzxoZ1JnPDxBNkNWYVcwJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycit3YGx%2FYGtoYHFpcGYra2kqJ3gl",
          },
        },
        {
          id: 3,
          title: "Jaarlijks /",
          price: "€77,77",
          description:
            "Voor de mensen die weten dat als ze ergens voor gaan dromen uit komen. Krijg 2 maanden gratis + 1 op 1 coaching call met Luc.",
          list: [
            "Alles van de vorige 2 +",
            "1 op 1 transformatie call",
            "2 maanden gratis + direct 1 jaar toegang",
            "Altijd up to date",
          ],
          Button: {
            title: "Geef 2 Maan den Gratis",
            link: "https://checkout.stripe.com/c/pay/cs_live_a1dtGIsGQGYlrpQ0xyOEMjEqu5TuysVCmDxdEi5sEW1C17Va6DhG4zhJ3Q#fidkdWxOYHwnPyd1blppbHNgWjA0SEBwY3dGQVdDbzBmR19JMlJRUW1UMDNOUGlib20yPUhOX2g8f0x%2FQUs1ckltTk9Kdz00dWxXZ0JRcVdKZ1FQPGF9b1A9ZFdIamBrdHJXMzJCXUJCZnY3NTVNYmdmd2RqNicpJ3VpbGtuQH11anZgYUxhJz8nNz1qMW1wYTVjMF13PDVmM2pAJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycit3YGx%2FYGtoYHFpcGYra2kqJ3gl",
          },
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      const pElements = this.$el.querySelectorAll(".desk");
      const wordsToBold = [
        "gezellig",
        "andere reizigers",
        "inspiratie op wilt",
        "handige travel hacks en deals.",
        "andere reizigers",
        "Verbreed je netwerk",
        "juiste kennis",
        "geld te verdienen",
        "reizen en werken",
        "de mensen die weten",
        "dromen uit komen",
        "2 maanden gratis",
        "1 op 1 coaching call",
      ];
      pElements.forEach((pElement) => {
        const textContent = pElement.textContent;
        let newTextContent = textContent;

        wordsToBold.forEach((word) => {
          const regExp = new RegExp(word, "g");
          newTextContent = newTextContent.replace(
            regExp,
            `<span class="font-extrabold">${word}</span>`
          );
        });

        pElement.innerHTML = newTextContent;
      });
    });
  },
};
</script>
