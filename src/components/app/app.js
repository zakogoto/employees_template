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
                {name:'John K.', salary: 1100, increase: false, rise: true, id: nextId()},
                {name:'Nik Z.', salary: 10000, increase: true, rise: true, id: nextId()},
                {name:'Alex T.', salary:800, increase: false, rise: false, id: nextId()}
            ],
            term: '',
            filter: 'all'
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

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex((elem) => elem.id === id)

    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase}

    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //         return {
    //             data: newArr
    //         }
    //     })
    // }
    
    // onToggleRise = (id) => {
    //     this.setState(({data})=>({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'salaryMoreThen1000':
                return items.filter(item => item.salary > 1000);
                default:
                    return items;
        }
    }

    onSelectFilter = (filter)=> {
        this.setState(({filter}))
    }

    onChangeSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary.replace(/\D/g, '')}
                }
                return item;
            })
        }))
    }

    
    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        localStorage.setItem('data', this.state.data)
        return (
            <div className='app'>
                <AppInfo 
                employees={data.length}
                increasedEmployees={data.filter(elem => elem.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onSelectFilter={this.onSelectFilter}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onAdd={this.addItem}
                onToggleProp={this.onToggleProp}
                onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;