let Employee=[{id:"101",name:"raj",salary:"20000"},{id:"102",name:"ram",salary:"30000"}]
//Load Employee Function
export const LoadEmp=()=>Employee;
//Delete Employee Function
export function DeletebyId(id)
{
    let NewEmployee=Employee.filter((e)=>e.id!==id)
    Employee=NewEmployee;
}
//Add Employee Function 
export function AddEmployee(obj)
{
    Employee=[...Employee,obj]
}
//Update Employee Function
export function UpdatebyId(obj)
{
    let NewEmployee=Employee.filter((e)=>e.id!==obj.id)
    Employee=NewEmployee;
}