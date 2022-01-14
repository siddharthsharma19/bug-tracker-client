import { getBugData, getProjectData } from "../components/ServerConnections";
import { BugBar } from "../components/BugBar";
import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import BugList from "./BugList";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Stack
} from '@mui/material';

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
    <Paper className="projectdescp">
          <div>
            <h1>{project?.projectTitle}</h1>
            <p className="statusdiv"><i>{project?.projectDescription}</i></p>
        
          </div>
          
          <Stack spacing={2} direction="row">
            <Button onClick={handleAddBug} variant="contained">Add Bug</Button>
            
            {project?.projectOwner === name ? (
              <Button onClick={handleDeleteProject} variant="contained" color="error">Delete</Button>
            ) : (
              <></>
            )}
         
          </Stack>

          </Paper>
      {loading ? (
        "Loading "
      ) : (
        <Paper className="projectpaper" variant="outlined">
        
        <div>
        <Accordion className="membersacc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Members assigned</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>      
        </div>
          
        <div>
          <div>
            <p><strong>Project Owner: {project?.projectOwner}</strong></p>
          </div>
          <div >
            Status: <p className="statusdiv">{project?.projectStatus}</p>
          </div>
          <div>
            <p><strong>Created On: {project?.projectStartDate}</strong></p>
          </div>
        </div>
          
          {/* <BugList bugs={project.bugs} /> */}
          
        </Paper>   
        
      
      )}
      
    </>
  );
};

export default ProjectDetail;
