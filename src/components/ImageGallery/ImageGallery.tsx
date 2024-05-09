import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { ImageType } from "../types";

interface ImageCardProps {
    images: ImageType[],
    handleImageClick: (image: ImageType) => void,
}

const ImageGallery: FC<ImageCardProps> = ({images,handleImageClick}) => {
    return (
        <ul className={css.ImageList}>
            {images.map((image) => (
                <li className={css.ImageItem} key={image.id}>
                    <div>
                        <ImageCard image={image} handleImageClick={handleImageClick} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;