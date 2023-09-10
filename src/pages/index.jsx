import BG from '../img/bg.jpg';
import { GiBigWave } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';

export default function Index() {
    return (
        <>
            <header>
                <nav className="py-3 shadow bg-background absolute w-full z-50">
                    <ul className="flex justify-between items-center text-text px-10">
                        <li><a href="/" className="font-bold text-xl">ReactFinanz</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-all delay-100 text-lg">À propos</a></li>
                        <div className="flex gap-6">
                            <li><a href="#" className="hover:text-blue-600 transition-all delay-100 text-lg">Connexion</a></li>
                            <li><a href="/inscription"className="p-2 rounded hover:bg-blue-900 transition-all delay-100 bg-blue-800 text-white text-lg px-4">Inscription</a></li>
                        </div>
                    </ul>
                </nav>
                <img src={BG} alt="Image de fond pour la page d'accueil de ReactFinanz" className='w-screen h-[600px] brightness-[0.25]'/>
                <div className="absolute top-[40%] transform -translate-y-[40%] ml-72 flex flex-col gap-1">
                    <div className='flex gap-3 text-blue-500 items-center text-2xl font-medium'>
                        <GiBigWave /> <h2>ReactFinanz</h2>
                    </div>
                    <p className='text-white text-4xl font-bold'>Gérez vos finances avec <span className='text-blue-500'>simplicité.</span></p>
                    <p className='font-light text-white'>Simplifiez la gestion financière d'entreprise avec notre système comptable web réactif.</p>
                    <button className='rounded-lg bg-blue-800 w-32 py-2 mt-16 text-white transition-all delay-100 hover:bg-blue-900'>S'inscrire</button>
                </div>
                <div className='flex justify-center gap-24 mt-[-60px]'>
                    <div className='flex flex-col p-12 drop-shadow-lg w-50 bg-gray-200 items-center text-2xl'>
                        <FaMoneyBillAlt /> <h3>Gestion des Transactions</h3>
                    </div>
                    <div className='flex flex-col p-12 drop-shadow-lg w-50 bg-gray-200 items-center text-2xl'>
                        <FaMoneyBillAlt /> <h3>Rapport et Analyse</h3>
                    </div>
                    <div className='flex flex-col p-12 drop-shadow-lg w-50 bg-gray-200 items-center text-2xl'>
                        <FaMoneyBillAlt /> <h3>Gestion de l'Utilisateur</h3>
                    </div>
                </div>
            </header>
        </>
    )
}