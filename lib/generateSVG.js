const [Triangle, Circle, Square] = require('./shapes.js')

const generateSVG = (data) => {
    let shape = ''
    if (data.logoShape === 'Circle') shape = (new Circle(data.shapeColor)).render()
    if (data.logoShape === 'Triangle') shape = (new Triangle(data.shapeColor)).render()
    if (data.logoShape === 'Square') shape = (new Square(data.shapeColor)).render()

    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>
</svg> 
`
}

module.exports = generateSVG