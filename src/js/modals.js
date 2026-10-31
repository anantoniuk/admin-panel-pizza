import * as basicLightbox from "basiclightbox";
export const modalSetting = basicLightbox.create(`
  <div class="modal">
    <h3 class="modal-title">Setting</h3>
    <form class="modal-form" data-form>
      <label class="modal-label" for="name">Name</label>
      <input class="modal-input" name="name" placeholder="Name" type="text" />
      <label class="modal-label" for="photo">Photo</label>
      <input class="modal-input" name="photo" placeholder="URL" type="text" />
      <label class="modal-label" for="price">Price</label>
      <input class="modal-input" name="price" placeholder="Price" type="number" />
      <label class="modal-label" for="ingredients">Ingredients</label>
      <input class="modal-input" name="ingredients" placeholder="Ingredients" type="text" />
      <button class="modal-btn" data-action="change">done</button>
    </form>
  </div>`);

export const modalAddNewPizza = basicLightbox.create(`
  <div class="modal">
    <h3 class="modal-title">New pizza</h3>
    <form class="modal-form" data-form>
      <label class="modal-label" for="name">Name</label>
      <input class="modal-input" name="name" placeholder="Name" type="text" />
      <label class="modal-label" for="photo">Photo</label>
      <input class="modal-input" name="photo" placeholder="URL" type="text" />
      <label class="modal-label" for="price">Price</label>
      <input class="modal-input" name="price" placeholder="Price" type="number" />
      <label class="modal-label" for="ingredients">Ingredients</label>
      <input class="modal-input" name="ingredients" placeholder="Ingredients" type="text" />
      <button class="modal-btn" data-action="add">Add</button>
    </form>
  </div>`);
