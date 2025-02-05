import { createContext, useState, useCallback, useRef } from "react";
import { type FiltersType } from "@/models/filters";
import { Toast } from "primereact/toast";
import { DEFAULT_ELEMENTS_PER_PAGE } from "@/config/constants";

const defaultFilters: FiltersType = {
  page: 1,
  elementsPerPage: DEFAULT_ELEMENTS_PER_PAGE,
};

type showToastInput = {
  summary: string;
  severity:
    | "info"
    | "success"
    | "warn"
    | "error"
    | "secondary"
    | "contrast"
    | undefined;
};

interface CRUDContext {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  selectedCampaignId: string | null;
  setSelectedCampaignId: (id: string | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  showToast: (obj: showToastInput) => void;
}

export const CRUDContext = createContext<CRUDContext>({
  filters: { ...defaultFilters },
  setFilters: () => {},
  selectedCampaignId: null,
  setSelectedCampaignId: () => {},
  isLoading: false,
  setIsLoading: () => {},
  showToast: () => {},
});

const CRUDProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, changeFilters] = useState<FiltersType>({
    ...defaultFilters,
  });

  const setFilters = useCallback((newFilters: FiltersType) => {
    changeFilters((oldFilters) => {
      const filtersToReturn = { ...oldFilters, ...newFilters };

      return Object.entries(filtersToReturn).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {} as FiltersType);
    });
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null
  );

  const toast = useRef<Toast>(null);

  const showToast = useCallback(
    ({ summary = "Info", severity = "info" }: showToastInput) => {
      toast.current?.show({
        severity,
        summary,
      });
    },
    []
  );

  return (
    <CRUDContext.Provider
      value={{
        filters,
        setFilters,
        selectedCampaignId,
        setSelectedCampaignId,
        isLoading,
        setIsLoading,
        showToast,
      }}
    >
      {children}
      <Toast ref={toast} />
    </CRUDContext.Provider>
  );
};

export default CRUDProvider;
