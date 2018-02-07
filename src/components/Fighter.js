import React, { PureComponent } from 'react';

class Fighter extends PureComponent {
  render() {
    const { name, country, flag, bio, pride, strikeforce, ufc, wec, bellator, pancrase } = this.props

    return (
      <article className="fighter">
        <h1>{ name }</h1>
        <h2>{ country } <img src={ flag } /></h2>
        <div>
          <p>{ bio }</p>
          <ul>
            { pride && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/a_38/v1518021555/1393300992_014_ek7ifr.ico" /></li> }
            { strikeforce && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,h_40,w_50/v1518021708/New-Strikeforce-Logo-Medium_vmmvid.ico" /></li> }
            { ufc && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021749/ufc-400x372_sj7crk.ico" /></li> }
            { wec && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021499/wec_kzs24e.ico" /></li> }
            { bellator && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021410/bellator_jkrfbd.ico" /></li> }
            { pancrase && <li><img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/v1518021376/Pancrase_Hybrid_Wrestling_logo_omxk0d.ico" /></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default Fighter
