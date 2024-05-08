import css from "./ImageCard.module.css";

function ImageCard({image, handleImageClick}) {
    return (
        <div>
            <img className={css.image} onClick={() => handleImageClick(image)}
                src={image.urls.small} alt={image.alt_description}/>
        </div>
    );
}

export default ImageCard;