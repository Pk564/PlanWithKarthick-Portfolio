import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title : "Project Management Professional (PMP)®",
    tag: "Project Management",
    desc: "Globally recognized certification demonstrating knowledge and experience in leading and directing projects using predictive, agile, and hybrid approaches.",
    issuer: "Project Management Institute (PMI) ",
    year: "2025",
    url: "https://www.credly.com/badges/bd63ef6a-9e0e-46f9-8613-055e699df5b3"
  },
  {
    title: "Project Scheduling, Primavera P6, Oracle",
    tag: "Project Management",
    desc: "Comprehensive training in Oracle Primavera P6 Professional for effective project scheduling, resource management, and progress tracking in complex projects.",
    issuer: "Oracle",
    year: "2025",
    url: "https://drive.google.com/file/d/18Xwaz-45Hsa6GLqip_azHfEhBg_fSJyM/view?usp=sharing"
  },
  {
    title: "Project Planning & Scheduling For Construction Management",
    tag: "Project Management",
    desc: "Skilled in Primavera P6, a robust project management tool for planning, scheduling, and controlling complex projects, ensuring efficient resource utilization and timely project delivery.",
    issuer: "CADD® CENTER",
    year: "2020",
    url: "https://drive.google.com/file/d/1gtIPUwug18WzWFfiyvbnva_XA1jeRVZE/view?usp=sharing"
  },
   {
    title: "Expert Training in Advanced Delay and Disruption Analysis in Construction",
    tag: "Delay Analysis & Advanced Scheduling",
    desc: "Certified in Advanced Delay and Disruption Analysis in Construction, with hands-on knowledge of Forensic Delay Analysis, Disruption Claims, SCL Protocol, and AACE 29R-03 frameworks.",
    issuer: "AH Planning ",
    year: "2026",
    url: "https://drive.google.com/file/d/10GlW_7drKCgzkM0RqqqgrJJbBbm470VP/view?usp=drive_link"
  },
   {
    title: "Advanced Baseline Time Scheduling Techniques",
    tag: "Delay Analysis & Advanced Scheduling",
    desc: "Proficient in using SYNCRO 4D for project planning, 4D scheduling, and visualizing construction projects to enhance project execution and stakeholder communication.",
    issuer: "EDGE PMO",
    year: "2026",
    url: "https://drive.google.com/file/d/1y2H2igfg_CxW3O_TuZQANBGMxYKE1_7y/view?usp=drive_link"
  },

  {
    title: "5D Scheduling and BIM",
    tag: "SYNCHRO 4D Bentley",
    desc: "Proficient in using SYNCRO 4D for project planning, 4D scheduling, and visualizing construction projects to enhance project execution and stakeholder communication.",
    issuer: "LinkedIn Learning",
    year: "2024",
    url: "https://drive.google.com/file/d/1XeHlvW7PISpJF9nLaW39QXGrphi_JOBt/view?usp=drive_link"
  },
  {
    title: "Data and Analytics",
    tag: "Fullstack Power Business Intelligence (FSBI)®",
    desc: "Turn complex project data into clear, actionable insights through interactive dashboards and real-time visualizations.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://drive.google.com/file/d/1a6eV7lI0lxe1TDpVPFHpWcZM6kcVm-zl/view?usp=drive_link"
  },
  {
    title: "Data and Analytics",
    tag: "•	MIS Reporting and Business Modeling Specialist using MS Excel ",
    desc: "Skilled in building dynamic reports, financial models, data dashboards, and automated templates to support data-driven business decisions.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2026",
    url: "https://drive.google.com/file/d/1U6lZimO6b4jy95isPe2VIF_qCry22Vr4/view?usp=sharing"
  }, 
  {
    title: "Data and Analytics",
    tag: "Data Analysis & Dashboard Associate using Power BI",
    desc: "Certified in core Microsoft Excel skills, including data entry, formatting, formulas, charts, tables, and pivot tables. Proficient in using Excel for data analysis, reporting, and business productivity. ",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://drive.google.com/file/d/1a6eV7lI0lxe1TDpVPFHpWcZM6kcVm-zl/view?usp=sharing"
  },
  {
    title: "Data and Analytics",
    tag: "SQL, Data Analysis, Reporting Specialist",
    desc: "Certified SQL Reporting Specialist skilled in writing advanced queries, managing relational databases, and transforming raw data into actionable business insights.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://drive.google.com/file/d/1S_TuCkoxqoEo7e29opJGMN1Y54pqm73R/view?usp=sharing"
  },    
 {
    title: "Automation",
    tag: "Excel Visual Basic for Application Developer",
    desc: "Programming language used to automate tasks and create custom functions in Microsoft Excel",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://drive.google.com/file/d/1bGX9ERaXLKkEi1VvpEzWN6PVgDA_Ed9l/view?usp=sharing"
  },
  
  {
    title: "Automation",
    tag: "Business Reporting Specialist using Python & Power BI",
    desc: "Programming language used to automate tasks and create custom functions in Microsoft Excel",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://drive.google.com/file/d/1gLJ_6FaCqOKhDzMTPvoWGAIr6BU737lx/view?usp=sharing"
  },
  
  {
    title: "Automation",
    tag: "Microsoft Power Apps",
    desc: "Certified in designing and implementing custom apps and automated workflows using Microsoft Power Apps, enabling efficient project tracking and reporting at both micro and macro levels.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.datacamp.com"
  },

  {
    title: "Automation",
    tag: "Microsoft Power Automate",
    desc: "Proficient in automating workflows, integrating systems, and streamlining repetitive tasks using Microsoft Power Automate to enhance efficiency in project management and reporting.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.datacamp.com"
  },

];

const tools = [
  { name: "AutoCAD",   level: "ADV", color: "#00B386" },  
  { name: "4D Scheduling",    level: "ADV", color: "#00B386" },
  { name: "5D Scheduling",    level: "ADV", color: "#00B386" },
  { name: "Power Query",   level: "ADV", color: "#00B386" }, 
  { name: "MS Office 360",   level: "ADV", color: "#00B386" },
  { name: "SAP ERP",    level: "ADV", color: "#00B386" },
  { name: "SAP ERP Automation",    level: "ADV", color: "#00B386" },    
  { name: "Navis Work",    level: "Inter", color: "#FBBF24" }, 
  { name: "SolidWorks",   level: "Inter", color: "#FBBF24" }, 
  { name: "Twin Motion Unreal Engine",   level: "Inter", color: "#FBBF24" }, 
 
];



const Certificates = () => {
  return (
    <div>
    <main className="main"> 
    <div className="custom-section-container">
      <h2 className="certificate-section-title">Certificates & Tools</h2>

      <h3 className="sub-title">Certificates</h3>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            className="certificate-card"
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-tag">{cert.tag}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-details">
              <p>{cert.desc}</p>
              <span>
                {cert.issuer} • {cert.year}
              </span>
            </div>
          </a>
        ))}
      </div>

      <h3 className="sub-title">Tools & Technologies</h3>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <span className="tool-name">{tool.name}</span>
            <span className="tool-level" style={{ backgroundColor: tool.color }}>
              {tool.level}
            </span>
          </div>
        ))}
      </div>
    </div>

    </main>
    </div>
  );
};

export default Certificates;