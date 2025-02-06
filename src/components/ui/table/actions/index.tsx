import { useRef } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { type MenuItem } from "primereact/menuitem";
import clsx from "clsx";

export interface TableActionType {
  icon: string;
  label: string;
  color: "default" | "danger" | "success" | "info" | "warning";
  onClick: () => void;
}

interface Props {
  actions: TableActionType[];
}

const TableActions = ({ actions = [] }: Props) => {
  const menu = useRef<TieredMenu | null>(null);
  const items: MenuItem[] = actions.map(({ icon, label, color, onClick }) => {
    return {
      template: (
        <button
          className={clsx(
            "px-5 py-3 flex items-center gap-2 border-b border-gray-200 w-full",
            {
              "text-red-600": color === "danger",
              "text-green-600": color === "success",
              "text-sky-600": color === "info",
              "text-orange-600": color === "warning",
            }
          )}
          onClick={onClick}
        >
          {icon ? <i className={icon} /> : null} {label}
        </button>
      ),
    };
  });

  return (
    <div className="card flex justify-content-center">
      <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
      <button
        onClick={(e) =>
          menu?.current?.toggle ? menu?.current?.toggle(e) : null
        }
        className="text-2xl hover:opacity-80 transition-opacity"
      >
        <i className="pi pi-ellipsis-h"></i>
      </button>
    </div>
  );
};

export default TableActions;
