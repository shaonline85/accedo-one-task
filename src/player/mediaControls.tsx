import nextSVG from "../assets/next.svg";
import previousSVG from "../assets/previous.svg";
import playSVG from "../assets/play.svg";
import pauseSVG from "../assets/pause.svg";
import backwardSVG from "../assets/backward.svg";
import forwardSVG from "../assets/forward.svg";

type controlsProps = {
	onPrevious: () => void;
	onNext: () => void;
	onPlayPause: () => void;
	onForward: () => void;
	onBackward: () => void;
	isPlaying: boolean;
	isDisabled?: boolean;
};

const MediaControls = ({
	onPlayPause,
	onPrevious,
	onBackward,
	onForward,
	onNext,
	isPlaying,
	isDisabled,
}: controlsProps) => {
	return (
		<div className="videoControls">
			<button onClick={onPrevious} disabled={isDisabled}>
				<img src={previousSVG} />
			</button>
			<button onClick={onBackward}>
				<img src={backwardSVG} />
			</button>
			<button onClick={onPlayPause}>
				{isPlaying ? <img src={pauseSVG} /> : <img src={playSVG} />}
			</button>
			<button onClick={onForward}>
				<img src={forwardSVG} />
			</button>
			<button onClick={onNext} disabled={isDisabled}>
				<img src={nextSVG} />
			</button>
		</div>
	);
};

export default MediaControls;
