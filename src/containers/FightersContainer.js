import React, { PureComponent } from 'react';
import Title from '../components/Title';
import Fighter from '../components/Fighter';
import './FightersContainer.css';
import FighterEditor from '../components/FighterEditor';

class FightersContainer extends PureComponent {
  renderFighter(fighter, index) {
    return <Fighter key={index} { ...fighter } />
  }

  render() {
    return(
      <div className="FightersContainer">
        <FighterEditor />
        <header>
          <Title content="Mixed Martial Arts Heroes" />
        </header>

        <main>
          { this.props.fighters.map(this.renderFighter) }
        </main>
      </div>
    )
  }
}

export default FightersContainer
