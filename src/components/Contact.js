import React from 'react'
import Model from './Model';


function Contact(props) {
  return (
    <>
      <Model { ...props.data.info[1]}  />
    </>
  )
}

export default Contact;