import { useContext, useState } from "react";
import { CRUDContext } from "@/contexts/crud";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const TableSearch = () => {
  const { filters, setFilters, isLoading } = useContext(CRUDContext);

  const [value, setValue] = useState(filters?.keyword || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setValue(keyword);
    if (keyword.length >= 3) {
      setFilters({ page: 1, keyword });
      return;
    }
    if (filters.keyword) {
      setFilters({ page: 1, keyword: undefined });
    }
  };

  return (
    <IconField iconPosition="left">
      <InputIcon
        className={isLoading ? "pi pi-spin pi-spinner" : "pi pi-search"}
      />
      <InputText placeholder="Search" value={value} onChange={onChange} />
    </IconField>
  );
};

export default TableSearch;
