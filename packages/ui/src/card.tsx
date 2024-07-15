import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border border-blue-300 p-4 bg-blue-50 rounded-lg shadow-md">
      <h1 className="text-lg text-blue-700 border-b border-blue-200 pb-2 mb-2">
        {title}
      </h1>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}
