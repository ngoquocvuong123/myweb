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
// --- BÀI 5: MENU TƯƠNG TÁC CHO WEBSITE ---
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  // Sự kiện khi bấm vào nút Menu (Ẩn/Hiện)
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
    
    // MỞ RỘNG: Đổi chữ nút từ "☰ Menu" sang "✖ Đóng menu" và ngược lại
    if (mainMenu.classList.contains("active")) {
      menuToggle.textContent = "✖ Đóng menu";
    } else {
      menuToggle.textContent = "☰ Menu";
    }
  });

  // MỞ RỘNG: Khi bấm vào một liên kết bất kỳ trong menu, tự động đóng menu lại
  const menuLinks = mainMenu.querySelectorAll("a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainMenu.classList.remove("active");
      menuToggle.textContent = "☰ Menu";
    });
  });
}
// --- BÀI 6: CHỌN MÀU HOẶC CHỦ ĐỀ GIAO DIỆN ---
const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
  // Lắng nghe sự kiện người dùng thay đổi lựa chọn trong thẻ select
  themeSelect.addEventListener("change", function () {
    // Trước tiên xóa bỏ các class chủ đề cũ để reset về mặc định
    document.body.classList.remove("dark-mode", "warm-mode");
    
    // Nếu người dùng chọn một chủ đề khác rỗng, tiến hành thêm class đó vào body
    if (themeSelect.value !== "") {
      document.body.classList.add(themeSelect.value);
    }
  });
}
// --- BÀI 7: TÌM KIẾM NHANH NỘI DUNG TRONG WEBSITE ---
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
  // Lắng nghe sự kiện khi người dùng gõ từ khóa vào ô input
  searchInput.addEventListener("keyup", function () {
    // Chuyển từ khóa về chữ thường và xóa khoảng trắng thừa ở 2 đầu
    const keyword = searchInput.value.toLowerCase().trim();

    // Duyệt qua từng địa danh (thẻ figure) trên trang
    searchItems.forEach(function (item) {
      // Lấy toàn bộ nội dung chữ bên trong thẻ figure chuyển thành chữ thường
      const text = item.textContent.toLowerCase();
      
      // Nếu nội dung chứa từ khóa cần tìm kiếm
      if (text.includes(keyword)) {
        item.style.display = ""; // Hiển thị phần tử
      } else {
        item.style.display = "none"; // Ẩn phần tử nếu không khớp
      }
    });
  });
}
