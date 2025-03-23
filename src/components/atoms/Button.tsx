import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({children, onClick}: ButtonProps) => {
    return <button className="bg-blue-500 text-white p-2 rounded-md" onClick={onClick}>{children}</button>;
}