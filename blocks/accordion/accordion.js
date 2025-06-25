/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default async function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement("summary");
    summary.className = "accordion-item-label";
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = "accordion-item-body";
    // decorate accordion item
    const details = document.createElement("details");
    details.className = "accordion-item";
    details.append(summary, body);
    row.replaceWith(details);
  });

  // add tooltip
  let placeholders = await fetch("/data.json")
    .then((res) => res.json())
    .then((data) => data.data);
  let items = block.querySelectorAll(".accordion-item");

  items.forEach((it) => {
    it.addEventListener("mouseover", function () {
      let header = it.querySelector("summary");
      let placeholder = placeholders.find(
        (p) => p.key == (it.hasAttribute("open") ? "open" : "close")
      );
      if (!header.querySelector(".tooltip")) {
        let tooltip = document.createElement("p");
        tooltip.classList = "tooltip";
        tooltip.innerText = `${placeholder["en"]}`;
        header.appendChild(tooltip);
      }
    });
    it.addEventListener("mouseout", function () {
      let header = it.querySelector("summary");
      let tooltip = header.querySelector(".tooltip");
      if (tooltip) {
        header.removeChild(tooltip);
        tooltip = null;
      }
    });
  });
}
