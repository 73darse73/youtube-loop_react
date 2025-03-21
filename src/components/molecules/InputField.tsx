import { Input } from "../atoms/Input";

type InputFieldProps = {
    children: React.ReactNode;
}

export const InputField = ({ children }: InputFieldProps) => {
    return (
        <label htmlFor="url">
            <p className="text-sm font-medium">{children}</p>
            <Input id="url" />
        </label>
    )
}