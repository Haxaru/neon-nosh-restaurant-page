import "./style.css";
import { createBasicElement } from "./initial-page.js";
import fishSoup from "./img/bio-glow-soup.jpg";
import pizza from "./img/pizza.jpg";
import sushiPlatter from "./img/sushi-platter.jpg";
import veggiePlatter from "./img/veggie-platter.jpg";
import fizzySoda from "./img/fizzy-soda.jpg";
import pinkDrink from "./img/pink-drink.jpg";
import kidsSlush from "./img/kids-slush.jpg";
import pie from "./img/berry.jpg";
import cake from "./img/cake.jpg";

const createMenuListing = (
  imgSrc = "",
  title = "",
  content = "",
  alt = "",
  className = ""
) => {
  const listing = createBasicElement("div", className);

  const img = new Image();
  img.src = imgSrc;
  img.alt = alt;

  const titleElement = document.createElement("h1");
  titleElement.innerText = title;

  const contentElement = document.createElement("p");
  contentElement.innerText = content;

  listing.append(img, titleElement, contentElement);
  return listing;
};

const createSection = (title) => {
  const titleElement = document.createElement("h1");
  titleElement.innerText = title;
  return titleElement;
};

const addMenuPageContent = () => {
  const contentArea = document.querySelector(".content-area");

  contentArea.append(
    createSection("- Food -"),
    createMenuListing(
      veggiePlatter,
      "Poor Man's Platter - 10 caps",
      "Look man, we know it's been tough out here. You're lucky to even be alive. So just for you, from us to you, We'll cut you a deal. Mostly because we don't wanna live with the guilt of you dying, you know? Alright man good talk and happy eating.",
      "Apocalyptic veggie food platter with neon colors"
    ),
    createMenuListing(
      fishSoup,
      "Bio Glow Soup - 30 caps",
      "This soup delight is made by nothing but the finest fish our chefs can hunt! The bioluminescence adds a bit of an earthy taste, sounds delicious no?",
      "Glowing fish soup with questionable contents and broth"
    ),
    createMenuListing(
      pizza,
      "Roasted Inferno Pizza - 45 caps",
      "It's expensive for a reason! This pizza is topped with all of the rich vegetation you can find in Nova Bridge. Foraging takes time, but it's worth it! For the right price of course.",
      "A pizza with a lot of bioluminescence, and vegetables"
    ),
    createMenuListing(
      sushiPlatter,
      "Seafood Symphony - 80 caps",
      "This dish is for the one who wants to go all out with their team. It is a three dish combo locally sourced from the brightest specimen out there. Bring in your own catch for a 15 cap discount (terms and conditions apply).",
      "A seafood platter with neon fish and noodles"
    ),
    createSection("- Drinks -"),
    createMenuListing(
      fizzySoda,
      "Mutant Berry Fizz - 5 caps",
      'This is as close as it\'s getting to that prehistoric "Fanta Grape" soda people used to drink. The berries are edible, of course. A little snacky snack to go along with your drink. Maybe this should\'ve veen called "The Poor Man\'s Drink" instead.',
      "A fizzy, bright colored drink"
    ),
    createMenuListing(
      pinkDrink,
      "Wild Strawberry Acai - 8 caps",
      "Another close replica of good old Starbie's acai drink. If we're being 100% honest, we actually don't know if it's accurate. I mean Starbie's existed a millennia ago. So take this information with a grain of sugar (heh. get it?).",
      "A bright pinkish orange drink with a weird creature on the rim of the cup"
    ),
    createMenuListing(
      kidsSlush,
      "Kid's Nuclear Slush - 8 caps",
      "Now this drink right here is for the kids... or the adult kids (I'm not judging). If a brainfreeze is what you're after then look no further! We thought best to add something for the younger folk just in case. If we're being honest we don't see many kids. (Understandable in this economy).",
      "a nuclear slushy that has a rainbow of colors and flavors"
    ),
    createSection("- Desserts -"),
    createMenuListing(
      cake,
      "Insta's Unicorn Cake - 12 caps",
      "From the limited knowledge we've been able to acquire from the 20XX's, people were really big on galaxies and unicorns... and... galaxies... What? They WORE it? Uh, moving on... This is our rendition in honor of those crazed people!",
      "a slice of rainbow cake oozing with glaze"
    ),
    createMenuListing(
      pie,
      "Your Mom's Berry Pie - 999 caps",
      "Just kidding! Your mom's pie may be priceless, but it's worthless to us! Or maybe it's the other way around? We forget, but the real price is 12 caps too. We mean, unless you WANT to buy it full price then be our guest!",
      "a berry pie with a lot of neon berries stacked on top"
    )
  );
};

export { createSection, createMenuListing, addMenuPageContent };
