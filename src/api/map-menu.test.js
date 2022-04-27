import { mapMenu, mapMenuLinks } from "./map-menu";

describe("map-menu", () => {
  it("should return a predefined object if there is no data", () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("");
    expect(menu.imageSrc).toBe("");
    expect(menu.link).toBe("");
  });

  it("should map menu to match required keys and values", () => {
    const menu = mapMenu({
      id: 2,
      logo_text: "LOGO",
      logo_link: "#home",
      open_in_a_new_tab: false,
      logo_image: {
        data: {
          id: 14,
          attributes: {
            name: "landing-page-2.svg",
            alternativeText: "landing-page-logo",
            caption: "landing-page-2.svg",
            hash: "landing_page_2_0c680e24a7",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 2.51,
            url: "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647375778/landing_page_2_0c680e24a7.svg",
          },
        },
      },
      menu: [
        {
          id: 4,
          link_label: "intro",
          url: "#intro",
          open_in_a_new_tab: false,
        },
        {
          id: 7,
          link_label: "grid-one",
          url: "#grid-one",
          open_in_a_new_tab: false,
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe("LOGO");
    expect(menu.link).toBe("#home");
    expect(menu.imageSrc).toBe(
      "https://res.cloudinary.com/dzidpc3jk/image/upload/v1647375778/landing_page_2_0c680e24a7.svg",
    );
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe("intro");
    expect(menu.links[0].link).toBe("#intro");
  });

  it("should return an empty array if there is no links", () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it("should map links", () => {
    const links = mapMenuLinks([
      {
        id: 4,
        link_label: "intro",
        url: "#intro",
        open_in_a_new_tab: false,
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe("intro");
    expect(links[0].link).toBe("#intro");
  });
});
