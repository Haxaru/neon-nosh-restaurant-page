import { createBasicElement } from "./initial-page";
import { createSection, createMenuListing } from "./menu";
import chef from "./img/chef.jpg";
import waiter from "./img/waiter.jpg";
import owner from "./img/owner.jpg";

const addContactPageContent = () => {
  const contentArea = document.querySelector(".content-area");
  contentArea.append(
    createSection("- Meet The Crew -"),
    createMenuListing(
      chef,
      "Grixle Flambe",
      "A backstory? Really? Not much to say 'bout me. I guess I grew up in The Metro, a bit further from Nova Ridge. It's tough out there. Ain't for the weak lemme tell you that. That's all I gotta say, except keep your grimy fingers out my kitchen. They'll end up in the pot heh heh. (I'm being serious)"
    ),
    createMenuListing(
      waiter,
      "Finley Swirl",
      "Good evening, distinguished guests. My name is Finley, Finley Swirl. Pardon? Does it bother me seeing my close relatives being served? Well I suppose it bothers me as much as it would anyone else. But enough of me. Might I fancy you in a Mutant Berry Fizz? I must say it's got quite the spark! *high pitched posh giggle*"
    ),
    createMenuListing(
      owner,
      "Bill Wood",
      "Howdy, names Bill. Yer lookin at the owner. D'ya like the listings? Made em myself. Now let's see, about me... I ain't know my old mom and pop. Was raised by good ol Grixle. Guess he's my pops. We run this joint together. She's an old beauty ain't she? Don't mind the cracks, and leaks, and dust. They're there for character... G'head and place your order with Finley. Don't let his accent throw you off."
    ),
    createBasicElement(
      "div",
      "",
      "- Contact Us / Complaints -",
      "Don't. I don't care - Grixle"
    )
  );
};

export { addContactPageContent };

//grixle flambe, finley swirl, Bill Wood
