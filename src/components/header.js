import React from 'react';
import { Link } from 'react-router';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/McKinsey_%26_Company_logo.png" alt=""/>
      </div>
    </header>
    );
  }
}
