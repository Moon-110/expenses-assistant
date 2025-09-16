
// calculate results
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
 
    // for calculate results
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  if(income<=0 || isNaN(income)){
    document.getElementById('income-error').classList.remove('hidden');
    return;
  }
    if(software<=0 || isNaN(software)){
    document.getElementById('software-error').classList.remove('hidden');
    return;
}
 if(courses<=0 || isNaN(courses)){
    document.getElementById('courses-error').classList.remove('hidden');
    return;
}
 if(internet<=0 || isNaN(internet)){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
  }

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if(totalExpenses>income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
  historyItem.innerHTML =`
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Expense: $${totalExpenses.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
  `;
  const historyContainer = document.getElementById('history-list');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);


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


// history button functionality
const historyButton = document.getElementById('history-tab');
const assistantButton = document.getElementById('assistant-tab');
historyButton.addEventListener('click', function(){
    historyButton.classList.add('text-white', 'bg-gradient-to-r', 'from-red-400', 'to-green-600');
    assistantButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-red-400', 'to-green-600');

    
    document.getElementById('Expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

assistantButton.addEventListener('click', function(){
    assistantButton.classList.add('text-white', 'bg-gradient-to-r', 'from-red-400', 'to-green-600');
    historyButton.classList.remove('text-white', 'bg-gradient-to-r', 'from-red-400', 'to-green-600');

    document.getElementById('Expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})