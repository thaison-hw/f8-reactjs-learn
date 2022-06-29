### SPA - Single-Page Application

- ReactJS là 1 trong những thư viện tạo ra SPA
- Các "Ông lớn" sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác: F8, Shoppe, 30shine, chotot, zingmp3

## Cách triển khai
- SPA - Single-Page Application -> CSR -> Client side rendering (render trên trình duyệt)
- MPA - Multi-Page Application -> SSR -> server side rendering (server đã trả về đủ dữ liệu)

---

## Sự khác biệt

### SPA
- Được cho là cách tiếp cận hiện đại hơn (Trending)
- Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA
-Là cách tiếp cận cổ điển hơn
-Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển trang,...)

## Demo

---

## So sánh

### Tốc độ
- SPA nhanh hơn khi sử dụng
    - Phần lớn tài nguyên được tải trong lần đầu
    - Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng
    - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bóc tách
- SPA có phần Front-end riêng biệt
- MPA front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án

### SEO
- SPA không thân thiện với SEO như MPA
- Trải nghiệm trên thiết bị di động tốt hơn

### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn

### Quá trình phát triển
- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE & BE
    - Chia team phát triển song song
    -Phát triển thêm mobile app dễ dàng

### Phụ thuộc Javascript
- SPA phụ thuộc hoàn toàn vào Javascript
- MPA có thể không cần Javascript

## Chọn SPA hay MPA
- Không có gì luôn hoàn hảo trong mọi trường hợp

### Perfomance
- SPA giảm tải cho server vì việc render dữ liệu là client làm, trình duyệt đọc Script và tự render giao diện
- MPA thì mọi request đều đổ lên server và mọi thao tác chuyển trang đều phải request lên server làm tăng tải server, ta sẽ tốn chi phí nhiều hơn về máy chủ, hạ tầng

