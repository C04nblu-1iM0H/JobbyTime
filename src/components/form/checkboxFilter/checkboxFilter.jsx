
export default function CheckboxFilter({checkboxing, handleFilterChange, formData}){

    return(
        checkboxing.map((checkbox, id) => {
            const {label, key} = checkbox;
            return(
                <label key={id} className="label">
                    <input
                        name="checkbox"
                        className="checkbox"
                        type="checkbox"
                        value={key}
                        onChange={(e) => handleFilterChange(e.target.value)}
                    />
                    {label}  
                </label>
            )
        })
    )
}