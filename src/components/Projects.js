import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Student Management System",
      description: "Design & Development",
      imgUrl: projImg1,
      project_url: "https://github.com/imankit1234/student-management-system",
    },
    {
      title: "Crop Classification and reccomendation system",
      description: "Machine Learning",
      imgUrl: projImg2,
      project_url: "https://github.com/imankit1234/harvest_help",
    },
    {
      title: "Lung Nodule Detection Using UNet and DenseNet",
      description: "Machine Learning",
      imgUrl: projImg3,
      project_url: "https://github.com/imankit1234/Lung-Nodule-Detection-and-Classification-Using-UNet-and-DenseNet-",
    },
    {
      title: "Currency Converter",
      description: "Design & Development",
      imgUrl: projImg1,
      project_url: "https://github.com/imankit1234/Currency-Converter",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      project_url: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      project_url: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have done various projects in Full Stack Development  and  Machine Learning Domain</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">   
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Full Stack Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Machine Learning Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Full Stack Projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Machine Learning Projects </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
