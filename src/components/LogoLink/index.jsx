import P from "prop-types";
import * as Styled from "./styles";
import { Heading } from "../Heading";

export const LogoLink = ({ text, imageSrc = "", link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {imageSrc ? <img src={imageSrc} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imageSrc: P.string,
  link: P.string.isRequired,
};
