import React from 'react'

const ProjectDetails = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit accusantium alias iusto dolorum sapiente magnam consectetur quibusdam eaque? Enim laboriosam recusandae itaque eum quibusdam aut fugit eaque nemo voluptate soluta.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Author</div>
          <div>September 3rd, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails