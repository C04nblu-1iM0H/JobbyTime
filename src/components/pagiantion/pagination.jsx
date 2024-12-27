
export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxVisiblePages = 5;
    const pages = [];
    const showEllipsis = totalPages > maxVisiblePages;

    if (showEllipsis) {
        if (currentPage <= maxVisiblePages - 2) {
            // Показывать первые 5 страниц
            pages.push(...Array.from({ length: maxVisiblePages }, (_, i) => i + 1));
        } else if (currentPage > totalPages - 3) {
            // Показывать последние 5 страниц
            pages.push(...Array.from({ length: maxVisiblePages }, (_, i) => totalPages - maxVisiblePages + i + 1));
        } else {
            // Показывать текущую страницу, две до нее и две после нее
            pages.push(...Array.from({ length: maxVisiblePages }, (_, i) => currentPage - 2 + i));
        }
    } else {
        // Показывать все страницы, если их меньше или равно maxVisiblePages
        pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    }

    return (
        <nav className="pagination">
            <ul className="pagination__list flex items-center -space-x-px h-8 text-sm">
                <li className="pagination__list__item">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`pagination__list__item__button ${
                            currentPage === 1 ? "active-pagination" : ""
                        }`}
                    >
                        <span className="pagination__list__item__button__sr-only">Previous</span>
                    </button>
                </li>
                {pages.map((page) => (
                    <li 
                        className="pagination__list__item"
                        key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`pagination__list__item__button ${
                                page === currentPage ? "active-pagination" : ""
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li className="pagination__list__item">
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`pagination__list__item__button ${
                            currentPage === totalPages ? "active-pagination" : ""
                        }`}
                    >
                        <span className="pagination__list__item__button__sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}