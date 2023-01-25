import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'John K.', salary: 1000, increase: false, rise: true, id: nextId()},
                {name:'Nik Z.', salary: 10000, increase: true, rise: true, id: nextId()},
                {name:'Alex T.', salary: 5000, increase: false, rise: false, id: nextId()}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index +1);

            // const newArr = [...before, ...after]

            return {
                // data: newArr //
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId()
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id)

            const old = data[index];
            const newItem = {...old, increase: !old.increase}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    
    onToggleRise = (id) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;
        return (
            <div className='app'>
                <AppInfo 
                employees={data.length}
                increasedEmployees={data.filter(elem => elem.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
                onDelete={this.deleteItem}
                onAdd={this.addItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;