import { mapSections } from "./map-sections";
import { mapMenu } from "./map-menu";

export const mapData = (pagesData = { data: [{ attributes: {} }] }) => {
  const { data } = pagesData;
  return data.map(({ attributes }) => {
    const {
      footer_text: footerHtml = "",
      Slug: slug = "",
      Title: title = "",
      sections = [],
      menu = {},
    } = attributes;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
