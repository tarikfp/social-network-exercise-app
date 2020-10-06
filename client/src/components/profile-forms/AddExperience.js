import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addExperience} from '../../actions/profile';

const AddExperience = ({addExperience, history}) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {company, title, location, from, to, current, description} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <Fragment>
      {' '}
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming positions that you have had
        in the past
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            value={title}
            onChange={onChange}
            name="title"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Company"
            value={company}
            onChange={onChange}
            name="company"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={onChange}
            name="location"
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" value={from} onChange={onChange} name="from" />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              checked={current}
              value={current}
              onChange={e => {
                setFormData({...formData, current: !current});
                toggleDisabled(!toDateDisabled);
              }}
              name="current"
            />{' '}
            Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            value={to}
            onChange={onChange}
            name="to"
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, {addExperience})(withRouter(AddExperience));
