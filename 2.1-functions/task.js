//task 2.1.1
function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  let x0 = [];
  let x1 = (-b + Math.sqrt(D)) / 2 * a;
  let x2 = (-b - Math.sqrt(D)) / 2 * a;
  //let roots = {
    //x0,
    //x1,
    //x2
  //};

  if (D < 0) {
    return ({
      D,
      x0
    });
  } else if (D > 0) {
    return ({
      D,
      x1,
      x2
    });
  } else return ({
    D,
    x1
  });
};

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions(a, b, c)
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(result.D);
  consolr.log(`Значение дискриминанта ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`);
  } else console.log(`Уравнение имеет один корень X₁ = ${result.x1}`);
};

//task 2.1.2
function getAverageScore(data) {
  let lessonAndMarks = data;
  for (let lesson in lessonAndMarks) {
    let marks = lessonAndMarks[lesson];
  }
  function getAverageMark(marks) {
    let marksSum = 0;
      for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
        let averageMark = marksSum / marks.length;
        return averageMark;
    }
}
};

//task 2.1.3
function getPersonData(secretData) {
  let name = secretData;
  for (let prop in name) {
    let value = name[prop];
    let secret = {prop, value};
    function getDecodedValue(secret) {
      let aaa = firstName;
      let bbb = lastName;
      //let 0 = 'Родриго';
      //let 1 = 'Эмильо';
      return `${prop}`;
    }
  }
}

