

document.addEventListener("DOMContentLoaded", function () {
const unitSections = document.querySelectorAll(".unit");
const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
const totalElement = document.getElementById("total");

const unitPrices = {
1: 9.00,
2: 18.00,
3: 27.00,
};

radios.forEach((radio, index) => {
radio.addEventListener("change", () => {
unitSections.forEach((section, idx) => {
if (idx === index) {
section.classList.add("open");
} else {
section.classList.remove("open");
}
});

const selectedValue = parseInt(radio.value);
const totalPrice = unitPrices[selectedValue];
totalElement.textContent = `$${totalPrice.toFixed(2)} USD`;
});
});

// Allow clicking the whole unit section (not just radio)
unitSections.forEach((section, idx) => {
section.addEventListener("click", () => {
const input = section.querySelector('input[type="radio"]');
input.checked = true;
input.dispatchEvent(new Event("change"));
});
});
});
