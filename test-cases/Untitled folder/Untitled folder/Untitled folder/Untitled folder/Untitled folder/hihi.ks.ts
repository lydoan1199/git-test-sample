import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("http://localhost:8444/");
  await web.click({
    type: "Web",
    id: "d662e8c6-aaa3-4cbd-a48f-31c99e454a76",
    attributes: {
      title: "Project 1",
      class: "project-header",
      "data-rnd-last-action-id": "f3068468-dc7d-4997-8207-258e8065a63b",
    },
    childIndex: 1,
    hashes: { "md5.v1": "4e85af63164447dfeab8cd91d1bfdf7c" },
    name: "div - P1Project 1",
    selectors: [
      {
        id: "491ca4a6-963e-4373-a4f4-f2b7b460d10f",
        type: "CSS",
        value: ".card:nth-child(1) .project-header",
        isDefault: true,
      },
      {
        id: "373bfc16-200b-4175-834b-5e74704f57c9",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "P1Project 1",
    pageUrl: "http://localhost:8444/organization/1/home",
    parentIframe: null,
    shadowRoot: null,
  });
});