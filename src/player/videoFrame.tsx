interface VidoComponentProps {
	ref: any;
	isPlaying: boolean;
	onClick: () => void;
	src: string;
}

import { forwardRef } from "react";

const VideoFrame = forwardRef(function VideoPlayer(
	{ isPlaying, onClick, src }: VidoComponentProps,
	ref
) {
	return (
		<video key={src} ref={ref} autoPlay={isPlaying} onClick={onClick}>
			<source src={src} type="video/mp4" />
		</video>
	);
});

export default VideoFrame;
