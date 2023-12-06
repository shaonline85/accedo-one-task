import React from "react";
import { Media } from "../types/index";
import trashSVG from "../assets/trash.svg";

type listProps = {
	list: Media[];
	activeIndex: number;
	onRemove: (id: number) => void;
};

const PlayList = ({ list, activeIndex, onRemove }: listProps) => {
	{
		return (
			<>
				{list.map((media, index) => {
					return (
						<div key={media.id}>
							{index === activeIndex ? (
								<strong>{media.url}</strong>
							) : (
								<span>{media.url}</span>
							)}

							<button
								onClick={() => onRemove(media.id)}
								className="noStyleButton"
							>
								<img src={trashSVG} />
							</button>
						</div>
					);
				})}
			</>
		);
	}
};

export default PlayList;
