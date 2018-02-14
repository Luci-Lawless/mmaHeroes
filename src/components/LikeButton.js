import React, { PureComponent } from 'react';
import HeartGrey from '../img/heart-grey.svg';
import HeartRed from '../img/heart-red.svg';
import './LikeButton.sass';

class LikeButton extends PureComponent {
  state = { liked: false }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if(liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const { liked } = this.state
    return (
      <div className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
          <span className="likes">
          { liked ? 'You liked this' : null }
        </span>
      </div>
    )
  }
}

export default LikeButton
