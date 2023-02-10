import { MenuItem } from "primereact/menuitem";
import Router from "next/router";
export const items: MenuItem[] = [
  {
    label: "Inicio",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/"),
  },
  {
    label: "Contacto",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/contacto"),
  },
  {
    label: "Nosotros",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/nosotros"),
  },
  {
    label: "Portafolio",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/portafolio"),
  },
  {
    label: "Precios",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/precios"),
  },
  {
    label: "Servicios",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/servicios"),
  },
  {
    label: "Blogs",
    icon: "pi pi-fw pi-file",
    command: () => Router.push("/blog"),
  },
];
