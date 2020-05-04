export interface MovieSearch {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
	Type: string;
}

export interface Movie {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	DVD: string;
	BoxOffice: string;
	Production: string;
	Website: string;
	// Ratings: FilmByIdQuery_filmById_Ratings[];
}
