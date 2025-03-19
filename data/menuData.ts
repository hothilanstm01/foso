export interface MenuItem {
  key: string;
  label: string;
  path: string;
  children?: MenuItem[];
}
export const menuList: MenuItem[] = [
  { key: "about", label: "Về Chúng Tôi", path: "/about" },
  {
    key: "solutions",
    label: "Giải Pháp",
    path: "/solutions",
    children: [
      { key: "services", label: "Dịch Vụ", path: "/solutions/services" },
    ],
  },
  {
    key: "resources",
    label: "Tài Nguyên",
    path: "/resources",
    children: [{ key: "blog", label: "Blog", path: "/resources/blog" }],
  },
  { key: "contact", label: "Liên Hệ", path: "/contact" },
];
