export const movies = [
  {
    id: `1`,
    bg: `bg`,
    title: `Mindhunter`,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    preview: `img/mindhunter.jpg`,
    poster: `img/mindhunter.jpg`,
    background: `img/mindhunter.jpg`,
    genre: `Thrillers`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 10.0,
    votes: 32,
    director: `Best Director`,
    starring: [`Nicola Cage`, `Cara Delvin`, `Joseph Moser`],
    duration: 48,
    release: 2016,
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
  }
];

export const TabLabel = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const genreList = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

export default {
  movies,
  TabLabel,
  genreList
};
