import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from "./map-sections";

describe("map-sections", () => {
  it("should render predefined function even if there is no data", () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it("should map section two columns", () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionID).toBe("");
    expect(data.imageSrc).toBe("");
    expect(data.text).toBe("");
    expect(data.title).toBe("");
  });

  it("should map section two columns", () => {
    const data = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      title: "January brings us firefox 85",
      description:
        "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
      image: {
        data: {
          attributes: {
            url: "a.svg",
          },
        },
      },
      metadata: {
        section_id: "home",
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe("section.section-two-columns");
    expect(data.sectionID).toBe("home");
    expect(data.imageSrc).toBe("a.svg");
    expect(data.text).toBe(
      "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
    );
    expect(data.title).toBe("January brings us firefox 85");
  });

  it("should map section content without data", () => {
    const data = mapSectionContent();

    expect(data.component).toBe("");
    expect(data.title).toBe("");
    expect(data.html).toBe("");
    expect(data.background).toBe(false);
    expect(data.sectionID).toBe("");
  });

  it("should map section content with data", () => {
    const data = mapSectionContent({
      __component: "section.section-content",
      title: "News coverage and some surprises",
      content: "<p> abc </p>",
      metadata: {
        section_id: "intro",
        background: false,
      },
    });

    expect(data.component).toBe("section.section-content");
    expect(data.title).toBe("News coverage and some surprises");
    expect(data.html).toBe("<p> abc </p>");
    expect(data.background).toBe(false);
    expect(data.sectionID).toBe("intro");
  });

  it("should map grid-text without data", () => {
    const data = mapTextGrid();

    expect(data.component).toBe("section.section-grid-text");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
    expect(data.background).toBe(false);
  });

  it("should map grid-text with data", () => {
    const data = mapTextGrid({
      __component: "section.section-grid",
      title: "My grid 2",
      description: "A short description",
      text_grid: [
        {
          title: "Teste 1",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        },
        {
          title: "Teste 2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        },
        {
          title: "Teste 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        },
      ],
      metadata: {
        section_id: "grid-two",
        background: true,
      },
    });

    expect(data.component).toBe("section.section-grid-text");
    expect(data.title).toBe("My grid 2");
    expect(data.description).toBe("A short description");
    expect(data.background).toBe(true);
    expect(data.grid[0].title).toBe("Teste 1");
    expect(data.grid[1].description).toBe(
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    );
  });

  it("should map grid-image without data", () => {
    const data = mapImageGrid();

    expect(data.component).toBe("section.section-grid-image");
    expect(data.title).toBe("");
    expect(data.description).toBe("");
    expect(data.background).toBe(false);
  });
  it("should map grid-image with data", () => {
    const data = mapImageGrid(
      {
        id: 5,
        __component: "section.section-grid",
        title: "Gallery",
        description: "A short description",
        image_grid: [
          {
            id: 8,
            image: {
              data: {
                id: 17,
                attributes: {
                  name: "Cactus-Unsplash.jpg",
                  alternativeText: "Cactus",
                  caption: "Cactus-Unsplash.jpg",
                  width: 1920,
                  height: 1920,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377514/large_Cactus_Unsplash_3b27d621a9.jpg",
                      hash: "large_Cactus_Unsplash_3b27d621a9",
                      mime: "image/jpeg",
                      name: "large_Cactus-Unsplash.jpg",
                      path: null,
                      size: 58.61,
                      width: 1000,
                      height: 1000,
                      provider_metadata: {
                        public_id: "large_Cactus_Unsplash_3b27d621a9",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377516/small_Cactus_Unsplash_3b27d621a9.jpg",
                      hash: "small_Cactus_Unsplash_3b27d621a9",
                      mime: "image/jpeg",
                      name: "small_Cactus-Unsplash.jpg",
                      path: null,
                      size: 17.48,
                      width: 500,
                      height: 500,
                      provider_metadata: {
                        public_id: "small_Cactus_Unsplash_3b27d621a9",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377515/medium_Cactus_Unsplash_3b27d621a9.jpg",
                      hash: "medium_Cactus_Unsplash_3b27d621a9",
                      mime: "image/jpeg",
                      name: "medium_Cactus-Unsplash.jpg",
                      path: null,
                      size: 34.91,
                      width: 750,
                      height: 750,
                      provider_metadata: {
                        public_id: "medium_Cactus_Unsplash_3b27d621a9",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377513/thumbnail_Cactus_Unsplash_3b27d621a9.jpg",
                      hash: "thumbnail_Cactus_Unsplash_3b27d621a9",
                      mime: "image/jpeg",
                      name: "thumbnail_Cactus-Unsplash.jpg",
                      path: null,
                      size: 2.88,
                      width: 156,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_Cactus_Unsplash_3b27d621a9",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Cactus_Unsplash_3b27d621a9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 193.89,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377512/Cactus_Unsplash_3b27d621a9.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Cactus_Unsplash_3b27d621a9",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:51:57.085Z",
                  updatedAt: "2022-03-15T20:52:10.373Z",
                },
              },
            },
          },
          {
            id: 9,
            image: {
              data: {
                id: 18,
                attributes: {
                  name: "Nature-unsplash.jpg",
                  alternativeText: "Nature-unsplash.jpg",
                  caption: "Nature-unsplash.jpg",
                  width: 1920,
                  height: 1280,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377827/large_Nature_unsplash_dac26e44fa.jpg",
                      hash: "large_Nature_unsplash_dac26e44fa",
                      mime: "image/jpeg",
                      name: "large_Nature-unsplash.jpg",
                      path: null,
                      size: 171.95,
                      width: 1000,
                      height: 667,
                      provider_metadata: {
                        public_id: "large_Nature_unsplash_dac26e44fa",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377830/small_Nature_unsplash_dac26e44fa.jpg",
                      hash: "small_Nature_unsplash_dac26e44fa",
                      mime: "image/jpeg",
                      name: "small_Nature-unsplash.jpg",
                      path: null,
                      size: 47.17,
                      width: 500,
                      height: 333,
                      provider_metadata: {
                        public_id: "small_Nature_unsplash_dac26e44fa",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377829/medium_Nature_unsplash_dac26e44fa.jpg",
                      hash: "medium_Nature_unsplash_dac26e44fa",
                      mime: "image/jpeg",
                      name: "medium_Nature-unsplash.jpg",
                      path: null,
                      size: 101.48,
                      width: 750,
                      height: 500,
                      provider_metadata: {
                        public_id: "medium_Nature_unsplash_dac26e44fa",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377826/thumbnail_Nature_unsplash_dac26e44fa.jpg",
                      hash: "thumbnail_Nature_unsplash_dac26e44fa",
                      mime: "image/jpeg",
                      name: "thumbnail_Nature-unsplash.jpg",
                      path: null,
                      size: 11.73,
                      width: 234,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_Nature_unsplash_dac26e44fa",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Nature_unsplash_dac26e44fa",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 538.18,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377825/Nature_unsplash_dac26e44fa.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Nature_unsplash_dac26e44fa",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:57:11.448Z",
                  updatedAt: "2022-03-15T20:57:11.448Z",
                },
              },
            },
          },
          {
            id: 10,
            image: {
              data: {
                id: 19,
                attributes: {
                  name: "Vulcan-unsplash.jpg",
                  alternativeText: "Vulcan-unsplash.jpg",
                  caption: "Vulcan-unsplash.jpg",
                  width: 1920,
                  height: 1080,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377840/large_Vulcan_unsplash_2c8fa4d33f.jpg",
                      hash: "large_Vulcan_unsplash_2c8fa4d33f",
                      mime: "image/jpeg",
                      name: "large_Vulcan-unsplash.jpg",
                      path: null,
                      size: 72.89,
                      width: 1000,
                      height: 563,
                      provider_metadata: {
                        public_id: "large_Vulcan_unsplash_2c8fa4d33f",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377843/small_Vulcan_unsplash_2c8fa4d33f.jpg",
                      hash: "small_Vulcan_unsplash_2c8fa4d33f",
                      mime: "image/jpeg",
                      name: "small_Vulcan-unsplash.jpg",
                      path: null,
                      size: 21.6,
                      width: 500,
                      height: 281,
                      provider_metadata: {
                        public_id: "small_Vulcan_unsplash_2c8fa4d33f",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377842/medium_Vulcan_unsplash_2c8fa4d33f.jpg",
                      hash: "medium_Vulcan_unsplash_2c8fa4d33f",
                      mime: "image/jpeg",
                      name: "medium_Vulcan-unsplash.jpg",
                      path: null,
                      size: 43.93,
                      width: 750,
                      height: 422,
                      provider_metadata: {
                        public_id: "medium_Vulcan_unsplash_2c8fa4d33f",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377839/thumbnail_Vulcan_unsplash_2c8fa4d33f.jpg",
                      hash: "thumbnail_Vulcan_unsplash_2c8fa4d33f",
                      mime: "image/jpeg",
                      name: "thumbnail_Vulcan-unsplash.jpg",
                      path: null,
                      size: 6.37,
                      width: 245,
                      height: 138,
                      provider_metadata: {
                        public_id: "thumbnail_Vulcan_unsplash_2c8fa4d33f",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Vulcan_unsplash_2c8fa4d33f",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 212.05,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377838/Vulcan_unsplash_2c8fa4d33f.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Vulcan_unsplash_2c8fa4d33f",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:57:24.162Z",
                  updatedAt: "2022-03-15T20:57:24.162Z",
                },
              },
            },
          },
          {
            id: 11,
            image: {
              data: {
                id: 20,
                attributes: {
                  name: "Astroneer-unsplash.jpg",
                  alternativeText: "Astroneer-unsplash.jpg",
                  caption: "Astroneer-unsplash.jpg",
                  width: 1920,
                  height: 1282,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377856/large_Astroneer_unsplash_a29572e944.jpg",
                      hash: "large_Astroneer_unsplash_a29572e944",
                      mime: "image/jpeg",
                      name: "large_Astroneer-unsplash.jpg",
                      path: null,
                      size: 53.3,
                      width: 1000,
                      height: 668,
                      provider_metadata: {
                        public_id: "large_Astroneer_unsplash_a29572e944",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377858/small_Astroneer_unsplash_a29572e944.jpg",
                      hash: "small_Astroneer_unsplash_a29572e944",
                      mime: "image/jpeg",
                      name: "small_Astroneer-unsplash.jpg",
                      path: null,
                      size: 14.92,
                      width: 500,
                      height: 334,
                      provider_metadata: {
                        public_id: "small_Astroneer_unsplash_a29572e944",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377857/medium_Astroneer_unsplash_a29572e944.jpg",
                      hash: "medium_Astroneer_unsplash_a29572e944",
                      mime: "image/jpeg",
                      name: "medium_Astroneer-unsplash.jpg",
                      path: null,
                      size: 29.95,
                      width: 750,
                      height: 501,
                      provider_metadata: {
                        public_id: "medium_Astroneer_unsplash_a29572e944",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377855/thumbnail_Astroneer_unsplash_a29572e944.jpg",
                      hash: "thumbnail_Astroneer_unsplash_a29572e944",
                      mime: "image/jpeg",
                      name: "thumbnail_Astroneer-unsplash.jpg",
                      path: null,
                      size: 5.06,
                      width: 234,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_Astroneer_unsplash_a29572e944",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Astroneer_unsplash_a29572e944",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 227.83,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377854/Astroneer_unsplash_a29572e944.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Astroneer_unsplash_a29572e944",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:57:39.743Z",
                  updatedAt: "2022-03-15T20:57:39.743Z",
                },
              },
            },
          },
          {
            id: 12,
            image: {
              data: {
                id: 21,
                attributes: {
                  name: "Family-unsplash.jpg",
                  alternativeText: "Family-unsplash.jpg",
                  caption: "Family-unsplash.jpg",
                  width: 1920,
                  height: 1283,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377873/large_Family_unsplash_9bc7c5992d.jpg",
                      hash: "large_Family_unsplash_9bc7c5992d",
                      mime: "image/jpeg",
                      name: "large_Family-unsplash.jpg",
                      path: null,
                      size: 65.95,
                      width: 1000,
                      height: 668,
                      provider_metadata: {
                        public_id: "large_Family_unsplash_9bc7c5992d",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377875/small_Family_unsplash_9bc7c5992d.jpg",
                      hash: "small_Family_unsplash_9bc7c5992d",
                      mime: "image/jpeg",
                      name: "small_Family-unsplash.jpg",
                      path: null,
                      size: 20.74,
                      width: 500,
                      height: 334,
                      provider_metadata: {
                        public_id: "small_Family_unsplash_9bc7c5992d",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377874/medium_Family_unsplash_9bc7c5992d.jpg",
                      hash: "medium_Family_unsplash_9bc7c5992d",
                      mime: "image/jpeg",
                      name: "medium_Family-unsplash.jpg",
                      path: null,
                      size: 39.79,
                      width: 750,
                      height: 501,
                      provider_metadata: {
                        public_id: "medium_Family_unsplash_9bc7c5992d",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377871/thumbnail_Family_unsplash_9bc7c5992d.jpg",
                      hash: "thumbnail_Family_unsplash_9bc7c5992d",
                      mime: "image/jpeg",
                      name: "thumbnail_Family-unsplash.jpg",
                      path: null,
                      size: 6.67,
                      width: 234,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_Family_unsplash_9bc7c5992d",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "Family_unsplash_9bc7c5992d",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 238.49,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377871/Family_unsplash_9bc7c5992d.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "Family_unsplash_9bc7c5992d",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:57:56.123Z",
                  updatedAt: "2022-03-15T20:57:56.123Z",
                },
              },
            },
          },
          {
            id: 13,
            image: {
              data: {
                id: 22,
                attributes: {
                  name: "City-Unsplash.jpg",
                  alternativeText: "City-Unsplash.jpg",
                  caption: "City-Unsplash.jpg",
                  width: 1920,
                  height: 1423,
                  formats: {
                    large: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377884/large_City_Unsplash_21f06e2fdb.jpg",
                      hash: "large_City_Unsplash_21f06e2fdb",
                      mime: "image/jpeg",
                      name: "large_City-Unsplash.jpg",
                      path: null,
                      size: 78.67,
                      width: 1000,
                      height: 741,
                      provider_metadata: {
                        public_id: "large_City_Unsplash_21f06e2fdb",
                        resource_type: "image",
                      },
                    },
                    small: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377886/small_City_Unsplash_21f06e2fdb.jpg",
                      hash: "small_City_Unsplash_21f06e2fdb",
                      mime: "image/jpeg",
                      name: "small_City-Unsplash.jpg",
                      path: null,
                      size: 27.6,
                      width: 500,
                      height: 370,
                      provider_metadata: {
                        public_id: "small_City_Unsplash_21f06e2fdb",
                        resource_type: "image",
                      },
                    },
                    medium: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377885/medium_City_Unsplash_21f06e2fdb.jpg",
                      hash: "medium_City_Unsplash_21f06e2fdb",
                      mime: "image/jpeg",
                      name: "medium_City-Unsplash.jpg",
                      path: null,
                      size: 50.73,
                      width: 750,
                      height: 556,
                      provider_metadata: {
                        public_id: "medium_City_Unsplash_21f06e2fdb",
                        resource_type: "image",
                      },
                    },
                    thumbnail: {
                      ext: ".jpg",
                      url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377883/thumbnail_City_Unsplash_21f06e2fdb.jpg",
                      hash: "thumbnail_City_Unsplash_21f06e2fdb",
                      mime: "image/jpeg",
                      name: "thumbnail_City-Unsplash.jpg",
                      path: null,
                      size: 6.92,
                      width: 212,
                      height: 156,
                      provider_metadata: {
                        public_id: "thumbnail_City_Unsplash_21f06e2fdb",
                        resource_type: "image",
                      },
                    },
                  },
                  hash: "City_Unsplash_21f06e2fdb",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 217.72,
                  url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377882/City_Unsplash_21f06e2fdb.jpg",
                  previewUrl: null,
                  provider: "cloudinary",
                  provider_metadata: {
                    public_id: "City_Unsplash_21f06e2fdb",
                    resource_type: "image",
                  },
                  createdAt: "2022-03-15T20:58:07.550Z",
                  updatedAt: "2022-03-15T20:58:07.550Z",
                },
              },
            },
          },
        ],
        text_grid: [],
        metadata: {
          id: 12,
          name: "Gallery",
          section_id: "gallery",
          background: false,
        },
      },
      {
        id: 3,
        __component: "section.section-grid",
        title: "My grid 2",
        description: "A short description",
        image_grid: [],
        text_grid: [
          {
            id: 9,
            title: "Teste 1",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
          {
            id: 7,
            title: "Teste 2",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
          {
            id: 8,
            title: "Teste 3",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          },
        ],
        metadata: {
          id: 10,
          name: "grid-two",
          section_id: "grid-two",
          background: true,
        },
      },
    );

    expect(data.component).toBe("section.section-grid-image");
    expect(data.title).toBe("Gallery");
    expect(data.description).toBe("A short description");
    expect(data.background).toBe(false);
    expect(data.grid[0].image.data.attributes.alternativeText).toBe("Cactus");
  });
});

/*
         {
            "id": 5,
            "__component": "section.section-grid",
            "title": "Gallery",
            "description": "A short description",
            "image_grid": [
              {
                "id": 8,
                "image": {
                  "data": {
                    "id": 17,
                    "attributes": {
                      "name": "Cactus-Unsplash.jpg",
                      "alternativeText": "Cactus",
                      "caption": "Cactus-Unsplash.jpg",
                      "width": 1920,
                      "height": 1920,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377514/large_Cactus_Unsplash_3b27d621a9.jpg",
                          "hash": "large_Cactus_Unsplash_3b27d621a9",
                          "mime": "image/jpeg",
                          "name": "large_Cactus-Unsplash.jpg",
                          "path": null,
                          "size": 58.61,
                          "width": 1000,
                          "height": 1000,
                          "provider_metadata": {
                            "public_id": "large_Cactus_Unsplash_3b27d621a9",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377516/small_Cactus_Unsplash_3b27d621a9.jpg",
                          "hash": "small_Cactus_Unsplash_3b27d621a9",
                          "mime": "image/jpeg",
                          "name": "small_Cactus-Unsplash.jpg",
                          "path": null,
                          "size": 17.48,
                          "width": 500,
                          "height": 500,
                          "provider_metadata": {
                            "public_id": "small_Cactus_Unsplash_3b27d621a9",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377515/medium_Cactus_Unsplash_3b27d621a9.jpg",
                          "hash": "medium_Cactus_Unsplash_3b27d621a9",
                          "mime": "image/jpeg",
                          "name": "medium_Cactus-Unsplash.jpg",
                          "path": null,
                          "size": 34.91,
                          "width": 750,
                          "height": 750,
                          "provider_metadata": {
                            "public_id": "medium_Cactus_Unsplash_3b27d621a9",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377513/thumbnail_Cactus_Unsplash_3b27d621a9.jpg",
                          "hash": "thumbnail_Cactus_Unsplash_3b27d621a9",
                          "mime": "image/jpeg",
                          "name": "thumbnail_Cactus-Unsplash.jpg",
                          "path": null,
                          "size": 2.88,
                          "width": 156,
                          "height": 156,
                          "provider_metadata": {
                            "public_id": "thumbnail_Cactus_Unsplash_3b27d621a9",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "Cactus_Unsplash_3b27d621a9",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 193.89,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377512/Cactus_Unsplash_3b27d621a9.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "Cactus_Unsplash_3b27d621a9",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:51:57.085Z",
                      "updatedAt": "2022-03-15T20:52:10.373Z"
                    }
                  }
                }
              },
              {
                "id": 9,
                "image": {
                  "data": {
                    "id": 18,
                    "attributes": {
                      "name": "Nature-unsplash.jpg",
                      "alternativeText": "Nature-unsplash.jpg",
                      "caption": "Nature-unsplash.jpg",
                      "width": 1920,
                      "height": 1280,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377827/large_Nature_unsplash_dac26e44fa.jpg",
                          "hash": "large_Nature_unsplash_dac26e44fa",
                          "mime": "image/jpeg",
                          "name": "large_Nature-unsplash.jpg",
                          "path": null,
                          "size": 171.95,
                          "width": 1000,
                          "height": 667,
                          "provider_metadata": {
                            "public_id": "large_Nature_unsplash_dac26e44fa",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377830/small_Nature_unsplash_dac26e44fa.jpg",
                          "hash": "small_Nature_unsplash_dac26e44fa",
                          "mime": "image/jpeg",
                          "name": "small_Nature-unsplash.jpg",
                          "path": null,
                          "size": 47.17,
                          "width": 500,
                          "height": 333,
                          "provider_metadata": {
                            "public_id": "small_Nature_unsplash_dac26e44fa",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377829/medium_Nature_unsplash_dac26e44fa.jpg",
                          "hash": "medium_Nature_unsplash_dac26e44fa",
                          "mime": "image/jpeg",
                          "name": "medium_Nature-unsplash.jpg",
                          "path": null,
                          "size": 101.48,
                          "width": 750,
                          "height": 500,
                          "provider_metadata": {
                            "public_id": "medium_Nature_unsplash_dac26e44fa",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377826/thumbnail_Nature_unsplash_dac26e44fa.jpg",
                          "hash": "thumbnail_Nature_unsplash_dac26e44fa",
                          "mime": "image/jpeg",
                          "name": "thumbnail_Nature-unsplash.jpg",
                          "path": null,
                          "size": 11.73,
                          "width": 234,
                          "height": 156,
                          "provider_metadata": {
                            "public_id": "thumbnail_Nature_unsplash_dac26e44fa",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "Nature_unsplash_dac26e44fa",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 538.18,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377825/Nature_unsplash_dac26e44fa.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "Nature_unsplash_dac26e44fa",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:57:11.448Z",
                      "updatedAt": "2022-03-15T20:57:11.448Z"
                    }
                  }
                }
              },
              {
                "id": 10,
                "image": {
                  "data": {
                    "id": 19,
                    "attributes": {
                      "name": "Vulcan-unsplash.jpg",
                      "alternativeText": "Vulcan-unsplash.jpg",
                      "caption": "Vulcan-unsplash.jpg",
                      "width": 1920,
                      "height": 1080,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377840/large_Vulcan_unsplash_2c8fa4d33f.jpg",
                          "hash": "large_Vulcan_unsplash_2c8fa4d33f",
                          "mime": "image/jpeg",
                          "name": "large_Vulcan-unsplash.jpg",
                          "path": null,
                          "size": 72.89,
                          "width": 1000,
                          "height": 563,
                          "provider_metadata": {
                            "public_id": "large_Vulcan_unsplash_2c8fa4d33f",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377843/small_Vulcan_unsplash_2c8fa4d33f.jpg",
                          "hash": "small_Vulcan_unsplash_2c8fa4d33f",
                          "mime": "image/jpeg",
                          "name": "small_Vulcan-unsplash.jpg",
                          "path": null,
                          "size": 21.6,
                          "width": 500,
                          "height": 281,
                          "provider_metadata": {
                            "public_id": "small_Vulcan_unsplash_2c8fa4d33f",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377842/medium_Vulcan_unsplash_2c8fa4d33f.jpg",
                          "hash": "medium_Vulcan_unsplash_2c8fa4d33f",
                          "mime": "image/jpeg",
                          "name": "medium_Vulcan-unsplash.jpg",
                          "path": null,
                          "size": 43.93,
                          "width": 750,
                          "height": 422,
                          "provider_metadata": {
                            "public_id": "medium_Vulcan_unsplash_2c8fa4d33f",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377839/thumbnail_Vulcan_unsplash_2c8fa4d33f.jpg",
                          "hash": "thumbnail_Vulcan_unsplash_2c8fa4d33f",
                          "mime": "image/jpeg",
                          "name": "thumbnail_Vulcan-unsplash.jpg",
                          "path": null,
                          "size": 6.37,
                          "width": 245,
                          "height": 138,
                          "provider_metadata": {
                            "public_id": "thumbnail_Vulcan_unsplash_2c8fa4d33f",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "Vulcan_unsplash_2c8fa4d33f",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 212.05,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377838/Vulcan_unsplash_2c8fa4d33f.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "Vulcan_unsplash_2c8fa4d33f",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:57:24.162Z",
                      "updatedAt": "2022-03-15T20:57:24.162Z"
                    }
                  }
                }
              },
              {
                "id": 11,
                "image": {
                  "data": {
                    "id": 20,
                    "attributes": {
                      "name": "Astroneer-unsplash.jpg",
                      "alternativeText": "Astroneer-unsplash.jpg",
                      "caption": "Astroneer-unsplash.jpg",
                      "width": 1920,
                      "height": 1282,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377856/large_Astroneer_unsplash_a29572e944.jpg",
                          "hash": "large_Astroneer_unsplash_a29572e944",
                          "mime": "image/jpeg",
                          "name": "large_Astroneer-unsplash.jpg",
                          "path": null,
                          "size": 53.3,
                          "width": 1000,
                          "height": 668,
                          "provider_metadata": {
                            "public_id": "large_Astroneer_unsplash_a29572e944",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377858/small_Astroneer_unsplash_a29572e944.jpg",
                          "hash": "small_Astroneer_unsplash_a29572e944",
                          "mime": "image/jpeg",
                          "name": "small_Astroneer-unsplash.jpg",
                          "path": null,
                          "size": 14.92,
                          "width": 500,
                          "height": 334,
                          "provider_metadata": {
                            "public_id": "small_Astroneer_unsplash_a29572e944",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377857/medium_Astroneer_unsplash_a29572e944.jpg",
                          "hash": "medium_Astroneer_unsplash_a29572e944",
                          "mime": "image/jpeg",
                          "name": "medium_Astroneer-unsplash.jpg",
                          "path": null,
                          "size": 29.95,
                          "width": 750,
                          "height": 501,
                          "provider_metadata": {
                            "public_id": "medium_Astroneer_unsplash_a29572e944",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377855/thumbnail_Astroneer_unsplash_a29572e944.jpg",
                          "hash": "thumbnail_Astroneer_unsplash_a29572e944",
                          "mime": "image/jpeg",
                          "name": "thumbnail_Astroneer-unsplash.jpg",
                          "path": null,
                          "size": 5.06,
                          "width": 234,
                          "height": 156,
                          "provider_metadata": {
                            "public_id": "thumbnail_Astroneer_unsplash_a29572e944",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "Astroneer_unsplash_a29572e944",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 227.83,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377854/Astroneer_unsplash_a29572e944.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "Astroneer_unsplash_a29572e944",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:57:39.743Z",
                      "updatedAt": "2022-03-15T20:57:39.743Z"
                    }
                  }
                }
              },
              {
                "id": 12,
                "image": {
                  "data": {
                    "id": 21,
                    "attributes": {
                      "name": "Family-unsplash.jpg",
                      "alternativeText": "Family-unsplash.jpg",
                      "caption": "Family-unsplash.jpg",
                      "width": 1920,
                      "height": 1283,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377873/large_Family_unsplash_9bc7c5992d.jpg",
                          "hash": "large_Family_unsplash_9bc7c5992d",
                          "mime": "image/jpeg",
                          "name": "large_Family-unsplash.jpg",
                          "path": null,
                          "size": 65.95,
                          "width": 1000,
                          "height": 668,
                          "provider_metadata": {
                            "public_id": "large_Family_unsplash_9bc7c5992d",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377875/small_Family_unsplash_9bc7c5992d.jpg",
                          "hash": "small_Family_unsplash_9bc7c5992d",
                          "mime": "image/jpeg",
                          "name": "small_Family-unsplash.jpg",
                          "path": null,
                          "size": 20.74,
                          "width": 500,
                          "height": 334,
                          "provider_metadata": {
                            "public_id": "small_Family_unsplash_9bc7c5992d",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377874/medium_Family_unsplash_9bc7c5992d.jpg",
                          "hash": "medium_Family_unsplash_9bc7c5992d",
                          "mime": "image/jpeg",
                          "name": "medium_Family-unsplash.jpg",
                          "path": null,
                          "size": 39.79,
                          "width": 750,
                          "height": 501,
                          "provider_metadata": {
                            "public_id": "medium_Family_unsplash_9bc7c5992d",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377871/thumbnail_Family_unsplash_9bc7c5992d.jpg",
                          "hash": "thumbnail_Family_unsplash_9bc7c5992d",
                          "mime": "image/jpeg",
                          "name": "thumbnail_Family-unsplash.jpg",
                          "path": null,
                          "size": 6.67,
                          "width": 234,
                          "height": 156,
                          "provider_metadata": {
                            "public_id": "thumbnail_Family_unsplash_9bc7c5992d",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "Family_unsplash_9bc7c5992d",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 238.49,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377871/Family_unsplash_9bc7c5992d.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "Family_unsplash_9bc7c5992d",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:57:56.123Z",
                      "updatedAt": "2022-03-15T20:57:56.123Z"
                    }
                  }
                }
              },
              {
                "id": 13,
                "image": {
                  "data": {
                    "id": 22,
                    "attributes": {
                      "name": "City-Unsplash.jpg",
                      "alternativeText": "City-Unsplash.jpg",
                      "caption": "City-Unsplash.jpg",
                      "width": 1920,
                      "height": 1423,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377884/large_City_Unsplash_21f06e2fdb.jpg",
                          "hash": "large_City_Unsplash_21f06e2fdb",
                          "mime": "image/jpeg",
                          "name": "large_City-Unsplash.jpg",
                          "path": null,
                          "size": 78.67,
                          "width": 1000,
                          "height": 741,
                          "provider_metadata": {
                            "public_id": "large_City_Unsplash_21f06e2fdb",
                            "resource_type": "image"
                          }
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377886/small_City_Unsplash_21f06e2fdb.jpg",
                          "hash": "small_City_Unsplash_21f06e2fdb",
                          "mime": "image/jpeg",
                          "name": "small_City-Unsplash.jpg",
                          "path": null,
                          "size": 27.6,
                          "width": 500,
                          "height": 370,
                          "provider_metadata": {
                            "public_id": "small_City_Unsplash_21f06e2fdb",
                            "resource_type": "image"
                          }
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377885/medium_City_Unsplash_21f06e2fdb.jpg",
                          "hash": "medium_City_Unsplash_21f06e2fdb",
                          "mime": "image/jpeg",
                          "name": "medium_City-Unsplash.jpg",
                          "path": null,
                          "size": 50.73,
                          "width": 750,
                          "height": 556,
                          "provider_metadata": {
                            "public_id": "medium_City_Unsplash_21f06e2fdb",
                            "resource_type": "image"
                          }
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377883/thumbnail_City_Unsplash_21f06e2fdb.jpg",
                          "hash": "thumbnail_City_Unsplash_21f06e2fdb",
                          "mime": "image/jpeg",
                          "name": "thumbnail_City-Unsplash.jpg",
                          "path": null,
                          "size": 6.92,
                          "width": 212,
                          "height": 156,
                          "provider_metadata": {
                            "public_id": "thumbnail_City_Unsplash_21f06e2fdb",
                            "resource_type": "image"
                          }
                        }
                      },
                      "hash": "City_Unsplash_21f06e2fdb",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 217.72,
                      "url": "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647377882/City_Unsplash_21f06e2fdb.jpg",
                      "previewUrl": null,
                      "provider": "cloudinary",
                      "provider_metadata": {
                        "public_id": "City_Unsplash_21f06e2fdb",
                        "resource_type": "image"
                      },
                      "createdAt": "2022-03-15T20:58:07.550Z",
                      "updatedAt": "2022-03-15T20:58:07.550Z"
                    }
                  }
                }
              }
            ],
            "text_grid": [],
            "metadata": {
              "id": 12,
              "name": "Gallery",
              "section_id": "gallery",
              "background": false
            }
          },
          {
            "id": 3,
            "__component": "section.section-grid",
            "title": "My grid 2",
            "description": "A short description",
            "image_grid": [],
            "text_grid": [
              {
                "id": 9,
                "title": "Teste 1",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              },
              {
                "id": 7,
                "title": "Teste 2",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              },
              {
                "id": 8,
                "title": "Teste 3",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              }
            ],
            "metadata": {
              "id": 10,
              "name": "grid-two",
              "section_id": "grid-two",
              "background": true
            }
          },
*/
