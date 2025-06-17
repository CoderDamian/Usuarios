import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../../components/user/User';

const UserProfilePage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchUsers();
    }, []);

    if (error) return <p>{error.message}</p>
    if (users.length === 0) return <p>loading...</p>

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>userName</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    <User users={users}></User>
                </tbody>
            </table>
        </>
    )
}

export default UserProfilePage;