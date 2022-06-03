export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-content") {
      return mapSectionContent(section);
    }
    if (section.__component === "section.section-grid") {
      const { __component: { text_grid = [], image_grid = [] } = null } =
        section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
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

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionID = "" } = "",
    text_grid: grid = [],
  } = section;
  return {
    component: "section.section-grid-text",
    title,
    description,
    background,
    grid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = "",
    title = "",
    description = "",
    metadata: { background = false, section_id: sectionID = "" } = "",
    image_grid: grid = [],
  } = section;
  return {
    component: "section.section-grid-image",
    title,
    description,
    background,
    grid,
  };
};
