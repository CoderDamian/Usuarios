import { useEffect, useState } from "react";
import EmployeeService from "../services/employeeService";

function useEmployees() {
    const [empleados, setEmpleados] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const request = await EmployeeService.getEmployees();
                setEmpleados(request);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchEmpleados();
    }, []);

    return { empleados, loading, error };
}

export default useEmployees;