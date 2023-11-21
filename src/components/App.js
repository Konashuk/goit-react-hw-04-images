import { useState } from 'react';
import Notiflix from 'notiflix';
import { SearchBar } from './search-bar/searchBar';
import { ImageGalery } from './image-galery/imageGallery';
import { Loader } from './laoder';
import { Button } from './button-more/button';
import { Div } from './App.styled';
import { imageFind } from './appi';
import { useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState('');

  const handelQuery = event => {
    setImages([]);
    setQuery(`${Date.now()}/${event}`);
    setPage(1);
  };

  const handelLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      const splitQuery = query.split(/\/(.*)/)[1]?.trim() || '';

      if (!splitQuery) {
        setIsLoading(false);
        Notiflix.Notify.warning('Please enter a what search.');
        return;
      }
      try {
        setIsLoading(true);
        const { totalHits, hits } = await imageFind(splitQuery, page);
        if (hits.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );

          return;
        }
        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        Notiflix.Notify.warning('Sorry, somesing weree wrong. Try later🙏');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  return (
    <Div>
      <SearchBar onSubmit={handelQuery} />

      <ImageGalery hits={images} />
      {isLoading && <Loader />}
      {loadMore && <Button onClick={handelLoadMore} />}
    </Div>
  );
};
