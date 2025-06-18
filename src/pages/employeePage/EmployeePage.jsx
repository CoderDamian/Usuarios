import { useEffect, useState } from 'react';
import EmployeeTable from '../../components/employeeTable/EmployeeTable';
import EmployeeService from '../../services/employeeService';
import EmployeeFilter from '../../components/employeeFilter/employeeFilter';

const EmployeePage = () => {
    const [empleados, setEmpleados] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState('');

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const data = await EmployeeService.getEmployees();
                setEmpleados(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchEmpleados();
    }, []);

    if (error) return <p>{error.message}</p>
    if (loading) return <p>Loading...</p>;

    async function handleDelete(empleadoId) {
        const result = await EmployeeService.deleteEmployee(empleadoId);
        alert(`empleado ${empleadoId} fue eliminado`);
    }

    function handleUpdate(empleadoId) {
        alert('updating...' + empleadoId);
    }

    function handleFilterChange(newValue) {
        setFilterText(newValue);
    }

    return (
        <>
            <EmployeeFilter
                filterText={filterText}
                onFilterChange={handleFilterChange} />

            <EmployeeTable
                empleados={empleados.filter(e => e.name.toLowerCase().includes(filterText.toLowerCase()))}
                onDelete={handleDelete}
                onUpdate={handleUpdate} />
        </>
    )
}

export default EmployeePage;