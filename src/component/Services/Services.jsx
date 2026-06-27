import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "Creating responsive and user-friendly websites using HTML, CSS, and JavaScript.",
      img: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Frontend Development",
      desc: "Building interactive and dynamic web applications with modern frameworks.",
      img: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and visually appealing interfaces for a great user experience.",
      img: "https://picsum.photos/400/250?random=3",
    },
    {
      title: "SEO Optimization",
      desc: "Improving website visibility and performance through SEO best practices.",
      img: "https://picsum.photos/400/250?random=4",
    },
    {
      title: "WordPress Development",
      desc: "Developing fully customizable WordPress sites with responsive themes.",
      img: "https://picsum.photos/400/250?random=5",
    },
    {
      title: "Portfolio Projects",
      desc: "Showcasing creative work with clean, modern design and interactive features.",
      img: "https://picsum.photos/400/250?random=6",
    },
  ];

  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;



