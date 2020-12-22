import Typography from "typography";
const typography = new Typography({
  googleFonts: [
    {
      name: "Jost",
      styles: ["300", "400", "500", "600"],
    },
    {
      name: "Inter",
      styles: ["300", "400", "500", "600"],
    },
    {
      name: "Fira Mono",
      styles: ["400"],
    },
    {
      name: "Nunito Sans",
      styles: ["300", "400", "600", "700"],
    },
  ],
});

export const { scale, rhythm, options } = typography;
export default typography;
