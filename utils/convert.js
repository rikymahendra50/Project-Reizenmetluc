export function convertRegExp(element) {
  const pElements = element.querySelectorAll(".bold");
  const elementsPrimary = element.querySelector(".bgSpanPrimary");
  const elementsBuble = element.querySelector(".comment");
  const primaryText = element.querySelector(".textSpanPrimary");
  const elementButton = element.querySelector(".button");

  Bold(pElements);

  BackgroundPrimary(elementsPrimary);

  BackgroundBuble(elementsBuble);

  textSpanPrimary(primaryText);

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

function textSpanPrimary(primaryText) {
  if (primaryText) {
    let newPrimary = primaryText.innerHTML;
    newPrimary = newPrimary.replace(
      /\#(.*?)\#/g,
      '<span class="text-primarycolor">$1</span>'
    );

    primaryText.innerHTML = newPrimary;
  }
}

function Bold(pElements) {
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

function BackgroundPrimary(elementsPrimary) {
  if (elementsPrimary) {
    let newBorder = elementsPrimary.innerHTML;
    newBorder = newBorder.replace(
      /\*(.*?)\*/g,
      '<span class="bg-primarycolor rounded-[10px] px-3 pb-1">$1</span>'
    );

    newBorder = newBorder.replace(/\.\./g, "<br>");

    elementsPrimary.innerHTML = newBorder;
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
