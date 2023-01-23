import './app-info.css'

const AppInfo = () => {
    const companyName = 'N';
    const employeesAmount = 3;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {companyName}</h1>
            <h2>Общее число сотрудников: {employeesAmount}</h2>
            <h2>Премию получат: {0}</h2>
        </div>
    )
}

export default AppInfo;