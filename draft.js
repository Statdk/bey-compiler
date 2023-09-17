import PartDB from "./src/js/PartDB.js";

console.log(PartDB);

function updateList(elementID, listName) {}

/**
`
<div class="ListItem">
  <div class="ListItemName">${item.name}</div>
  <ul>
    <li>Type: ${item.type}</li>
    <li>Gen: ${item.generation}</li>
  </ul>
  <button onclick="removeListItem('${item.name}', '${listName}')">Delete</button>
</div>
`
*/

function createListItem(item, listName) {
  console.log(item);
  console.log(listName);
  const listContentRaw = localStorage.getItem(listName);

  let listContent =
    listContentRaw === null ? { list: [] } : JSON.parse(listContentRaw);

  listContent.list.push(item);

  localStorage.setItem(listName, JSON.stringify(listContent));

  updateList(listName, listName); // bad
}

function removeListItem(itemName, listName) {
  const listContentRaw = localStorage.getItem(listName);

  let listContent = JSON.parse(listContentRaw);

  listContent.list.splice(
    listContent.list.findIndex((item) => {
      return item.name === itemName;
    }),
    1
  );

  localStorage.setItem(listName, JSON.stringify(listContent));

  updateList(listName, listName); // bad
}

updateList("parts", "parts");
