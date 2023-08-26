const submitBtn = document.querySelector(".rating-card__btn");
const selectionBtn = document.querySelector(".rating-card__selection");
const selectionResult = document.querySelector(".thanks-card__selection");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const numBtn = document.querySelectorAll(".rating-card__selection--number");

selectionBtn.addEventListener("click", function (e) {
  const btn = e.target.closest(".rating-card__selection--number");
  numBtn.forEach((e) => e.classList.remove("active-number"));
  btn.classList.add("active-number");
  if (!btn) return;
  submitBtn.addEventListener("click", function () {
    selectionResult.textContent = `You selected ${btn.dataset.number} out of 5`;
    ratingCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  });
});
