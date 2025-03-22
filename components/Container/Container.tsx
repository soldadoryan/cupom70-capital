import { ContainerPropsType } from "./Container.types";
import s from "./styles.module.css";

export function Container({ children, customClass }: ContainerPropsType) {
  return <div className={`${s.container} ${customClass}`}>{children}</div>;
}
