import React, { useState } from "react";
import { useMatchMedia } from "../../../helpers/functions/functions";
import { PhotosStyle } from "./style";
import Gallery from "../Gallery";

const Photos = (props) => {
	const media992 = useMatchMedia(991.98);
	const [gallery, setGallery] = useState({ opened: false, index: 0 });

	/* ------------------------------------ */

	const openGallery = (index) => {
		setGallery({ opened: true, index: index });
		document.body.classList.add("lock");
	};

	/* ------------------------------------ */

	const closeGallery = () => {
		setTimeout(() => {
			setGallery({ opened: false });
			document.body.classList.remove("lock");
		}, 400);
	};

	/* ------------------------------------ */

	const addOtherList = (index) => {
		let condtition = index === 4 && props?.photos?.length > 5;
		let otherLength = props?.other?.length;

		if (!media992) {
			otherLength = props.photos.length - 3;
			condtition = index === 2 && props?.photos?.length > 3;
		}

		if (condtition) {
			return <p className="photos__other">+{otherLength}</p>;
		} else {
			return null;
		}
	};

	/* ------------------------------------ */

	if (props.photos.length > 0) {
		return (
			<PhotosStyle photosCount={props.photos.length} className={`product-view__photos photos`}>
				{props.photos.slice(0, !media992 ? 3 : 5).map((photo, index, arr) => {
					return (
						<div
							key={index}
							onClick={openGallery.bind(null, index)}
							className={`photos__photo ${index === arr.length - 1 ? "photos__photo_last" : ""} ${
								index === 0 ? "photos__photo_big" : ""
							}`}
						>
							<img src={photo.imgPath} alt="House" />
							{addOtherList(index)}
						</div>
					);
				})}

				{gallery.opened && <Gallery index={gallery.index} photos={props.photos} closeGallery={closeGallery} />}
			</PhotosStyle>
		);
	}
	return null;
};

export default Photos;
