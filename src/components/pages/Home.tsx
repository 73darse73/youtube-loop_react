import { Video } from "../atoms/Video";
import { DefaultLayout } from "../templates/DefaultLayout";
import { InputField } from "../molecules/InputField";

export const Home = () => {
    return (
        <>
            <DefaultLayout>
                <Video />
                <InputField>
                    URL
                </InputField>
            </DefaultLayout>
        </>
    )
}