import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users';

const EmployeeService = {
    getEmployees: async () => {
        const response = await axios.get(url);
        return response.data;
    },
    deleteEmployee: async(employeeId) => {
        const response = await axios.delete(`${url}/${employeeId}`);
        return response.data;
    }
}

export default EmployeeService;