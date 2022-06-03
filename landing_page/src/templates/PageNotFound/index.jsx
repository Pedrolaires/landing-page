import { GridContent } from "../../components/GridContent";

export const PageNotFound = () => {
  return (
    <GridContent
      title={"Error 404"}
      html={
        "<p>A página que você buscou não foi encontrada :( <a href='/'> clique aqui para retornar ao menu inicial </a></p> <p><strong>Caso o erro persista, contate o suporte!</strong> </p>"
      }
    />
  );
};
