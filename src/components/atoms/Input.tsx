import { ChangeEvent } from "react";

interface InputProps {
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;   
    type: 'text' | 'number';
}

export const Input = ({ id, onChange, type }: InputProps) => {
    return <input type={type} id={id} className="w-full border border-gray-300 rounded-md p-2" onChange={onChange} />;
};
