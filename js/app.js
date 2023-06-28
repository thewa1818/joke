
//いらない

const jokeNum = 10;

const fetchJoke = async () =>{
  for(let i =1; i <= jokeNum; i++){
    await getJoke(i);
  }
};


const getJoke = async (id) =>{
  const url = `https://official-joke-api.appspot.com/jokes/random`;
  const res = await fetch(url);
  const joke = await res .json();
  console.log(joke);
  createJoke(joke);
}


function createJoke(joke){
  const kidding = `

  <div class="joke_wrap">

   <p class ="joking">${joke.setup}</p>

   <p class="answer">${joke.punchline}</p>

  </div>
 
  `

  $(".list").append(kidding);
};

fetchJoke();

//こんなやり方もあった

// const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';


// fetch(url)
//   .then(data => data.json())
//   .then(json => console.log(json))




