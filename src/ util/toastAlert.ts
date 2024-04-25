import { toast, ToastOptions } from "react-toastify";

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

const toastAlert = {
  success: (message: string) => toast.success(message, toastOptions),
  info: (message: string) => toast.info(message, toastOptions),
  error: (message: string) => toast.error(message, toastOptions),
  warn: (message: string) => toast.warn(message, toastOptions),
};

export default toastAlert;
