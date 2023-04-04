// TODO: BANK
import { verify } from '@noble/ed25519';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { FC, useCallback, useState } from 'react';
import { notify } from "../utils/notifications";

import { Program, AnchorProvider, web3, utils, BN } from "@project-serum/anchor";
import idl from "./solanapdas.json";
import { PublicKey, SystemProgram, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import Image from 'next/image';
import cuteDogImage from '/home/beliv/lesson/FinalTaskFrontEnd/dapp-scaffold/src/components/image/lindo-retrato-de-cachorro.jpg';

const idl_string = JSON.stringify(idl)
const idl_object = JSON.parse(idl_string)
const programID = new PublicKey(idl.metadata.address)

export const Pet: FC = () => {
    const ourWallet = useWallet();
    const { connection } = useConnection();
    const [pets, setPets] = useState([]);




    const getProvider = () => {
        const provider = new AnchorProvider(connection, ourWallet, AnchorProvider.defaultOptions())
        return provider
    }


    const petCreate = async () => { 

        try {
            const anchProvider = getProvider()
            const program = new Program(idl_object, programID, anchProvider)

           


            //bump is added automatically 
            const [pet] = await PublicKey.findProgramAddressSync([
                utils.bytes.utf8.encode("petaccount"),
                anchProvider.wallet.publicKey.toBuffer(),
            ], program.programId)


            const petname = prompt("Enter pet name:");
            if (petname.length > 20) {
                throw new Error('The pet name must be no longer than 20 characters');
              }

            await program.rpc.createPet(petname, {
                accounts: {
                    pet,
                    user: anchProvider.wallet.publicKey,
                    systemProgram: web3.SystemProgram.programId
                }
            })

            console.log("New pet was created:" + pet.toString())

        } catch (error) {
            console.error("Error: ( " + error)
        }
    }
  
    const getPets = async () => {

        const anchProvider = getProvider()
        const program = new Program(idl_object, programID, anchProvider)

        try {

            Promise.all((await connection.getProgramAccounts(programID)).map(async pet => ({
                ...(await program.account.pet.fetch(pet.pubkey)),
                pubkey: pet.pubkey
            }))).then(pets => {

                console.log(pets)
                setPets(pets)

            })

        } catch (error) {
            console.error("Error while fetching the Pets")
        }
    }


    const petFeed = async (publicKey) => {

        try {
            const anchProvider = getProvider()
            const program = new Program(idl_object, programID, anchProvider)

            await program.rpc.feedPet(new BN(0.1 * web3.LAMPORTS_PER_SOL),
                {
                    accounts: {
                        pet: publicKey,
                        user: anchProvider.wallet.publicKey,
                        systemProgram: web3.SystemProgram.programId
                    }
                })
            console.log("Feed Done:" + publicKey)

        } catch (error) {

            console.error("Error while depositing")

        }
    }

    const unfedCheck = async (publicKey) => {

        try {
            const anchProvider = getProvider()
            const program = new Program(idl_object, programID, anchProvider)

            await program.rpc.checkForUnfed(
                {
                    accounts: {
                        pet: publicKey,
                        clock: SYSVAR_CLOCK_PUBKEY,

                    }
                })
            console.log("Updated:" + publicKey)

        } catch (error) {

            console.error("Error while updating")

        }
    }




/*     const withdraw = async (publicKey) => {

        try {
            const anchProvider = getProvider()
            const program = new Program(idl_object, programID, anchProvider)

            await program.rpc.withdraw(new BN(0.1 * web3.LAMPORTS_PER_SOL),
                {
                    accounts: {
                        bank: publicKey,
                        user: anchProvider.wallet.publicKey,
                        systemProgram: web3.SystemProgram.programId
                    }
                })
            console.log("Withdraw 0.1 Done :" + publicKey)

        } catch (error) {

            console.error("Error while withdrawing")

        }
    }
 */


    return (
        <>      {pets.map((pet) => {

            return (
                <div key={pet.pubkey} className="md:hero-content flex flex-col">
                    <Image src={cuteDogImage} alt="cute dog" width={200} height={200} />



                    <h1> {pet.name.toString()} </h1>
                    <span>Balance: {pet.balance / 1000000000}◎</span>
                    <span>Happiness: {pet.happiness.toString()}</span>
                    <span>Born Date: {new Date(pet.bornDate * 1000).toLocaleString()}</span>
                    <span>Last Time Fed: {pet.hasBeenFed ? new Date(pet.lastFedTimestamp * 1000).toLocaleString() : 'Never been fed'}</span>
                    <span>Last Time Happiness Decreased: {pet.lastHappinessDecreaseTimestamp == 0 ? 'Never Been Decreased' : new Date(pet.lastHappinessDecreaseTimestamp * 1000).toLocaleString()}</span>



                    <button
                        className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                        onClick={() => petFeed(pet.pubkey)}
                    >
                        <span>
                            Feed 0.1 ◎
                        </span>
                    </button>

                      {     <button
                        className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                        onClick={() => unfedCheck(pet.pubkey)}
                    >
                        <span>
                            Check for Unfed
                        </span>
                    </button> }  


                    
                {/*     {     <button
                        className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                        onClick={() => withdraw(bank.pubkey)}
                    >
                        <span>
                            Withdraw 0.1
                        </span>
                    </button> }  */}



                </div>
            )
        }
        )}

            <div className="flex flex-row justify-center">
                <>
                    <div className="relative group items-center">
                        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <button
                            className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                            onClick={petCreate}
                        >
                            <span className="block group-disabled:hidden" >
                                Create Pet
                            </span>
                        </button>


                        <button
                            className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                            onClick={getPets}
                        >
                            <span className="block group-disabled:hidden" >
                                Fetch Pets
                            </span>
                        </button>

                    </div>
                </>
            </div>
        </>

    );
};
