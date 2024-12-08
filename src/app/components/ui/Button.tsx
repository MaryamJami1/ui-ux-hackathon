import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "icon";
  className?: string;
  variant?: string; // Added the 'variant' property
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = "medium", 
  className, 
  variant,
  ...props 
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`rounded bg-blue-500 text-white hover:bg-blue-600 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
