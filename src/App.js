import logo from "./logo.svg";
import Css from "./App.css";
import {useEffect, useState} from "react";
import SearchIcon from "./search.svg"
import Movie from "./Component/Movie";
// dynamic change with jsx

function App() {
    const API_movie=' http://www.omdbapi.com/?i=tt3896198&apikey=a4d3d369'
    const movie1= {
        "Poster"
        :
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    "Title"
        :
        "Italian Spiderman",
    "Type"
        :
        "movie",
    "Year"
        :
        "2007",
    "imdbID"
        :
        "tt2705436"
    }

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovie= async (title)=>{
       await fetch(`${API_movie}&s=${title}`)
            .then(async (response) => {
                const data= response.json()
                    .then(async (response)=>{
                        setMovies(response.Search)

                })

            })


    }

    useEffect(() => {
        searchMovie(searchTerm)
    },[])
  return (
      <div className="app">
          <h1>MyMovie</h1>
          <div className="search">
              <input placeholder="Search for movies"
                     value={searchTerm}
                     onChange={(e)=>{setSearchTerm(e.target.value);}}
              />
              <img src={SearchIcon}
                   alt="search"
                   onClick={()=>{searchMovie(searchTerm)}}
              />
          </div>

          { movies?.length>0
              ?   (
                      <div className="container">
                          {movies.map((movie) => (
                              <Movie movie={movie} />
                          ))}

                      </div>

                  ):
                  (
                      <>

                      </>
                  )
          }

      </div>
  );
}

export default App;
