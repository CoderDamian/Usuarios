import { useState } from 'react';
import EmployeeTable from '../../components/employeeTable/EmployeeTable';
import EmployeeFilter from '../../components/employeeFilter/employeeFilter';
import useEmployees from '../../hooks/useEmployees';

const EmployeePage = () => {
    const [filterText, setFilterText] = useState('');
    const [renderCount, setRenderCount]=useState(0);
    const { empleados, loading, error } = useEmployees();

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
        setRenderCount(renderCount + 1);
        setFilterText(newValue);
    }

    return (
        <>
            <p>renderizaciones: {renderCount}</p>

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