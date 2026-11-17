// Footer yılını otomatik güncelle
document.getElementById("yil").textContent = new Date().getFullYear();

// Menü bağlantılarında yumuşak kaydırma
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const hedef = document.querySelector(link.getAttribute("href"));
    if (hedef) hedef.scrollIntoView({ behavior: "smooth" });
  });
});
