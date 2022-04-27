import { mapData } from "./map-data";

describe("map-data", () => {
  it("should map data even if there is no data", () => {
    const pagesData = mapData()[0];

    expect(pagesData.footerHtml).toBe("");
    expect(pagesData.slug).toBe("");
    expect(pagesData.title).toBe("");
    /*     expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({}); */
  });

  it("should map data if has something", () => {
    const data = {
      data: [
        {
          attributes: {
            footer_text: "<p>Hey</p>",
            Slug: "slug",
            Title: "title",
            sections: [1, 2, 3, 4],
            menu: { a: "b" },
          },
        },
      ],
    };
    const pagesData = mapData(data)[0];
    expect(pagesData.footerHtml).toBe("<p>Hey</p>");
    expect(pagesData.slug).toBe("slug");
    expect(pagesData.title).toBe("title");
    /*     expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ a: "b" }); */
  });
});
