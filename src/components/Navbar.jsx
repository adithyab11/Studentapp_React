import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="AddStudent.jsx">Student Details</a>
        <a class="nav-link" href="SearchStudent.jsx">Search</a>
        <a class="nav-link" href="DeleteStudent.jsx">DeleteStudent</a>
        <a class="nav-link" href="ViewallStudent.jsx">View All Student</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar