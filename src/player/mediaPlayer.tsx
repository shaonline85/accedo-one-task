import React, { useState, useEffect, useRef } from "react";
import data from "./mockData";

import nextSVG from "../assets/next.svg";
import previousSVG from "../assets/previous.svg";
import playSVG from "../assets/play.svg";
import pauseSVG from "../assets/pause.svg";
import backwardSVG from "../assets/backward.svg";
import forwardSVG from "../assets/forward.svg";
import trashSVG from "../assets/trash.svg";

interface Media {
	id: number;
	url: string;
}

const MediaPlayer: React.FC = () => {
	const [playlist, setPlaylist] = useState<Media[]>(data);
	const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);

	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [newUrl, setNewUrl] = useState<string>("");

	const videoRef = useRef<HTMLVideoElement>(null);

	const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewUrl(event.target.value);
	};

	const handleAddMedia = () => {
		if (newUrl.trim() !== "") {
			const id = playlist.length + 1;
			setPlaylist((currList) => [...currList, { id, url: newUrl }]);
			setNewUrl("");
		}
	};

	const handleRemoveMedia = (id: number) => {
		setPlaylist((currList) => currList.filter((obj) => obj.id !== id));
	};

	const handleNext = () => {
		setCurrentMediaIndex((currIndex) => {
			const newIndex = currIndex + 1;
			return newIndex > playlist.length - 1 ? 0 : newIndex;
		});
	};

	const handlePrevious = () => {
		setCurrentMediaIndex((currIndex) => {
			const newIndex = currIndex - 1;
			return newIndex < 0 ? playlist.length - 1 : newIndex;
		});
	};

	const handleFastForward = () => {
		if (videoRef.current) {
			videoRef.current.currentTime += 10;
		}
	};

	const handleRewind = () => {
		if (videoRef.current) {
			videoRef.current.currentTime -= 10;
		}
	};

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	useEffect(() => {}, [currentMediaIndex, playlist]);

	return (
		<>
			{playlist.length > 0 ? (
				<>
					<div className="media-player">
						<div className="playlist">
							{playlist.map((media, index) => {
								return (
									<div key={media.id}>
										{index === currentMediaIndex ? (
											<strong>{media.url}</strong>
										) : (
											<span>{media.url}</span>
										)}

										<button
											onClick={() => handleRemoveMedia(media.id)}
											className="noStyleButton"
										>
											<img src={trashSVG} />
										</button>
									</div>
								);
							})}
						</div>
						<input
							type="text"
							value={newUrl}
							onChange={handleUrlChange}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									handleAddMedia();
								}
							}}
							style={{ width: "500px", height: "30px", marginBottom: "10px" }}
						/>
						<button onClick={handleAddMedia}>Submit</button>
						<div className="video-player">
							<video
								key={playlist[currentMediaIndex].id}
								ref={videoRef}
								autoPlay={isPlaying ? true : false}
								onClick={handlePlayPause}
							>
								{playlist.length > 0 &&
									currentMediaIndex >= 0 &&
									currentMediaIndex < playlist.length && (
										<source
											src={playlist[currentMediaIndex].url}
											type="video/mp4"
										/>
									)}
							</video>

							<button onClick={handlePrevious}>
								<img src={previousSVG} />
							</button>
							<button onClick={handleRewind}>
								<img src={backwardSVG} />
							</button>
							<button onClick={handlePlayPause}>
								{isPlaying ? <img src={pauseSVG} /> : <img src={playSVG} />}
							</button>
							<button onClick={handleFastForward}>
								<img src={forwardSVG} />
							</button>
							<button onClick={handleNext}>
								<img src={nextSVG} />
							</button>
						</div>
					</div>
				</>
			) : (
				<>no playslist</>
			)}
		</>
	);
};

export default MediaPlayer;
