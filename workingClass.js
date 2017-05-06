/**
 * Created by jeremias on 4/29/2017.
 */

var Shape = function (w,h) {
    this.w = w;
    this.h =h;
};

Shape.prototype.getArea = function(){
    return this.w*this.h;
};


var Square = function (w,h) {
    this.w = w;
    this.h = h;
}

Square.prototype = Object.create(Shape.prototype);

var square = new Shape(2,2);
var rectangle = new Square(4,8);


console.log(square.getArea());
console.log(rectangle.getArea());