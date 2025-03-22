interface InputProps {
    id: string;
}

export const Input = ({ id }: InputProps) => {
    return <input type="text" id={id} className="w-full border border-gray-300 rounded-md p-2" />;
};
