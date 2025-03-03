import React from 'react'
import PropTypes from 'prop-types'

export default function Heading({ title = 'Quantity BOX' }) {
  return (
    <h2 className="heading">{title}</h2>
  )
}

Heading.propTypes = { title: PropTypes.string };
