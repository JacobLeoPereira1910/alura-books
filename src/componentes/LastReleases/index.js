import { books } from "./realeaseData";
import styled from "styled-components";
import { Title } from "../Title";
import RecommendationCards from "../RecommendationCards";
import imgBook from "../../imagens/livro2.png";

const ContainerReleaseData = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
  return (
    <ContainerReleaseData>
      <Title
        fontColor={"#EB9B00"}
        fontSize={"36px"}
      >
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {
          books.map(item => (
            <img src={item.src} />
          ))
        }
      </NewBooksContainer>
      <RecommendationCards
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        img={imgBook}
      />
      <RecommendationCards
        title="Talvez você se interesse por este"
        subtitle="Angular 12"
        description="Construindo"
        img={imgBook}
      />
    </ContainerReleaseData>
  )
}

export default LastReleases;
