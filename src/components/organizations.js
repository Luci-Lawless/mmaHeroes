import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './organizations.css';

class Organizations extends PureComponent {
  static propTypes = {
    ufc: PropTypes.bool,
    pancrase: PropTypes.bool,
    strikeforce: PropTypes.bool,
    wec: PropTypes.bool,
    bellator: PropTypes.bool,
    pride: PropTypes.bool,
  }

  renderIcon() {
    const { ufc, pancrase, strikeforce, wec, bellator, pride } = this.props

    if (ufc) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021749/ufc-400x372_sj7crk.ico" alt="UFC" />
    if (pancrase) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021376/Pancrase_Hybrid_Wrestling_logo_omxk0d.ico" alt="Pancrase" />
    if (strikeforce) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,h_40,w_50/v1518021708/New-Strikeforce-Logo-Medium_vmmvid.ico" alt="Strikeforce" />
    if (wec) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021499/wec_kzs24e.ico" alt="WEC" />
    if (bellator) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021410/bellator_jkrfbd.ico" alt="Bellator" />
    if (pride) return <img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/a_38/v1518021555/1393300992_014_ek7ifr.ico" alt="Pride"/>

    return null
  }

  renderLabel() {
    const { ufc, pancrase, strikeforce, wec, bellator, pride } = this.props

    if (ufc) return <span>UFC</span>
    if (pancrase) return <span>Pancrase</span>
    if (strikeforce) return <span>Strikeforce</span>
    if (wec) return <span>WEC</span>
    if (bellator) return <span>Bellator</span>
    if (pride) return <span>Pride</span>

    return null
  }

  classNames() {
    const { ufc, pancrase, strikeforce, wec, bellator, pride } = this.props

    const baseClass = 'Organizations'

    if (ufc) return baseClass + ' UFC'
    if (pancrase) return baseClass + ' Pancrase'
    if (strikeforce) return baseClass + ' Strikeforce'
    if (wec) return baseClass + ' WEC'
    if (bellator) return baseClass + ' Bellator'
    if (pride) return baseClass + ' Pride'

    return baseClass
  }

  render() {
    const { ufc, pancrase, strikeforce, wec, bellator, pride } = this.props

    if (!ufc && !pancrase && !strikeforce && !wec && !bellator && !pride) return null

    return (
      <li className={this.classNames()}>
        { this.renderIcon() }
        { this.renderLabel() }
      </li>
    )
  }
}

export default Organizations
