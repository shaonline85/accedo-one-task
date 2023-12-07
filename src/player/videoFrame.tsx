import { forwardRef, useState, useEffect, ForwardedRef } from "react";

type VidoComponentProps = {
	isPlaying: boolean;
	onClick: () => void;
	source: string;
};

const VideoFrame = forwardRef(function VideoPlayer(
	{ isPlaying, onClick, source }: VidoComponentProps,
	ref: ForwardedRef<HTMLVideoElement | null>
) {
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [progress, setProgress] = useState(0);

	const updateProgress = () => {
		if (ref && ref.current) {
			const video = ref.current;
			const currentTime = video.currentTime;
			const duration = video.duration;
			const progress = (currentTime / duration) * 100;
			setCurrentTime(currentTime);
			setDuration(duration);
			setProgress(progress);
		}
	};

	const seekTo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		if (ref && ref.current) {
			const video = ref.current;
			const seekTime =
				(e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * video.duration;
			video.currentTime = seekTime;
		}
	};

	useEffect(() => {
		const video = ref?.current;
		if (video) {
			video.src = source;
			if (isPlaying) {
				video.play();
			}
		}
	}, [source, ref]);

	useEffect(() => {
		const video = ref?.current;
		updateProgress();
	}, [currentTime, duration]);

	return (
		<>
			<div className="skeleton" onClick={onClick}>
				<video
					ref={ref}
					onClick={onClick}
					onTimeUpdate={updateProgress}
				></video>
				<div className="progress" onClick={seekTo}>
					<div className="progress-bar" style={{ width: `${progress}%` }} />
				</div>
			</div>
		</>
	);
});

export default VideoFrame;
