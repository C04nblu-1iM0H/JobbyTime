export const filterJobs = (jobs, filters) => {
    return jobs.filter((job) => {
        const categories = JSON.parse(job.categories);
        const { location, team } = categories;

        const matchesKeywords =
            !filters.keywords ||
            job.text_posting
                .toLowerCase()
                .includes(filters.keywords.toLowerCase());
        const matchesCity =
            !filters.city ||
            location.toLowerCase().includes(filters.city.toLowerCase());
        const matchesJobType = Object.keys(filters.jobTypes).some(
            (type) => filters.jobTypes[type] && job.commitment === type
        );

        return matchesKeywords && matchesCity && matchesJobType;
    });
};