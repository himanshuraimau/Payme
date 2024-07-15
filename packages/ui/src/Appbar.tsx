import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignin: () => void; // Define the type as a function
    onSignout: () => void; // Define the type as a function
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
        <div className="flex justify-between border-b px-4 border-blue-300 bg-blue-50 shadow-md">
            <div className="text-lg flex flex-col justify-center text-gray-700">
                PayTM
            </div>
            <div className="flex flex-col justify-center pt-2">
                <Button onClick={user ? onSignout : onSignin}>
                    {user ? "Logout" : "Login"}
                </Button>
            </div>
        </div>
    );
}
