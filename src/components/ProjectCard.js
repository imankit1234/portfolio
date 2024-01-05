import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, portfolio_url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} href={portfolio_url}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
