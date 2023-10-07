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
    color: '', // Added a color field based on the "Choose your theme" radio buttons
    textAndValues: '', // Added a textAndValues field based on the "Text and Values" input
    dropdown: '', // Added a dropdown field based on the "Dropdown" select
    multiple: [], // Added a multiple field based on the "Multiple" select (as an array)
    additionalInfo: '', // Added an additionalInfo field based on the textarea
    likeThis: '', // Added a likeThis field based on the "Do you like this?" radio buttons
    accept: false, // Added an accept field based on the "Please check all" checkboxes
    spam: false,
    toolbars: false,
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
      <h1>Material Design formular</h1>
      <div className="form-group">
        <select>
          <option>Value 1</option>
          <option>Value 2</option>
        </select>
        <label htmlFor="select" className="control-label">
          Selectbox
        </label>
        <i className="bar"></i>
      </div>
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
      <div className="checkbox">
        <label>
          <input type="checkbox" defaultChecked />
          <i className="helper"></i>I'm the label from a checkbox
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" />
          <i className="helper"></i>I'm the label from a checkbox
        </label>
      </div>
      <div className="form-radio">
        <div className="radio">
          <label>
            <input type="radio" name="radio" defaultChecked />
            <i className="helper"></i>I'm the label from a radio button
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="radio" />
            <i className="helper"></i>I'm the label from a radio button
          </label>
        </div>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" />
          <i className="helper"></i>I'm the label from a checkbox
        </label>
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
