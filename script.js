// Сохраняем ссылку на квадрат в переменную для дальнейших манипуляций
const square = document.querySelector('.navbar-left');

// Функция, принимающая на вход цвет. В случае, если 
// параметр не передан, то значение по умолчанию - white
const setColor = (color = 'red') => {
  // устанавливаем цвет фона у квадрата
  square.style.backgroundColor = color;
}