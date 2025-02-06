import { useContext, useState, useEffect } from "react";
import { type CampaignList } from "@/models/campaign";
import { type ApiError } from "@/models/apiError";
import { CRUDContext } from "@/contexts/crud";
import {
  getCampaigns,
  deleteCampaign as deleteCampaignService,
  finishCampaign as finishCampaignService,
} from "@/services/campaign";
import { confirmDialog } from "primereact/confirmdialog";

const defaultData: CampaignList = {
  elementsTotal: 0,
  data: [],
};

// const defaultError:ApiError= {
//   ok: true,
//   message: ''
// }

const useCampaignDashboard = () => {
  const {
    filters,
    isLoading,
    setIsLoading,
    showToast,
    selectedId,
    setSelectedId,
    reloadFlag,
    forceReload,
    setEditorOpen,
  } = useContext(CRUDContext);

  const [data, setData] = useState<CampaignList>(defaultData);

  //const [error,setError] = useState<ApiError>();

  useEffect(() => {
    const getData = async () => {
      console.log("filters", filters);
      //setError(defaultError);
      setIsLoading(true);
      const dataReturned = await getCampaigns(filters);
      setIsLoading(false);

      // if(!dataReturned.ok){
      //   setError(dataReturned)
      //   return;
      // }
      showToast({
        summary: "Campañas cargadas correctamente.",
        severity: "success",
      });
      setData(dataReturned.data);
    };
    getData();
  }, [filters, setIsLoading, showToast, reloadFlag]);

  const deleteCampaign = async () => {
    setIsLoading(true);
    const dataReturned = await deleteCampaignService(selectedId);
    setIsLoading(false);

    if (!dataReturned.ok) {
      const { message } = dataReturned as ApiError;
      showToast({
        summary: message || "Error al eliminar la campaña.",
        severity: "error",
      });
      return;
    }

    showToast({
      summary: "Campaña eliminada correctamente.",
      severity: "success",
    });
    forceReload();
  };

  const finishCampaign = async () => {
    setIsLoading(true);
    const dataReturned = await finishCampaignService(selectedId, "ended");
    setIsLoading(false);

    if (!dataReturned.ok) {
      const { message } = dataReturned as ApiError;
      showToast({
        summary: message || "Error al finalizar la campaña.",
        severity: "error",
      });
      return;
    }

    showToast({
      summary: "Campaña finalizada correctamente.",
      severity: "success",
    });
    forceReload();
  };

  const openConfirmFinish = (id: string) => {
    setSelectedId(id);
    confirmDialog({
      message: "¿Desea finalizar esta campaña?",
      header: "Finalizar campaña",
      icon: "pi pi-power-off",
      defaultFocus: "reject",
      rejectClassName: "bg-gray-400",
      acceptClassName: "bg-green-600",
      rejectLabel: "Cancelar",
      acceptLabel: "Sí, finalizar",
      accept: finishCampaign,
    });
  };

  const openConfirmDelete = (id: string) => {
    setSelectedId(id);
    confirmDialog({
      message: "¿Desea eliminar esta campaña?",
      header: "Eliminar campaña",
      icon: "pi pi-trash",
      defaultFocus: "reject",
      rejectClassName: "bg-gray-400",
      acceptClassName: "bg-red-600",
      rejectLabel: "Cancelar",
      acceptLabel: "Sí, eliminar",
      accept: deleteCampaign,
    });
  };

  const openCampaign = (id: string | null) => {
    setSelectedId(id);
    setEditorOpen(true);
  };

  return {
    data,
    isLoading,
    openConfirmFinish,
    openConfirmDelete,
    openCampaign,
  };
};

export default useCampaignDashboard;
