export const board2017 = {

    D: "A truck starts from rest and moves with a constant acceleration of 6m/. Find the speed of the truck after 4 seconds in m/s.",
    B: "A 5 meter extension ladder leans against the wall; the bottom is 3 m from the wall. If the bottom stays at the same place, how much should the ladder be extended so that the top would lean against the wall 1 meter higher?",
    C: "Find the number of years when P2,500.00 is compounded to P5,800.00 if invested at 12% compounded quarterly",
};




document.getElementById('addButton').addEventListener('click', function () {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();
    const itemList = document.getElementById("itemList");

    // Clear the previous list items
    itemList.innerHTML = '';


    let found = false;

    for (const [key, value] of Object.entries(board2017)) {
        if (value.includes(itemText)) {
            found = true;
            const listItem = document.createElement("li");
            listItem.textContent = `Letter: ${key}, Question: ${value}`;
            itemList.appendChild(listItem);
        }
    }

    // If no matches were found
    if (!found) {
        const listItem = document.createElement("li");
        listItem.textContent = "Sorry, we don't have an answer for that.";
        itemList.appendChild(listItem);
    }

    // Clear the input field
    input.value = '';
});   