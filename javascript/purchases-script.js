function message_1() {
  var name = document.getElementById("DonationsForm_1").elements[0].value;
  var address = document.getElementById("DonationsForm_1").elements[1].value;
  if (name === "" || address === "") {
    alert("Please fill every field in order to complete the donation.");
  } else {
    var I = confirm(
      name +
        ", you have successfully donated!!!  (^‿^)" +
        "\n" +
        "A postal message will be sent to this address: " +
        address +
        "\nThank you " +
        name +
        ", for your generosity! \nHave a wonderful day!"
    );
  }
}

function message_2() {
  var name = document.getElementById("DonationsForm_2").elements[0].value;
  var address = document.getElementById("DonationsForm_2").elements[1].value;
  if (name === "" || address === "") {
    alert("Please fill every field in order to complete the donation.");
  } else {
    var I = confirm(
      name +
        ", you have successfully donated!!!  (^‿^)" +
        "\n" +
        "A postal message will be sent to this address: " +
        address +
        "\nThank you " +
        name +
        ", for your generosity! \nHave a wonderful day!"
    );
  }
}

function message_3() {
  var name = document.getElementById("DonationsForm_3").elements[0].value;
  var address = document.getElementById("DonationsForm_3").elements[1].value;
  if (name === "" || address === "") {
    alert("Please fill every field in order to complete the donation.");
  } else {
    var I = confirm(
      name +
        ", you have successfully donated!!!  (^‿^)" +
        "\n" +
        "A postal message will be sent to this address: " +
        address +
        "\nThank you " +
        name +
        ", for your generosity! \nHave a wonderful day!"
    );
  }
}
