interface Route {
  url: string;
  label: string;
  inMenu: boolean;
  icon?: string;
}

const Routes: Route[] = [
  {
    url: "/",
    label: "Inicio",
    inMenu: false,
  },
  {
    url: "/campaigns",
    label: "Campañas",
    inMenu: true,
    icon: "pi pi-calendar",
  },
  {
    url: "/users",
    label: "Usuarios",
    inMenu: true,
    icon: "pi pi-user",
  },
];

export default Routes;
