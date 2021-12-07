import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')

  const hexValue = `#${hex}`

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert])
  return (
    <article
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">{hexValue}</p>
      {alert && <p className="alert"> copied to clipboard </p>}
    </article>
  )
}

export default SingleColor
