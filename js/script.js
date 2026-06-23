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
// --- BÀI 8: LỌC GALLERY ẢNH THEO NHÓM ---
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0 && galleryItems.length > 0) {
  // Duyệt qua từng nút bấm lọc
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Lấy giá trị của nhóm cần lọc (all, nature, food, fun)
      const filter = button.dataset.filter;

      // Duyệt qua từng bức ảnh trong thư viện
      galleryItems.forEach(function (item) {
        // Lấy danh mục của bức ảnh hiện tại
        const category = item.dataset.category;

        // Nếu nút bấm là "Tất cả" hoặc danh mục của ảnh trùng khớp với nút bấm
        if (filter === "all" || category === filter) {
          item.style.display = ""; // Hiển thị ảnh thỏa điều kiện
        } else {
          item.style.display = "none"; // Ẩn ảnh không thuộc nhóm
        }
      });
    });
  });
}
// --- BÀI 9: KIỂM TRA FORM LIÊN HỆ TRƯỚC KHI GỬI ---
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

if (contactForm && fullName && email && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    // 5. Chặn hành vi mặc định (không cho tải lại trang)
    event.preventDefault();

    // Loại bỏ khoảng trắng đầu/cuối bằng .trim()
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    // Kiểm tra ô Họ tên trống
    if (nameValue === "") {
      formMessage.textContent = "Vui lòng nhập họ tên.";
      formMessage.style.color = "red";
      return; // Dừng xử lý khi gặp lỗi
    }

    // Kiểm tra ô Email trống hoặc thiếu ký tự "@"
    if (emailValue === "" || !emailValue.includes("@")) {
      formMessage.textContent = "Vui lòng nhập email hợp lệ.";
      formMessage.style.color = "red";
      return; // Dừng xử lý khi gặp lỗi
    }

    // Nếu tất cả dữ liệu hợp lệ
    formMessage.textContent = "Thông tin đã hợp lệ. Cảm ơn bạn!";
    formMessage.style.color = "green";
    
    // (Tùy chọn) Xóa sạch form sau khi gửi thành công
    contactForm.reset();
  });
}
