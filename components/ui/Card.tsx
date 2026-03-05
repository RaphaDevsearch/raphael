import React from "react";

type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    <article className="bg-white border border-[#E4E6EB] rounded-xl p-4">
      <h3 className="m-0 mb-2 text-[20px] font-semibold text-[#050505]">
        {title}
      </h3>
      {description && (
        <p className="m-0 text-[16px] text-[#65676B]">{description}</p>
      )}
    </article>
  );
}
