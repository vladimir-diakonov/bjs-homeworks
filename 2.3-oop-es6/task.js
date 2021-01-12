'use strict';

// Task 2.3.1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  };

  fix() {
    this.state *= 1.5;
  }

  set state(itemState) {
    if (itemState < 0) {
      this._state = 0;
    } else if (itemState > 100) {
      this._state = 100;
    } else this._state = itemState;
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type = null);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, state = 100, type = null);
    this.type = 'detective';
  }
}

// task 2.3.2

class Library {
  constructor(name = '', books = []) {
    this.name = name;
    this.books = books;
  }
    addBook(book) {
      if (book.state > 30) {
      this.books.push(book);
    }
  }
    findBookBy(type, value) {
      for (let book of this.books) {
        for (let key in book) {
          if (key === type && book[key] === value) {
            return book;
          }
        }
      } return null;
    }
    giveBookByName(bookName) {
      this.bookName = bookName;
        for (let book of this.books) {
            if (book.name === bookName) {
                this.books.splice(this.books.indexOf(book), 1);
                return book;
            }
        } return null;
    }
}

// Task 2.3.3

class StudentLog {
  constructor(studentName) {
    this.studentName = studentName;
    this.journalBook = [];
  }
    getName() {
      return this.studentName;
    }

    addGrade(grade, subject) {
      if (typeof grade != Number && grade <= 0 && grade >= 5) {
        return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.` && this.journalBook[subject].length;
      } else this.journalBook[subject].push(grade) && this.journalBook[subject].length;
    }

    getAverageBySubject(subject) {
      if (this.journalBook[subject] != this.journalBook[subject]) {
        return 0;
      } else {
        let sum = 0;
      for (let mark of this.journalBook[subject]) {
        sum += mark;  
      } return sum / this.journalBook[subject].length;
      }
    }

    getTotalAverage() {
      let sum = 0;
      let counter = 0;
      for (let subject in this.journalBook) {
          sum += this.getAverageBySubject(subject);
          counter ++;
      }
      return sum / counter;
  }
}