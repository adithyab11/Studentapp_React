import React from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
    return (
        <div>
            <Navbar/>
            <center><h1>DELETE FOR STUDENTS</h1></center>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Admission No</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStudent