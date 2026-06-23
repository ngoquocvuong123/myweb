// --- BÀI 1: KIỂM TRA JAVASCRIPT ĐÃ CHẠY BẰNG CONSOLE VÀ BIẾN ---
const siteName = "MyWeb - Du lịch Nha Trang";
let topic = "Giới thiệu vẻ đẹp và ẩm thực Nha Trang";
let imageCount = 5;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);


// --- BÀI 2: ĐỔI NỘI DUNG TIÊU ĐỀ BẰNG DOM ---
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
  mainTitle.textContent = "MyWeb đã có JavaScript!";
  welcomeText.textContent = "Nội dung này được cập nhật bằng file js/script.js.";
}

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
