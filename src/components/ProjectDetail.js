import { getBugData, getProjectData } from "../components/ServerConnections";
import { BugBar } from "../components/BugBar";
import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import BugList from "./BugList";

const ProjectDetail = ({ projectID }) => {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();
  const navigate = useNavigate();
  const [bugList, setBugList] = useState([]);
  const [bugLoading, setBugLoading] = useState(true);

  useEffect(() => {
    getProjectData(projectID)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteProject = () => {
    //todo
  };

  const handleAddBug = () => {
    navigate(`/project/${projectID}/addbug`);
  };
  return (
    <>
      {loading ? (
        "Loading "
      ) : (
        <>
          <div>
            <h1>{project?.projectTitle}</h1>
          </div>
          <div>
            <p>{project?.projectDescription}</p>
          </div>
          <div>
            <p>{project?.projectOwner}</p>
          </div>
          <div>
            <p>{project?.projectStatus}</p>
          </div>
          <div>
            <p>{project?.projectStartDate}</p>
          </div>
          <div>
            <button onClick={handleAddBug}>Add Bug</button>
            {project?.projectOwner === name ? (
              <button onClick={handleDeleteProject}>Delete</button>
            ) : (
              <></>
            )}
          </div>
          <BugList bugs={project.bugs} />
        </>
      )}
    </>
  );
};

export default ProjectDetail;