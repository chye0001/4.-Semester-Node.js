
document.addEventListener("DOMContentLoaded", () => {
    const copyrightInfo = document.getElementById("copyright-info");
    const currentYear = new Date().getFullYear();
    copyrightInfo.textContent = "© All rights reserved DogInder " + currentYear;
})
