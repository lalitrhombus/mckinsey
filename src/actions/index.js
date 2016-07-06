export const INIT_APP = 'INIT_APP';
export const DELETE_EMP = 'DELETE_EMP';
export const ADD_EMP = 'ADD_EMP';
export const EDIT_EMP = 'EDIT_EMP';


let Employee=[
    {
      id:1,
      name:"Lalit",
      pic:"1.jpg",
      designation:"Front End Developer",
      address:"Bangalore"
    },
    {
      id:2,
      name:"Abhishek",
      pic:"2.jpg",
      designation:"Tech Lead",
      address:"Gurgaon"
    },
    {
      id:3,
      name:"Nitin",
      pic:"3.jpg",
      designation:"Manager",
      address:"Gurgaon"
    },
    {
      id:4,
      name:"Chirag",
      pic:"4.jpg",
      designation:"Network Engineer",
      address:"Noida"
    }
];


export function initApp(){
  return {
    type: INIT_APP,
    payload: Employee
  }  
}

export function deleteEmp(id){
  return {
    type: DELETE_EMP,
    payload: id
  }  
}

export function addEmployee(data){
  return {
    type: ADD_EMP,
    payload: data
  }  
}

export function editEmployee(data){
  return {
    type: EDIT_EMP,
    payload: data
  }  
}
