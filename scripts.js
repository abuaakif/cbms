document.addEventListener("DOMContentLoaded", function() {
    autoFetchInvoiceNumber();
    autoFetchRecordedBy();
});

function autoFetchInvoiceNumber() {
    document.getElementById("invoiceNumber").value = "INV" + Math.floor(Math.random() * 10000);
}

function autoFetchRecordedBy() {
    document.getElementById("recordedBy").value = "John Doe"; // Fetch logged-in user's name dynamically
}

function updateBalance() {
    let totalAmount = document.getElementById("totalAmount").value || 0;
    let amountReceived = document.getElementById("amountReceived").value || 0;
    let balanceDue = totalAmount - amountReceived;
    document.getElementById("balanceDue").value = balanceDue < 0 ? 0 : balanceDue;
}

function togglePartialPayment() {
    let isPartial = document.getElementById("partialPayment").value;
    document.getElementById("balanceDue").readOnly = isPartial === "No";
}

