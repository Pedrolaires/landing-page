import { useEffect, useRef, useState } from "react";

import * as Styled from "./styles";
import { mapData } from "../../api/map-data";

import { GridTwoColumns } from "../../components/GridTwoColumns";
import { GridContent } from "../../components/GridContent";
import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          "http://localhost:1337/api/pages/?slug=landing-page",
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    if (isMounted) {
      load();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, imageSrc } = menu;
  console.log(sections);
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, imageSrc }}
    >
      {sections.map((section, index) => {
        const { component, __component } = section;
        //console.log(__component);
        //http://localhost:1337/api/pages?populate=deep
        const key = `${slug}-${index}`;
        if (__component) {
          if (__component === "section.section-grid-text") {
            return <GridText key={key} {...section} />;
          }
          if (__component === "section.section-grid-image") {
            return <GridImage key={key} {...section} />;
          }
        } else {
          if (component === "section.section-two-columns") {
            return <GridTwoColumns key={key} {...section} />;
          }
          if (component === "section.section-content") {
            return <GridContent key={key} {...section} />;
          }
        }
      })}
    </Base>
  );
}

export default Home;
