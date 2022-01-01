import { createLogoImg } from "./createLogoImg.js";
import { createLogoWrapper } from "./createLogoWrapper.js";

export function addLogos(imagesList, div) {
  imagesList.forEach((logo) => {
    const logoImg = createLogoImg(logo);
    const logoWrapper = createLogoWrapper(logo);

    logoWrapper.appendChild(logoImg);
    div.appendChild(logoWrapper);
  });
};