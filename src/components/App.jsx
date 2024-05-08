import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import LoadMore from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { requestImagesByQuery } from "./services/api";
import "./App.css";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  // const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) return;
    async function fetchImagesByQuery() {
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await requestImagesByQuery(query, page);
        if (page > 1) {
          setImages((prevImages) => [...prevImages, ...results]);
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
  
  const handleSearch = (inputValue) => {
    if (inputValue !== query) {
      setQuery(inputValue);
      setPage(1);
      setImages([]);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    openModal();
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  // const loadMoreImages = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
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