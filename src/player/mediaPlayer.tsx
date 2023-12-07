import React, { useState, useEffect, useRef } from "react";
import data from "./mockData";
import { Media } from "../types/index";
import PlayList from "./playList";
import UrlInput from "./urlInput";
import VideoFrame from "./videoFrame";
import VidoeControls from "./mediaControls";
import { useSearchParams } from "react-router-dom";

const MediaPlayer: React.FC = () => {
	const [playlist, setPlaylist] = useState<Media[]>(data);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [newUrl, setNewUrl] = useState<string>("");
	const [searchParams, setSearchParams] = useSearchParams({ i: "0" });

	const currentMediaIndex = searchParams.get("i") ?? "0";

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
		setPlaylist((currList) => currList.filter((obj) => obj.id !== id));
	};

	const handleNext = () => {
		const currIndex = +currentMediaIndex;
		let newIndex = +currIndex + 1;
		newIndex = newIndex > playlist.length - 1 ? 0 : newIndex;
		setSearchParams(
			(prev) => {
				prev.set("i", newIndex.toString());
				return prev;
			},
			{ replace: true }
		);
	};

	const handlePrevious = () => {
		const currIndex = +currentMediaIndex;
		let newIndex = currIndex - 1;
		newIndex = newIndex < 0 ? playlist.length - 1 : newIndex;
		setSearchParams((prev) => {
			prev.set("i", newIndex.toString());
			return prev;
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

	useEffect(() => {}, [searchParams]);

	return (
		<>
			{playlist.length > 0 ? (
				<>
					<div className="">
						<div className="">
							<PlayList
								list={playlist}
								onRemove={handleRemoveMedia}
								activeIndex={+currentMediaIndex}
							/>
						</div>
						<UrlInput
							onAddUrl={handleAddMedia}
							onChange={handleUrlChange}
							value={newUrl}
						/>

						<VideoFrame
							ref={videoRef}
							onClick={handlePlayPause}
							isPlaying={isPlaying}
							source={playlist[+currentMediaIndex].url}
						/>

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
