var bookCatalog = {
  'myBook1': {
    'title': 'Eragon',
    'author': 'Christopher Paolini',
    'genre': 'fantasy',
    'year of publication': 2002,
    'has been read': true,
    'main characters': ['Saphira', 'Arya', 'Murtagh', 'Brom', 'Galbatorix', 'Roran', 'Nasuada', 'Orik', 'Eragon'],
    'borrowed by': undefined,
    'rating': 5,
  },
  'myBook2': {
    'title': 'Harry Potter',
    'author': 'J.K. Rowling',
    'genre': 'fantasy',
    'year of publication': 1997,
    'has been read': true,
    'main characters': ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Ginny Weasley', 'Voldemort'],
    'borrowed by': undefined,
    'rating': 5,
  },
  'myBook3': {
    'title': 'Beszterce ostroma',
    'author': 'Mikszáth Kálmán',
    'genre': 'regény',
    'year of publication': 1895,
    'has been read': false,
    'main characters': ['Pongrácz István', 'Estella', 'Pamutkay János', 'Kovács János', 'Rebernyik János', 'Blázy Miklós polgármester', 'Trnowszky Gáspár', 'Trnowszky György', 'Trnowszky Péter', 'Apolka', 'Emil', 'Behenczy Pál báró és a fia', 'Károly', 'Klivényi József írnok'],
    'borrowed by': undefined,
    'rating': 5,
  },

  'page marker': function (book) {
    var pageInitial = this[book].page;
    this[book].page = prompt('Melyik oldalon tartasz az alábbi könyvben: ' + this[book].title + '?');
    if (typeof pageInitial === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '.');
    } else if (this[book].page < pageInitial) {
      alert('Nem haladhatsz visszafelé!');
      this[book].page = pageInitial;
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (this[book].page - pageInitial) + ' oldalt olvastál.');
    }
  },

  //beágyazott objektumok kiválasztása egy tulajdonság értéke alapján
  'unread': function () {
    var booksToRead = [];
    for (var book in this) {
      if (this[book]['has been read'] === false) {
        booksToRead.push(this[book].title);
      }
    }
  },

  //egy érték megváltoztatása
  'change property': function (object, property) {
    this[object][property] = prompt('A(z) ' + object + ' objektum ' + property + ' tulajdonságának jelenlegi értéke: ' + this[object][property] + '. Mi legyen az új érték?');
    alert('A(z) ' + object + ' objektum ' + property + ' tulajdonságának új értéke ' + this[object][property] + '.')
  }
};