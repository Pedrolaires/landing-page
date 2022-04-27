export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-grid") {
      return mapSectionGrid(section);
    }
    if (section.__component === "section.section-content") {
      return mapSectionContent(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: {
      data: { attributes: { url: imageSrc = "" } } = {
        attributes: { url: "" },
      },
    } = {},
    metadata: { background = false, section_id: sectionID = "" } = "",
  } = section;
  return {
    component,
    title,
    text,
    imageSrc,
    background,
    sectionID,
  };
};
export const mapSectionGrid = (section = {}) => {
  return section;
};
export const mapSectionContent = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    content: html = "",
    metadata: { background = false, section_id: sectionID = "" } = "",
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionID,
  };
};
