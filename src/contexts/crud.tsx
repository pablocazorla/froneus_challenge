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
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  showToast: (obj: showToastInput) => void;
  reloadFlag: number;
  forceReload: () => void;
  editorOpen: boolean;
  setEditorOpen: (editorOpen: boolean) => void;
}

export const CRUDContext = createContext<CRUDContext>({
  filters: { ...defaultFilters },
  setFilters: () => {},
  selectedId: null,
  setSelectedId: () => {},
  isLoading: false,
  setIsLoading: () => {},
  showToast: () => {},
  reloadFlag: 0,
  forceReload: () => {},
  editorOpen: false,
  setEditorOpen: () => {},
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

  const [selectedId, setSelectedId] = useState<string | null>(null);

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

  const [reloadFlag, setReloadFlag] = useState<number>(0);

  const forceReload = useCallback(() => {
    setReloadFlag(new Date().valueOf());
  }, []);

  const [editorOpen, setEditorOpen] = useState<boolean>(false);

  return (
    <CRUDContext.Provider
      value={{
        filters,
        setFilters,
        selectedId,
        setSelectedId,
        isLoading,
        setIsLoading,
        showToast,
        reloadFlag,
        forceReload,
        editorOpen,
        setEditorOpen,
      }}
    >
      {children}
      <Toast ref={toast} />
    </CRUDContext.Provider>
  );
};

export default CRUDProvider;
