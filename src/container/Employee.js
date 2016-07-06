import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initApp,deleteEmp,addEmployee, editEmployee} from '../actions/index';
import { Link } from 'react-router';


class Employee extends React.Component {
  state={
    showFormBlock:false,
    currentEmployee:{
      name:"",
      designation:"",
      address:""
    },
    editingEmployee:false
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
          <p className="editBtn topBtn" onClick={this.editClickHandler.bind(this,employee)}>
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

  editClickHandler=(currentEmployee)=>{
    this.setState({showFormBlock:true,currentEmployee:currentEmployee,editingEmployee:currentEmployee.id});
  }

  nameChange=(item)=>{
    let currentEmployee = this.state.currentEmployee;
    currentEmployee.name = item.target.value;

    this.setState({currentEmployee});
  }
  designationChange=(item)=>{
    let currentEmployee = this.state.currentEmployee;
    currentEmployee.designation = item.target.value;

    this.setState({currentEmployee});
  }
  addressChange=(item)=>{
    let currentEmployee = this.state.currentEmployee;
    currentEmployee.address = item.target.value;

    this.setState({currentEmployee});
  }

  onFormSubmit=(e)=>{
    e.preventDefault();
    let emptycurrentEmployee={
      name:"",
      designation:"",
      address:""
    };
    if(this.state.editingEmployee){
      this.props.editEmployee(this.state.currentEmployee);
      this.setState({showFormBlock:false,currentEmployee:emptycurrentEmployee,editingEmployee:""});
      return;
    }
    if(this.state.currentEmployee.name!=="" && this.state.currentEmployee.designation!==""){
      this.props.addEmployee(this.state.currentEmployee);
      this.setState({showFormBlock:false,currentEmployee:emptycurrentEmployee});
      return;
    }
  }

  showForm=()=>{
    if(!this.state.showFormBlock){
      return <div></div>;
    }
    return <div className="formBlock">
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div className="inputBox">
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.currentEmployee.name} onChange={this.nameChange.bind(this)} placeholder="Name of the Employee"/>
        </div>

        <div className="inputBox">
          <label htmlFor="name">Designation</label>
          <input type="text" value={this.state.currentEmployee.designation} onChange={this.designationChange.bind(this)} placeholder="Designation of the Employee"/>
        </div>

        <div className="inputBox">
          <label htmlFor="name">Address</label>
          <input type="text" value={this.state.currentEmployee.address} onChange={this.addressChange.bind(this)} placeholder="Address of the Employee"/>
        </div>
        <button>Submit</button>
      </form>
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
  return bindActionCreators({initApp,deleteEmp,addEmployee, editEmployee}, dispatch);
}

function mapStateToProps({employeeList}){
  return {employeeList};
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee);