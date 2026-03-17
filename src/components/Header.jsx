export default function Header() {
  return (
    <header className="bg-rosa-fundo shadow-md p-4 flex justify-between items-center border-b border-rosa-destaque">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🍰</span>
        <h1 className="text-xl font-bold text-rosa-destaque uppercase tracking-wider">
          Gleide Divino Eventos
        </h1>
      </div>
      
      <nav>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-rosa-destaque cursor-pointer transition">Início</li>
          <li className="hover:text-rosa-destaque cursor-pointer transition">Doces</li>
          <li className="hover:text-rosa-destaque cursor-pointer transition">Contato</li>
        </ul>
      </nav>
    </header>
  );
}