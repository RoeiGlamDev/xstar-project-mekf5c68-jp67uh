import autoprefixer from 'autoprefixer'; // Import autoprefixer for adding vendor prefixes
import cssnano from 'cssnano'; // Import cssnano for optimizing CSS

export default {
  plugins: [
    autoprefixer(), // Use autoprefixer plugin
    cssnano({ preset: 'default' }) // Use cssnano for minifying CSS
  ]
};