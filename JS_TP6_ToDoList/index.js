const form = document.querySelector("form");

// Stockage des data dans le navigateur
const storeElement = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getElement = () => {
  list.innerHTML = window.localStorage.todoList;
};

getElement();

// Ajout d'un élément dans la liste.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li text-item>${userInput.value}</li>`;
  userInput.value = "";
  storeElement();
});

// Cochage et Suppression d'un élément.
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }

  storeElement();
});
