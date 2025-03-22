import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({children}: ButtonProps) => {
    return <button className="bg-blue-500 text-white p-2 rounded-md">{children}</button>;
}