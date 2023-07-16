import React, { useEffect, useState } from 'react';

const Index = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const data = await response.json()
    setEmployees(data.data);
  };

 

  function deleteEmp(id){
    var emp=employees.filter((user)=>user.id!==id)
    //console.log(emp);
      setEmployees(emp)
  }

  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="container">
      
      {employees.map((employee) => (
        <div className="card_item" key={employee.id}>
          <div className="card_inner">
             <img src={employee.profile_image} alt="" />
            <div className="employeeId">{employee.id}</div>
            <div className="employeeName">{employee.employee_name}</div>
            <div className="employeeSalary">Age: {employee.employee_age}</div>
            <div className="employeeAge">Salary: {employee.employee_salary}</div>
            <button className="btn1">Edit</button>
            <button className="btn2" onClick={()=>deleteEmp(employee.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Index;