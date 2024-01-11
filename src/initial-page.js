import "./style.css";
import BlurredBg from "./img/body-bg.jpg";

const createBasicElement = (
  element,
  className = "",
  title = "",
  content = ""
) => {
  const ElementType = document.createElement(element);

  if (className !== "") {
    ElementType.classList.add(className);
  }

  if (title !== "") {
    const titleElement = document.createElement("h1");
    titleElement.textContent = title;
    ElementType.appendChild(titleElement);
  }
  if (content !== "") {
    const contentElement = document.createElement("p");
    contentElement.textContent = content;
    ElementType.appendChild(contentElement);
  }

  document.body.append(ElementType);

  return ElementType;
};

const renderPage = () => {
  const CreateBannerAndAddBg = () => {
    const content = document.querySelector("#header");
    const img = new Image();
    img.src = BlurredBg;
    img.alt = "A very blurry background that depicts a neon, apocalyptic scene";
    img.classList.add("blurred-bg");

    const title = document.createElement("h1");
    title.innerText = "- Neon Nosh -";

    const headline = document.createElement("h2");
    headline.innerText = "- Dine in the glow of the future -";

    content.append(img, title, headline);

    return content;
  };

  document.body.append(CreateBannerAndAddBg());

  const createTabbedUi = () => {
    const createButton = (btnName, className = "") => {
      const button = document.createElement("button");
      if (className !== "") {
        button.classList.add(className);
      }
      button.textContent = btnName;
      return button;
    };

    const buttonNav = createBasicElement("div", "button-nav");

    buttonNav.append(
      createButton("Home", "home"),
      createButton("Menu", "menu"),
      createButton("Contact Us", "contact-us")
    );

    document.body.appendChild(buttonNav);

    const contentArea = createBasicElement("div", "content-area");

    return contentArea;
  };

  document.body.append(createTabbedUi());
};

const addInitialPageContent = () => {
  const contentArea = document.querySelector(".content-area");

  contentArea.append(
    createBasicElement(
      "div",
      "",
      "About Us:",
      "Hello! We are one of the few restaurants (if not the only restaurant) in Nova Ridge that provide fresh ready-to-eat meals! We pride ourselves on the delicious ingredients locally sourced. Believe us, nothing goes to waste!"
    ),
    createBasicElement(
      "div",
      "",
      "Store Hours:",
      "Our stores are open Mon-Fri from 10:00pm to 6:00am. Note that our hours may change without notice."
    ),
    createBasicElement(
      "div",
      "",
      "A Note To All:",
      "Please keep in mind we are open only at night to reduce the foot traffic. We do not want riff raff in here. You will be kicked out whether it's the easy way or the hard way."
    ),
    createBasicElement("div", "", "Location:", "If you know, you know")
  );
};

export { createBasicElement, renderPage, addInitialPageContent };
