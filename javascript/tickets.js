var selectedRow = null;
var costpertype1 = 0;
var OverallCostPerOrder = 0;
var l;
var i;
var tot = 0;
var totcost = 0;
var t;
var table;
function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["pass"] = document.getElementById("pass").value;
  formData["NumberOfPersons"] =
    document.getElementById("NumberOfPersons").value;
  formData["Days"] = document.getElementById("Days").value;

  return formData;
}

function insertNewRecord(data) {
  isValid = true;
  if (document.getElementById("pass").value == "") {
    isValid = false;
    document.getElementById("ChoiceValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (document.getElementById("pass").value == "Adult Local Pass") {
      costpertype1 = 2500;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (document.getElementById("pass").value == "Adult Foreiger Pass") {
      costpertype1 = 3000;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (document.getElementById("pass").value == "Foreiger Child Pass") {
      costpertype1 = 2500;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (
      document.getElementById("pass").value == "Child Pass Below Age 15"
    ) {
      costpertype1 = 1000;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (
      document.getElementById("pass").value ==
        "Foreiger Adult and Child Pass" &&
      document.getElementById("Days").value == "3Hours"
    ) {
      costpertype1 = 6500;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (
      document.getElementById("pass").value == "Local Adult and Child Pass" &&
      document.getElementById("Days").value == "HalfDay"
    ) {
      costpertype1 = 3750;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (
      document.getElementById("pass").value ==
        "Foreiger Adult and Child Pass" &&
      document.getElementById("Days").value == "HalfDay"
    ) {
      costpertype1 = 6000;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else if (
      document.getElementById("pass").value ==
        "Foreiger Adult and Child Pass" &&
      document.getElementById("Days").value == "FullDay"
    ) {
      costpertype1 = 6500;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    } else {
      costpertype1 = 500;
      OverallCostPerOrder = costpertype1 * data.NumberOfPersons;
    }
  }

  table = document
    .getElementById("orderDetails")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.pass;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.NumberOfPersons;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Days;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = costpertype1;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = OverallCostPerOrder;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("pass").value = "";
  document.getElementById("NumberOfPersons").value = "";
  document.getElementById("Days").value = "";

  document.getElementById("costpertype1").value = "";
  document.getElementById("OverallCostPerOrder").value = "";

  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("pass").value = selectedRow.cells[0].innerHTML;
  document.getElementById("NumberOfPersons").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("Days").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
  var costpertype2;
  var OverallCostPerOrder2;
  selectedRow.cells[0].innerHTML = formData.pass;
  selectedRow.cells[1].innerHTML = formData.NumberOfPersons;
  selectedRow.cells[2].innerHTML = formData.Days;

  if (document.getElementById("pass").value == "Adult Local Pass") {
    costpertype2 = 2500;
    OverallCostPerOrder2 = costpertype2 * formData.NumberOfPersons;
  } else if (document.getElementById("pass").value == "Adult Foreiger Pass") {
    costpertype2 = 3000;
    OverallCostPerOrder2 = costpertype2 * formData.NumberOfPersons;
  } else if (document.getElementById("pass").value == "Foreiger Child Pass") {
    costpertype2 = 2500;
    OverallCostPerOrder2 = costpertype2 * formData.NumberOfPersons;
  } else if (
    document.getElementById("pass").value == "Child Pass Below Age 15"
  ) {
    costpertype2 = 1000;
    OverallCostPerOrder2 = costpertype2 * formData.NumberOfPersons;
  } else {
    costpertype2 = 500;
    OverallCostPerOrder2 = costpertype2 * formData.NumberOfPersons;
  }

  selectedRow.cells[3].innerHTML = costpertype2;
  selectedRow.cells[4].innerHTML = OverallCostPerOrder2;
}

function onDelete(td) {
  if (
    confirm(
      "Press 'OK' to remove the tickets from the current order OR Press 'Cancel' to proceed with the purchase."
    )
  ) {
    row = td.parentElement.parentElement;
    document.getElementById("orderDetails").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("pass").value == "") {
    isValid = false;
    document.getElementById("ChoiceValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("ChoiceValidationError")
        .classList.contains("hide")
    )
      document.getElementById("ChoiceValidationError").classList.add("hide");
  }
  return isValid;
}
function calculation() {
  table = document.getElementById("orderDetails");
  for (var q = 1; q < table.rows.length; q++) {
    totcost = totcost + parseInt(table.rows[q].cells[4].innerHTML);
  }

  alert(
    "Your order of " +
      totcost +
      " LKR is now confirmed. \nThis service was brought to you by YĀTRĀ travels. \nThank you for choosing YĀTRĀ for your travel needs.\nHave a wonderful day!!! (^‿^)"
  );
  totcost = 0;
}
