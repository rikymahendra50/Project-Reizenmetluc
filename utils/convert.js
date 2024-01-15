export function convertRegExp(element) {
  const pElements = element.querySelectorAll(".bold");
  const elementsPrimary = element.querySelector(".bgSpanPrimary");
  const primaryText = element.querySelector(".textSpanPrimary");

  Bold(pElements);

  BackgroundPrimary(elementsPrimary);

  textSpanPrimary(primaryText);
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
