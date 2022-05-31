import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./FormRequest.css";
export default function FormIncident() {
  return (
    <div>
      <section id="form-incident">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-8 mx-auto">
              <Navbar />
              <div className="col-md-8 me-auto">
                <div className="card">
                  <div className="card-body">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                          Incident
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                          Sender Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputPassword4" className="form-label">
                          Time
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputPassword4" className="form-label">
                          Origin
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputState" className="form-label">
                          Category
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label for="inputState" className="form-label">
                          Sub-Category
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label for="inputPassword4" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                        />
                      </div>
                      <div className="col-md-4">
                        <label for="inputPassword4" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea"
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <label for="inputState" className="form-label">
                          Status
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="formFile" className="form-label">
                          File
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="inputState" className="form-label">
                          Action
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label for="inputState" className="form-label">
                          Solution
                        </label>
                        <select id="inputState" className="form-select">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
