import { DELAY_MOCK } from "@/mockData/config";
import campaingsData from "@/mockData/campaings";
import { CampaignList, Campaign } from "@/models/campaign";
import { FilterCampaign } from "@/models/filters";

export const getCampaigns = async (filters: FilterCampaign): Promise<{ ok: boolean; data: CampaignList }> => {
  return new Promise((resolve) => {
    setTimeout(() => {

      let data = campaingsData.data;
      // FILTER DATA
      const { page, elementsPerPage, sortBy, sortOrder, keyword } = filters;
      if (keyword) {
        data = data.filter((campaign: Campaign) => {
          return campaign.name.toLowerCase().includes(keyword.toLowerCase());
        });
      }
      if (sortBy && sortOrder) {
        data = data.sort((a: Campaign, b: Campaign) => {
          if (sortBy === "name") {
            if (sortOrder === "asc") {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          }
          return 0;
        });
      }
      data = data.slice((page - 1) * elementsPerPage, page * elementsPerPage);

      resolve({
        ok: true,
        data: {
          elementsTotal: data.length,
          data: data.map((campaign: Campaign) => {
            return {
              ...campaign,
              users: campaign.users.length,
            };
          }),
        }
      });
    }, DELAY_MOCK);
  });
};

export const getCampaign = async (id: string): Promise<{ ok: boolean; data?: Campaign; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (!id) {
        reject({
          ok: false,
          message: "Error. No se encuentra la campaña.",
        });
      }

      const data = campaingsData.data.filter((campaign: Campaign) => {
        return campaign.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          data: data[0],
        });
      } else {
        reject({
          ok: false,
          message: "Error. No se encuentra la campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const createCampaign = async (campaign: Campaign): Promise<{ ok: boolean; data?: Campaign; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (campaign && campaign.id) {
        resolve({
          ok: true,
          data: campaign,
        });
      } else {
        reject({
          ok: false,
          message: "Error al crear nueva campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const updateCampaign = async (campaign: Campaign): Promise<{ ok: boolean; data?: Campaign; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (campaign) {
        resolve({
          ok: true,
          data: campaign,
        });
      } else {
        reject({
          ok: false,
          message: "Error al actualizar campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const deleteCampaign = async (id: string): Promise<{ ok: boolean; data?: Campaign; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (!id) {
        reject({
          ok: false,
          message: "Error. No se encuentra la campaña",
        });
      }

      const data = campaingsData.data.filter((campaign: Campaign) => {
        return campaign.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          message: "Campaña eliminada correctamente.",
        });
      } else {
        reject({
          ok: false,
          message: "Error. No se encuentra la campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};
