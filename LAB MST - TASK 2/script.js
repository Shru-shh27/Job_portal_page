let expenses = [];
let editIndex = -1;

function addExpense(){

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;
let category = document.getElementById("category").value;

let expense = {
name: name,
amount: Number(amount),
category: category
};

expenses.push(expense);

displayExpenses();

}

function displayExpenses(){

let list = document.getElementById("list");
list.innerHTML = "";

let total = 0;

for(let i=0;i<expenses.length;i++){

total = total + expenses[i].amount;

list.innerHTML += `
<tr>
<td>${expenses[i].name}</td>
<td>${expenses[i].amount}</td>
<td>${expenses[i].category}</td>
<td>
<button onclick="editExpense(${i})">Edit</button>
<button onclick="deleteExpense(${i})">Delete</button>
</td>
</tr>
`;

}

document.getElementById("total").innerText = total;

}

function deleteExpense(index){

expenses.splice(index,1);

displayExpenses();

}

function editExpense(index){

document.getElementById("name").value = expenses[index].name;
document.getElementById("amount").value = expenses[index].amount;
document.getElementById("category").value = expenses[index].category;

editIndex = index;

}

function updateExpense(){

expenses[editIndex].name = document.getElementById("name").value;
expenses[editIndex].amount = Number(document.getElementById("amount").value);
expenses[editIndex].category = document.getElementById("category").value;

displayExpenses();

}