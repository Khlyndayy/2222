import "./assets/css/main.css";
import anhlogo from "./assets/images//Ten-truong-do-1000x159.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <html>
      <header>
        <div id="divheader" class="header1">
          <div id="banner" class="banner1">
            <div id="topleft">
              <ul class="ul1">
                <li>
                  <a href="#">TRANG CHỦ</a>
                  <a href="/Trang1">EGOV</a>
                  <a href="#">SINH VIÊN</a>
                </li>
              </ul>
            </div>
            <div id="logo" class="logo1">
              <img src={anhlogo} width="548" />
            </div>
            <div id="divtimkiem" style={{ width: "300px" }}>
              Phần tìm kiếm
            </div>
          </div>
          <div id="divmenu">
            <ul>
              <li>
                <a href="#">GIỚI THIỆU</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Lịch sử hình thành</a>
                  </li>
                  <li>
                    <a href="#">Sứ mệnh và tầm nhìn</a>
                  </li>
                  <li>
                    <a href="#">Ban lãnh đạo</a>
                  </li>
                  <li>
                    <a href="#">Cơ sở vật chất</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">TIN TỨC - SỰ KIỆN</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Tin tức</a>
                  </li>
                  <li>
                    <a href="#">Sự kiện</a>
                  </li>
                  <li>
                    <a href="#">Thông báo</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">TUYỂN SINH</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Tuyển sinh 2025</a>
                  </li>
                  <li>
                    <a href="#">Tuyển sinh chính quy</a>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn đăng ký</a>
                  </li>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">CÔNG KHAI GIÁO DỤC</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Thông tin tuyển sinh</a>
                  </li>
                  <li>
                    <a href="#">Chương trình đào tạo</a>
                  </li>
                  <li>
                    <a href="#">Chất lượng giảng dạy</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">CƠ CẤU TỔ CHỨC</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Ban giám hiệu</a>
                  </li>
                  <li>
                    <a href="#">Các khoa</a>
                  </li>
                  <li>
                    <a href="#">Phòng ban</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">LIÊN KẾT</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Đối tác trong nước</a>
                  </li>
                  <li>
                    <a href="#">Đối tác quốc tế</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <div id="container" class="container">
          <Outlet />
        </div>
      </body>
      <footer></footer>
    </html>
  );
};

export default Layout;
