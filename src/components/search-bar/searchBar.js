import { GrSearch } from 'react-icons/gr';

import {
  HeaderSearch,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './searchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;
    onSubmit(inputValue);
  };
  return (
    <HeaderSearch>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <GrSearch />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearch>
  );
};
