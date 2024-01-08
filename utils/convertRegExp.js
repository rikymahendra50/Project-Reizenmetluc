export function convertRegExp(element) {
  const pElements = element.querySelectorAll(".desk");
  const elementsLock = element.querySelector(".header");
  const elementsBuble = element.querySelector(".comment");
  const elementsBR = element.querySelector(".br");

  // Function change font-bold
  // spanBR(elementsBR);

  functionBold(pElements);

  BackgroundLock(elementsLock);

  BackgroundBuble(elementsBuble);
}

function functionBold(pElements) {
  pElements.forEach((pElement) => {
    let newTextContent = pElement.innerHTML;

    newTextContent = newTextContent.replace(/\.\./g, "<br>");

    newTextContent = newTextContent.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-bold">$1</span>'
    );
    pElement.innerHTML = newTextContent;
  });
}

function BackgroundLock(elementsLock) {
  let newBorder = elementsLock.innerHTML;
  newBorder = newBorder.replace(
    /\*\*(.*?)\*\*/g,
    '<span class="h-3 bg-primarycolor px-5 xl:px-7 rounded-full relative">$1<img src="/_nuxt/assets/images/icon-lock.svg" alt="lock" class="absolute top-[-55px] right-[-40px] lg:right-[-50px] lg:top-[-67px] w-[90px] lg:w-[110px]"></span>'
  );

  newBorder = newBorder.replace(/\.\./g, "<br>");

  elementsLock.innerHTML = newBorder;
}

function BackgroundBuble(elementsBuble) {
  if (elementsBuble) {
    let newBuble = elementsBuble.innerHTML;
    newBuble = newBuble.replace(
      /\#\#(.*?)\#\#/g,
      '<span class="buble relative right-[-20px]">$1</span>'
    );

    elementsBuble.innerHTML = newBuble;
  }
}
