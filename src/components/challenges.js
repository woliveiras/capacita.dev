import React from 'react'

const Challenges = (props) => {
  const { title, wallpaper } = props.pageContext.frontmatter
  return (
    <div style={{ border: '1px solid rebeccapurple' }}>
      <h1>{title}</h1>
      <p>{wallpaper}</p>
    </div>
  )
}

export default Challenges
