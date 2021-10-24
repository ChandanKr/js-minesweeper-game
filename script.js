// minesweeper As-4

let gameOver = false;
let flag = 0;
let count = 0;
let flagCount = 0;
window.random = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let corners = [1, 9, 73, 81];
let topBottomEdge = [];
let leftRightEdge = [];
let filledArray = [];

const fillTopBottomEdge = () => {
  for (let i = 2; i <= 8; i++) {
    topBottomEdge.push(i); // top
    topBottomEdge.push(i + 72); // bottom
  }
};

const fillLeftRightEdge = () => {
  for (let i = 2; i <= 8; i++) {
    leftRightEdge.push(9 * i); // right
    leftRightEdge.push(9 * (i - 1) + 1); // left
  }
};
fillTopBottomEdge();
fillLeftRightEdge();

const fillBombQuantity = (i) => {
  if (corners.includes(i)) {
    let closeBombs = 0;
    if (i === 1) {
      if (random.includes(i + 1)) closeBombs++;
      if (random.includes(i + 10)) closeBombs++;
      if (random.includes(i + 9)) closeBombs++;
    } else if (i === 9) {
      if (random.includes(i - 1)) closeBombs++;
      if (random.includes(i + 8)) closeBombs++;
      if (random.includes(i + 9)) closeBombs++;
    } else if (i === 73) {
      if (random.includes(i + 1)) closeBombs++;
      if (random.includes(i - 8)) closeBombs++;
      if (random.includes(i - 9)) closeBombs++;
    } else {
      if (random.includes(i - 1)) closeBombs++;
      if (random.includes(i - 10)) closeBombs++;
      if (random.includes(i - 9)) closeBombs++;
    }

    if (!filledArray.includes(i)) filledArray.push(i);

    if (closeBombs !== 0) {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    } else {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    }
    if (flag == 1) return;

    if (closeBombs === 0) {
      flag = 1;
      if (i === 1) {
        fillBombQuantity(i + 1);
        fillBombQuantity(i + 10);
        fillBombQuantity(i + 9);
      } else if (i === 9) {
        fillBombQuantity(i + 9);
        fillBombQuantity(i - 1);
        fillBombQuantity(i + 8);
      } else if (i === 73) {
        fillBombQuantity(i + 1);
        fillBombQuantity(i - 9);
        fillBombQuantity(i - 8);
      } else {
        fillBombQuantity(i - 1);
        fillBombQuantity(i - 10);
        fillBombQuantity(i - 9);
      }
    }
  } else if (leftRightEdge.includes(i)) {
    let closeBombs = 0;
    if (random.includes(i - 9)) closeBombs++;
    if (random.includes(i + 9)) closeBombs++;
    if (i % 9 === 0) {
      if (random.includes(i - 1)) closeBombs++;
      if (random.includes(i - 10)) closeBombs++;
      if (random.includes(i + 8)) closeBombs++;
    } else {
      if (random.includes(i + 1)) closeBombs++;
      if (random.includes(i + 10)) closeBombs++;
      if (random.includes(i - 8)) closeBombs++;
    }

    if (!filledArray.includes(i)) filledArray.push(i);

    if (closeBombs !== 0) {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    } else {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    }
    if (flag == 1) return;

    if (closeBombs === 0) {
      flag = 1;
      fillBombQuantity(i - 9);
      fillBombQuantity(i + 9);
      if (i % 9 === 0) {
        fillBombQuantity(i - 10);
        fillBombQuantity(i - 1);
        fillBombQuantity(i + 8);
      } else {
        fillBombQuantity(i + 10);
        fillBombQuantity(i + 1);
        fillBombQuantity(i - 8);
      }
    }
  } else if (topBottomEdge.includes(i)) {
    let closeBombs = 0;
    if (random.includes(i - 1)) closeBombs++;
    if (random.includes(i + 1)) closeBombs++;
    if (i > 45) {
      if (random.includes(i - 9)) closeBombs++;
      if (random.includes(i - 10)) closeBombs++;
      if (random.includes(i - 8)) closeBombs++;
    } else {
      if (random.includes(i + 9)) closeBombs++;
      if (random.includes(i + 8)) closeBombs++;
      if (random.includes(i + 10)) closeBombs++;
    }

    if (!filledArray.includes(i)) filledArray.push(i);

    if (closeBombs !== 0) {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    } else {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    }
    if (flag == 1) return;

    if (closeBombs === 0) {
      flag = 1;
      fillBombQuantity(i - 1);
      fillBombQuantity(i + 1);
      if (i > 45) {
        fillBombQuantity(i - 9);
        fillBombQuantity(i - 10);
        fillBombQuantity(i - 8);
      } else {
        fillBombQuantity(i + 8);
        fillBombQuantity(i + 9);
        fillBombQuantity(i + 10);
      }
    }
  } else {
    let closeBombs = 0;
    if (random.includes(i - 1)) closeBombs++;
    if (random.includes(i + 1)) closeBombs++;
    if (random.includes(i - 9)) closeBombs++;
    if (random.includes(i - 10)) closeBombs++;
    if (random.includes(i - 8)) closeBombs++;
    if (random.includes(i + 9)) closeBombs++;
    if (random.includes(i + 8)) closeBombs++;
    if (random.includes(i + 10)) closeBombs++;

    if (!filledArray.includes(i)) filledArray.push(i);

    if (closeBombs !== 0) {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    } else {
      document.getElementById('cell_' + i).innerHTML = closeBombs;
      document.getElementById('cell_' + i).style.background = 'green';
    }

    if (flag == 1) return;

    if (closeBombs === 0) {
      flag = 1;
      fillBombQuantity(i + 1);
      fillBombQuantity(i - 1);
      fillBombQuantity(i + 8);
      fillBombQuantity(i - 8);
      fillBombQuantity(i + 9);
      fillBombQuantity(i - 9);
      fillBombQuantity(i + 10);
      fillBombQuantity(i - 10);
    }
  }
};

