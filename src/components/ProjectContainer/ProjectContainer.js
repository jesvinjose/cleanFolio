import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <hr />
    <img
      src={project.background}
      alt={project.name}
      className='project__image'
    />
    <div className='horizontal-line' />
    <p
      className='project__description'
      style={{ backgroundColor: 'transparent' }}
    >
      {project.description}
    </p>
    <div className='horizontal-line' />
    {project.stack && (
      <div className='project__stack'>
        <p>Stacks:</p>
        <ul style={{display:'flex',justifyContent:'center'}}>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'> 
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}
    <div className='horizontal-line' />
    <div className='link-container'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
