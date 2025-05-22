// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'

// class ListEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 employees: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }

//     deleteEmployee(id){
//         EmployeeService.deleteEmployee(id).then( res => {
//             this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
//         });
//     }
//     viewEmployee(id){
//         this.props.history.push(`/view-employee/${id}`);
//     }
//     editEmployee(id){
//         this.props.history.push(`/add-employee/${id}`);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployees().then((res) => {
//             this.setState({ employees: res.data});
//         });
//     }

//     addEmployee(){
//         this.props.history.push('/add-employee/_add');
//     }

//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">Employees List</h2>
//                  <div className = "row">
//                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
//                  </div>
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                     <th> Employee First Name</th>
//                                     <th> Employee Last Name</th>
//                                     <th> Employee Email Id</th>
//                                     <th> Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.employees.map(
//                                         employee => 
//                                         <tr key = {employee.id}>
//                                              <td> { employee.firstName} </td>   
//                                              <td> {employee.lastName}</td>
//                                              <td> {employee.emailId}</td>
//                                              <td>
//                                                  <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         )
//     }
// }

// export default ListEmployeeComponent

// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'

// import withNavigation from '../helpers/withNavigation';


// class ListEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             employees: []
//         }

//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }

//     deleteEmployee(id) {
//         EmployeeService.deleteEmployee(id).then(res => {
//             this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
//         });
//     }

//     viewEmployee(id) {
//         this.props.navigate(`/view-employee/${id}`);
//     }

//     editEmployee(id) {
//         this.props.navigate(`/add-employee/${id}`);
//     }

//     componentDidMount() {
//         EmployeeService.getEmployees().then((res) => {
//             this.setState({ employees: res.data });
//         });
//     }

//     addEmployee() {
//         this.props.navigate('/add-employee/_add');
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Employees List</h2>
//                 <div className="row">
//                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
//                 </div>
//                 <br />
//                 <div className="row">
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Employee First Name</th>
//                                 <th>Employee Last Name</th>
//                                 <th>Employee Email Id</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.employees.map(employee =>
//                                     <tr key={employee.id}>
//                                         <td>{employee.firstName}</td>
//                                         <td>{employee.lastName}</td>
//                                         <td>{employee.emailId}</td>
//                                         <td>
//                                             <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
//                                             <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
//                                             <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// // export default ListEmployeeComponent;

// export default withNavigation(ListEmployeeComponent);


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then(res => {
      setEmployees(res.data);
    });
  }, []);

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(res => {
      setEmployees(employees.filter(employee => employee.id !== id));
    });
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  const editEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  };

  const addEmployee = () => {
    navigate('/add-employee/_add');
  };

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee =>
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                  <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                  <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
