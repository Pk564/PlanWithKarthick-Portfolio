import React from 'react';
import './ServicesSection.css';
import { 
  Smartphone, Globe, 
  MonitorCheck, Wrench, BarChart2, 
  AppWindow, Repeat, Cpu, Database
} from 'lucide-react';

const Services = () => {
  return (
    <main className="main">
      <section id="services" className="services section light-background">
        <div className="container">
          <h1 className="services-section-heading">Services</h1>
          <p>Let’s Build Your Projects with Precision and Cutting-Edge Solutions</p>

          {/* Row 1 */}
          <div className="row gy-4"> 
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                  <Wrench size={28} className="card-icon me-2"/>
                  <h2 className="mb-0">Python Automation</h2>
                </div>
                <ul className="service-list">
                  <li><Wrench size={18} /> Boost Performance & Fix Errors</li>
                  <li><Database size={18} /> Automated Data Processing</li>
                  <li><Repeat size={18} /> Workflow Automation</li>
                  <li><AppWindow size={18} /> API & App Integrations</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                  <MonitorCheck size={28} className="card-icon me-2"/>
                     <h2 className='mb-0'>Excel Automation</h2>
                </div>
             <ul className="service-list">
                  <li><BarChart2 size={18} /> 4D Scheduling & Simulations</li>
                  <li><Wrench size={18} /> Macro & VBA Solutions</li>
                  <li><Smartphone size={18} /> Custom Reports & Templates</li>
                  <li><Repeat size={18} /> Data Cleaning & Automation</li>
                </ul>
              </div>
            </div>

<div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                   <BarChart2 size={28} className="card-icon me-2"/>
                     <h2 className="mb-0">Power BI Dashboards</h2>
                </div>
             <ul className="service-list">
                 <li><BarChart2 size={18} /> Interactive KPI Dashboards</li>
                  <li><Smartphone size={18} /> Mobile-Friendly BI Reports</li>
                  <li><Repeat size={18} /> Automated Reporting</li>
                  <li><Globe size={18} /> Real-Time Data Insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row gy-4 mt-2"> 
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                <AppWindow size={36} className="card-icon me-2" />
                <h2 className="mb-0">Power Apps & Automate</h2></div>
                <ul className="service-list">
                  <li><AppWindow size={18} /> Custom Business Apps</li>
                  <li><Repeat size={18} /> Workflow Automation</li>
                  <li><Wrench size={18} /> Process Optimization</li>
                  <li><Globe size={18} /> Cloud Integration</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                   <Cpu size={36} className="card-icon me-2" />
                <h2 className="mb-0">Make Sycro 4d pro</h2></div>
                <ul className="service-list">
                 <li><BarChart2 size={18} /> 4D Scheduling & Simulation</li>
      <li><Globe size={18} /> Integration with Project Data</li>
      <li><Smartphone size={18} /> Interactive Visualization</li>
      <li><MonitorCheck size={18} /> Real-Time Project Tracking</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="d-flex align-items-center mb-3">
                <Database size={36} className="card-icon me-2" />
                <h2 className="mb-0">Custom Orders</h2></div>
                <ul className="service-list">
                    <li><AppWindow size={18} /> Tailored Business Applications</li>
      <li><Repeat size={18} /> Workflow Automation on Demand</li>
      <li><Wrench size={18} /> Optimization per Client Needs</li>
      <li><Globe size={18} /> Cloud & Cross-Platform Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
