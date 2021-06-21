import React, { Component } from 'react'
import {getMovies} from "..fakeMovieService"

 class Movies extends Component {
     state = {
         movie: getMovies()
     };

    render() {
        return (
            <div>
                <h3>Showing {console.log(this.state.movie)} movies in the database</h3>
                
            </div>
        )
    }
}
export default Movies

