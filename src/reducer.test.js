import {reducer} from "./reducer";
import {SET_GENRE} from "./constants";

const movies = [
  {
    id: `1`,
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
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
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
  },
  {
    id: `2`,
    title: `Orlando`,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    preview: `img/orlando.jpg`,
    poster: `img/orlando.jpg`,
    background: `img/orlando.jpg`,
    genre: `Comedies`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 9.7,
    votes: 124,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 156,
    release: 2017,
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
        author: `Chris Hemsworth`,
        rating: 5.2,
        date: `2019-05-08`,
      }
    ]
  },
  {
    id: `3`,
    title: `Dardjeeling Limited`,
    preview: `img/dardjeeling-limited.jpg`,
    poster: `img/dardjeeling-limited.jpg`,
    background: `img/dardjeeling-limited.jpg`,
    genre: `Thrillers`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 8.0,
    votes: 170,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 98,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 1999,
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
    ]
  },
  {
    id: `4`,
    title: `Midnight Special`,
    preview: `img/midnight-special.jpg`,
    poster: `img/midnight-special.jpg`,
    background: `img/midnight-special.jpg`,
    genre: `Sci-Fi`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 7.8,
    votes: 52,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 102,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 2001,
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
    ]
  },
  {
    id: `5`,
    title: `Seven Years IN Tibet`,
    preview: `img/seven-years-in-tibet.jpg`,
    poster: `img/seven-years-in-tibet.jpg`,
    background: `img/seven-years-in-tibet.jpg`,
    genre: `Kids & Family`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 5.0,
    votes: 1255,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 24,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 2005,
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
    ]
  },
  {
    id: `6`,
    title: `Moonrise Kingdom`,
    preview: `img/moonrise-kingdom.jpg`,
    poster: `img/moonrise-kingdom.jpg`,
    background: `img/moonrise-kingdom.jpg`,
    genre: `Horror`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 4.8,
    votes: 213,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 79,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 2012,
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
    ]
  },
  {
    id: `7`,
    title: `Snatch`,
    preview: `img/snatch.jpg`,
    poster: `img/snatch.jpg`,
    background: `img/snatch.jpg`,
    genre: `Comedies`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 3.0,
    votes: 22,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 210,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 1998,
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
    ]
  },
  {
    id: `8`,
    title: `Pulp Fiction`,
    preview: `img/pulp-fiction.jpg`,
    poster: `img/pulp-fiction.jpg`,
    background: `img/pulp-fiction.jpg`,
    genre: `Dramas`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius quis lorem id iaculis. Sed eget luctus orci. Donec cursus lectus auctor quam tempus ultricies. Nullam at aliquam massa. Donec mollis quis urna eget condimentum. Mauris at dictum ante. Phasellus maximus massa augue, ut luctus dolor rutrum et. Aliquam faucibus turpis lectus, sed hendrerit dolor malesuada at.`,
    rating: 2.3,
    votes: 293,
    director: `Best Director`,
    starring: `Nicola Cage, Cara Delvin, Joseph Moser`,
    duration: 87,
    videoPrev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    release: 2020,
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
    ]
  },
];

describe(`App component test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies,
      currentGenreItem: `All genres`
    });
  });

  it(`Reducer should change genre list label`, () => {
    expect(reducer({
      movies,
      currentGenreItem: `All genres`
    }, {
      type: SET_GENRE,
      payload: `Comedies`
    })).toEqual({
      movies,
      currentGenreItem: `Comedies`
    });
  });
});
