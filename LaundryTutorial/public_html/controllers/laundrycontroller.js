function loadLaundryData() {

}

function createTd(rowName, itemType) {
    var td = document.createElement("td");
    td.setAttribute("id", rowName + itemType);
    td.innerText = rowName;
    return td;
}

window.onload = () => {
    createRows();
}

function createRows() {
    var tbody = document.getElementById("laundryTbody");

    var row = document.createElement("tr");

    //Create our input field to hold the number of shirts
    var qtyShirtsInput = document.createElement("input");
    qtyShirtsInput.setAttribute("type", "number");
    qtyShirtsInput.setAttribute("id", "shirtQty");

    var garmentTd = createTd("shirt", "item");
    var priceTd = createTd("shirt", "price");

    var qtyTd = document.createElement("td");
    qtyTd.insertBefore(qtyShirtsInput, null);
    

    var totalCostTd = document.createElement("td");
    totalCostTd.setAttribute("id", "shirtCost");

    qtyShirtsInput.addEventListener('input', function (event) {
        var quantity = event.target.value;
        var itemCost = parseFloat(document.getElementById("shirtprice").innerText);
        //Get the total cost
        totalCostTd.innerText = quantity * itemCost;
    });


    row.insertBefore(qtyTd, null);
    row.insertBefore(garmentTd, null);
    row.insertBefore(priceTd, null);
    row.insertBefore(totalCostTd, null);
    
    tbody.insertBefore(row, null);
}

