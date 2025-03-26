import { ChangeEvent, useState } from "react";
import { InputField } from "./InputField";
import { Button } from "../atoms/Button";

export interface FormValues {
    inputUrl: string;
    startTime: number;
    endTime: number;
}

interface InputFormProps {
    onSubmit: (values: FormValues) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
    const [inputUrl, setInputUrl] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    }

    const handleStartTime = (e: ChangeEvent<HTMLInputElement>) => {
        setStartTime(Number(e.target.value));
    }

    const handleEndTime = (e: ChangeEvent<HTMLInputElement>) => {
        setEndTime(Number(e.target.value));
    }

    const handleSubmit = () => {
        onSubmit({ inputUrl, startTime, endTime });
    }

    return (
        <div className="space-y-4">
            <InputField id="url" type="text" onChange={handleInput}>
                URL
            </InputField>
            <InputField id="start-time" type="number" onChange={handleStartTime}>
                開始時間
            </InputField>
            <InputField id="end-time" type="number" onChange={handleEndTime}>
                終了時間
            </InputField>
            <Button onClick={handleSubmit}>実行</Button>
        </div>
    );
} 