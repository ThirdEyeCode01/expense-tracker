let total = 0;

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if (title === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");

    li.innerHTML = `${title} - ₹${amount} <button onclick="removeExpense(this, ${amount})">X</button>`;
    list.appendChild(li);

    total += parseInt(amount);
    document.getElementById("total").innerText = total;

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
}

function removeExpense(button, amount) {
    button.parentElement.remove();
    total -= amount;
    document.getElementById("total").innerText = total;
}
