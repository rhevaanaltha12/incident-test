import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <section id="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-8">
              <Navbar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
