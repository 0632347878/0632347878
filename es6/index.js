import Car from './Car';
import AnimatedElement from './AnimatedElement';

let currentItem = document.querySelector('.item-current');

let anim = new AnimatedElement(currentItem);
let car = new Car('audi', 2);

console.log(anim);
console.log(car);

