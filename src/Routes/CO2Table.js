// CO2Table.js
import { useState, useEffect } from "react";
import { Container, Row, Table, Pagination, Col } from "react-bootstrap";
import { filterData, sortData, paginateData } from "../Utilities/dataUtils";
import dataLoader from "../Utilities/dataLoader";
import Select from "react-select";

// Wieviele Tabellenzeilen mit Einträgen werden maximal angezeigt werden
const ITEMS_PER_PAGE = 20;

const CO2Table = ({ co2Data }) => {
  const [localCo2Data, setLocalCo2Data] = useState([]);
  const [filterCompany, setFilterCompany] = useState(null);
  const [filterCountry, setFilterCountry] = useState(null);
  const [sortField, setSortField] = useState("country");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  // Aktualisierung von localCo2Data, wenn sich co2Data ändert
  useEffect(() => {
    setLocalCo2Data(co2Data);
  }, [co2Data]);

  // Filtern des Datensatzes nach Unternehmen und Länder
  const filteredData = filterData(
    localCo2Data,
    filterCompany?.value,
    filterCountry?.value
  );
  // Daten sortieren basierend auf angeklicktes Sortierfeld und gewünschter Sortierreihenfolge
  const sortedData = sortData(filteredData, sortField, sortOrder);

  // Aktuelle angezeigte Daten basierend auf Paginierung
  const currentItems = paginateData(sortedData, currentPage, ITEMS_PER_PAGE);

  // Funktion zum Sortieren der Daten beim Klicken auf die Spaltenköpfe
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

  // Spaltenkonfiguration für die Tabelle mit Sortierfunktion
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

  // Auswahlmöglichkeiten für den Filter Unternehmen
  const companyOptions = Array.from(
    new Set(co2Data.map((data) => data.company))
  )
    .map((company) => ({
      label: company,
      value: company,
    }))
    .sort((a, b) => a.label.localeCompare(b.label)); // Alphabetische Sortierung der Items im Dropdown der Unternehmens-Filters;

  // Auswahlmöglichkeiten für den Filter Land
  const countryOptions = Array.from(
    new Set(co2Data.map((data) => data.country))
  )
    .map((country) => ({
      label: country,
      value: country,
    }))
    .sort((a, b) => a.label.localeCompare(b.label)); // Alphabetische Sortierung der Items im Dropdown der Land-Filters;

  // Gesamtanzahl der Pagination-Seiten basierend auf der Anzahl der Elemente pro Seite
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  // Sichtbare Seiten in der Pagination, maximal 10
  const visiblePages = Math.min(totalPages, 10);
  // Berechnung der ersten angezeigten Seite der sichtbaren Seiten
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  // Berechnung der Endseite für die sichtbaren Seiten
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);
  // Erstellung eines Arrays von sichtbaren Seiten für die Pagination
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

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
              // Problem: Aktives Pagination-Item lag über Filter-Dropdown. Filter-Dropdown hiermit nach Vorne geholt
              menu: (provided, state) => ({
                ...provided,
                zIndex: 9999,
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
              // Problem: Aktives Pagination-Item lag über Filter-Dropdown. Filter-Dropdown hiermit nach Vorne geholt
              menu: (provided, state) => ({
                ...provided,
                zIndex: 9999,
              }),
            }}
          />
        </Col>
      </Row>
      <Row>
        <h2 className="my-2 text-center">CO₂ Emissions Data</h2>
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

        {/* Pagination mit maximal 10 angezeigten Seiten,
        Vorwärts-, Rückwärts, Start- und Ende-Buttons*/}
        <Pagination className="justify-content-center">
          <Pagination.First onClick={() => setCurrentPage(1)} />
          <Pagination.Prev
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage > 1 ? prevPage - 1 : prevPage
              )
            }
          />
          {/* Anzeige von "..." am Anfang und Ender der Seitenanzahl-Leiste */}
          {startPage > 1 && <Pagination.Ellipsis disabled />}
          {pages.map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          {endPage < totalPages && <Pagination.Ellipsis disabled />}
          <Pagination.Next
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage < totalPages ? prevPage + 1 : prevPage
              )
            }
          />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
        </Pagination>
      </Row>
    </Container>
  );
};

export default dataLoader(CO2Table);
