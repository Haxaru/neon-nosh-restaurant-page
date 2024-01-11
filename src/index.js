export * from "./initial-page.js";
export * from "./menu.js";
export * from "./contact.js";
import { renderPage, addInitialPageContent } from "./initial-page.js";
import { addMenuPageContent } from "./menu.js";
import { addContactPageContent } from "./contact.js";

renderPage();
addInitialPageContent();
const contentArea = document.querySelector(".content-area");

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  contentArea.innerHTML = "";
  addInitialPageContent();
});

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  contentArea.innerHTML = "";
  addMenuPageContent();
});

const contactBtn = document.querySelector(".contact-us");
contactBtn.addEventListener("click", () => {
  contentArea.innerHTML = "";
  addContactPageContent();
});
