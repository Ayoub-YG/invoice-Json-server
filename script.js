fetch("db.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.name);
    // data of salary
    var nameElement = document.getElementById("name");
    nameElement.innerText = data.name;

    var adr1Element = document.getElementById("address1");
    adr1Element.innerText = data.address1;

    var adr2Element = document.getElementById("address2");
    adr2Element.innerText = data.address2;

    var phoneElement = document.getElementById("phone");
    phoneElement.innerText = data.phone;

    var companyNameElement = document.getElementById("companyName");
    companyNameElement.innerText = data.company;

    var invNumberElement = document.getElementById("invNumber");
    invNumberElement.innerText = data.invoice_number;

    var dateORElement = document.getElementById("dateOR");
    dateORElement.innerText = data.order_date;

    var amountORElement = document.getElementById("amountOR");
    amountORElement.innerText = data.order_amount;

    // table of sel3a
    let tt = "";

    let PriceTotal = 0;
    let lineItem = document.getElementById("line-items");
    lineItem.innerHTML = ''
    data.table_Of_items.forEach(element => {
        tt = `      
        <tbody id="line-items">
          <tr id="line-item" class="item">
            <td><span id="itemName" >${element.item_name}</span></td>
            <td colspan="2"><span>${element.dscription}</span></td>
            <td><span>${element.Quantity}</span></td>
            <td><span>${element.price}</span></td>
          </tr>
        </tbody>
    
      ` 
      lineItem.innerHTML += tt;
    });

    var totalOdElement = document.getElementById("totalOd");
    totalOdElement.innerText = data.order_total;

    var amountPdElement = document.getElementById("amountPd");
    amountPdElement.innerText = data.order_amount_paid;

    var balanceOdElement = document.getElementById("balanceOd");
    balanceOdElement.innerText = data.order_due_balance;

    var notesElement = document.getElementById("notes");
    notesElement.innerText = data.notes;

  });


