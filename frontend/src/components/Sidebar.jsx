import React from "react";
import Card from "./Card";
import Home from "./Home";
import party from "../Party"
// import candidate from "../Party"
import axios from "axios";
import Electionabi from '../contracts/Election.json'
import Web3 from "web3"
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractAbi, contractAddress } from '../Constant/constant';


const handleVote = async (candidateId) => {
   
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    try {
        await contractInstance.vote(candidateId);
        console.log("Vote recorded successfully");
        // Perform any additional actions after successful vote
      } catch (error) {
        console.log("Vote failed:", error);
        // Handle error if the vote fails
      }

};


function createCard(party) {
    return (<Card
        id={party.id}
        logo={party.logo}
        name={party.name}
        onVote={handleVote}

    />
    );
}

function mapping(party) {
    for (var i = 0; i < party.length; i++) {
        return party[i].name
    }
}

const handleLogout = async () => {
    try {
        await axios.post('/logout');
        // Clear any client-side data (e.g., remove tokens from local storage)
        // Redirect the user to the login page or perform any other necessary actions
    } catch (error) {
        // Handle error if logout fails
    }
};



function Sidebar() {
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [votingStatus, setVotingStatus] = useState(true);

    const [remainingTime, setremainingTime] = useState('');
    const [candidates, setCandidates] = useState([]);

    const [number, setNumber] = useState('');

    useEffect(() => {
        loadWeb3();
        LoadBlockChaindata();
        getCandidates();
        getRemainingTime();
        getCurrentStatus();
    }, []);
    const loadWeb3 = async () => {

        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log("No ethereum browser detected");
        }
    }
    const LoadBlockChaindata = async () => {
        const web3 = window.web3;
        const accounts = web3.eth.getAccounts();
        const account = accounts[0];
        console.log("Fetched");
        const networkId = await web3.eth.net.getId();

        const networkData = Electionabi.networks[networkId];
        if (networkData) {
            const election = new web3.eth.Contract(Electionabi.abi, networkData.address);
            console.log(election)

        }
        else {
            window.alert("Smart contract not deployed");
        }
    }

    async function getCandidates() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const contractInstance = new ethers.Contract(
            contractAddress, contractAbi, signer
        );
        const candidateList = await contractInstance.getAllVotesOfCandiates();
        const formattedCandidates = candidateList.map((candidate, index) => {
            return {
                index: index,
                name: candidate.name,
                vote: candidate.voteCount.toNumber()
            }
        })
        // console.log(candidateList);
        console.log("Votes for congress: ",formattedCandidates[1].voteCount);
        setCandidates(formattedCandidates);
    }


    async function getCurrentStatus() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const contractInstance = new ethers.Contract(
            contractAddress, contractAbi, signer
        );
        const status = await contractInstance.getVotingStatus();
        console.log(status);
        setVotingStatus(status);
    }

    async function getRemainingTime() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(
            contractAddress, contractAbi, signer
        );
        const time = await contractInstance.getRemainingTime();
        setremainingTime(parseInt(time, 16));
    }


    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-row h-screen p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="/home"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span>Current Status</span>
                                    </a>
                                </li>


                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        <span onClick={handleLogout}>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-20 container mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {party.map(createCard)}

                </div>



            </div>
        </div>

    );

}

export default Sidebar;