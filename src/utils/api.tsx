const apiKey = '26fc32c3'; // should be in .env

export const searchMovie = async (search: string) => await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);

export const getMovie = async (movieId: string) => await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)