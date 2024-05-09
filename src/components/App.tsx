import { FC, useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import LoadMore from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { requestImagesByQuery } from "./services/api";
import { ImageType } from "./types";
import "./App.css";

interface ImageResponse {
  results: ImageType[];
  total_pages: number;
}

const App: FC = () => {
  const [images, setImages] = useState<ImageType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
    // const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    async function fetchImagesByQuery(): Promise<void> {
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages }: ImageResponse = await requestImagesByQuery(query, page);
        if (page > 1) {
          setImages((prevImages: ImageType[] | null) => {
            if (prevImages === null) {
            return results;          
        } else {
          return [...prevImages, ...results];
        }
          });
        } else {
          setImages(results);
        }
        // setShowBtn(total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }      
    }
    fetchImagesByQuery();
  }, [query, page]);
  
  const handleSearch = (inputValue: string): void => {
    if (inputValue !== query) {
      setQuery(inputValue);
      setPage(1);
      setImages([]);
    }
  };

  const handleImageClick = (image: ImageType | null): void => {
    setSelectedImage(image);
    openModal();
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  // const loadMoreImages = (): void => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  
  const openModal = ():void => {
    setModalIsOpen(true);
  };

  const closeModal = ():void => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {Array.isArray(images) && (<ImageGallery images={images} handleImageClick={handleImageClick} />)}
      {error && <ErrorMessage />}
      {loading && <Loader />}      
      {modalIsOpen && (<ImageModal
        onClose={closeModal}
        isOpen={modalIsOpen}
        image={selectedImage}
      />)}
{images && images.length > 0 && <LoadMore loadMore={loadMore} />}

      {/* {showBtn && <LoadMoreBtn loadMoreImages={loadMoreImages} />} */}
    </>
  );
}

export default App;