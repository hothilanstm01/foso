import React from "react";

type ButtonTagProps = {
  text: string;
  background?: string;
  color?: string;
};
const ButtonTag = ({ text, background, color }: ButtonTagProps) => {
  function getBG(background: string | undefined): string {
    const bgColors: Record<string, string> = {
      primary: "bg-[#E2F0FE] hover:bg-[#c5e0fc] focus:bg-[#c5e0fc]",
      disabled:
        "bg-[#cacaca] hover:bg-[#bababa] focus:bg-[#acacac] cursor-not-allowed",
      transparent: "bg-transparent",
    };

    return bgColors[background ?? "transparent"] || "bg-transparent";
  }

  function getColor(color: string | undefined): string {
    const textColors: Record<string, string> = {
      blue: "text-[#0F4F9E]",
      disabled:
        "text-[#cacaca] hover:text-[#bababa] focus:text-[#acacac] cursor-not-allowed",
      transparent: "text-transparent",
    };

    return textColors[color ?? "transparent"] || "text-transparent";
  }

  return (
    <button
      className={` ${getBG(background)} ${getColor(color)}
    w-fit cursor-pointer font-medium text-[0.75rem]/[1.125rem ] rounded-[0.5rem] px-2 py-1 inline-block
    `}
    >
      {text}
    </button>
  );
};

export default ButtonTag;
