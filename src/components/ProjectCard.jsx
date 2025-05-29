import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    return (
        <div className="card h-100">
            <img src={`/public/${project.cover_image}`} alt={project.title} />
            <h2>{project.title}</h2>
            <p><strong>Tipo:</strong> {project.type.name}</p>
            <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
                Vedilo su Github!
            </a>
            <div>
                <Link to={`/projects/${project.slug}`} className='detail-btn'>
                    Dettagli
                </Link>
            </div>

        </div>
    );
}

export default ProjectCard;