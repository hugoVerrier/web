const body = document.querySelector('body')
const container = document.querySelector('#container')
const header = document.querySelector('header')


header.innerHTML +=`

    <h1 class="flex justify-center text-3xl underline ">Liste de film</h1>

`



const liste = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2475f1ac83e01913e15755759095f9e5")
    const json = await data.json()  
    console.log(json.results)
    json.results.forEach(listeHTML => {
        console.log(listeHTML)
        container.innerHTML +=
        `
        <div class="  m-8 border border-2 border-black rounded rounded-xl p-8">
        <h1 class="text-xl flex justify-center m-4 underline">${listeHTML.original_title}</h1>
        <img class="h-64 w-64 flex mx-auto object-cover  m-8 " src="https://image.tmdb.org/t/p/w500/${listeHTML.backdrop_path}"
        <p class="text-justify"> ${listeHTML.overview}</p>
        </div>
        
        `


    });
}   

liste()