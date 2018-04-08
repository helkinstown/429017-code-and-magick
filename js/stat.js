'use strict';

window.renderStatistics = function (ctx, names, times) {

  // 1. Пишем отрисовку канваса с текстом. Задаем параметры на вход - координаты и размер
  // Облако и тень рисуются одним ctx со сдвигом offset

  var drawBackground = function (x, y, width, height) { // ПАРАМЕТР ctx
    var offset = 15;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + offset, y + offset, x + width - offset, y + offset, x + width, y);
    ctx.bezierCurveTo(x + width - offset, y + offset, x + width - offset, y + height - offset, x + width, y + height);
    ctx.bezierCurveTo(x + width - offset, y + height - offset, x + offset, y + height - offset, x, y + height);
    ctx.bezierCurveTo(x + offset, y + height - offset, x + offset, y + offset, x, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawBackground(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  drawBackground(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

// пишем отрисовку гистограммы: колонки и время

  var columnMaxHeight = 150;
  var columnX = 130;
  var columnWidth = 40;
  var columnIndent = 90;

// считаем макс время игры - почему так?

  var maxTime = times[0]; // ПАРАМЕТР times

  for (var i = 1; i < times.length; i++) { // что перебирает цикл?
    if (times[i] > maxTime) {
      maxTime = times[i]; // ???????????
    }
  }

// задаем шаг гистограммы
// рисуем колонки гистограммы, считая временные шаги

  var step = columnMaxHeight / maxTime;

  for (i = 0; i < times.length; i++) { // что перебирает цикл?
    var columnHeight = step * times[i]; // считает высоту
    var columnY = ctx.canvas.clientHeight - columnHeight - 60; // рисует колонку, заливает и тд

    ctx.fillStyle = '#000000';
    ctx.fillText(times[i].toFixed(0), columnX + columnIndent * i, columnY - 15); // округляет toFixed

    if (names[i] === 'Вы') { // проверяет Вы ли это? раскрашивает колонки в зависимости от этого ПАРАМЕТР names
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgb(0, 0, ', (Math.random() * 255).toFixed(0), ')'].join('');
    }

    ctx.fillRect(columnX + columnIndent * i, columnY, columnWidth, columnHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], columnX + columnIndent * i, columnY + columnHeight + 5);
  }

};





???
var canvas = document.createElement("canvas"); //надо делать канвасы с разным id?
var ctx = canvas.getContext("2d");

document.body.appendChild(canvas); ?????


var levelUp = 0;
var levelUpSuccess = 0;
var забор = 0;

// успешное прохождение уровня

function levelUpSuccess(){
  document.addEventListener( 'mousedown', ??? );

  if(code37 === true && забор === true){
    return ???();
  }
}

