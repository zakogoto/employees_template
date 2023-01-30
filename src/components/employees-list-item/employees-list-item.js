import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    onChangeSalary = (e) => {
        const salary = e.target.value
        this.setState({salary});
        this.props.onChangeSalary(this.props.id, salary)
    }

    render() {
        const {name, onDelete, onToggleProp, increase, rise} = this.props;
    
        let className = "list-group-item d-flex justify-content-between";
        if (increase) {className += ' increase'}
        if(rise) {className += " like"}
    
        return (
            <li className={className}>
                <span 
                className="list-group-item-label"
                tabIndex="0"
                onClick={onToggleProp}
                role='button'
                data-toggle='rise'>{name}</span>
                <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={this.state.salary +'$'}
                onChange={this.onChangeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;