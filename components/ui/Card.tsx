import React from "react";

type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    <article className="p-3 sm:p-4 border border-[#e4e6eb] rounded-lg bg-white">
      <h3 className="m-0 mb-2 text-sm sm:text-base font-semibold text-gray-900">
        {title}
      </h3>
      {description && (
        <p className="m-0 text-xs sm:text-sm text-[#65676b]">
          {description}
        </p>
      )}
    </article>
  );
}
