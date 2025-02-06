import { useContext } from "react";
import { CRUDContext } from "@/contexts/crud";
import { Paginator as PaginatorCompPrime } from "primereact/paginator";
import {
  DEFAULT_ELEMENTS_PER_PAGE,
  ELEMENTS_PER_PAGE_OPTIONS,
} from "@/config/constants";

const Paginator = ({ elementsTotal }: { elementsTotal: number }) => {
  const { filters, setFilters } = useContext(CRUDContext);

  const page = filters?.page || 1;
  const elementsPerPage = filters?.elementsPerPage || DEFAULT_ELEMENTS_PER_PAGE;

  return (
    <div className="flex md:justify-between justify-center items-center py-2">
      <div className="px-4 md:block hidden text-sm">{`${elementsTotal} elementos en total`}</div>
      <PaginatorCompPrime
        first={(page - 1) * elementsPerPage}
        rows={elementsPerPage}
        totalRecords={elementsTotal}
        rowsPerPageOptions={ELEMENTS_PER_PAGE_OPTIONS}
        onPageChange={({ first, rows }) => {
          if (window && window.scrollTo) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
          if (rows !== elementsPerPage) {
            setFilters({
              page: 1,
              elementsPerPage: rows,
            });
            return;
          }
          setFilters({ page: Math.floor(first / rows) + 1 });
        }}
      />
    </div>
  );
};

export default Paginator;
