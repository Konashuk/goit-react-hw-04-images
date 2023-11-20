import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const imageFind = async (inputedValue, page) => {
  const response = await axios.get('', {
    params: {
      q: inputedValue,
      key: '39751957-699f95fae17e6e2f35ebbbaf7',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
      page: page,
    },
  });
  return response.data;
};
