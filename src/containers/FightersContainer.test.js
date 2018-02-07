import React from 'react';
import { shallow } from 'enzyme';
import FightersContainer from './FightersContainer';

describe('<FightersContainer />', () =>{
  const container = shallow(<FightersContainer fighters={[]} />)

  it('is wrapped in a div with class name "Fighters"', () => {
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('fighters')
  })
})
