export default function EmployeeFilter({filterText, onFilterChange }){
    
    function handleChange(event){
        onFilterChange(event.target.value);
    }

    return (
        <div>
            Digite nombre del empleado: 
            <input 
                type="text" 
                value={filterText}
                onChange={handleChange}></input>
        </div>
    )
}
