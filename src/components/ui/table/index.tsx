"use client";
import { useContext } from "react";
import { CRUDContext } from "@/contexts/crud";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface ColumnType {
  field: string;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: (value: any) => React.ReactNode | string;
  sortable?: boolean;
}

interface TableProps {
  columns: ColumnType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const NoResultsMessage = () => {
  return <div className="text-center italic">Sin resultados.</div>;
};

const Table = ({ columns, data }: TableProps) => {
  const { filters, setFilters } = useContext(CRUDContext);

  return (
    <DataTable
      value={data}
      tableStyle={{ minWidth: "50rem" }}
      emptyMessage={NoResultsMessage}
      sortField={filters?.sortBy}
      sortOrder={!filters?.sortOrder ? 0 : filters.sortOrder === "asc" ? 1 : -1}
      onSort={(e) => {
        const { sortField } = e;
        if (filters?.sortBy === undefined || sortField !== filters.sortBy) {
          setFilters({
            page: 1,
            sortBy: sortField,
            sortOrder: "asc",
          });
          return;
        }
        if (sortField === filters.sortBy) {
          if (filters.sortOrder === "asc") {
            setFilters({
              page: 1,
              sortOrder: "desc",
            });
          } else {
            setFilters({
              page: 1,
              sortBy: undefined,
              sortOrder: undefined,
            });
          }
        }
      }}
    >
      {columns.map((col) => {
        const { field, header } = col;
        return (
          <Column
            key={field}
            field={field}
            header={header}
            body={col?.body}
            sortable={col?.sortable}
            headerClassName={col?.sortable ? "cursor-pointer" : ""}
          />
        );
      })}
    </DataTable>
  );
};

export default Table;
