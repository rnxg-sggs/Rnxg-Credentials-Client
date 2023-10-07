import React, { useState } from 'react';
import './userForm.css';
import axios from 'axios';

const UserForm = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkboxes separately
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to your backend API using Axios or any other library
      const response = await axios.post('/api/users', formData);
      console.log('Form data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="container">
    <form>
      <h1>Client Credential</h1>
      <div className="form-group">
        <input type="text" required />
        <label htmlFor="input" className="control-label">
          Textfield
        </label>
        <i className="bar"></i>
      </div>
      <div className="form-group">
        <textarea required></textarea>
        <label htmlFor="textarea" className="control-label">
          Textarea
        </label>
        <i className="bar"></i>
      </div>
    </form>
    <div className="button-container">
      <button type="button" className="button">
        <span>Submit</span>
      </button>
    </div>
  </div>
  );
};

export default UserForm;
