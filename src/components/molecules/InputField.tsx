import { Input } from "../atoms/Input";
import { ReactNode, ChangeEvent } from "react";

interface InputFieldProps {
    children: ReactNode;
    id: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ children, id, onChange }: InputFieldProps) => {
    return (
        <label htmlFor={id}>
            <p className="text-sm font-medium">{children}</p>
            <Input id={id} onChange={onChange} />
        </label>
    )
}