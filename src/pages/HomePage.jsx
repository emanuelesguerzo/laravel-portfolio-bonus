import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

const api = import.meta.env.VITE_API_URL;

function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${api}/api/projects`).then((res) => {
            setProjects(res.data.data);
        });
    }, []);

    if (projects.length === 0)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary me-2" role="status"></div>
                <p className="fs-4 mt-3">Caricamento...</p>
            </div>
        );

    return (
        <div className="container">
            <h1>Progetti</h1>
            <div className="row">
                {projects.map((project) => (
                    <>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <ProjectCard key={project.id} project={project} />
                        </div>
                    </>
                ))}
            </div>

        </div>
    );
}

export default Home;