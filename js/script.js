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


// --- BÀI 3: THÊM NÚT CHÀO MỪNG BẰNG SỰ KIỆN CLICK ---
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb!";
  });
}


// --- BÀI 4: ẨN/HIỆN NỘI DUNG GIỚI THIỆU ---
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    // Thêm hoặc xóa class "hidden" để ẩn/hiện vùng giới thiệu khi bấm nút
    aboutContent.classList.toggle("hidden");
  });
}
