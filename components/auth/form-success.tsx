import { ShieldCheck } from "lucide-react";

interface FormErrorProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-emerald-500/15 dark:bg-emerald-500/40 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
};
