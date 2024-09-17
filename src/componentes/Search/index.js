import React from "react";
import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./dataBooks";
import { Title } from "../Title";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Results = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
      width: 200px;
    }
    
    img {
        width: 100px  
    }
    &:hover{
      border: 1px solid white;
    }

`

function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);

  return (
    <SearchContainer>
      <Title fontSize="36px">Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante</Subtitle>
      <Input placeholder="Escreva sua próxima leitura"
        onBlur={event => {
          const textValue = event.target.value;
          const searchResult = books.filter(item => item.name.includes(textValue));
          setSearchedBooks(searchResult);
        }} />
      {searchedBooks.map(item => (
        <Results>
          <p>{item.name}</p>
          <img src={item.src} />
        </Results>
      ))}
    </SearchContainer>
  );
}

export default Search;