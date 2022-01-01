export function createLogoImg(logo) {
  const logoImg = document.createElement("img");
  logoImg.src = `./images/${logo.src}`;
  logoImg.alt = logo.name;
  logoImg.className = "logo";
  return logoImg;
};