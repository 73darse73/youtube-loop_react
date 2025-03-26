import { useEffect, useState } from "react";

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
    }
}

interface VideoProps {
    videoId: string;
    startTime: number;
    endTime: number;
}

export const Video = ({ videoId, startTime, endTime }: VideoProps) => {
    const [player, setPlayer] = useState<YT.Player | null>(null);
    console.log(videoId, startTime, endTime);

    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }, []);
    

    function onPlayerStateChange(event: YT.OnStateChangeEvent) {
        // 動画が終了したときの処理
        if (event.data === YT.PlayerState.ENDED) {
            // 開始時間に戻って再生
            event.target.seekTo(startTime, true);
            console.log(videoId, startTime, endTime);
            
            event.target.playVideo();
        }
    }

    function onPlayerReady(event: YT.PlayerEvent) {
        event.target.playVideo();
    }

    useEffect(() => {
        if (!player) {
            window.onYouTubeIframeAPIReady = () => {
                const newPlayer = new YT.Player("player", {
                    width: '100%',
                    height: '100%',
                    videoId: videoId,
                    playerVars: {
                        playsinline: 1,
                        start: startTime,
                        end: endTime,
                    },
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange
                    },
                });
                setPlayer(newPlayer);
            };
        } else {
            player.loadVideoById({
                videoId: videoId,
                startSeconds: startTime,
                endSeconds: endTime
            });
        }

        return () => {
            player?.destroy();
        };
    }, [videoId, startTime, endTime]);

    return (
        <div className="w-full max-w-[1280px] mx-auto aspect-video">
            <div id="player" className="w-full h-full" />
        </div>
    );
};