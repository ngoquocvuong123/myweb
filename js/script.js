// ============================================================
// script.js — Du Lịch Nha Trang
// ============================================================

// --- BÀI 3: Nút Hello ---
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "🌊 Chào mừng bạn đến với Nha Trang — Thiên đường biển miền Trung!";
  });
}

// --- BÀI 4: Ẩn/Hiện nội dung Giới thiệu ---
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent   = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
    toggleAboutBtn.textContent = aboutContent.classList.contains("hidden")
      ? "Hiện nội dung"
      : "Ẩn nội dung";
  });
}

// --- BÀI 5: Menu responsive ---
const menuToggle = document.getElementById("menuToggle");
const mainMenu   = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
  });
}

// --- BÀI 6: Chọn màu / chủ đề giao diện ---
const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
  themeSelect.addEventListener("change", function () {
    // Xóa tất cả class theme cũ trước
    document.body.classList.remove("dark-mode", "warm-mode");

    // Nếu người dùng chọn theme khác mặc định thì thêm class mới
    if (themeSelect.value !== "") {
      document.body.classList.add(themeSelect.value);
    }
  });
}
