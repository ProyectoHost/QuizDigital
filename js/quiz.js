
let questions = [
    {
        id: 1,
        question: "¿Cuál es el río más largo del mundo?",
        answer:"El Amazonas",
        options: [
            "El Nilo",
            "El Misisipi",
            "El Amazonas",
            "El Yangtsé"
        ]   
    },
    {
        id: 2,
        question: "¿Dónde esta Transilvania?",
        answer: "En Rumania",
        options: [
          "En Alemania",
          "En Rumania",
          "En Suecia",
          "En Finlandia"
        ]
      },
      {
        id: 3,
        question: "¿Cuál es el País con menos habitantes del Mundo?",
        answer: "La Ciudad del Vaticano",
        options: [
          "La Ciudad del Vaticano",
          "China",
          "Portugal",
          "Ninguna de las anteriores"
        ]
      },
      {
        id: 4,
        question: "¿En que Año cayó el Muro de Berlín?",
        answer: "En 1989",
        options: [
          "En 1889",
          "En 1988",
          "En 1819",
          "En 1989"
        ]
      },
      {
        id: 5,
        question: "¿Cuando Murió Freddie Mercury?",
        answer: "En 1991",
        options: [
          "En 1990",
          "En 1991",
          "En 1891",
          "Nunca Murió"
        ]
      },
      {
        id: 6,
        question: "¿Cual es el Océano más grande del mundo?",
        answer: "El Océano Pacifico",
        options: [
          "El Océano Mediterraneo",
          "El Océano Indico",
          "El Océano Artico",
          "El Océano Pacifico"
        ]
      },
      {
        id: 7,
        question: "¿Cual es el Planeta más Grande del Sistema Solar?",
        answer: "Júpiter",
        options: [
          "Júpiter",
          "Saturno",
          "Venus",
          "Marte"
        ]
      },
      {
        id: 8,
        question: "¿Cual es el Álbum musical más vendido de la historia?",
        answer: "Thriller, de Michael Jackson",
        options: [
          "Black in Black, de AD/DC",
          "Thriller, de Michael Jackson",
          "Folklore, de Taylor Swift",
          "Led Zeppelin IV, de Led Zeppelin"
        ]
      },
      {
        id: 9,
        question: "¿Cuál es la pelicula más Taquillera de la historia?",
        answer: "Vengadores: End Game",
        options: [
          "Vengadores: End Game",
          "Avatar",
          "E.T el Extraterrestre",
          "Barbie"
        ]
      },
      {
        id: 10,
        question: "¿Cuál es el Futbolista con más balones de Oro",
        answer: "Lionel Messi",
        options: [
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Káka",
          "Luka Modric"
          
        ]
      },
      {
        id: 11,
        question: "¿Cuántas notas musicales existen?",
        answer: "Doce",
        options: [
          "Trece",
          "Doce",
          "Dos",
          "Cinco"
          
        ]
      },
      {
        id: 12,
        question: "¿Cuál Es la Videoconsola más Vendida de la Historia?",
        answer: "La PlayStation 2",
        options: [
          "Nintendo DS",
          "Atari",
          "Game Boy",
          "La PlayStation 2"
          
        ]
      },
      {
        id: 13,
        question: "¿Cuál Fue la Primera Pelicula de Disney?",
        answer: "Blancanieves y los siete enanitos",
        options: [
          "Blancanieves y los siete enanitos",
          "La Bella y la Bestia",
          "La Sirenita",
          "La Bella Durmiente"
          
        ]
      },
      {
        id: 14,
        question: "¿Cuál es la Montaña más alta del Mundo?",
        answer: "El Everest",
        options: [
          "El Picacho, de Turmero",
          "Kangchenjunga",
          "El Everest",
          "Makalu"
          
        ]
      },
      {
        id: 15,
        question: "¿Cuántos días tiene un año Bisiesto?",
        answer: "366 Dias",
        options: [
          "366 Dias",
          "365 Dias",
          "364 Dias",
          "363 Dias"
          
        ]
      },
      {
        id: 16,
        question: "¿Cuantos Años son un Lustro?",
        answer: "5 Años",
        options: [
          "10 Años",
          "50 Años",
          "25 Años",
          "5 Años"
          
        ]
      },
      {
        id: 17,
        question: "¿Cuando se Extinguieron los dinosaurios?",
        answer: "Hace 66 Millones de Años",
        options: [
          "Hace 65 Millones de Años",
          "Hace 66 Millones de Años",
          "Hace 63 Millones de Años",
          "Hace 100 Millones de Años"
          
        ]
      },
      {
        id: 18,
        question: "¿Dónde se queda lo que pasa en las Vegas?",
        answer: "En las Vegas",
        options: [
          "En las Vegas",
          "En Nueva York",
          "En California",
          "En Caracas"
          
        ]
      },
      {
        id: 19,
        question: "¿Quíen escribió 'Orgullo y Prejuicio'",
        answer: "Jane Austen",
        options: [
          "J.R.R Tolkien",
          "Harper Lee",
          "Jane Austen",
          "Alice Walker"
          
        ]
      },
      {
        id: 20,
        question: "¿Cuaes la Serie más premiada de la historia de la televisión?",
        answer: "Game of Thrones",
        options: [
          "House of the Dragon",
          "Game of Thrones",
          "Strager Things",
          "Breaking Bad"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 1;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}