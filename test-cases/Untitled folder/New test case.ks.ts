import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "eb6bc829-24ae-4ec9-84e5-2f846251ea24",
    attributes: { class: "text-vertical-center" },
    childIndex: 1,
    hashes: { "md5.v1": "cc987fc77f95626f36f5bc9e85373c99" },
    name: "div - CURA Healthcare Service",
    selectors: [
      {
        id: "efecbb8a-5355-4547-b028-e4365cdd2274",
        type: "CSS",
        value: ".text-vertical-center",
        isDefault: true,
      },
      {
        id: "a89d926b-cd00-4e9d-8a33-194a18387cbd",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "CURA Healthcare Service\nWe Care About Your Health\n\nMake Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});