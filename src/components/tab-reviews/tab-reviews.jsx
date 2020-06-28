import React from "react";
import PropTypes from "prop-types";

class TabReviews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      leftCol: [],
      rightCol: []
    };

    this.renderReviews = this.renderReviews.bind(this);
    this.reviewsSeparator = this.reviewsSeparator.bind(this);

    this.reviewsSeparator();
  }

  reviewsSeparator() {
    this.props.movie.reviews.map((review, index) => {
      if (index % 2 === 0) {
        this.state.leftCol.push(review);
      } else {
        this.state.rightCol.push(review);
      }
    });
  }

  renderReviews(array) {
    return array.map((review, i) => {
      const {text, author, rating, date} = review;

      return (
        <div key={`${i}-${author}`} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{text}</p>

            <footer className="review__details">
              <cite className="review__author">{author}</cite>
              <time className="review__date" dateTime="2016-12-20">{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      );
    });
  }

  render() {
    const {leftCol, rightCol} = this.state;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {this.renderReviews(leftCol)}
        </div>

        <div className="movie-card__reviews-col">
          {this.renderReviews(rightCol)}
        </div>
      </div>
    );
  }
}

TabReviews.propTypes = {
  movie: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }))
  }).isRequired
};

export default TabReviews;
