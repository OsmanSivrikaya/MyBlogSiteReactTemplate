import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const DataTableComponent = ({ data, columns }) => {
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPageData, setCurrentPageData] = useState([]);

    useEffect(() => {
        setTotalRecords(data.length);
        setLoading(false);
        setCurrentPageData(data.slice(0, rows));
    }, [data, rows]);

    const onPage = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        const startIndex = event.first;
        const endIndex = event.first + event.rows;
        setCurrentPageData(data.slice(startIndex, endIndex));
    };

    return (
        <div>
            <DataTable
                value={currentPageData}
                paginator
                rows={rows}
                totalRecords={totalRecords}
                lazy
                first={first}
                onPage={onPage}
                loading={loading}
            >
                {columns.map((col, index) => (
                    <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                    ></Column>
                ))}
            </DataTable>
        </div>
    );
};

export default DataTableComponent;
