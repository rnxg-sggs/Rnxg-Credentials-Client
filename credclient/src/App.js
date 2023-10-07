import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [formData, setFormData] = useState({
    username: '',
    regNo: '',
    branch: '',
    passingYear: '',
    city: '',
    collegeEmail: '',
    personalEmail: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);

      if (response.status === 201) {
        console.log('Form data submitted:', response.data);
        setFormData({
          username: '',
          regNo: '',
          branch: '',
          passingYear: '',
          city: '',
          collegeEmail: '',
          personalEmail: '',
          phone: '',
        });
        setErrors({});
        // Refresh the page after successful submission
        window.location.reload();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
        if (error.response.data.message === 'Email already registered') {
          alert('Email is already registered.');
        } else {
          alert('Internal Server Error: ' + error.response.data.message);
        }
      } else {
        alert('Error submitting form data: ' + error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>RNXG Member List</h1>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Name of Candidate*"
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="regNo"
              value={formData.regNo}
              onChange={handleChange}
              placeholder="Registration Number*"
              required
            />
            {errors.regNo && <div className="error">{errors.regNo}</div>}
          </div>
          <div className="form-group">
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch*</option>
              <option value="Electronics and telecommuncation">Electronics and telecommuncation</option>
              <option value="Electrical">Electrical</option>
              <option value="Chemical">Chemical</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Textile">Textile </option>
              <option value="Mechanical">Mechanical</option>
              <option value="Production">Production</option>
              <option value="Instrumentation ">Instrumentation</option>
              <option value="Civil">Civil</option>
            </select>
            {errors.branch && <div className="error">{errors.branch}</div>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              placeholder="Passing Year* Ex. 2023, 2024, 2025"
              required
            />
            {errors.passingYear && (
              <div className="error">{errors.passingYear}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City*"
              required
            />
            {errors.city && <div className="error">{errors.city}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="collegeEmail"
              value={formData.collegeEmail}
              onChange={handleChange}
              placeholder="College Email*"
              required
            />
            {errors.collegeEmail && (
              <div className="error">{errors.collegeEmail}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="personalEmail"
              value={formData.personalEmail}
              onChange={handleChange}
              placeholder="Personal Email*"
              required
            />
            {errors.personalEmail && (
              <div className="error">{errors.personalEmail}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              minLength={10}
              maxLength={10}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              <span>Submit</span>
            </button>
          </div>
        </form>

      </div>
      <h2 className='footer'>Contact Us: www.rnxg.co.in</h2>
    </>
  );
}

export default App;
