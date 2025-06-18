import { useEffect, useState } from 'react';
import EmployeeTable from '../../components/employeeTable/EmployeeTable';
import EmployeeService from '../../services/employeeService';

const EmployeePage = () => {
    const [empleados, setEmpleados] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
    
    function handleDelete(empleadoId) {
        alert('deleting... ' + empleadoId);
    }

    function handleUpdate(empleadoId) {
        alert('updating...' + empleadoId);
    }

    return (
        <EmployeeTable
            empleados={empleados}
            onDelete={handleDelete}
            onUpdate={handleUpdate} />
    )
}

export default EmployeePage;