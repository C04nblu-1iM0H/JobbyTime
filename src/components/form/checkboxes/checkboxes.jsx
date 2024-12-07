export default function Checkboxes({checkboxing, handleFilterChange, formData}){
    const {jobprefor} = formData ;
    const flattenedJobprefor = Array.isArray(jobprefor) ? jobprefor.flat() : jobprefor;

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
                        checked={flattenedJobprefor.includes(key)}
                        onChange={(e) => handleFilterChange(e.target.value)}
                    />
                    {label}  
                </label>
            )
        })
    )
}