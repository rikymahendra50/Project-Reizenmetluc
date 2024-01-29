export function convertRegExp(element) {
  const pElements = element.querySelectorAll(".bold");
  const elementsPrimary = element.querySelector(".bgSpanPrimary");
  const primaryText = element.querySelector(".textSpanPrimary");
  const greenText = element.querySelector(".greenText");
  const LineThrought = element.querySelector(".LineThrought");
  const UnderLine = element.querySelector(".underline1");

  Bold(pElements);
  BackgroundPrimary(elementsPrimary);
  textspanprimary(primaryText);
  greentext(greenText);
  linethrought(LineThrought);
  underline(UnderLine);
}

function underline(UnderLine) {
  if (UnderLine) {
    let newPrimary = UnderLine.innerHTML;
    newPrimary = newPrimary.replace(
      /\-(.*?)\-/g,
      '<span class="underline-primary">$1</span>'
    );
    UnderLine.innerHTML = newPrimary;
  }
}

function linethrought(LineThrought) {
  if (LineThrought) {
    let newPrimary = LineThrought.innerHTML;
    newPrimary = newPrimary.replace(
      /\$(.*?)\$/g,
      '<span class="strikethrough">$1</span>'
    );
    LineThrought.innerHTML = newPrimary;
  }
}

function greentext(greenText) {
  if (greenText) {
    let newPrimary = greenText.innerHTML;
    newPrimary = newPrimary.replace(
      /\#(.*?)\#/g,
      '<span class="text-green-500 font-bold">$1</span>'
    );
    greenText.innerHTML = newPrimary;
  }
}

function textspanprimary(primaryText) {
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
      '<span class="bg-primarycolor rounded-[10px] px-1 md:px-3 md:p-1">$1</span>'
    );

    newBorder = newBorder.replace(/\.\./g, "<br>");

    elementsPrimary.innerHTML = newBorder;
  }
}
