import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Item, Image } from './imageGaleryItem.styled';

export const ImageGaleryItem = ({ id, largeImageURL, webformatURL }) => {
  const openModal = () => {
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="Large image">
    `);

    instance.show();
  };

  return (
    <Item onClick={openModal}>
      <Image src={webformatURL} alt={`This is card ${id}`} />
    </Item>
  );
};
