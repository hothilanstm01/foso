"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { MenuItem, menuList } from "@/data/menuData";

// Hàm tìm menu theo `key`
const findMenuItem = (
  key: string,
  list: MenuItem[] = menuList
): MenuItem | null => {
  for (const item of list) {
    if (item.key === key) return item;
    if (item.children) {
      const found = findMenuItem(key, item.children);
      if (found) return found;
    }
  }
  return null;
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const pathParts = pathname
    .split("/")
    .filter((part) => part && part !== "detail");

  return (
    <nav className="breadcrumb flex items-center gap-2 text-[0.875rem]">
      <Link href="/" className="text-[#17181A] hover:text-[#1AD598] transition">
        Trang chủ
      </Link>
      {pathParts.map((part, index) => {
        const menu = findMenuItem(part);
        const label = menu ? menu.label : decodeURIComponent(part);
        const url = "/" + pathParts.slice(0, index + 1).join("/");
        const isLast = index === pathParts.length - 1 && !name; // Kiểm tra phần cuối

        return (
          <span key={url} className=" text-[0.875rem]">
            {" > "}
            {isLast ? (
              <span className="text-[#050505] font-semibold">{label}</span>
            ) : (
              <Link
                href={url}
                className="text-[#17181A] hover:text-[#1AD598] transition"
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
      {name && (
        <span className=" text-[#050505] font-semibold">
          {" > "} {decodeURIComponent(name)}
        </span>
      )}
    </nav>
  );
};

export default Breadcrumb;
