// Parent class for rendering the shape of the SVG file
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

// Use inheritance to reuse the code in the child classes

// Class for creating a triangle shape object
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

// Class for creating a circle shape object
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

// Class for creating a square shape object
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`
    }
}

module.exports = [Triangle, Circle, Square]