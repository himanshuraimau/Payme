// SidebarItem.tsx
"use client";
import React from 'react';

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, title, className }) => {
  return (
    <a href={href} className={`flex items-center space-x-2 px-4 py-2 rounded-md text-gray-900 hover:bg-blue-100 hover:text-blue-700 ${className}`}>
      {icon}
      <span>{title}</span>
    </a>
  );
};
