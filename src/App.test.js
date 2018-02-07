import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import FightersContainer from './containers/FightersContainer'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(title)
  })
})
