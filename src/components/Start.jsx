import React, {useState} from 'react';
import rock from "/public/images/icon-rock.svg";
import paper from "/public/images/icon-paper.svg"; 
import scissors from "/public/images/icon-scissors.svg";

const Start = ({ score, playerChoice, setPlayerChoice, systemChoice, setSystemChoice }) => {
    const [showRules, setShowRules] = useState(false);
    const [randomNum, setRandomNum] = useState(0);

    const generateSystemChoice = () => {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        setSystemChoice(choices[randomIndex]);
        console.log(systemChoice);
        return choices[randomIndex];
    }

  return (
    <div className='h-screen w-screen overflow-hidden'>
        <div className='flex flex-col gap-12 items-center pt-12 h-screen '>
            <div className='flex sm:flex-row flex-col sm:gap-0 gap-4 sm:text-start text-center justify-between border-2 border-white p-4 w-3/5 rounded-lg'>
                <div>
                    <p className='min-[335px]:text-4xl text-white font-bold'>ROCK</p>
                    <p className='min-[335px]:text-4xl text-white font-bold'>PAPER</p>
                    <p className='min-[335px]:text-4xl text-white font-bold'>SCISSORS</p>
                </div>

                <div className='flex flex-col items-center justify-between bg-white px-8 rounded-md py-4'>
                    <p className='font-bold text-[#465894] min-[335px]:text-[16px] text-[12px]'>SCORE</p>
                    <h1 className='min-[335px]:text-4xl text-xl font-bold text-[#394164]'>{score}</h1>
                </div>
            </div>

            { playerChoice === null && systemChoice === null && (
                <div className='bg-[url("/public/images/bg-triangle.svg")] bg-no-repeat bg-cover lg:w-[350px] w-[250px] lg:h-[300px] h-[200px] relative'>
                    <img className='block absolute lg:bottom-[-24px] bottom-[-18px] lg:right-28 right-16 bg-white p-4 lg:h-32 h-28 lg:w-32 w-28 rounded-full border-16 border-[#b52b44] cursor-pointer' onClick={() => {setPlayerChoice("rock"); generateSystemChoice();}} src={rock} alt="rock" />
                    <img className='block absolute left-[-12px] top-[-30px] bg-white p-4 lg:h-32 h-28 lg:w-32 w-28 rounded-full border-16 border-[#474ae8] cursor-pointer' onClick={() => {setPlayerChoice("paper"); generateSystemChoice();}} src={paper} alt="paper" />
                    <img className='block absolute right-[-12px] top-[-30px] bg-white p-4 lg:h-32 h-28 lg:w-32 w-28 rounded-full border-16 border-[#E29C19] cursor-pointer' onClick={() => {setPlayerChoice("scissors"); generateSystemChoice();}} src={scissors} alt="scissors" />
                </div>
            )}

            { playerChoice !== null && systemChoice !== null && (
                <div>
                    <p className='text-2xl text-white font-semibold'>YOU PICKED</p>

                    <div>
                        <img className={`block bg-white p-4 lg:h-40 h-32 lg:w-40 w-32 rounded-full border-16 ${playerChoice === "rock"? "border-[#b52b44]" : playerChoice === "paper"? "border-[#474ae8]" : "border-[#E29C19]"} mt-4`} src={playerChoice === "rock"? rock : playerChoice === "paper"? paper : scissors} alt={playerChoice} />
                    </div>
                </div>
            )}

            <p className='text-white border-2 border-white px-10 py-2 rounded-md hover:text-black hover:border-black hover:scale-105 self-end mr-8 cursor-pointer' onClick={() => setShowRules(true)}>RULES</p>
        </div>

        {showRules && (
            <div className='w-screen h-screen bg-black absolute top-0 left-0 opacity-70'></div>
        )}
        {showRules && (
            <div className='overflow-hidden flex items-center justify-center absolute top-0 left-0 h-screen w-screen'>
                <div className='bg-white rounded-md p-4'>
                    <div className='flex justify-end items-center mb-4'>
                        <p className='text-2xl cursor-pointer animate-bounce' onClick={() => setShowRules(false)}>X</p>
                    </div>
                    <h1 className='text-3xl mb-4'>Rules</h1>

                    <ul>
                        <li>Paper beats rock</li>
                        <li>Rock beats scissors</li>
                        <li>Scissors beats paper</li>
                    </ul>
                </div>
            </div>
        )}
    </div>
  )
}

export default Start
