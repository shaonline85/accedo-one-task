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
	const [isLoading, setIsLoading] = useState(true);
	let forwardedRef = ref;

	function handleLoading() {
		setIsLoading(false);
	}

	useEffect(() => {
		if (forwardedRef) {
			forwardedRef.current.src = source;
			if (isPlaying) forwardedRef.current.play();
		}
	}, [source]);

	return (
		<>
			{!isLoading ? (
				<video
					ref={forwardedRef}
					onClick={onClick}
					onLoadedData={handleLoading}
				>
					<source src={source} type="video/mp4" />
				</video>
			) : (
				<video ref={ref} className="skeleton" onClick={onClick}>
					<source src={source} type="video/mp4" />
				</video>
			)}
		</>
	);
});

export default VideoFrame;
