import { Card } from "@repo/ui/card";

export const BalanceCard = ({ amount, locked }: {
    amount: number;
    locked: number;
}) => {
    return (
        <Card title={"Balance"} >
            <div className="flex justify-between border-b border-blue-300 pb-2">
                <div className="text-sm">
                    Unlocked balance
                </div>
                <div className="text-sm">
                    {amount / 100} INR
                </div>
            </div>
            <div className="flex justify-between border-b border-blue-300 py-2">
                <div className="text-sm">
                    Total Locked Balance
                </div>
                <div className="text-sm">
                    {locked / 100} INR
                </div>
            </div>
            <div className="flex justify-between py-2">
                <div className="text-sm">
                    Total Balance
                </div>
                <div className="text-sm">
                    {(locked + amount) / 100} INR
                </div>
            </div>
        </Card>
    );
}
