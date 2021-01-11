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