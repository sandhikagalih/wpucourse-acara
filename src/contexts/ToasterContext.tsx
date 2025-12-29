import { createContext, ReactNode, useState } from "react";

interface IToaster {
  type: string;
  message: string;
}

interface IToasterState {
  toaster: IToaster;
  setToaster: (toaster: IToaster) => void;
}

const defaultToaster = {
  type: "",
  message: "",
};

const ToasterContext = createContext<IToasterState>({
  toaster: defaultToaster,
  setToaster: () => {},
});

const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toaster, setToaster] = useState<IToaster>(defaultToaster);

  return (
    <ToasterContext.Provider value={{ toaster, setToaster }}>
      {children}
    </ToasterContext.Provider>
  );
};

export { ToasterProvider, ToasterContext, defaultToaster };
export type { IToaster, IToasterState };
