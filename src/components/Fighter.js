import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Organizations from './organizations';
import Title from './Title';
import LikeButton from './LikeButton';
import './Fighter.css';

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class Fighter extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    pride: PropTypes.bool,
    strikeforce: PropTypes.bool,
    ufc: PropTypes.bool,
    wec: PropTypes.bool,
    bellator: PropTypes.bool,
    pancrase: PropTypes.bool
  }


  render() {
    const { photo, name, country, flag, bio, pride, strikeforce, ufc, wec, bellator, pancrase, liked } = this.props

    const organizations = { ufc, pancrase, strikeforce, wec, bellator, pride }

    return (
      <article className="fighter">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${ photo || PLACEHOLDER })` }} />
            <Title content={name} className="level-2" />
            <h2>{ country } <img src={ flag } alt="flag" /></h2>
        </header>
          <div>
              <p className="bio">{ bio }</p>
              <ul className="organizations">
                <Organizations { ...organizations }/>
              </ul>
          </div>
          <footer>
            <LikeButton onChange={this.toggleLike} liked={liked} />
          </footer>
      </article>
    )
  }
}

export default Fighter
