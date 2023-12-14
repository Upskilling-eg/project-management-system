
import { createContext,ReactNode } from 'react';
import { toast } from 'react-toastify';

interface ToastContextType{
    getToastValue: (type: string, message: string) => void;
}
interface ToastContextProviderProps {
    children: ReactNode;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastContextProvider: React.FC<ToastContextProviderProps> = (props)=>{
    type ToastType = "success" | "error" | "info" | "warning";
    
    const getToastValue =(type: ToastType, message: string)=>{
        return toast[type](message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            })
    }
    
    return(
    <ToastContext.Provider value={{getToastValue}}>
        {props.children}
    </ToastContext.Provider>
    )
}

export default ToastContextProvider;