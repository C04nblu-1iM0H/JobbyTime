import {checkfilter} from "../../../const";
import search from "../../../assets/board/search.svg";
import country from "../../../assets/board/country.svg";
import CheckboxFilter from "../checkboxFilter/checkboxFilter";

export default function FilterForm({filters, onFilterChange, onApplyFilters }){
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ [name]: value });
    };

    const handleCheckboxChange = (filter) => {
        console.log(filter);
        
        onFilterChange({ [filter]: !filters[filter] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onApplyFilters();
    };
    return(
        <form onSubmit={handleSubmit} className="board__form">
            <div className="board__form__group">
                <div className="board__form__group__location">
                    <img className="board__form__group__location__icon" src={country} alt="icon_country" />                    
                    <span className="board__form__group__location__country-name">US</span>
                    <div className="board__form__group__location__divider"></div>
                    <input 
                        type="text" 
                        name="city"
                        value={filters.city || ""}
                        onChange={handleInputChange}
                        className="board__form__group__location__input" 
                        placeholder="city" 
                    />
                </div>
                <input
                    type="text"
                    name="keywords"
                    value={filters.keywords || ""}
                    onChange={handleInputChange}
                    className="board__form__group__input"
                    placeholder="Job title, company or keywords"
                />
                <button type="submit" className="board__form__group__search-button">
                    Search <img className="board__form__group__search-button__icon" src={search} alt="icon_search" />
                </button>
            </div>
            
            <div className="board__form__filters-checkbox">
                <CheckboxFilter checkboxing={checkfilter} handleFilterChange={handleCheckboxChange}/>
            </div>
        </form>
    )
}