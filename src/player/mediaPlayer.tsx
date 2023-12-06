import React, { useState, useEffect, useRef } from "react";
import data from "./mockData";
import { Media } from "../types/index";
import PlayList from "./playList";
import UrlInput from "./urlInput";
import VideoFrame from "./videoFrame";
import VidoeControls from "./mediaControls";

const MediaPlayer: React.FC = () => {
	const [playlist, setPlaylist] = useState<Media[]>(data);
	const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(0);
	const [videoUrl, setVideoUrl] = useState(playlist[currentMediaIndex].url);
	const [videoKey, setVideoKey] = useState(playlist[currentMediaIndex].id);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [newUrl, setNewUrl] = useState<string>("");

	let videoRef = useRef<HTMLVideoElement>(null);

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
		console.log("id", id);
		console.log("currentMediaIndex", currentMediaIndex);
		// Need to fix
		// if (id - 1 === currentMediaIndex) {
		// 	setCurrentMediaIndex((currIndex) =>
		// 		currIndex + 1 > playlist.length - 1
		// 			? playlist.length - 1
		// 			: currIndex + 1
		// 	);
		// }

		setPlaylist((currList) => currList.filter((obj) => obj.id !== id));
	};

	const handleNext = () => {
		setCurrentMediaIndex((currIndex) => {
			const newIndex = currIndex + 1;
			return newIndex > playlist.length - 1 ? 0 : newIndex;
		});
		//setVideoUrl(playlist[currentMediaIndex].url);
	};

	const handlePrevious = () => {
		setCurrentMediaIndex((currIndex) => {
			const newIndex = currIndex - 1;
			return newIndex < 0 ? playlist.length - 1 : newIndex;
		});
		//setVideoUrl(playlist[currentMediaIndex].url);
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

	useEffect(() => {
		setVideoUrl(playlist[currentMediaIndex].url);
		setVideoKey(playlist[currentMediaIndex].id);
	}, [currentMediaIndex, playlist]);

	return (
		<>
			{playlist.length > 0 ? (
				<>
					<div className="media-player">
						<div className="playlist">
							<PlayList
								list={playlist}
								onRemove={handleRemoveMedia}
								activeIndex={currentMediaIndex}
							/>
						</div>
						<UrlInput
							onAddUrl={handleAddMedia}
							onChange={handleUrlChange}
							value={newUrl}
						/>

						{videoUrl && (
							<VideoFrame
								ref={videoRef}
								onClick={handlePlayPause}
								isPlaying={isPlaying}
								src={videoUrl}
							/>
						)}
						<VidoeControls
							onBackward={handleRewind}
							onForward={handleFastForward}
							onPlayPause={handlePlayPause}
							onPrevious={handlePrevious}
							isPlaying={isPlaying}
							onNext={handleNext}
						/>
					</div>
				</>
			) : (
				<>no playslist</>
			)}
		</>
	);
};

export default MediaPlayer;
