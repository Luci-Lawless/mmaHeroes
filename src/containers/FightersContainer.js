import React, { PureComponent } from 'react';
import Title from '../components/Title';
import Fighter from '../components/Fighter';

class FightersContainer extends PureComponent {
  renderFighter(fighter, index) {
    return <Fighter key={index} { ...fighter } />
  }

  render() {
    return(
      <div className="fighters wrapper">
        <header>
          <Title content="MMA Heroes" />
        </header>

        <main>
          { this.props.fighters.map(this.renderFighter) }
        </main>
      </div>
    )
  }
}

export default FightersContainer
