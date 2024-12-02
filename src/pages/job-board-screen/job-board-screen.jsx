import { useState } from 'react';
import FilterForm from '../../components/form/FilterForm/FilterForm';
import ListBoard from '../../components/ListBoard/ListBoard';
import './board.scss';

export default function JobBoardScreen(){
    const [appliedFilters, setAppliedFilters] = useState({});
    const [filters, setFilters] = useState({
        location: "USA",
        city: "",
        keywords: "",
        types: {
            full: false,
            partial: false,
            remotely: false,
            projectBased: false,
            flexible: false,
        },
    });

    
    const handleFilterChange = (newFilters) => {
        setFilters((prev) => ({
            ...prev,
            ...newFilters,
        }));
    };

    const handleApplyFilters = () => {
        setAppliedFilters(filters); 
    };
    return(
        <section className="board">
            <h1 className="board__title">
                Job Board
            </h1>
            <FilterForm 
                filters={filters} 
                onFilterChange={handleFilterChange} 
                onApplyFilters={handleApplyFilters}
            />
            <ListBoard filters={appliedFilters} />
        </section>
    )
}
