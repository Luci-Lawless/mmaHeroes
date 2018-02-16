import React, { PureComponent } from 'react';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css'
import './FighterEditor.css';

const ORGANIZATIONS = [
  'ufc',
  'pancrase',
  'strikeforce',
  'bellator',
  'wec',
  'pride'
]

class FighterEditor extends PureComponent {
  constructor(props) {
    super()

    const { photo, name, country, bio, pride, strikeforce, ufc, wec, bellator, pancrase } = props

    this.state = {
      photo,
      name,
      country,
      bio,
      pride,
      strikeforce,
      ufc,
      bellator,
      wec,
      pancrase
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.bio.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  updateBio(text, medium) {
    this.setState({
      bio: text
    })
  }

  setOrganizations(event){
    this.setState({
      ufc: event.target.value === 'ufc',
      pride: event.target.value === 'pride',
      strikeforce: event.target.value === 'strikeforce',
      wec: event.target.value === 'wec',
      pancrase: event.target.value === 'pancrase',
      bellator: event.target.value === 'bellator',
    })
  }

  saveFighter() {
    const fighter = {
      ...this.state,
      liked: false
    }
    this.props.save(fighter)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyUp={this.updateName.bind(this)} />

        <Editor
          ref="bio"
          options={{
            placeholder: {text: 'Add bio...'}
          }}
          onChange={this.updateBio.bind(this)}
          onKeyUp={this.updateBio.bind(this)}
          text={this.state.bio} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyUp={this.updatePhoto.bind(this)} />

          {ORGANIZATIONS.map((organizations) => {
            return <label key={organizations} htmlFor={organizations}>
                <input
                  id={organizations}
                  type="checkbox"
                  name="organizations"
                  value={organizations}
                  onChange={this.setOrganizations.bind(this)} />
                {organizations}
              </label>
          })}
          <div className="actions">
            <button className="primary" onClick={this.saveFighter.bind(this)}>Save</button>
          </div>
      </div>
    )
  }
}

export default FighterEditor
