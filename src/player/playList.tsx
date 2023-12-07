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
			<div className="playlist">
				{list.map((media, index) => {
					return (
						<div className="row" key={media.id}>
							<div>
								{index === activeIndex ? (
									<strong>{media.url}</strong>
								) : (
									<span>{media.url}</span>
								)}
							</div>
							<div>
								<button
									onClick={() => onRemove(media.id)}
									className="noStyleButton"
								>
									<img src={trashSVG} />
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
};

export default PlayList;
