import { forwardRef, useState, useEffect } from "react";

interface VidoComponentProps {
	isPlaying: boolean;
	onClick: () => void;
	source: string;
}

const VideoFrame = forwardRef(function VideoPlayer(
	{ isPlaying, onClick, source }: VidoComponentProps,
	ref
) {
	const [videoSrc, setVideoSrc] = useState(source);

	useEffect(() => {
		//ref.current?.load();
		//ref.current.src = source;
		setVideoSrc(source);
		console.log("called with new url: ", source);
	}, [source]);

	return (
		<video ref={ref} autoPlay={isPlaying} onClick={onClick}>
			<source src={videoSrc} type="video/mp4" />
		</video>
	);
});

export default VideoFrame;
