import Boton from '../boton/boton';

export default function EmployeeRow({ empleado, onDelete, onUpdate }) {

    function handleDelete(empleadoId) {
        onDelete(empleadoId);
    }

    function handleUpdate(empleadoId) {
        onUpdate(empleadoId);
    }

    return (
        <tr>
            <td>{empleado.id}</td>
            <td>{empleado.name}</td>
            <td>{empleado.username}</td>
            <td>{empleado.email}</td>
            <td>{empleado.phone}</td>
            <td><Boton onClick={() => handleUpdate(empleado.id)}>Update</Boton></td>
            <td><Boton onClick={() => handleDelete(empleado.id)}>Delete</Boton></td>
        </tr>

    )
}