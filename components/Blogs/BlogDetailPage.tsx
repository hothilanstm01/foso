import React from "react";
import ButtonTag from "../common/ButtonTag";
import BannerAside from "./BannerAside";

const BlogDetailPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_22.875rem] gap-6 my-[3rem]">
      {/* MAIN CONTENT */}
      <main className="pr-6">
        <div className="flex flex-col gap-4">
          <ButtonTag
            text="Quản lý sản xuất"
            color="blue"
            background="primary"
          />
          <h1 className="text-[#050505] font-extrabold  capitalize text-[2.25rem]">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </h1>
          <div className="flex items-center justify-between">
            {/* tacgia */}
            <div className="flex items-center gap-3">
              <div className="rounded-full w-[4rem] h-[4rem] bg-white border border-[#F1F5F7] flex items-center justify-center text-center">
                <img src="/icons/logo-main.svg" alt="" />
              </div>
              <div>
                <p className="text-[#667F93] font-medium text-[0.875rem]/[1.3125rem]">
                  Tác giả
                </p>
                <p className="text-[#33404A] font-bold text-[1rem]/[1.5rem]">
                  FOSO Creator
                </p>
              </div>
            </div>
            {/* time */}
            <div className="flex items-center gap-6 text-[#667F93] text-[1rem]/[1.5rem] font-medium">
              <div className="flex items-center gap-2">
                <img src="/icons/CalendarBlank.svg" alt="" />{" "}
                <span>Cập nhật vào: 17/11/2022</span>
              </div>

              <div className="w-px h-4 bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <img src="/icons/Clock.svg" alt="" /> <span>10 phút đọc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-center mb-6">
            <img
              src="/images/description-img1.png"
              alt="blog-detailimg"
              className="w-full mb-2"
            />
            <p className="text-[#667F93] text-[1rem]/[1.5rem]">
              Quy trình 5s là gì?
            </p>
          </div>
          <div className="flex gap-0.5 px-4 py-3 relative mb-6">
            <img
              src="/icons/lankhung.svg"
              alt="“"
              className="absolute top-0 left-2"
            />
            <p className="text-[#33404A] text-[1.25rem]/[1.5rem] font-medium italic text-center px-[2.8rem]">
              Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
              dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho
              bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên
              thành công của quy trình bạn nhé.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-[1rem] font-medium pl-2">
              <h3 className="text-[#15AA7A] font-extrabold ">
                1. Quy trình 5S là gì?
              </h3>
              <p className="text-[#231F20] mt-4">
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản.
              </p>
              <p className="text-[#231F20] mt-4">
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
                dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5
                chữ S đầu trong tiếng Nhật:
              </p>
              <ul className="list-disc pl-6 mt-4 text-[#15AA7A]">
                <li>
                  Seiri <span className="text-[#231F20]">(Ngăn nắp)</span>
                </li>
                <li>
                  Seiso <span className="text-[#231F20]">(Sạch sẽ)</span>
                </li>
                <li>
                  Seiton <span className="text-[#231F20]">(Trật tự)</span>
                </li>
                <li>
                  Shitsuke <span className="text-[#231F20]">(Kỷ luật)</span>
                </li>
                <li>
                  Seiketsu{" "}
                  <span className="text-[#231F20]">(Tiêu chuẩn hóa)</span>
                </li>
              </ul>
              <h3 className="text-[#15AA7A] font-extrabold mt-6">
                2. Lợi ích quy trình 5S đem lại
              </h3>
              <p className="text-[#231F20] mt-4">
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải thiện môi trường làm
                việc của doanh nghiệp.
              </p>
              <p className="text-[#231F20] mt-4">
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng
                sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần
                thiết.
              </p>
              <p className="text-[#231F20] mt-4">
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
                quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
                một văn hóa doanh nghiệp tích cực.
              </p>
            </div>
            <div className="text-center ">
              <img
                src="/images/description-img2.png"
                alt="blog-detailimg"
                className="w-full mb-2"
              />
              <p className="text-[#667F93] text-[1rem]/[1.5rem]">
                Tại sao doanh nghiệp cần quy trình 5S?
              </p>
            </div>
            <div>Đang tải...</div>
          </div>
        </div>
      </main>

      {/* 🔹 SIDEBAR */}
      <aside className="">
        <h2 className="text-2xl font-bold mb-[1.5rem]">Nội dung bài viết</h2>

        {/* catalog */}
        <div className="my-8">Đang tải...</div>

        {/* 📢 Banner */}
        <BannerAside />
      </aside>
    </div>
  );
};

export default BlogDetailPage;
