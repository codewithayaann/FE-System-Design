import  { useState } from 'react';
import './style.css'; 
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

interface ISearch {
    onSearch: (input: string) => void;
    placeholder?: string
}

const SearchInput = ({ onSearch, placeholder = 'Search...' }: ISearch) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-input-molecule" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search field"
      />
      <Button type="submit" variant="primary">Search</Button>
    </form>
  );
};

export default SearchInput;