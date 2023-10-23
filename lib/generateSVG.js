const [Triangle, Circle, Square] = require('./shapes.js')

const generateSVG = (data) => {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="white">SVG</text>
</svg> 
`
}

module.exports = generateSVG