import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initApp} from '../actions/index';
import { Link } from 'react-router';


class Employee extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.employeeList==0){
      this.props.initApp();
    }
  }

  showEmplyee(employee){
    return(
      <Link to={`/employee/${employee.id}`} className="employee" key={employee.id}>
          <img src={`public/employeePhoto/${employee.pic}`} alt="" className=""/>
          <p>{employee.name}</p>
          <p className="employeeId"><span className="filled">{employee.id}</span>id</p>
      </Link>
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Employee List  <span className="shiftRight"><span className="colored">{this.props.employeeList.length}</span> Employee</span></h1>
          {this.props.employeeList.map((employee)=>{ return this.showEmplyee(employee)})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({initApp}, dispatch);
}

function mapStateToProps({employeeList}){
  return {employeeList};
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee);