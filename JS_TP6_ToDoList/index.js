const htmlCheckboxEmpty = "&#9744;";
const htmlCheckboxChecked = "&#9745;";
let itemCheck = "";
let itemText = "";
let itemInfo = "";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = insertItem(userInput.value, false);
  list.innerHTML += item;
  userInput.value = "";
});

const insertItem = (text, isChecked) => {
  itemText = text;
  itemCheck = isChecked ? htmlCheckboxChecked : htmlCheckboxEmpty;
  itemInfo = isChecked ? "(Cliquez pour supprimer)" : "";

  return `
            <li>
                <span class="check-item">${itemCheck}</span>
                <span class="text-item">${itemText}</span>
                <span class="info-item">${itemInfo}</span>
            </li>`;
};

list.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target);
});
