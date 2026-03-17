import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-10 text-center">
        <h2 className="text-4xl font-serif text-gray-800">Seja bem-vinda ao nosso doce refúgio!</h2>
        <p className="text-gray-600 mt-4">Estamos preparando o site com muito carinho.</p>
      </main>
    </div>
  );
}

export default App;