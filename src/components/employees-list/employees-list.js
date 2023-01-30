import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
    const element = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id}
                id={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={onChangeSalary}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployeesList;