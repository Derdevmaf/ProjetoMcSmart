import { Heart, MapPin, MessageCircle, Home as HomeIcon, ShoppingBag, User, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Rua Augusta, 243, Consolação, São Paulo - SP</p>
              <p className="text-xs text-red-500">Alterar</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Title Section */}
        <section className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Qual vai ser o seu pedido hoje?</h1>
        </section>

        {/* Categories */}
        <section className="px-4 pb-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {/* Mcofertas */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/combo-meal.jpg" alt="Mcofertas" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Mcofertas</p>
            </div>
            {/* Promoções - Pick up */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/promopickup.png" alt="Promoções Pick up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Promoções<br/>Pick up</p>
            </div>
            {/* Sanduíches */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/hamburger1.jpg" alt="Sanduíches" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Sanduíches</p>
            </div>
            {/* Família Tasty */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/familia-tasty.jpg" alt="Família Tasty" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Família Tasty</p>
            </div>
            {/* Méqui Box */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/mequi-box.jpg" alt="Méqui Box" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Méqui Box</p>
            </div>
            {/* Sobremesas */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/sobremesas.jpg" alt="Sobremesas" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-center text-gray-700">Sobremesas</p>
            </div>
              {/* Bebidas */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/products/bebidas.jpg" alt="Bebidas" className="w-full h-full object-cover" />
              </div>
	              <p className="text-xs text-center text-gray-700">Bebidas</p>
	            </div>
	          </div>
	        </section>
	
	        {/* McSmart Locker Promo */}
	        <section className="px-4 pb-6">
	          <div className="bg-red-600 rounded-2xl p-6 text-white relative overflow-hidden">
	            <div className="absolute top-4 left-4">
	              <span className="bg-yellow-400 text-red-600 text-xs font-bold px-3 py-1 rounded-full">🆕 novidade</span>
	            </div>
	            <div className="absolute top-4 right-4 bg-red-500 rounded-full p-3">
	              <span className="text-2xl">📦</span>
	            </div>
	            <div className="mt-8">
	              <h2 className="text-2xl font-bold mb-2">McSmart Locker</h2>
              <p className="text-sm mb-6 leading-relaxed">Retire seu pedido no McSmart Locker<br/>Sem fila, sem espera!</p>
              <a
                href="https://wa.me/5554991997708?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20com%20retirada%20no%20SmartLocker"
                target="_blank"
                rel="noopener noreferrer"
              >  
                <Button className="w-full bg-yellow-400 text-red-600 hover:bg-yellow-500 font-bold rounded-full py-3 text-base">
                Vamos lá!
              </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Sanduíches em Oferta */}
        <section className="px-4 pb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sanduíches em oferta</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {/* Product Card 1 - Big Mac */}
            <div className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden snap-start">
              <div className="relative bg-gray-100 h-32 flex items-center justify-center overflow-hidden">
                <img src="/images/products/bigmac2.png" alt="Big Mac" className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">10% off</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">Big Mac</h3>
                  <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2">Dois hambúrgueres, alface, queijo, molho especial</p>
                <p className="text-xs text-gray-500 line-through">de R$ 19,00</p>
                <p className="text-lg font-bold text-red-600">Por: R$ 22,90</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Card 2 - Quarter Pounder */}
            <div className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden snap-start">
              <div className="relative bg-gray-100 h-32 flex items-center justify-center overflow-hidden">
                <img src="/images/products/quarter-pounder.png" alt="Quarter Pounder" className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">5% off</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">Quarter Pounder</h3>
                  <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2">Hambúrguer 113g, queijo, cebola, picles</p>
                <p className="text-xs text-gray-500 line-through">de R$ 25,00</p>
                <p className="text-lg font-bold text-red-600">Por: R$ 23,75</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Card 3 - McChicken */}
            <div className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden snap-start">
              <div className="relative bg-gray-100 h-32 flex items-center justify-center overflow-hidden">
                <img src="/images/products/mcchicken.png" alt="McChicken" className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">15% off</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">McChicken</h3>
                  <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2">Frango empanado, alface, maionese especial</p>
                <p className="text-xs text-gray-500 line-through">de R$ 18,00</p>
                <p className="text-lg font-bold text-red-600">Por: R$ 15,30</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Card 4 - Filet-O-Fish */}
            <div className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden snap-start">
              <div className="relative bg-gray-100 h-32 flex items-center justify-center overflow-hidden">
                <img src="/images/products/filet-o-fish.png" alt="Filet-O-Fish" className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">8% off</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">Filet-O-Fish</h3>
                  <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2">Peixe empanado, queijo, molho tártaro</p>
                <p className="text-xs text-gray-500 line-through">de R$ 20,00</p>
                <p className="text-lg font-bold text-red-600">Por: R$ 18,40</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Card 5 - Hambúrguer */}
            <div className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden snap-start">
              <div className="relative bg-gray-100 h-32 flex items-center justify-center overflow-hidden">
                <img src="/images/products/quarter-pounder.png" alt="Hambúrguer" className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">12% off</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">Hambúrguer</h3>
                  <Heart className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-600 mb-2">Hambúrguer clássico, picles, cebola, ketchup</p>
                <p className="text-xs text-gray-500 line-through">de R$ 12,00</p>
                <p className="text-lg font-bold text-red-600">Por: R$ 10,56</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-20">
        <button className="flex flex-col items-center justify-center gap-1 py-2 text-red-600">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs font-semibold">Início</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400 hover:text-gray-600">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs">Cupons</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400 hover:text-gray-600">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400 hover:text-gray-600">
          <User className="w-6 h-6" />
          <span className="text-xs">Minha Conta</span>
        </button>
      </nav>
    </div>
  );
}
