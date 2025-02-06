import { DELAY_MOCK } from "@/mockData/config";
import campaingsData from "@/mockData/campaings";
import {
  type CampaignList,
  type Campaign,
  type Status,
} from "@/models/campaign";
import { type User } from "@/models/user";
import { type ApiError } from "@/models/apiError";
import { type FiltersType } from "../models/filters";

export const getCampaigns = async (
  filters: FiltersType
): Promise<{ ok: boolean; data: CampaignList }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = campaingsData.data as Campaign[];
      // FILTER DATA
      const { sortBy, sortOrder, keyword } = filters;
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
          if (sortBy === "start_at") {
            if (sortOrder === "desc") {
              return a.start_at.localeCompare(b.start_at);
            } else {
              return b.start_at.localeCompare(a.start_at);
            }
          }
          if (sortBy === "status") {
            if (sortOrder === "asc") {
              return a.status.localeCompare(b.status);
            } else {
              return b.status.localeCompare(a.status);
            }
          }
          return 0;
        });
      }

      const page = filters?.page || 1;
      const elementsPerPage = filters?.elementsPerPage || 10;
      const elementsTotal = data.length;
      data = data.slice((page - 1) * elementsPerPage, page * elementsPerPage);

      resolve({
        ok: true,
        data: {
          elementsTotal,
          data: data.map((campaign: Campaign) => {
            const users = campaign.users as User[];
            return {
              ...campaign,
              users: users.length,
            };
          }),
        },
      });
    }, DELAY_MOCK);
  });
};

export const getCampaign = async (
  id: string | null
): Promise<{ ok: boolean; data: Campaign } | ApiError> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!id) {
        resolve({
          ok: false,
          message: "Error. Debe especificar el id de la campaña.",
        });
      }
      const campaingsList = campaingsData.data as Campaign[];
      const data = campaingsList.filter((campaign: Campaign) => {
        return campaign.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          data: data[0],
        });
      } else {
        resolve({
          ok: false,
          message: "Error. No se encuentra la campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const createCampaign = async (
  campaign: Campaign
): Promise<{ ok: boolean; data: Campaign } | ApiError> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (campaign && campaign.id) {
        resolve({
          ok: true,
          data: campaign,
        });
      } else {
        resolve({
          ok: false,
          message: "Error al crear nueva campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const updateCampaign = async (
  campaign: Campaign
): Promise<{ ok: boolean; data: Campaign } | ApiError> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (campaign) {
        resolve({
          ok: true,
          data: campaign,
        });
      } else {
        resolve({
          ok: false,
          message: "Error al actualizar campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const finishCampaign = async (
  id: string | null,
  status: Status
): Promise<{ ok: boolean; data: Status } | ApiError> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (status) {
        resolve({
          ok: true,
          data: status,
        });
      } else {
        resolve({
          ok: false,
          message: "Error al actualizar status de campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const deleteCampaign = async (
  id: string | null
): Promise<{ ok: boolean; data: Campaign } | ApiError> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!id) {
        resolve({
          ok: false,
          message: "Error. Debe especificar el id de la campaña.",
        });
      }
      const campaingsList = campaingsData.data as Campaign[];
      const data = campaingsList.filter((campaign: Campaign) => {
        return campaign.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          message: "Campaña eliminada correctamente.",
        });
      } else {
        resolve({
          ok: false,
          message: "Error. No se encuentra la campaña.",
        });
      }
    }, DELAY_MOCK);
  });
};
