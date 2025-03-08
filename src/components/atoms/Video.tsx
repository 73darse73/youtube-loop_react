import { useEffect, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export const Video = () => {
    const [player, setPlayer] = useState<YT.Player | null>(null);

    useEffect(() => {
        // YouTube APIのスクリプトを動的に追加（初回のみ）
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // グローバル関数として定義
        window.onYouTubeIframeAPIReady = () => {
        const newPlayer = new YT.Player("player", {
            height: "390",
            width: "640",
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
        // クリーンアップ（必要ならプレイヤーを破棄）
        player?.destroy();
        };
    }, []);

    function onPlayerReady(event: YT.PlayerEvent) {
        event.target.playVideo();
    }

    return <div id="player"></div>;
};