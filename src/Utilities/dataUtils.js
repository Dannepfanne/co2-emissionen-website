// dataUtils.js
export const filterData = (data, filterCompany, filterCountry) => {
  return data.filter((entry) => {
    const companyMatch =
      !filterCompany ||
      entry.company.toLowerCase().includes(filterCompany.toLowerCase());

    const countryMatch =
      !filterCountry ||
      entry.country.toLowerCase().includes(filterCountry.toLowerCase());

    return companyMatch && countryMatch;
  });
};

export const sortData = (data, sortField, sortOrder) => {
  const orderFactor = sortOrder === "asc" ? 1 : -1;
  return [...data].sort((a, b) => {
    return a[sortField].localeCompare(b[sortField]) * orderFactor;
  });
};

export const paginateData = (data, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const start = Math.max(indexOfFirstItem, 0);
  const end = Math.min(indexOfLastItem, data.length);

  return data.slice(start, end);
};

export const calculateTotal = (data) => {
  return data.reduce((sum, item) => sum + parseFloat(item.co2_year), 0);
};
