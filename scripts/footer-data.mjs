/** Hologram product links for site footer (slug under /hologram/). */
export const hologramFooterProducts = [
  { slug: "hologram-hot-stamping-foil", title: "Hologram Hot Stamping Foil" },
  { slug: "qr-code-hologram-stickers", title: "QR Code Hologram Stickers" },
  { slug: "customized-text-hologram", title: "Customized Text Hologram" },
  { slug: "laser-numbered-holograms", title: "Laser Numbered Holograms" },
  { slug: "holographic-pouches", title: "Holographic Pouches" },
  { slug: "hologram-paper-label", title: "Holographic Paper Labels" },
  { slug: "holographic-security-tapes", title: "Holographic Security Tapes" },
  { slug: "hologram-shrink-sleeves", title: "Hologram Shrink Sleeves" },
  { slug: "hologram-coupons", title: "Hologram Coupons" },
  { slug: "id-overlay-holograms", title: "ID Overlay Holograms" },
  { slug: "generic-hologram-stickers", title: "Generic Hologram Stickers" },
];

/** @param {string} home Path prefix, e.g. "" or "../" */
export function hologramFooterColumn(home) {
  const links = [
    `          <li><a href="${home}hologram-sticker.html">All hologram solutions</a></li>`,
    ...hologramFooterProducts.map(
      (item) => `          <li><a href="${home}hologram/${item.slug}.html">${item.title}</a></li>`
    ),
  ];
  return `      <div class="footer-col">
        <h3>Hologram stickers</h3>
        <ul>
${links.join("\n")}
        </ul>
      </div>`;
}
