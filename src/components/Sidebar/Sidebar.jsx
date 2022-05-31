import React from "react";
import Image from "../../assets/Vector.png";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import DownArrow from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/icons-material/ListAlt";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div>
      <section id="sidebar">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="sidebar-header">
                <div className="row">
                  <div className="col-md-2 me-auto my-auto">
                    <img src={Image} alt="" />
                  </div>
                  <div className="col-md-8 ms-auto my-auto">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <div className="card-title">Dashboard</div>
                      <div className="card-subtitle">Reimbursment System</div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/form-incident" style={{ textDecoration: "none" }}>
                <div
                  className="sidebar-item mb-3 active"
                  activeClassname="active"
                >
                  <div className="row">
                    <div className="col-md-2">
                      <DynamicFormIcon />
                    </div>
                    <div className="col-md-8">Request</div>
                    <div className="col-md-2">
                      <DownArrow />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/table-incident" style={{ textDecoration: "none" }}>
                <div className="sidebar-item mb-3">
                  <div className="row">
                    <div className="col-md-2">
                      <List />
                    </div>
                    <div className="col-md-8">Request List</div>
                    <div className="col-md-2">
                      <DownArrow />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
