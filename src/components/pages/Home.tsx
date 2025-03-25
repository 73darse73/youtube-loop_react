import { Video } from "../atoms/Video";
import { DefaultLayout } from "../templates/DefaultLayout";
import { InputField } from "../molecules/InputField";
import { Button } from "../atoms/Button";

import { useState, ChangeEvent } from "react";

export const Home = () => {
    const [inputUrl, setInputUrl] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [videoId, setVideoId] = useState("");
    const [appliedStartTime, setAppliedStartTime] = useState(0);
    const [appliedEndTime, setAppliedEndTime] = useState(0);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    }

    const handleStartTime = (e: ChangeEvent<HTMLInputElement>) => {
        setStartTime(Number(e.target.value));
    }

    const handleEndTime = (e: ChangeEvent<HTMLInputElement>) => {
        setEndTime(Number(e.target.value));
    }

    const execution = () => {
        try {
            let id = '';
            if (inputUrl.includes('youtube.com/watch')) {
                // https://www.youtube.com/watch?v=VIDEO_ID 形式
                const url = new URL(inputUrl);
                id = url.searchParams.get('v') || '';
            } else if (inputUrl.includes('youtu.be/')) {
                // https://youtu.be/VIDEO_ID 形式
                const parts = inputUrl.split('youtu.be/');
                id = parts[1]?.split('?')[0] || '';
            } else if (inputUrl.includes('youtube.com/embed/')) {
                // https://www.youtube.com/embed/VIDEO_ID 形式
                const parts = inputUrl.split('embed/');
                id = parts[1]?.split('?')[0] || '';
            }

            if (!id) {
                alert('有効なYouTube URLを入力してください。');
                return;
            }

            setVideoId(id);
            setAppliedStartTime(startTime);
            setAppliedEndTime(endTime);
        } catch (error) {
            alert('URLの解析中にエラーが発生しました。');
            console.error(error);
        }
    }

    return (
        <>
            <DefaultLayout>
                <Video 
                    videoId={videoId} 
                    startTime={appliedStartTime} 
                    endTime={appliedEndTime} 
                />
                <InputField id="url" type="text" onChange={handleInput}>
                    URL
                </InputField>
                <InputField id="start-time" type="number" onChange={handleStartTime}>
                    開始時間
                </InputField>
                <InputField id="end-time" type="number" onChange={handleEndTime}>
                    終了時間
                </InputField>
                <Button onClick={execution}>実行</Button>
            </DefaultLayout>
        </>
    )
}