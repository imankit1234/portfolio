import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, project_url }) => {
  return (
    <Col size={12} sm={6} md={4} style={{textAlign: "center"}}>
      <div className="proj-imgbx">
        <img src={imgUrl} href={project_url}/>
        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      <a href={project_url}>
        <button className="checkoutbtn" href={project_url}>Check out</button>
      </a>
      
    </Col>
  )
}
