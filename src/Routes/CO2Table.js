// CO2Table.js
import { useState, useEffect } from "react";
import { Container, Row, Table, Pagination, Col } from "react-bootstrap";
import { filterData, sortData, paginateData } from "../Utilities/dataUtils";
import dataLoader from "../Utilities/dataLoader";
import Select from "react-select";

const ITEMS_PER_PAGE = 20;

const CO2Table = ({ co2Data }) => {
  const [localCo2Data, setLocalCo2Data] = useState([]);
  const [filterCompany, setFilterCompany] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const [sortField, setSortField] = useState("country");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLocalCo2Data(co2Data);
  }, [co2Data]);

  const filteredData = filterData(
    localCo2Data,
    filterCompany?.value,
    filterCountry?.value
  );
  const sortedData = sortData(filteredData, sortField, sortOrder);

  const currentItems = paginateData(sortedData, currentPage, ITEMS_PER_PAGE);

  const columns = [
    {
      Header: (
        <div
          onClick={() => handleSort("country")}
          style={{ cursor: "pointer" }}
        >
          Land
        </div>
      ),
      accessor: "country",
    },
    {
      Header: (
        <div
          onClick={() => handleSort("company")}
          style={{ cursor: "pointer" }}
        >
          Unternehmen
        </div>
      ),
      accessor: "company",
    },
    {
      Header: "CO2 in Tsd Tonnen/Jahr",
      accessor: "co2_year",
    },
  ];

  const handleSort = (field) => {
    if (field === sortField) {
      // Wenn die aktuelle Spalte bereits die Sortierspalte ist, ändere die Sortierreihenfolge
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Wenn eine andere Spalte ausgewählt wird, setze sie als neue Sortierspalte
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const companyOptions = Array.from(
    new Set(co2Data.map((data) => data.company))
  )
    .map((company) => ({
      label: company,
      value: company,
    }))
    .sort((a, b) => a.label.localeCompare(b.label)); // Hier wird die Sortierung hinzugefügt;

  const countryOptions = Array.from(
    new Set(co2Data.map((data) => data.country))
  )
    .map((country) => ({
      label: country,
      value: country,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Container>
      <Row className="link-dark">
        <Col md={6}>
          <Select
            options={countryOptions}
            value={filterCountry}
            onChange={(selectedOption) => setFilterCountry(selectedOption)}
            placeholder="Land auswählen"
            isClearable
            isSearchable
            name="country"
            className="basic-multi-select"
            classNamePrefix="select"
            styles={{
              // Füge die folgenden Stilregeln für das Dropdown-Menü hinzu
              menu: (provided, state) => ({
                ...provided,
                zIndex: 9999, // Eine höhere Z-Index-Eigenschaft
              }),
            }}
          />
        </Col>
        <Col md={6}>
          <Select
            options={companyOptions}
            value={filterCompany}
            onChange={(selectedOption) => setFilterCompany(selectedOption)}
            placeholder="Unternehmen auswählen"
            isClearable
            isSearchable
            name="company"
            className="basic-multi-select"
            classNamePrefix="select"
            styles={{
              // Füge die folgenden Stilregeln für das Dropdown-Menü hinzu
              menu: (provided, state) => ({
                ...provided,
                zIndex: 9999, // Eine höhere Z-Index-Eigenschaft
              }),
            }}
          />
        </Col>
      </Row>
      <Row>
        <h2>CO₂ Emissions Data</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.accessor}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data) => (
              <tr key={data.id}>
                {columns.map((column) => (
                  <td key={column.accessor}>{data[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} />
          <Pagination.Prev
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
          />
          {Array.from({
            length: Math.ceil(sortedData.length / ITEMS_PER_PAGE),
          }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < Math.ceil(sortedData.length / ITEMS_PER_PAGE)
                  ? prevPage + 1
                  : prevPage
              )
            }
          />
          <Pagination.Last
            onClick={() =>
              setCurrentPage(Math.ceil(sortedData.length / ITEMS_PER_PAGE))
            }
          />
        </Pagination>
      </Row>
    </Container>
  );
};

export default dataLoader(CO2Table);
