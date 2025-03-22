import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600">
        Oops! Trang bạn tìm kiếm không tồn tại.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}
