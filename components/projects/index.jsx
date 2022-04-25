import Image from "next/image";
import {
  ProjectCard,
  ProjectContent,
  ProjectImage,
  ProjectSection,
  ProjectUri,
  Row,
} from "./project.styled";
export default function _ProjectSections() {
  const projects = [
    {
      name: "Jobberx Website",
      image: "/assets/media/web/job.jpg",
      uri: "jobberx.netlify.com",
      id: Math.random() * 1000,
    },
    {
      name: "Ikorodu Tech Awards",
      image: "/assets/media/web/ikd.jpg",
      uri: "ikdtech.netlify.com",
      id: Math.random() * 1000,
    },
    {
      name: "Shawn Foundation - NIG",
      image: "/assets/media/web/charity.jpg",
      uri: "shawnfoundation.com.ng",
      id: Math.random() * 1000,
    },
    {
      name: "Review Expert",
      image: "/assets/media/web/review.jpg",
      uri: "reviewexpert.netlify.com",
      id: Math.random() * 1000,
    },
    {
      name: "Review Dashboard",
      image: "/assets/media/web/db.jpg",
      uri: "reviewexpert.netlify.com",
      id: Math.random() * 1000,
    },
  ];
  return (
    <ProjectSection>
      <header>
        <h1>
          For the past few years I have worked on{" "}
          <span>some amazing projects.</span>
        </h1>
      </header>
      <Row>
        {projects.map((item) => (
          <ProjectCard key={item.id}>
            <ProjectImage>
              <img src={item.image} className="responsive-image" />
            </ProjectImage>
            <ProjectContent>
              <ProjectUri>
                <a href={item.uri}>{item.name}</a>
              </ProjectUri>
            </ProjectContent>
          </ProjectCard>
        ))}
      </Row>
    </ProjectSection>
  );
}
