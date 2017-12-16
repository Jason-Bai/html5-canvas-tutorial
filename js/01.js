window.addEventListener('load', eventWindowLoaded, false);

var Debugger = function () {};
Debugger.log = function (message) {
  try {
    console.log(message);
  } catch (e) {
    return;
  }
};

function eventWindowLoaded(){
  canvasApp();
}

function canvasSupport() {
  return true;
}

function canvasApp() {
  if (!canvasSupport()) {
    return;
  }

  var theCanvas = document.getElementById("canvasOne");
  var context = theCanvas.getContext('2d');

  Debugger.log('Drawing Canvas');

  function drawScreen() {
    // 背景
    context.fillStyle = '#ffffaa';
    context.fillRect(0, 0, 500, 300);

    // 文字
    context.fillStyle = '#000000';
    context.font = '20px Sans-Serif';
    context.textBaseline = 'top';
    context.fillText('Hello World', 195, 80);

    // 图像
    var helloWorldImage = new Image();
    helloWorldImage.onload = function () {
      context.drawImage(helloWorldImage, 155, 110);
    };
    helloWorldImage.src = "helloworld.gif";

    // 边框
    context.strokeStyle = '#000000';
    context.strokeRect(5, 5, 490, 290);
  }

  drawScreen();
}
