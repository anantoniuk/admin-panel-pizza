import Handlebars from "handlebars";
import templatePizzaList from "bundle-text:../templates/pizzas.hbs";

export const createPizzaListMurkup = (data) => {
  const getPizzasMurkip = Handlebars.compile(templatePizzaList);
  const pizzaMurkup = getPizzasMurkip(data);
  return pizzaMurkup;
};
