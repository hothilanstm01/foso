import React from "react";

const BannerAside = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className=" bg-gradient-blue text-white rounded-3xl py-[2.35rem] flex flex-col items-center ">
        <img
          src="/images/laptop.png"
          alt="MRP Dashboard"
          className="w-full  mb-[1.88rem] pt-6"
        />
        <div className="p-6">
          <div className="flex items-center gap-[0.94rem]">
            <img src="/images/Rectangle.png" alt="MRP Beta" className="" />
            <div className="flex flex-col items-end gap-3">
              <p className="text-xl leading-[1.875rem] font-bold whitespace-nowrap">
                Miễn phí dùng thử
              </p>
              <div className="w-[9.67925rem] ">
                <img src="/images/mrg.png" alt="" className="" />
              </div>
            </div>
          </div>

          <button className="group mt-[3.59rem] flex items-center justify-between w-full border-[1.5px] border-white border-solid px-5 py-2 rounded-[2.5rem] text-[0.875rem]/[1.3125rem] font-bold hover:bg-white hover:text-black transition">
            Trải Nghiệm Ngay{" "}
            <span className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                  fill="white"
                  className="group-hover:fill-black transition"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className=" bg-gradient-blue text-white rounded-3xl pt-[2.32rem] pb-8">
        <img
          src="/images/image-nocut.png"
          alt="Miễn phí dùng thử"
          className="w-full"
        />
        <div className="p-6 flex flex-col gap-6">
          <div className="text-[1.25rem]/[1.875rem] font-bold">
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </div>
          <button className="group capitalize flex items-center justify-between w-full border-[1.5px] border-white border-solid px-5 py-2 rounded-[2.5rem] text-[0.875rem]/[1.3125rem] font-bold hover:bg-white hover:text-black transition">
            tham gia ngay{" "}
            <span className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                  fill="white"
                  className="group-hover:fill-black transition"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerAside;
