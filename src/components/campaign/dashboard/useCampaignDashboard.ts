import { useContext, useState, useEffect } from "react";
import { type CampaignList } from "@/models/campaign";
//import { type ApiError } from "@/models/apiError";
import { CRUDContext } from "@/contexts/crud";
import { getCampaigns } from "@/services/campaign";

const defaultData: CampaignList = {
  elementsTotal: 0,
  data: [],
};

// const defaultError:ApiError= {
//   ok: true,
//   message: ''
// }

const useCampaignDashboard = () => {
  const { filters, isLoading, setIsLoading, showToast } =
    useContext(CRUDContext);

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
  }, [filters, setIsLoading, showToast]);

  return {
    data,
    isLoading,
  };
};

export default useCampaignDashboard;
