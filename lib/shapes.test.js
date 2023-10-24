const [Triangle, Circle, Square] = require('./shapes.js')

// Test each shape class for a render() method that returns a string for the 
// corresponding SVG file with the given shape color.
describe('Shapes', ()=> {
    it('Triangle', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    it('Circle', () => {
        const shape = new Circle('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
    it('Square', () => {
        const shape = new Square('green');
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="green" />');
    })
})
