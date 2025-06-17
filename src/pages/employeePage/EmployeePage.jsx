import { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeTable from '../../components/employeeTable/EmployeeTable';

const EmployeePage = () => {
    const [empleados, setEmpleados] = useState([]);
    const [error, setError] = useState(null);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const response = await axios.get(url);
                setEmpleados(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchEmpleados();
    }, []);

    if (error) return <p>{error.message}</p>
    if (empleados.length === 0) return <p>loading...</p>

    function handleDelete(empleadoId) {
        alert('deleting... ' + empleadoId);
    }

    function handleUpdate(empleadoId){
        alert('updating...' + empleadoId);
    }

    return (
        <EmployeeTable
            empleados={empleados}
            onDelete={handleDelete} 
            onUpdate={handleUpdate}/>
    )
}

export default EmployeePage;