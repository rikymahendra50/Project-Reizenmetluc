export function convertRegExp(element) {
  const pElements = element.querySelectorAll(".desk");
  const elementsLock = element.querySelector(".header");
  const elementsBuble = element.querySelector(".comment");
  const yellowText = element.querySelector(".yellow");
  const elementButton = element.querySelector(".button");

  functionBold(pElements);

  BackgroundLock(elementsLock);

  BackgroundBuble(elementsBuble);

  TextYellow(yellowText);

  Button(elementButton);
}

function Button(elementButton) {
  if (elementButton) {
    let newButton = elementButton.innerHTML;
    newButton = newButton.replace(
      /\#(.*?)\#/g,
      '<span class="buttonSmall">$1<span class="ml-2 bg-black rounded-full flex items-center p-2 w-[30px] h-[30px] justify-center"><img src="/_nuxt/assets/images/arrow2.svg" alt="arrow" /></span></span>'
    );

    elementButton.innerHTML = newButton;
  }
}

function TextYellow(yellowText) {
  if (yellowText) {
    let newYellow = yellowText.innerHTML;
    newYellow = newYellow.replace(
      /\#(.*?)\#/g,
      '<span class="text-primarycolor">$1</span>'
    );

    yellowText.innerHTML = newYellow;
  }
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
  if (elementsLock) {
    let newBorder = elementsLock.innerHTML;
    newBorder = newBorder.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="h-3 bg-primarycolor px-5 xl:px-7 rounded-full relative">$1<img src="/_nuxt/assets/images/icon-lock.svg" alt="lock" class="absolute top-[-55px] right-[-40px] lg:right-[-50px] lg:top-[-67px] w-[90px] lg:w-[110px]"></span>'
    );

    newBorder = newBorder.replace(/\.\./g, "<br>");

    elementsLock.innerHTML = newBorder;
  }
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
