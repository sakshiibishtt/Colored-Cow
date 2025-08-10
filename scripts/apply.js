document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const messageDiv = document.getElementById("apply-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const position = form.position.value;
    const resume = form.resume.files[0];
    const location = form.location.value;

    if (!fullName || !email || !phone || !position || !location || !resume) {
      messageDiv.style.color = "red";
      messageDiv.textContent =
        "Please fill all fields, select options, and upload your resume.";
      return;
    }

    // Resume PDF check
    if (resume.type !== "application/pdf") {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Resume must be a PDF file.";
      return;
    }

    messageDiv.style.color = "green";
    messageDiv.textContent = `Thank you, ${fullName}! Your application has been submitted.`;
    form.style.display = "none";
    document.getElementById("page-heading").innerText = "Application Submitted";

    form.reset();

    messageDiv.scrollIntoView({ behavior: "smooth" });
  });
});
