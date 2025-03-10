import { Video } from "../atoms/Video";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Home = () => {
    return (
        <>
            <DefaultLayout>
                <Video />
            </DefaultLayout>
        </>
    )
}