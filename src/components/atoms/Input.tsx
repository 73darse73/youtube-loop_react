import { ChangeEvent } from "react";

interface InputProps {
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;   
}

export const Input = ({ id, onChange }: InputProps) => {
    return <input type="text" id={id} className="w-full border border-gray-300 rounded-md p-2" onChange={onChange} />;
};
