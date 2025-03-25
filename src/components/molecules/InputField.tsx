import { Input } from "../atoms/Input";
import { ReactNode, ChangeEvent } from "react";

interface InputFieldProps {
    children: ReactNode;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: 'text' | 'number';
}

export const InputField = ({ children, id, onChange, type }: InputFieldProps) => {
    return (
        <label htmlFor={id}>
            <p className="text-sm font-medium">{children}</p>
            <Input id={id} onChange={onChange} type={type} />
        </label>
    )
}