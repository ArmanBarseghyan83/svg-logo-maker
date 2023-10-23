class Shape {
    constructor(logoShape, shapeColor, logoText, textColor) {
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor
    }
}

class Triangle extends Shape {
    constructor(logoShape, shapeColor, logoText, textColor) {
        super(logoShape, shapeColor, logoText, textColor)
    }

    render() {
        return ``
    }
}

class Circle extends Shape {
    constructor(logoShape, shapeColor, logoText, textColor) {
        super(logoShape, shapeColor, logoText, textColor)
    }

    render() {
        return ``
    }
}

class Square extends Shape {
    constructor(logoShape, shapeColor, logoText, textColor) {
        super(logoShape, shapeColor, logoText, textColor)
    }

    render() {
        return ``
    }
}

module.exports = [Triangle, Circle, Square]