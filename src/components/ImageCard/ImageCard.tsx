import css from "./ImageCard.module.css";
import { FC } from "react";
import { ImageType } from "../types";

interface ImageCardProps {
    image: ImageType,
    handleImageClick: (image: ImageType) => void,
}

const ImageCard: FC<ImageCardProps> = ({image, handleImageClick}) => {
    return (
        <div>
            <img className={css.image} onClick={() => handleImageClick(image)}
                src={image.urls.small} alt={image.alt_description}/>
        </div>
    );
}

export default ImageCard;