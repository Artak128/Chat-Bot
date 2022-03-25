import { removeActive } from "./my_modules/RemoveActive/index.js";
import { newDiv } from "./my_modules/newDiv/index.js";
import { changeUserOrNot } from "./my_modules/changeUserOrNot/index.js";
import { stylingBorderRadius } from "./my_modules/stylingBorderRadius/index.js";
import { scrollDown } from "./my_modules/scrollDown/index.js";

let checkedUser = "User";

let dataUsers = [
  { name: "User", id: "profile1" },
  { name: "Guest", id: "profile2" },
];

/// Functions ///
function setUser(e) {
  if (e.target.dataset.type === "profile") {
    dataUsers.forEach((i) => {
      i.id === e.target.id && (checkedUser = i.name);
      removeActive();
      e.target.classList.add("active");
    });
  }
}


/// Event ///
document.addEventListener("click", setUser );
document.querySelector("input").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.currentTarget.value !== "") {
    if (changeUserOrNot(checkedUser)) {
      document.querySelector(".content").append(newDiv(checkedUser, e));
    } else {
      let p = document.createElement("p");
      p.textContent = e.currentTarget.value;
      document.querySelector(".content").lastElementChild.append(p);
    }
    stylingBorderRadius();
    e.currentTarget.value = "";
    scrollDown();
  }
});
