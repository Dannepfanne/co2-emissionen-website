import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, Pagination } from "react-bootstrap";
import {
  filterData,
  sortData,
  paginateData,
  calculateTotal,
} from "./dataUtils";

const ITEMS_PER_PAGE = 50;

const CO2Table = ({ co2DataProp }) => {
  const [localCo2Data, setLocalCo2Data] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLocalCo2Data(co2DataProp);
  }, [co2DataProp]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/MOCK_c02.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLocalCo2Data(data);
      } catch (error) {
        console.error("Error loading CO2 data:", error);
        // Hier könntest du eine Benachrichtigung für den Benutzer hinzufügen
      }
    };

    loadData();
  }, []);

  const filteredData = filterData(localCo2Data, filter);
  const sortedData = sortData(filteredData, sortField, sortOrder);

  const currentItems = paginateData(sortedData, currentPage, ITEMS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const sumOfCurrentItems = calculateTotal(currentItems);
  const isFilterApplied = sortedData.length !== localCo2Data.length;

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Land",
      accessor: "country",
    },
    {
      Header: "Unternehmen",
      accessor: "company",
    },
    {
      Header: "CO2 in Tsd Tonnen/Jahr",
      accessor: "co2_year",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFilter">
                <Form.Label>Filter:</Form.Label>
                <Form.Control
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formSort">
                <Form.Label>Sortieren nach:</Form.Label>
                <Form.Control
                  as="select"
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                >
                  <option value="id">ID</option>
                  <option value="country">Land</option>
                  <option value="company">Unternehmen</option>
                  <option value="co2_year">CO2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formOrder">
                <Form.Label>Reihenfolge:</Form.Label>
                <Form.Control
                  as="select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="asc">Aufsteigend</option>
                  <option value="desc">Absteigend</option>
                </Form.Control>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>CO2 Emissions Data</h2>
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

          <Pagination>
            {Array.from({
              length: Math.ceil(sortedData.length / ITEMS_PER_PAGE),
            }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>

          {isFilterApplied && (
            <p>Summe CO2 der angezeigten Einträge: {sumOfCurrentItems}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CO2Table;
