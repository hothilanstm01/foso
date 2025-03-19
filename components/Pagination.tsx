"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Tổng số trang
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1; // Trang hiện tại

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Không cho đi quá giới hạn

    window.scrollTo({ top: 0, behavior: "smooth" });

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`); // Chặn load lại trang
  };

  // Hàm tạo danh sách trang số
  const getPaginationRange = () => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const range: (number | string)[] = [];
    range.push(1, 2, 3);

    if (currentPage > 6) range.push("...");

    const middleStart = Math.max(4, currentPage - 1);
    const middleEnd = Math.min(totalPages - 3, currentPage + 1);

    for (let i = middleStart; i <= middleEnd; i++) {
      range.push(i);
    }

    if (currentPage < totalPages - 5) range.push("...");

    range.push(totalPages - 2, totalPages - 1, totalPages);

    return range;
  };

  return (
    <div className="flex items-center justify-between space-x-2 mt-4 text-[1rem] font-semibold">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border flex items-center gap-2 ${
          currentPage === 1
            ? "text-[#B3C5D4] cursor-not-allowed"
            : "text-[#4D5F6E]  hover:text-[#052B1E]"
        }`}
      >
        ← <span>Trang trước</span>
      </button>

      <div className="flex space-x-1">
        {getPaginationRange().map((page, index) =>
          typeof page === "string" ? (
            <span key={`dots-${index}`} className="px-3 py-1">
              {page}
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border ${
                page === currentPage
                  ? "bg-[#D1F7EA] text-[#052B1E] rounded-lg p-3"
                  : " text-[#809FB8] hover:text-[#052B1E]"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border flex gap-2 items-center ${
          currentPage === totalPages
            ? "text-[#B3C5D4] cursor-not-allowed"
            : "text-[#4D5F6E]  hover:text-[#052B1E]"
        }`}
      >
        <span>Trang kế tiếp</span> →
      </button>
    </div>
  );
};

export default Pagination;
