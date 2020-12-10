import Typography from "typography"
const typography = new Typography({
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Jost',
      styles: [
        '300',
        '400',
        '500',
        '600',
      ],
    },
    {
      name: 'Inter',
      styles: [
        '300',
        '400',
        '500',
        '600',
      ],
    },
    
  ],
})

export const { scale, rhythm, options } = typography
export default typography