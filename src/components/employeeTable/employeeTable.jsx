import EmployeeRow from '../employeeTable/employeeRow'

export default function EmployeeTable({ empleados, onDelete, onUpdate }) {
    return (
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
                {empleados.map(e => (<EmployeeRow
                    key={e.id}
                    empleado={e}
                    onDelete={onDelete}
                    onUpdate={onUpdate} />))}
            </tbody>
        </table>

    )
}