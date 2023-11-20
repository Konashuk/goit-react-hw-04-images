import { ImageGaleryItem } from './imageGalleryItem';
import { ImageGallery } from './imageGalery.styled';

export const ImageGalery = ({ hits }) => {
  return (
    <ImageGallery>
      {hits.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGaleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ImageGallery>
  );
};
