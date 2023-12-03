import { defineStore } from 'pinia'
import { options } from "../static";

export const useTop = defineStore('top', {
    state: () => ({ 
        moviesList: [],
        tvsList: [],
    }),
    actions: {
        async getTop(type='movie'){
            try {
                const result = await fetch(`https://api.themoviedb.org/3/${type}/top_rated?language=ru&page=1`, options);
                const data = await result.json();
                let array = data.results.filter((elem)=>elem.poster_path != null).slice(0,10);
                if (type == 'movie') {
                    this.moviesList = array;
                } else {
                    this.tvsList = array;
                }
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
})