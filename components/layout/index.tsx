import { LayoutProps } from "./interface";

import { Menubar } from "primereact/menubar";
import { items } from "./data";
import styles from "./styles.module.css";

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Menubar model={items} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
