const [Triangle, Circle, Square] = require('./shapes.js')

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
