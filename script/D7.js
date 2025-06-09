/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const concatAndConvert = function (str1, str2) {
  const part1 = str1.substring(0, 2);
  const part2 = str2.substring(str2.length - 3);
  const result = (part1 + part2).toUpperCase();
  console.log(result);
};
console.log("--- ESERCIZIO 1 ---");
concatAndConvert("ciao", "mondo");
concatAndConvert("casa", "sole");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const generateRandomArray = function () {
  const randomArray = [];
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 101));
  }
  return randomArray;
};
console.log("--- ESERCIZIO 2 ---");
console.log(generateRandomArray());
console.log("\n");

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const getEvenNumbers = function (arr) {
  return arr.filter((num) => num % 2 === 0);
};
console.log("--- ESERCIZIO 3 ---");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sumArrayWithForEach = function (arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};
console.log("--- ESERCIZIO 4 ---");
console.log(sumArrayWithForEach([1, 2, 3, 4, 5]));
console.log("\n");

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sumArrayWithReduce = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
console.log("--- ESERCIZIO 5 ---");
console.log(sumArrayWithReduce([10, 20, 30]));
console.log("\n");

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const incrementArrayValues = function (arr, n) {
  return arr.map((num) => num + n);
};
console.log("--- ESERCIZIO 6 ---");
console.log(incrementArrayValues([1, 2, 3], 5));
console.log("\n");

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const getStringLengths = function (arr) {
  return arr.map((str) => str.length);
};
console.log("--- ESERCIZIO 7 ---");
console.log(getStringLengths(["EPICODE", "is", "great"]));
console.log("\n");

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const getOddNumbers = function () {
  const oddNumbers = [];
  for (let i = 1; i <= 99; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
};
console.log("--- ESERCIZIO 8 ---");
console.log(getOddNumbers());
console.log("\n");

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const getOldestMovie = function (moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  let oldestMovie = moviesArray[0];
  moviesArray.forEach((movie) => {
    if (parseInt(movie.Year) < parseInt(oldestMovie.Year)) {
      oldestMovie = movie;
    }
  });
  return oldestMovie;
};
console.log("--- ESERCIZIO 9 ---");
console.log(getOldestMovie(movies));
console.log("\n");

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const getNumberOfMovies = function (moviesArray) {
  return moviesArray.length;
};
console.log("--- ESERCIZIO 10 ---");
console.log(getNumberOfMovies(movies));
console.log("\n");

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const getMovieTitles = function (moviesArray) {
  return moviesArray.map((movie) => movie.Title);
};
console.log("--- ESERCIZIO 11 ---");
console.log(getMovieTitles(movies));
console.log("\n");

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const getMoviesOfCurrentMillennium = function (moviesArray) {
  const currentYear = new Date().getFullYear();
  return moviesArray.filter((movie) => parseInt(movie.Year) >= 2000);
};
console.log("--- ESERCIZIO 12 ---");
console.log(getMoviesOfCurrentMillennium(movies));
console.log("\n");

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sumMovieYears = function (moviesArray) {
  return moviesArray.reduce((sum, movie) => sum + parseInt(movie.Year), 0);
};
console.log("--- ESERCIZIO 13 ---");
console.log(sumMovieYears(movies));
console.log("\n");

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const getMovieByImdbID = function (moviesArray, imdbID) {
  return moviesArray.find((movie) => movie.imdbID === imdbID);
};
console.log("--- ESERCIZIO 14 ---");
console.log(getMovieByImdbID(movies, "tt0167261"));
console.log("\n");

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const getMovieIndexByYear = function (moviesArray, year) {
  return moviesArray.findIndex((movie) => parseInt(movie.Year) === year);
};
console.log("--- ESERCIZIO 15 ---");
console.log(getMovieIndexByYear(movies, 2005));
console.log(getMovieIndexByYear(movies, 1984));
console.log(getMovieIndexByYear(movies, 2050));
