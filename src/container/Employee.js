import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initApp,deleteEmp} from '../actions/index';
import { Link } from 'react-router';


class Employee extends React.Component {
  state={
    showFormBlock:false
  }
  constructor(props) {
    super(props);
    if(this.props.employeeList==0){
      this.props.initApp();
    }
  }

  showEmplyee=(employee)=>{
    return(
      <div className="employee" key={employee.id}>
          <Link to={`/employee/${employee.id}`}><img src={`public/employeePhoto/${employee.pic}`} alt="" className=""/></Link>
          <div className="employeeData">
            <div className="centerd">
              <p className="employeeName"><Link to={`/employee/${employee.id}`}>{employee.name}</Link></p>
              <p className="employeeDesignation">{employee.designation}</p>
              <p className="employeeAddress">{employee.address}</p>
            </div>
          </div>
          <p className="employeeId"><span className="filled">{employee.id}</span>id</p>
          <p className="deleteBtn topBtn" onClick={this.deleteClickHandler.bind(this,employee.id)}>
            <svg>
              <use xlinkHref={`public/iconSprite.svg#icon-delete`}></use>
            </svg>
            Delete
          </p>
          <p className="editBtn topBtn">
            <svg>
              <use xlinkHref={`public/iconSprite.svg#icon-edit`}></use>
            </svg>
            Edit
          </p>
      </div>
    )
  }

  deleteClickHandler=(id)=>{
    this.props.deleteEmp(id);
  }
  
  showForm=()=>{
    if(!this.state.showFormBlock){
      return <div></div>;
    }
    return <div class="formBlock">
      
    </div>;
  }
  
  onAddEmployeeClick=()=>{
    this.setState({showFormBlock:!this.state.showFormBlock});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Employee List <p className="addEmployee" onClick={this.onAddEmployeeClick}>Add a Employee</p> <span className="shiftRight"><span className="colored">{this.props.employeeList.length}</span> Employee</span> </h1>
          {this.showForm()}
          {this.props.employeeList.map((employee)=>{ return this.showEmplyee(employee)})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({initApp,deleteEmp}, dispatch);
}

function mapStateToProps({employeeList}){
  return {employeeList};
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee);