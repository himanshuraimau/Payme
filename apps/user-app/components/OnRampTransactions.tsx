import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date;
        amount: number;
        status: "Completed" | "Pending" | "Failed";
        provider: string;
    }[]
}) => {
    if (!transactions.length) {
        return (
            <Card title="Recent Transactions">
                <div className="text-center py-8">
                    No recent transactions
                </div>
            </Card>
        );
    }

    return (
        <Card title="Recent Transactions">
            <div className="pt-2">
                {transactions.map(t => (
                    <div key={t.time.toString()} className="flex justify-between py-2">
                        <div>
                            <div className="text-sm">
                                Received INR
                            </div>
                            <div className="text-gray-600 text-xs">
                                {t.time.toDateString()}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            + Rs {t.amount / 100}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
