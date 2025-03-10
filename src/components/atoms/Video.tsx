import { useEffect, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export const Video = () => {
    const [player, setPlayer] = useState<YT.Player | null>(null);

    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            const newPlayer = new YT.Player("player", {
                width: '100%',
                height: '100%',
                videoId: "M7lc1UVf-VE",
                playerVars: {
                    playsinline: 1,
                },
                events: {
                    onReady: onPlayerReady,
                },
            });
            setPlayer(newPlayer);
        };

        return () => {
            player?.destroy();
        };
    }, []);

    function onPlayerReady(event: YT.PlayerEvent) {
        event.target.playVideo();
    }

    return (
        <div className="w-full max-w-[1280px] mx-auto aspect-video">
            <div id="player" className="w-full h-full" />
        </div>
    );
};