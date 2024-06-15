let api= "http://www.omdbapi.com/?i=tt3896198&apikey=61e576a4&t=";

// fetch(api).then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let genre = document.querySelector('#genre');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let ln = document.querySelector('#ln');
let poster = document.querySelector('#poster');
let ratings = document.querySelector('#ratings');
let container=document.querySelector('#container');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion');
container.classList.add('hidden');

function search(){
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{

       
        error.innerText="";
        if(data.Error=== 'Movie not found!'){
           error.innerText = 'Movie not Found!'
        }
        else{
            container.classList.remove('hidden')
            title.innerText = data.Title;
            genre.innerText = data.Genre;
            actors.innerText = data.Actors;
            directors.innerText = data.Director;
           
            awards.innerText = data.Awards;
            collection.innerText=data.BoxOffice
            ln.innerText = data.Language;
            desc.innerText = data.Plot;
            ratings.innerText = data.imdbRating
            poster.src = data.Poster
            if(data.imdbRating  > 7) {
                suggestion.innerText = "Worth Watching"
                suggestion.style.backgroundColor='green'
            }else if(data.imdbRating > 6 && data.imdbRating < 7){
                suggestion.innerText = 'Can Watch';
                 suggestion.style.backgroundColor='Yellow';
            }else{
                suggestion.innerText="Time Waste";
                 suggestion.style.backgroundColor='red'
            }
            
        }

        
    })
}