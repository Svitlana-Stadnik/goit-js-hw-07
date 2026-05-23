const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elemLi = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elemLi}`);
});

