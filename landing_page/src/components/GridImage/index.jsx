import P from "prop-types";
import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import * as Styled from "./styles";

export const GridImage = ({
  background,
  description,
  title,
  grid,
  sectionId = "",
}) => {
  return (
    <SectionBackground sectionId={sectionId} background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element, index) => (
            <Styled.GridElement
              key={`${element.imageSrc}-${element.altText}-${index}`}
            >
              <Styled.ImageContainer
                src={element.imageSrc}
                alt={element.altText}
              />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      imageSrc: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
