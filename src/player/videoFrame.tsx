import { forwardRef, useEffect } from "react";

interface VidoComponentProps {
	ref: any;
	isPlaying: boolean;
	onClick: () => void;
	src: string;
}

const VideoFrame = forwardRef(function VideoPlayer(
	{ isPlaying, onClick, src }: VidoComponentProps,
	ref
) {
	useEffect(() => {
		ref.current?.load();
		console.log("yap");
	}, [src]);

	return (
		<video ref={ref} autoPlay={isPlaying} onClick={onClick}>
			<source src={src} type="video/mp4" />
		</video>
	);
});

export default VideoFrame;
