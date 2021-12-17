const itemRef = document.querySelectorAll(".item");
console.log(`Number of Categories: ${itemRef.length}`);
const titleRef = document.querySelectorAll(".item");
titleRef.forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}`);
  console.log(`Elements: ${title.lastElementChild.children.length}`);
});
