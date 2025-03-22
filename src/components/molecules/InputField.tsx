import { Input } from "../atoms/Input";
import { ReactNode } from "react";
interface InputFieldProps {
    children: ReactNode;
    id: string;
}

export const InputField = ({ children, id }: InputFieldProps) => {
    return (
        <label htmlFor={id}>
            <p className="text-sm font-medium">{children}</p>
            <Input id={id} />
        </label>
    )
}