document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const popup = document.getElementById("thank-you-popup");
  const closeBtn = document.getElementById("close-popup");
  const honeypot = document.getElementById("website");
  const submitButton = form.querySelector('button[type="submit"]');
  const startTimeField = document.getElementById("form-start-time");
  const pageLoadTime = Date.now();

  if (startTimeField) {
    startTimeField.value = pageLoadTime;
  }

  form.addEventListener("submit", function(event) {
    if (honeypot && honeypot.value.trim() !== "") {
      event.preventDefault();
      return;
    }

    const elapsed = Date.now() - pageLoadTime;
    if (elapsed < 1600) {
      event.preventDefault();
      return;
    }

    if (form.dataset.submitted === "true") {
      event.preventDefault();
      return;
    }

    form.dataset.submitted = "true";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    event.preventDefault();
    popup.classList.add("show");
    popup.setAttribute("aria-hidden", "false");

    setTimeout(function() {
      form.submit();
    }, 3400);
  });

  closeBtn.addEventListener("click", function() {
    popup.classList.remove("show");
    popup.setAttribute("aria-hidden", "true");
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    }
    form.dataset.submitted = "false";
  });

  popup.addEventListener("click", function(event) {
    if (event.target === popup) {
      popup.classList.remove("show");
      popup.setAttribute("aria-hidden", "true");
    }
  });
});
