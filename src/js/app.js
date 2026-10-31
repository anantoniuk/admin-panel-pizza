import {
  createPizza,
  updatePizza,
  deletePizza,
  readPizzas,
  getOnePizza,
} from "./api/pizzas";
import { createPizzaListMurkup } from "./createPizzaList";
import { modalSetting, modalAddNewPizza } from "./modals";
import "basiclightbox/dist/basiclightbox.min.css";

const pizzaContainer = document.querySelector("[data-pizzas-container]");
const aside = document.querySelector("[data-pizza-aside]");

const renderPizzas = async () => {
  try {
    const pizzas = await readPizzas();
    const pizzaMurkup = createPizzaListMurkup(pizzas);
    pizzaContainer.innerHTML = pizzaMurkup;
  } catch (error) {
    console.log(error);
  }
};

renderPizzas();
// ~~~~~~~~~~~~ оновлення списку піц
const handleRefresh = async (event) => {
  if (event.target.dataset.action === "refresh") {
    try {
      await renderPizzas();
      console.log("update");
    } catch (error) {
      console.log(error);
    }
  }
};

// ~~~~~~~~~~~~ видалити піцу
const handleDelete = async (event) => {
  if (event.target.dataset.pizzaAction === "delete") {
    const target = event.target;
    const id = target.closest("[data-id-pizza]").dataset.idPizza;
    try {
      await deletePizza(id);
      await renderPizzas();
    } catch (error) {
      console.log(error);
    }
  }
};

// ~~~~~~~~~~~~ додавання піци
const handleAddData = async (event, form, modal) => {
  event.preventDefault();

  const newPizza = {
    name: form.name.value,
    image: form.photo.value,
    price: Number(form.price.value),
    ingredients: form.ingredients.value.split(","),
  };
  try {
    await createPizza(newPizza);
    modal.close();
    await renderPizzas();
  } catch (error) {
    console.log(error);
  }
};

const handleAddNewPizza = async (event) => {
  if (event.target.dataset.action === "create") {
    modalAddNewPizza.show();
    try {
      const modal = modalAddNewPizza.element();
      const form = modal.querySelector("[data-form]");
      const editBtn = modal.querySelector("[data-action='add']");
      editBtn.addEventListener("click", (event) =>
        handleAddData(event, form, modalAddNewPizza),
      );
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }
};
// ~~~~~~~~~~~~ змінна налаштувань в піцці
const handleChangeData = async (event, id, form, modal) => {
  event.preventDefault();

  const updatedPizza = {
    name: form.name.value,
    image: form.photo.value,
    price: Number(form.price.value),
    ingredients: form.ingredients.value.split(","),
  };
  try {
    await updatePizza(updatedPizza, id);
    modal.close();
    await renderPizzas();
  } catch (error) {
    console.log(error);
  }
};

const handleShowSetting = async (event) => {
  if (event.target.dataset.pizzaAction === "edit") {
    modalSetting.show();
    const target = event.target;
    const id = target.closest("[data-id-pizza]").dataset.idPizza;
    try {
      const pizza = await getOnePizza(id);
      const modal = modalSetting.element();
      const form = modal.querySelector("[data-form]");
      form.name.value = pizza.name;
      form.photo.value = pizza.image;
      form.price.value = pizza.price;
      form.ingredients.value = pizza.ingredients.join(", ");
      const editBtn = modal.querySelector("[data-action='change']");
      editBtn.addEventListener("click", (event) =>
        handleChangeData(event, id, form, modalSetting),
      );
    } catch (error) {
      console.log(error);
    }
  }
};
// ~~~~~~~~
pizzaContainer.addEventListener("click", handleDelete);
aside.addEventListener("click", handleAddNewPizza);
aside.addEventListener("click", handleRefresh);
pizzaContainer.addEventListener("click", handleShowSetting);
