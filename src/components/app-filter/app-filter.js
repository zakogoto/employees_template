import './app-filter.css'

const AppFilter = (props) => {
    const ButtonsData  = [
        {name: 'all', label:'Все сотрудники'},
        {name: 'rise', label:'На повышение'},
        {name: 'salaryMoreThen1000', label:'З/П выше 1000$'},
    ]
    const buttons = ButtonsData.map(({name, label}) =>{
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
            className={`btn ${clazz}`}
            type='button'
            key='name'
            onClick={() => props.onSelectFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;