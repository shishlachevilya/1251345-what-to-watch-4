const setMoviesAdapter = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie.id.toString(),
      title: movie.name,
      bg: movie.background_color,
      videoPrev: movie.preview_video_link,
      preview: movie.preview_image,
      poster: movie.poster_image,
      background: movie.background_image,
      genre: movie.genre,
      description: movie.description,
      rating: movie.rating,
      votes: movie.scores_count,
      director: movie.director,
      starring: movie.starring,
      duration: movie.run_time,
      release: movie.released,
      reviews: [
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `Camille Guaty`,
          rating: 8.4,
          date: `2019-05-08`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `John Dou`,
          rating: 3.4,
          date: `2019-05-08`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `Chris Hemsworth`,
          rating: 5.2,
          date: `2019-05-08`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `Camille Guaty`,
          rating: 8.4,
          date: `2019-05-08`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `John Dou`,
          rating: 3.4,
          date: `2019-05-08`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci.`,
          author: `Chris Hemsworth`,
          rating: 5.2,
          date: `2019-05-08`,
        }
      ]
    };
  });
};

export default setMoviesAdapter;
