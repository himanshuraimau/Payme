import React from 'react';
import { Card } from '@repo/ui/card';
import { getServerSession } from 'next-auth';
import { authOptions } from '../app/lib/auth';
import prisma from '@repo/db/client';

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    };
}
const DashCard = async () => {
    const fetchData = async () => {
        const balance = await getBalance();
       

        return { balance, };
    };

    const { balance, } = await fetchData();
  return (
    <div className='flex justify-center items-center h-96'>
      <div className='bg-gray-200 rounded-lg shadow-lg w-96'>
        <Card title='Dashboard'>
            <div className=''>
                  Total Balance : {balance.amount}
            </div>
        </Card>
      </div>
    </div>
  );
}

export default DashCard;
