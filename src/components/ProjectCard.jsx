import { Link } from 'react-router-dom'

const api = import.meta.env.VITE_API_URL;

function ProjectCard({ project }) {

    return (
        <div className="card h-100">
            {project.cover_image && (
                <img
                    src={`${api}/storage/${project.cover_image}`}
                    alt={`Immagine del progetto ${project.title}`}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'top' }}
                />
            )}
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