const formGrid = () => {
  for (let i = 1; i <= 81; i++) {
    var gridCell = document.createElement('div');
    gridCell.id = 'cell_' + i;
    gridCell.setAttribute('boxNumber', i);
    gridCell.style.display = 'flex';
    gridCell.style.justifyContent = 'center';
    gridCell.style.alignItems = 'center';
    gridCell.style.margin = '0 0';
    gridCell.style.border = '2px #71c8eb solid';
    gridCell.style.color = 'white';
    gridCell.style.fontSize = '30px';
    document.getElementById('gridContainer').appendChild(gridCell);
  }
};
formGrid();

const randomGenerate = () => {
  for (let i = 0; i < 10; i++) {
    let temp = Math.floor(Math.random() * 81) + 1;

    while (random.includes(temp)) {
      temp = Math.floor(Math.random() * 81) + 1;
    }
    random[i] = temp;
  }
  console.log(random);
};
randomGenerate();

const bombExplode = () => {
  for (let i = 0; i < 10; i++) {
    document.getElementById('cell_' + random[i]).style.background =
      'red no-repeat center';
    document.getElementById('cell_' + random[i]).style.backgroundImage =
      "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
    document.getElementById('cell_' + random[i]).style.backgroundSize =
      '70% 100%';
    gameOver = true;
    document.getElementById('resultDisplay').innerHTML = 'GAME OVER !!!';
  }
};

const checkBomb = (x) => {
  return x == random.filter((el) => el === parseInt(x));
};

const checkBox = (event) => {
  flag = 0;
  if (
    filledArray.length < 71 &&
    event.target.style.background === '' &&
    !gameOver
  ) {
    let box_no = event.target.getAttribute('boxNumber');
    if (checkBomb(box_no)) {
      bombExplode();
    } else {
      fillBombQuantity(parseInt(box_no));
      document.getElementById('gameScore').innerHTML = filledArray.length;
      event.target.style.background = 'green';
      if (filledArray.length === 71) {
        document.getElementById('resultDisplay').innerHTML =
          'Congratulations, You WIn!!!';
      }
    }
  }
};

const clearTable = () => {
  gameOver = false;
  filledArray = [];
  count = 0;
  flagCount = 0;
  document.getElementById('gameScore').innerHTML = count;
  document.getElementById('flagScore').innerHTML = 'FLAG = ' + flagCount;
  for (let i = 1; i <= 81; i++) {
    document.getElementById('cell_' + i).style.background = '';
    document.getElementById('cell_' + i).innerHTML = '';
  }
  document.getElementById('resultDisplay').innerHTML = '';
  randomGenerate();
};

const rightClicked = (e) => {
  e.preventDefault();
  if (e.target.style.background !== 'green' && filledArray.length < 71) {
    if (e.target.style.background === '' && flagCount < 10) {
      flagCount++;
      e.target.style.background = 'black no-repeat center';
      e.target.style.backgroundImage =
        "url('https://img.icons8.com/color/48/000000/filled-flag.png')";
      e.target.style.backgroundSize = '70% 100%';
    } else {
      if (e.target.style.background !== '') {
        e.target.style.background = '';
        flagCount--;
      }
    }
    document.getElementById('flagScore').innerHTML = 'FLAG = ' + flagCount;
  }
};

const playStart = () => {
  for (let i = 1; i <= 81; i++) {
    document.getElementById('cell_' + i).addEventListener('click', checkBox);
    document
      .getElementById('cell_' + i)
      .addEventListener('contextmenu', rightClicked, false);
    document
      .getElementById('resetButton')
      .addEventListener('click', clearTable);
  }
};
playStart();
