import React from 'react'
import '../styles/contacts.css'
import facebook from '../images/facebook.svg'
import insta from '../images/insta.svg'
import yutu from '../images/yutu.svg'
import twt from '../images/twt.svg'

export default function Contacts({direction, position}) {
  return (
    // inside of style change the direction of the flexbox with flex-direction

    <div className="contacts" style={{ flexDirection: direction, position: position }}>
  <div className="diference">
    <div className="contacts-bolita facebook">
      <img src={facebook} alt="Facebook" />
    </div>
  </div>
  <div className="diference">
    <div className="contacts-bolita instagram">
      <img src={insta} alt="Instagram" />
    </div>
  </div>
  <div className="diference">
    <div className="contacts-bolita youtube">
      <img src={yutu} alt="YouTube" />
    </div>
  </div>
  <div className="diference">
    <div className="contacts-bolita twitter">
      <img src={twt} alt="Twitter" />
    </div>
  </div>
</div>

  )
}
