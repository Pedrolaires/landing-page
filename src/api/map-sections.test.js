import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
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
      id: 2,
      __component: "section.section-content",
      title: "News coverage and some surprises",
      content:
        "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
      metadata: {
        id: 6,
        name: "Intro",
        section_id: "intro",
        background: false,
      },
    });

    expect(data.component).toBe("section.section-content");
    expect(data.title).toBe("News coverage and some surprises");
    expect(data.html).toBe(
      "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
    );
    expect(data.background).toBe(false);
    expect(data.sectionID).toBe("intro");
  });
});

/*
[
          {
            "id": 2,
            "__component": "section.section-content",
            "title": "News coverage and some surprises",
            "content": "<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>",
            "metadata": {
              "id": 6,
              "name": "Intro",
              "section_id": "intro",
              "background": false
            }
          },
          {
            "id": 4,
            "__component": "section.section-grid",
            "title": "My grid",
            "description": "A short description",
            "image_grid": [],
            "text_grid": [
              {
                "id": 6,
                "title": "Teste 1",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              },
              {
                "id": 5,
                "title": "Teste 2",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              },
              {
                "id": 4,
                "title": "Teste 3",
                "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
              }
            ],
            "metadata": {
              "section_id": "grid-one",
              "background": true
            }
          },

*/
