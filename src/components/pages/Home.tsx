import { Video } from "../atoms/Video";
import { DefaultLayout } from "../templates/DefaultLayout";
import { InputForm, FormValues } from "../molecules/InputForm";

import { useState } from "react";

export const Home = () => {
    const [videoId, setVideoId] = useState("");
    const [appliedStartTime, setAppliedStartTime] = useState(0);
    const [appliedEndTime, setAppliedEndTime] = useState(0);

    const handleFormSubmit = (values: FormValues) => {
        try {
            let id = '';
            if (values.inputUrl.includes('youtube.com/watch')) {
                // https://www.youtube.com/watch?v=VIDEO_ID 形式
                const url = new URL(values.inputUrl);
                id = url.searchParams.get('v') || '';
            } else if (values.inputUrl.includes('youtu.be/')) {
                // https://youtu.be/VIDEO_ID 形式
                const parts = values.inputUrl.split('youtu.be/');
                id = parts[1]?.split('?')[0] || '';
            } else if (values.inputUrl.includes('youtube.com/embed/')) {
                // https://www.youtube.com/embed/VIDEO_ID 形式
                const parts = values.inputUrl.split('embed/');
                id = parts[1]?.split('?')[0] || '';
            }

            if (!id) {
                alert('有効なYouTube URLを入力してください。');
                return;
            }

            setVideoId(id);
            setAppliedStartTime(values.startTime);
            setAppliedEndTime(values.endTime);
        } catch (error) {
            alert('URLの解析中にエラーが発生しました。');
            console.error(error);
        }
    };

    return (
        <DefaultLayout>
            {videoId && (
                <Video 
                    videoId={videoId} 
                    startTime={appliedStartTime} 
                    endTime={appliedEndTime} 
                />
            )}
            <InputForm onSubmit={handleFormSubmit} />
        </DefaultLayout>
    );
};