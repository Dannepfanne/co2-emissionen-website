export const filterData = (data, filter) => {
  return data.filter(
    (entry) =>
      entry.country.toLowerCase().includes(filter.toLowerCase()) ||
      entry.company.toLowerCase().includes(filter.toLowerCase())
  );
};

export const sortData = (data, sortField, sortOrder) => {
  const orderFactor = sortOrder === "asc" ? 1 : -1;
  return data.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1 * orderFactor;
    if (a[sortField] > b[sortField]) return 1 * orderFactor;
    return 0;
  });
};

export const paginateData = (data, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Überprüfe, ob die Indizes negativ sind
  const start = Math.max(indexOfFirstItem, 0);
  const end = Math.min(indexOfLastItem, data.length);

  return data.slice(start, end);
};

export const calculateTotal = (data) => {
  return data.reduce((sum, item) => sum + parseFloat(item.co2_year), 0);
};
