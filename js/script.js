const inpTitle = document.querySelector(".title");
const deco1 = document.querySelector(".deco-1");
const deco2 = document.querySelector(".deco-2");
const inpDesc = document.querySelector(".description");
const saveBtn = document.querySelector(".save-btn");
const listItems = document.querySelector(".list-items");
const delAll = document.querySelector(".del_all");

saveBtn.addEventListener("click", () => {
  if (inpTitle.value === "") {
    invalid();
  } else {
    invalid();
    addItem();
  }
});
inpTitle.addEventListener("change", invalid);

// invalid functionality
function invalid() {
  if (inpTitle.value === "") {
    deco1.style.display = "block";
    deco2.style.display = "block";
  } else {
    deco1.style.display = "none";
    deco2.style.display = "none";
  }
}

// functionality for add items
function addItem() {
  const titleGiven = inpTitle.value;
  const descGiven = inpDesc.value;

  const html = `<div class="list-item">
                        <span class="title_span">${titleGiven}</span>
                        <span class="desc_span">${descGiven}</span>
                        <button class="delete"><img src="./cross.svg" alt="delete"></button>
                    </div>`;

  listItems.innerHTML += html;

  inpTitle.value = "";
  inpDesc.value = "";
}

// functionality for remove items
window.addEventListener("click", () => {
  if (
    event.target.parentNode.classList.contains("delete") ||
    event.target.classList.contains("delete")
  ) {
    let rmItem = event.target.parentNode.parentNode;
    rmItem.style.transform = "scaleY(0)";

    let childs = [
      rmItem.querySelector(".title_span"),
      rmItem.querySelector(".desc_span"),
      rmItem.querySelector(".delete"),
    ];
    rmChilds(rmItem, childs);

    setTimeout(() => {
      listItems.removeChild(rmItem);
    }, 400);
  }
});

// functionality for remove All items
delAll.addEventListener("click", () => {
  const lists = document.querySelectorAll(".list-item");
  rmChilds(listItems, lists);
});

// function for remove child elements
function rmChilds(el, array) {
  for (let i = 0; i < array.length; i++) {
    el.removeChild(array[i]);
  }
}
