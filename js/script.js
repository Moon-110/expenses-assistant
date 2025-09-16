
// calculate results
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
 
    // for calculate results
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");
});

// calculate savings
const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click", function () {

  // for calculate results
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

    // for calculate savings
  const savingPercentage = parseFloat(document.getElementById("savings").value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingAmount = (savingPercentage * balance) / 100;

   const remainingBalance = balance-savingAmount;

  const savingElement = document.getElementById('savings-amount');
  savingElement.innerText = savingAmount.toFixed(2);

 

  const remainingBalanceElement = document.getElementById('remaining-balance');
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});
