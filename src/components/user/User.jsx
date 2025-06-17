export default function User({ users }) {
    return (
        <>
        {
            users.map(u => (
                <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                </tr>
            ))
        }
        </>
    );
}