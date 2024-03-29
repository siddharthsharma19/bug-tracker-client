const axios = require("axios").default;
const URL = "https://bug-tracker-cs9g-egkwwfq2t-sharmasiddharth017-gmailcom.vercel.app"
export const registerUser = async (name, username, userEmail, userPassword) => {
  let response;
  try {
    response = await axios.post(`${URL}/signup`, {
      name: name,
      username: username,
      email: userEmail,
      password: userPassword,
    });
    return response.status;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (userEmail, userPassword) => {
  let response;
  try {
    response = await axios.post(`${URL}/login`, {
      email: userEmail,
      password: userPassword,
    });
    return response.data.token;
  } catch (err) {
    return err;
  }
};

export const getUserData = async () => {
  let response;
  console.log(localStorage.getItem("token"));
  try {
    response = await axios.get(`${URL}/getInfo`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjectData = async (projectID) => {
  let response;
  try {
    response = await axios.get(`${URL}/getprojectinfo`, {
      params: {
        projectID: projectID,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugData = async (id) => {
  let response;
  try {
    response = await axios.get(`${URL}/getBugInfo`, {
      params: {
        id: id,
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjects = async () => {
  let response;
  try {
    response = await axios.get(`${URL}/getprojectsforauser`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugs = async () => {
  let response;
  try {
    response = await axios.get(`${URL}/getbugsforauser`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugsForAProject = async (projectID) => {
  let response;
  try {
    response = await axios.get(`${URL}/getbugsforaproject`, {
      params: {
        projectID: projectID,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addProject = async (
  projectTitleParam,
  projectDescriptionParam
) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/addproject`,
      {
        projectTitle: projectTitleParam,
        projectDescription: projectDescriptionParam,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const addBug = async (
  projectID,
  bugTitle,
  bugDescription,
  bugSeverity,
  bugDueDate
) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/addbug`,
      {
        projectID: projectID,
        bugTitle: bugTitle,
        bugDescription: bugDescription,
        bugSeverity: bugSeverity,
        bugDueDate: bugDueDate,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteProject = async (projectID, bugs) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/deleteproject`,
      {
        projectID: projectID,
        bugs: bugs,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjectIdForABug = async (bugID) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/getprojectidforabug`,
      {
        bugID: bugID,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const deleteBug = async (bugID) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/deletebug`,
      {
        bugID: bugID,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const assignBug = async (bugID, userName) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/assignbug`,
      {
        bugID: bugID,
        assignedTo: userName,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const closeBug = async (bugID) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/closebug`,
      {
        bugID: bugID,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const updateProject = async (
  projectID,
  projectTitle,
  projectDescription
) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/editproject`,
      {
        projectID: projectID,
        projectTitle: projectTitle,
        projectDescription: projectDescription,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const updateBug = async (
  bugTitle,
  bugDescription,
  bugSeverity,
  bugDueDate,
  bugID
) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/editbug`,
      {
        bugID: bugID,
        bugTitle: bugTitle,
        bugDescription: bugDescription,
        bugDueDate: bugDueDate,
        bugSeverity: bugSeverity,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const closeProject = async (projectID) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/closeProject`,
      {
        projectID: projectID,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const addDeveloper = async (username, projectID) => {
  let response;
  try {
    response = await axios.post(
      `${URL}/addDeveloper`,
      {
        developer: username,
        projectID: projectID,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};
