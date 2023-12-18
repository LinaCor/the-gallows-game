![Static Badge](https://img.shields.io/badge/HTML-5-red) ![Static Badge](https://img.shields.io/badge/CSS-3-blue) ![Static Badge](https://img.shields.io/badge/SCSS-pink)
 ![Static Badge](https://img.shields.io/badge/JavaScript-ES6-yellow)

# О проекте

Интерактивная игра виселица, реализованная на нативном JS. 
Игра выполнена в виде SPA (Single Page Application) и имеет адаптивный дизайн для корректного отображения на различных устройствах. 
Для стилизации использован препроцессор SCSS.

Открыть страницу: https://linacor.github.io/the-gallows-game/

# Функциональность
Игроку предлагается угадать слово, загаданное скриптом. Если игрок называет букву, которая присутствует в слове, то она открывается, если нет, то на игровом поле появляется новый элемент виселицы. 
Реализованы следующие проверки поля ввода:
- отправка пустой строки,
- отправка двух и более символов,
- отправка чисел и не кириллических символов,
- отправка не уникальных значений.

# Демонстрация 
## Desktop version
1. Игровой процесс
![using a color picker](gif/desktop-version-test-game.gif)

2. Отправка пустой строки
![using a color picker](gif/desktop-version-test-empty.gif)

3. Отправка двух и более символов
![using a color picker](gif/desktop-version-test-double.gif)

4. Отправка английских букв и чисел
![using a color picker](gif/desktop-version-test-eng.gif)

5. Отправка повторяющихся букв
![using a color picker](gif/desktop-version-test-rep.gif)

## Mobile version
![using a color picker](gif/mobile-version.gif)