import { store } from "react-notifications-component";

export const showNotification = (
  title: string,
  message: string,
  type: "success" | "danger" | "info" | "default" | "warning" | undefined
) => {
  store.addNotification({
    title,
    message,
    type,
    container: "top-right",
    insert: "top",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      showIcon: true,
    },
  });
};
