import { Video } from "../atoms/Video";
import { DefaultLayout } from "../templates/DefaultLayout";
import { InputField } from "../molecules/InputField";
import { Button } from "../atoms/Button";

export const Home = () => {
    return (
        <>
            <DefaultLayout>
                <Video />
                <InputField id="url">
                    URL
                </InputField>
                <InputField id="start-time">
                    開始時間
                </InputField>
                <InputField id="end-time">
                    終了時間
                </InputField>
                <Button>実行</Button>
            </DefaultLayout>
        </>
    )
}