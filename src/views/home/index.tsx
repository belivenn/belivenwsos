// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
       {/*  <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v{pkg.version}</div> */}
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
          BELIVEN WsOS 2023 PET DAPP 
        </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>
This DAPP allows users to create and take care of virtual pets as program-derived accounts (PDAs) on the Solana blockchain.</p>
          <p className='text-slate-500 text-2x1 leading-relaxed'></p>
        </h4>

          <h4 className="md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2">
            <p>
            The user can create a pet by providing a name argument that is no longer than 20 characters in length and a imageURL (.JPEG .PNG .GIF) and the pet will be initialized with the following parameters.  </p> </h4>
            <p className='text-slate-500 text-2x1 leading-relaxed'></p>
            <h4 className="md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2">
            Name
            <p>
            Owner
            </p>
            <p>
            Balance
            </p>
            <p>
            Happiness
            </p>
            <p>
            Last Fed Timestamp
            </p>
            <p>
            Last Time Happiness got Decreased
            </p>
            <p>
            BornDate
            </p>

          </h4>
          
          <h4 className="md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2">
            <p>
           The user can feed the Pet, by providing an amount argument. </p>
           <p>After feeding the pet by a fixed value, its happiness will increase by a fixed amount, and the Last Fed Timestamp attribute will be updated with the current timestamp.</p> </h4>
            <p className='text-slate-500 text-2x1 leading-relaxed'></p>

            <h4 className="md:w-full text-2x1 md:text-2xl text-center text-slate-300 my-2">
            <p>
            The app also provides a feature to check for unfed pets, allowing to monitor the feeding status of the pets. </p>
           <p>For instance, if a pet has not been fed for the last 24 hours, and its happiness has not decreased during this period, and its current happiness level is greater than 0, then the application will decrease its happiness by a fixed amount.   </p> </h4>
            <p className='text-slate-500 text-2x1 leading-relaxed'>*Notes : For testing purposes, I have declared this variable to be 60 seconds.
            </p>
            <p className='text-slate-500 text-2x1 leading-relaxed'> FEEDBACK :Most of the time, I spent searching for how to implement an iter_mut() method to iterate through all the pet accounts created and update them in a single atomic transaction. I attempted to create a vector of pets and use for pet in &mut ctx.accounts.pets.iter_mut(), but I was unsuccessful. I also tried to create an allpets list and call it in the function and in the CheckForUnfed Struct, but that also did not work. However, I am not going to give up, and I will continue to work on scaling this application the most possible.
            </p>


        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          
        </div>
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div>
              {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
          </div>
          }
          </h4>
        </div>
      </div>
    </div>
  );
};
