export function createLogoWrapper(logo) {
  const logoWrapper = logo.link ?
    document.createElement("a")
    : document.createElement("div");

  logoWrapper.className = "logo-wrapper";

  if (logo.link) {
    logoWrapper.classList.add("link");
    logoWrapper.href = logo.link;
    logoWrapper.target = "_blank";
    logoWrapper.rel = "noopener noreferrer";
  };

  return logoWrapper;
};