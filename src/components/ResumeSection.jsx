import React, { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import "./ResumeSection.css";

const ProjectItem = ({ title, client, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-item">
      <div className="project-header" onClick={() => setOpen(!open)}>
        <h5>
          {title} <span>- {client}</span>
        </h5>
        {open ? (
          <ChevronDown size={18} className="icon" />
        ) : (
          <ChevronRight size={18} className="icon" />
        )}
      </div>

      {open && (
        <div className="project-details open">
          <ul>
            {details.map((item, i) => (
              <li key={i}>
                <CheckCircle size={14} className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section className="resume-section py-5" id="resume">
      <div className="container">
        {/* Main heading */}
        <h2 className="resume-heading text-center mb-4">Experience</h2>

        {/* Yellow box for Current Responsibilities + Highlighted Skills */}
        <div className="resume-box mb-4">
          {/* Current Responsibilities */}
          <h4 className="section-title">Current Responsibilities</h4>
          <h4 className="section-title">
            UTOC Engineering Pte Ltd, Planning Engineer [Mar 24 - Present]
          </h4>
          <ul className="ps-0 mb-4">
            {[
              "Prepare valid, logic-driven project schedules in Primavera P6",
              "Plan, schedule, and manage defined work packages",
              "Verify and update the critical path and interfaces between task activities",
              "Prepare Key Performance Indicators (KPIs), cash-flow charts, histograms, progress S-curves, manpower reports",
              "Well-versed in project measurement methodology (CMS, Material Receiving Log, Fabrication Log, Installation Log)",
              "Track contractor productivity, perform delay analysis, and revise schedules as required",
              "Develop and maintain project controls plans, procedures, and governance",
              "Provide weekly updates to the procurement team to ensure timely materials and equipment",
              "Present daily/weekly project status to clients and internal teams",
              "Drive continuous improvement through lessons learned, process optimization, and training & development programs",
            ].map((task, i) => (
              <li key={i}>
                <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                {task}
              </li>
            ))}
          </ul>

          {/* Highlighted Skills */}
          <h4 className="section-title">Notable Abilities</h4>
          <div className="row">
            <div className="col-12 text-start">
              <h6>Functional & Technical</h6>
              <ul className="ps-0">
                {[
                  "Project documentation and product data management",
                  "Advanced Excel automation using VBA",
                  "Collaborative teamwork in cross-functional environments",
                  "Primavera P6, Microsoft Project Plan 3",
                  "Excel VBA, SYNCHRO 4D, Navisworks, SAP, SAP ECTR, Command Center",
                  "SolidWorks, AutoCAD",
                ].map((skill, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                    {skill}
                  </li>
                ))}
              </ul>

              <h6 className="mt-4">Management & Soft Skills</h6>
              <ul className="ps-0">
                {[
                  "Team training and development",
                  "On-time Delivery (OTD) planning",
                  "Root cause analysis and problem solving",
                  "Process optimization and continuous improvement",
                  "Functional Skill: Documentation and product data management, team work, Excel VBA automation, Python Automation",
                  "Management Skill: Training and team development, Planning for OTD, Problem solving",
                  "Tools: Primavera P6, Excel VBA, Syncro Pro 4d, SQL, Power BI, Power Platform Apps, SAP, SAP ECTR, Command Center, SolidWorks, AutoCAD"

                ].map((skill, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="resume-box mb-4">
          <h4 className="section-title">Projects Undertaken</h4>
          <ProjectItem
            title="BH F&PT Offshore Support"
            client="HCL TECHNOLOGIES [MAR 21 - JAN 25]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, Power BI, SQL, Power Apps, Power Automate",
            ]}
          />
          <ProjectItem
            title="Database Migration Oracle to SAP"
            client="HCL TECHNOLOGIES [MAR 21 - AUG 24]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, SAP, SAP Automation, Power BI",
            ]}
          />
          <ProjectItem
            title="Spare Parts Creation for SRV and SV Valves"
            client="HCL TECHNOLOGIES [MAR 22 - DEC 23]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, SAP, SAP Automation, Power BI",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
