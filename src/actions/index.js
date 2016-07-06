export const INIT_APP = 'INIT_APP';
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
