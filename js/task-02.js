const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = ingredients.map((elem) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = elem;
  itemRef.classList.add("item");
  console.log(itemRef);
  return itemRef;
});

const listRef = document.querySelector("#ingredients");
listRef.prepend(...arr);
