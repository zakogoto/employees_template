import './app-info.css'

const AppInfo = (props) => {
    const {employees, increasedEmployees} = props;
    const companyName = 'N';
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {companyName}</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;