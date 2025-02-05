import { DELAY_MOCK } from "@/mockData/config";
import usersData from "@/mockData/users";
import { UserList, User } from "@/models/user";
import { FilterUser } from "@/models/filters";

export const getUsers = async (
  filters: FilterUser
): Promise<{ ok: boolean; data: UserList }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = usersData.data as User[];
      // FILTER DATA
      const { page, elementsPerPage, sortBy, sortOrder, keyword } = filters;
      if (keyword) {
        data = data.filter((user: User) => {
          return user.name.toLowerCase().includes(keyword.toLowerCase());
        });
      }
      if (sortBy && sortOrder) {
        data = data.sort((a: User, b: User) => {
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
          data,
        },
      });
    }, DELAY_MOCK);
  });
};

export const getUser = async (
  id: string
): Promise<{ ok: boolean; data?: User; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject({
          ok: false,
          message: "Error. No se encuentra el usuario.",
        });
      }
      const userList = usersData.data as User[];
      const data = userList.filter((user: User) => {
        return user.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          data: data[0],
        });
      } else {
        reject({
          ok: false,
          message: "Error. No se encuentra el usuario.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const createUser = async (
  user: User
): Promise<{ ok: boolean; data?: User; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user && user.id) {
        resolve({
          ok: true,
          data: user,
        });
      } else {
        reject({
          ok: false,
          message: "Error al crear nuevo usuario.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const updateUser = async (
  user: User
): Promise<{ ok: boolean; data?: User; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user) {
        resolve({
          ok: true,
          data: user,
        });
      } else {
        reject({
          ok: false,
          message: "Error al actualizar usuario.",
        });
      }
    }, DELAY_MOCK);
  });
};

export const deleteUser = async (
  id: string
): Promise<{ ok: boolean; data?: User; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject({
          ok: false,
          message: "Error. No se encuentra el usuario.",
        });
      }
      const userList = usersData.data as User[];
      const data = userList.filter((user: User) => {
        return user.id === id;
      });

      if (data[0]) {
        resolve({
          ok: true,
          message: "Usuario eliminado correctamente.",
        });
      } else {
        reject({
          ok: false,
          message: "Error. No se encuentra el usuario.",
        });
      }
    }, DELAY_MOCK);
  });
};
