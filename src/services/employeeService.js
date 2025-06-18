import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users';

const EmployeeService = {
    getEmployees: async () => {
        const response = await axios.get(url);
        return response.data;
    }
}

export default EmployeeService;