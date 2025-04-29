import { useEffect, useRef, useState, FC } from "react";
import WaveSurfer from "wavesurfer.js";

type AudioPlayerProps = {
    src: string;
    waveColor?: string;
    progressColor?: string;
    cursorColor?: string;
    barWidth?: number;
    barRadius?: number;
    barGap?: number;
    height?: number;
    className?: string;
    playbackSpeeds?: number[];
    onPlay?: () => void;
    onPause?: () => void;
};

const AudioPlayer: FC<AudioPlayerProps> = ({
    src,
    waveColor = "#a3aed0",
    progressColor = "#3311db",
    cursorColor = "blue",
    barWidth = 2,
    barRadius = 2,
    barGap = 1,
    height = 100,
    className = "",
    playbackSpeeds = [1, 1.5, 2],
    onPlay,
    onPause,
}) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);

    useEffect(() => {
        if (!waveformRef.current) return;

        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor,
            progressColor,
            barWidth,
            barGap,
            barRadius,
            height,
            normalize: true,
            audioRate: playbackSpeeds[0],
        });

        wavesurfer.current = ws;

        ws.load(src);

        ws.on("ready", () => {
            ws.play();
            onPlay?.();
        });

        ws.on("error", (e) => {
            console.error("WaveSurfer error:", e);
        });

        return () => {
            ws.destroy(); // cleanup
        };
    }, [src]);


    return (
        <div
            className={`flex w-full flex-col items-center rounded-lg p-4 ${className}`}
        >
            <div ref={waveformRef} className="my-2 w-full " />
        </div>
    );
};

export default AudioPlayer;