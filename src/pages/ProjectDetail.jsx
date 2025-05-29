import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;

function ProjectDetail() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${api}/api/projects/${slug}`)
            .then((res) => {
                setProject(res.data.data);
                setError(null);
            })
            .catch((err) => {
                console.error("Errore nel caricamento:", err);
                setError("Progetto non trovato");
            });
    }, [slug]);

    if (error) return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <p className="fs-4 text-danger">{error}</p>
            <Link to="/" className="btn btn-primary">Torna alla Home</Link>
        </div>
    );

    if (!project) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary me-2" role="status"></div>
            <p className="fs-4 mt-3">Caricamento...</p>
        </div>
    );

    return (
        <>
            <div className="container py-5">
                <Link className="" to={'/'}>Torna alla Home</Link>

                <div className="project-detail mt-4">
                    <h1>{project.title}</h1>
                    {project.type && <p><strong>Tipo:</strong> {project.type.name}</p>}
                    {project.technologies?.length > 0 && (
                        <div className="mb-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech.id}
                                    className="badge me-2"
                                    style={{ backgroundColor: tech.color }}
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <p>{project.description}</p>


                    <img src={`/public/${project.cover_image}`} alt={project.title} />
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;