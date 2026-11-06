export const manifest = {
  screens: {
    scr_3bsfgy: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_ebuuoj: { name: "Product", route: "/product", position: { "x": 1560, "y": 220 } },
    scr_flq1sq: { name: "2026 Festival", route: "/festival", position: { "x": 2960, "y": 220 } },
    scr_og3ase: { name: "About Us", route: "/about", position: { "x": 4360, "y": 220 } },
    scr_pjsnex: { name: "Connect", route: "/connect", position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_mlfepm: { name: "Main Navigation", x: 0, y: 0, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_mlfepm", children: [
    { kind: "screen", id: "scr_3bsfgy" },
    { kind: "screen", id: "scr_ebuuoj" },
    { kind: "screen", id: "scr_flq1sq" },
    { kind: "screen", id: "scr_og3ase" },
    { kind: "screen", id: "scr_pjsnex" }]
  }]

};