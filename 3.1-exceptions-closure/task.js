'use strict'

//task 3.1.1

function parseCount(productQuantity) {
  if (isNaN(Number.parseInt(productQuantity))) {
    throw new Error('Невалидное значение');
  } return Number.parseInt(productQuantity);  
} 

function validateCount(productQuantity) {
  try {
    return parseCount(productQuantity);
  } catch(error) {
    return error;
  }
}

//task 3.1.2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (b + c) < a || (a + c) < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }
  getPerimeter() {
    return Number(this.a + this.b + this.c);
  }
  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}