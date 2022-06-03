import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

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
import config from "../../config";

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      const pathName = location.pathName.replace(/[^a-z0-9-_]/gi, "");
      const slug = pathName ? pathName : "landingPage";

      try {
        const dataFetch = await fetch(
          `https://strapi-v4-lp.herokuapp.com/api/pages/?filters[slug]=${slug}&populate=deep`,
        );
        const json = await dataFetch.json();
        //console.log(json);
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        //console.log(pageData);
        setData(() => pageData[0]);
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
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }
    if (data && data.title) {
      document.title = `${data.title} | ${config.siteNamte}`;
    }
  }, [data]);

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
        const key = `${slug}-${index}`;

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }
        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
        if (component === "section.section-two-columns") {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === "section.section-content") {
          return <GridContent key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
