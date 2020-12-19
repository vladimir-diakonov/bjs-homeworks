//task 2.1.1
function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);

  if (D < 0) {
    return ({
      D,
      roots: []
    });
  } else if (D > 0) {
    return ({
      D,
      roots: [x1, x2]
    });
  } else return ({
    D,
    roots: [x1]
  });
};

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions(a, b, c)
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(result.D);
  console.log(`Значение дискриминанта ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
};

//task 2.1.2
function getAverageScore(data) {
  let lessonAndAverageMark = {};
  for (let mark in data) {
    lessonAndAverageMark[mark] = getAverageMark(data[mark]);
  }
  let marksSumAverage = 0;
  let marksSumNum = 0;
  for (let mark in lessonAndAverageMark) {
    marksSumAverage += lessonAndAverageMark[mark];
    marksSumNum++;
  }
  if (marksSumAverage === 0) {
    lessonAndAverageMark.average = 0;
  } else {
    lessonAndAverageMark.average = marksSumAverage / marksSumNum
  }
  return lessonAndAverageMark;
};

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else {
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
      marksSum += marks[i];
    }
    return marksSum / marks.length;
  }
}


//task 2.1.3
function getPersonData(secretData) {
  let pirateName = {};
  let nameKey = 0;
  for (let key in secretData) {
    if (nameKey === 0) {
      pirateName.firstName = getDecodedValue(secretData[key]);
    } else if (nameKey === 1) {
      pirateName.lastName = getDecodedValue(secretData[key]);
    }
    nameKey++;
  }
  return pirateName;
}

function getDecodedValue(secret) {
  let codeName;
  if (secret === 0) {
    codeName = 'Родриго';
  } else if (secret === 1) {
    codeName = 'Эмильо'
  }
  return codeName
}
