export default function Inscription() {
    return (
        <>
            <header>
                <nav className="py-3 shadow bg-background absolute w-full z-50">
                    <ul className="flex justify-between items-center text-text px-10">
                        <li><a href="/" className="font-bold text-xl">ReactFinanz</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-all delay-100 text-lg">À propos</a></li>
                        <div className="flex gap-6">
                            <li><a href="#" className="hover:text-blue-600 transition-all delay-100 text-lg">Connexion</a></li>
                            <li><a href="/inscription" className="p-2 rounded hover:bg-blue-900 transition-all delay-100 bg-blue-800 text-white text-lg px-4">Inscription</a></li>
                        </div>
                    </ul>
                </nav>
            </header>
            <main>
                <form action="">
                    <div className="flex flex-col gap-4 mt-20 jusitfy-center items-center">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" name="nom" id="nom" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" name="prenom" id="prenom" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" id="password" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Confirmer le mot de passe</label>
                            <input type="password" name="password" id="password" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                    </div>
                    <button className="rounded-lg bg-blue-800 w-32 py-2 mt-16 text-white transition-all delay-100 hover:bg-blue-900">S'inscrire</button>
                </form>
            </main>
        </>
    )
}