import React from "react";

type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    <article className="p-3 sm:p-4 border border-[#e4e6eb] rounded-lg bg-white">
      <h3 className="m-0 mb-2 text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-blue-800">
        {title}
      </h3>
      {description && (
        <p className="m-0 text-[25px] sm:text-[25px] md:text-[26px] text-gray-500">
          {description}
        </p>
      )}
    </article>
  );
}
