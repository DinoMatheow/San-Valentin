'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const [yesClicked, setYesClicked] = useState(false)
  const [noHovered, setNoHovered] = useState(false)
  const [noCount, setNoCount] = useState(0);
const reactionImages = [
  "/reaccion0.png", 
  "/reaccion1.png", 
  "/reaccion2.png",
  "/reaccion3.png",
  "/reaccion4.png", 
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <EnvelopeView onOpen={() => setIsOpen(true)} />
        ) : (
          <NewspaperView yesClicked={yesClicked} setYesClicked={setYesClicked} noHovered={noHovered} setNoHovered={setNoHovered} noCount={noCount} setNoCount={setNoCount} reactionImages={reactionImages}/>
        )}
      </AnimatePresence>
    </div>
  )
}

// Envelope Initial View Component
function EnvelopeView({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      key="envelope"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8"
    >
      {/* Floating Envelope */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="cursor-pointer"
        onClick={onOpen}
      >
        {/* Envelope SVG with Heart Seal */}
        <svg className="w-48 h-40" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope Body - Main Rectangle */}
          <rect x="40" y="100" width="220" height="120" fill="#fce7f3" stroke="#be185d" strokeWidth="3" />

          {/* Envelope Flap Left */}
          <polygon points="40,100 150,160 40,180" fill="#fbcfe8" stroke="#be185d" strokeWidth="3" />

          {/* Envelope Flap Right */}
          <polygon points="260,100 150,160 260,180" fill="#fbcfe8" stroke="#be185d" strokeWidth="3" />

          {/* Back of Envelope */}
          <polygon points="40,100 150,50 260,100" fill="#f472b6" stroke="#be185d" strokeWidth="3" />

          {/* Heart Seal */}
          <g>
            {/* Heart shape using SVG path */}
            <path
              d="M 150 140 C 150 140, 135 125, 125 125 C 115 125, 110 135, 110 140 C 110 155, 150 175, 150 175 C 150 175, 190 155, 190 140 C 190 135, 185 125, 175 125 C 165 125, 150 140, 150 140"
              fill="#dc2626"
              stroke="#991b1b"
              strokeWidth="2"
            />
          </g>

          {/* Envelope Lines Detail */}
          <line x1="40" y1="140" x2="260" y2="140" stroke="#f472b6" strokeWidth="1" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Floating Text Message */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="text-center"
      >
        <p
          className="text-2xl font-bold text-red-600 mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Tienes una carta nueva
        </p>
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-red-500 text-white rounded-lg font-bold text-lg hover:bg-red-600 transition-colors"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Haz clic para abrir
        </motion.button>
      </motion.div>

      {/* Decorative floating hearts around envelope */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10"
      >
        <Heart className="w-6 h-6 text-red-400 fill-red-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-10 right-10"
      >
        <Heart className="w-6 h-6 text-red-300 fill-red-300" />
      </motion.div>
    </motion.div>
  )
}

// Newspaper Final View Component
function NewspaperView({
  yesClicked,
  setYesClicked,
  noHovered,
  setNoHovered,
  noCount,   
  setNoCount,
  reactionImages
}: {
  yesClicked: boolean
  setYesClicked: (value: boolean) => void
  noHovered: boolean
  setNoHovered: (value: boolean) => void
  noCount: number
  setNoCount: React.Dispatch<React.SetStateAction<number>>
  reactionImages: string[]
}) {
  return (
    <motion.main
      key="newspaper"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      {/* Newspaper Card */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-pink-200">
        {/* Envelope Header */}
        <div className="bg-gradient-to-b from-pink-200 to-pink-100 p-8 text-center relative">
          {/* SVG Envelope Illustration */}
          <svg className="w-32 h-24 mx-auto mb-4" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
            {/* Envelope Body */}
            <rect x="30" y="60" width="140" height="80" fill="white" stroke="#dc2626" strokeWidth="2" />
            {/* Envelope Flap Left */}
            <polygon points="30,60 100,100 30,140" fill="none" stroke="#dc2626" strokeWidth="2" />
            {/* Envelope Flap Right */}
            <polygon points="170,60 100,100 170,140" fill="none" stroke="#dc2626" strokeWidth="2" />
            {/* Letter inside */}
            <rect x="50" y="80" width="100" height="50" fill="#fce7f3" stroke="#f472b6" strokeWidth="1.5" />
            {/* Heart on letter */}
            <text x="100" y="110" fontSize="28" fill="#dc2626" textAnchor="middle" fontWeight="bold">
              ❤
            </text>
          </svg>

          <h1 className="text-4xl font-bold text-red-600 mb-4 tracking-wider">ÁBRELO</h1>

         {/* Línea decorativa superior con rombos y corazón */}
            <div className="flex items-center w-full mb-1">
              <div className="h-[1px] bg-black flex-grow"></div>
              <div className="flex items-center mx-3 text-[10px] gap-1">
                <span>◆</span>
                <span>●</span>
                <span className="text-red-600 text-lg mx-1">♥</span>
                <span>●</span>
                <span>◆</span>
              </div>
              <div className="h-[1px] bg-black flex-grow"></div>
            </div>

          {/* Newspaper Title */}
          <Image src="titulos.svg" alt='San Valentin News'
            width={1000}
            height={200}
            priority            
          />
          {/* <h2
            className="text-6xl md:text-7xl font-black text-red-600 mb-2 leading-tight"
            style={{ fontFamily: "'UnifrakturCook', serif" }}
          >
            San Valentin News
          </h2> */}

           {/* Línea decorativa superior con rombos y corazón */}
            <div className="flex items-center w-full mb-1">
              <div className="h-[1px] bg-black flex-grow"></div>
              
              <div className="h-[1px] bg-black flex-grow"></div>
            </div>

            <div className="flex items-center w-full mb-1">
              <div className="h-[5px] bg-black flex-grow"></div>
              
              <div className="h-[5px] bg-black flex-grow"></div>
            </div>
          
          
        </div>

        {/* Main Content */}
        <div className="p-8 text-center bg-pink-100">
          {/* Double Newspaper Line
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex-1 border-t-2 border-red-300" />
            <div className="flex-1
             border-t-2 border-red-300" />
          </div> */}

          {/* El marco de la foto (Polaroid) */}
  

          {/* Headline */}
          <div className="mb-10">
            <h3
              className="text-3xl md:text-4xl font-bold mb-1 text-gray-800"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              WILL YOU BE MY
            </h3>
            <p
              className="text-7xl md:text-8xl font-bold text-red-500 leading-none py-3 animate-pulse"
              style={{ fontFamily: 'var(--font-allura)', letterSpacing: '2px' }}
            >
              Valentine?
            </p>
          </div>

              {/* collage a puro ui de tailwind */}
        <div className="relative h-[600px] w-full  flex items-center justify-center overflow-visible bg-pink-100">
          
          {/* Foto 1 - Muy a la izquierda */}
          <div className="absolute bg-white p-2 pb-8 shadow-md border border-gray-100 rounded-sm w-[180px] rotate-[-15deg] -translate-x-48 -translate-y-10 z-10">
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <img src="/foto1.jpeg" alt="1" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+1"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Inicios...</p>
          </div>

          {/* Foto 2 - Arriba izquierda */}
          <div className="absolute bg-white p-2 pb-8 shadow-lg border border-gray-100 rounded-sm w-[200px] rotate-[-5deg] -translate-x-28 -translate-y-32 z-30">
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <img src="/foto2.jpeg" alt="2" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+2"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Risas eternas</p>
          </div>

          {/* Foto 3 - Central (La más grande) */}
          <div className="absolute bg-white p-3 pb-10 shadow-2xl border border-gray-200 rounded-sm w-[240px] rotate-[2deg] z-50">
            <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
              <img src="/foto10.jpeg" alt="3" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Principal"} />
            </div>
            <p className="mt-3 text-sm font-bold text-center italic" style={{ fontFamily: 'var(--font-allura)' }}>Nuestra favorita</p>
          </div>

          {/* Foto 4 - Abajo derecha */}
          <div className="absolute bg-white p-2 pb-8 shadow-lg border border-gray-100 rounded-sm w-[200px] rotate-[8deg] translate-x-24 translate-y-20 z-40">
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <img src="/foto4.jpeg" alt="4" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+4"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Aventuras</p>
          </div>

          {/* Foto 5 - Muy a la derecha */}
          <div className="absolute bg-white p-2 pb-8 shadow-md border border-gray-100 rounded-sm w-[180px] rotate-[15deg] translate-x-44 -translate-y-5 z-20">
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <img src="/foto5.jpeg" alt="5" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+5"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Por siempre</p>
          </div>
          {/* Foto 6 - Abajo Izquierda profunda */}
          <div className="absolute bg-white p-2 pb-8 shadow-md border border-gray-100 rounded-sm w-[170px] rotate-[-20deg] -translate-x-60 translate-y-32 z-10">
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <img src="/foto6.jpeg" alt="6" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+6"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Momentos...</p>
          </div>

          {/* Foto 7 - Arriba Derecha pegada al borde */}
          <div className="absolute bg-white p-2 pb-8 shadow-lg border border-gray-100 rounded-sm w-[190px] rotate-[10deg] translate-x-64 -translate-y-40 z-20">
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <img src="/foto7.jpeg" alt="7" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+7"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Tú y yo</p>
          </div>

          {/* Foto 8 - Superpuesta un poco en el centro abajo */}
          <div className="absolute bg-white p-2 pb-8 shadow-xl border border-gray-100 rounded-sm w-[160px] rotate-[-5deg] translate-x-0 translate-y-52 z-30">
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <img src="/foto8.jpeg" alt="8" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+8"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">¡Sorpresa!</p>
          </div>

          {/* Foto 9 - Nueva Posición: Extremo Superior Izquierdo */}
          <div className="absolute bg-white p-2 pb-8 shadow-md border border-gray-100 rounded-sm w-[160px] rotate-[-12deg] -translate-x-64 -translate-y-52 z-10">
            <div className="relative w-full h-32 bg-gray-100 overflow-hidden">
              <img src="/foto9.jpeg" alt="9" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+9"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Un día especial</p>
          </div>

          {/* Foto 10 - Nueva Posición: Extremo Inferior Derecho */}
          <div className="absolute bg-white p-2 pb-8 shadow-lg border border-gray-100 rounded-sm w-[170px] rotate-[15deg] translate-x-60 translate-y-48 z-10">
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <img src="/foto3.jpeg" alt="10" className="w-full h-full object-cover grayscale" onError={(e) => e.currentTarget.src="https://via.placeholder.com/300?text=Foto+10"} />
            </div>
            <p className="mt-2 text-[10px] italic text-center font-serif">Nuestros viajes</p>
          </div>

        

            

        </div>

          {/* Double Newspaper Line */}
          <div className="flex items-center justify-center gap-2 my-8">
            <div className="flex items-center w-full mb-1">
              <div className="h-[1px] bg-black flex-grow"></div>
              
              <div className="h-[1px] bg-black flex-grow"></div>
            </div>
          </div>

         {/* Sección de Texto Centrada */}
          <div className="flex flex-col items-center justify-center my-12 px-4">
            <div className="max-w-md w-full text-center">
              <p
                className="text-lg md:text-xl leading-relaxed text-gray-700 italic"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Después de una exhaustiva búsqueda entre millones de personas, He encontrado a la
                persona perfecta para celebrar el 14 de febrero:
              </p>
              
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-red-500 mt-6 drop-shadow-sm"
                style={{ fontFamily: 'var(--font-allura)' }}
              >
                ¡TÚ!
              </motion.p>
            </div>
          </div>

          {/* Double Newspaper Line */}
          <div className="flex items-center justify-center gap-2 my-8">
            <div className="flex-1 border-t-2 border-red-300" />
            <div className="flex-1 border-t-2 border-red-300" />
          </div>

          {/* Story Text */}
          <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-8 italic">
            En este día especial dedicado al amor, celebramos a todas las personas que hacen que nuestras vidas sean más
            hermosas. Tu presencia es un regalo que transformó mi mundo Chicle.
          </p>
          

          

          {/* Double Newspaper Line */}
          <div className="flex items-center justify-center gap-2 my-8">
            <div className="flex-1 border-t-2 border-red-300" />
            <div className="flex-1 border-t-2 border-red-300" />
          </div>

          {/* Call to Action Buttons */}
          
        </div>
          
          {/* SECCIÓN DE BOTONES Y REACCIÓN */}
          <div className="flex flex-col items-center gap-6  pb-10 bg-pink-100">
            
            {/* Imagen de Reacción Dinámica */}
            <motion.div
              key={noCount}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-48 h-48  border-4 border-white shadow-xl overflow-hidden bg-white mb-4"
            >
              <img 
                src={
                  noCount === 0 
                    ? "/foto1.jpeg" 
                    : reactionImages[(noCount - 1) % reactionImages.length] 
                } 
                alt="Reacción" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400?text=❤️" }}
              />
            </motion.div>

            {/* Contenedor de Botones */}
            <div className="flex justify-center gap-6 items-center min-h-[80px]">
              <button
                onClick={() => setYesClicked(true)}
                className={`px-10 py-3 rounded-full font-bold text-xl transition-all duration-300 shadow-lg ${
                  yesClicked 
                    ? 'bg-green-500 scale-110 text-white' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {yesClicked ? '¡SÍ! ❤️' : 'Sí'}
              </button>


              
              

               {/* SECCIÓN DE CUPONES - Aparece al aceptar */}
                <AnimatePresence>
                  {yesClicked && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-10 flex flex-col gap-6 items-center"
                    >
                      <p className="text-red-500 font-bold italic mb-2">¡Has desbloqueado tus regalos!</p>

                      {/* CUPÓN 1: LA CENA */}
                      <motion.div
                        initial={{ x: -100, opacity: 0, rotate: -5 }}
                        animate={{ x: 0, opacity: 1, rotate: -2 }}
                        transition={{ delay: 0.3 }}
                        className="relative w-80 h-32 bg-[#fbcfe8] border-2 border-[#be185d] flex items-center shadow-xl overflow-hidden"
                      >
                        <div className="absolute -left-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#be185d]"></div>
                        <div className="absolute -right-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#be185d]"></div>
                        <div className="w-full text-center px-8 text-[#be185d]">
                          <h4 className="text-xs font-bold uppercase tracking-widest">Vale por una</h4>
                          <h2 className="text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>CENA</h2>
                          <p className="text-[10px] italic">Donde tú quieras, yo invito ❤️</p>
                        </div>
                        <div className="absolute right-2 h-full flex items-center">
                            <span className="text-[#be185d] text-[8px] rotate-90 font-bold opacity-50">CUPÓN 001</span>
                        </div>
                      </motion.div>

                      {/* CUPÓN 2: LOS KARTS */}
                      <motion.div
                        initial={{ x: 100, opacity: 0, rotate: 5 }}
                        animate={{ x: 0, opacity: 1, rotate: 2 }}
                        transition={{ delay: 0.6 }}
                        className="relative w-80 h-32 bg-[#f9a8d4] border-2 border-[#9d174d] flex items-center shadow-xl overflow-hidden"
                      >
                        <div className="absolute -left-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#9d174d]"></div>
                        <div className="absolute -right-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#9d174d]"></div>
                        <div className="w-full text-center px-8 text-[#9d174d]">
                          <h4 className="text-xs font-bold uppercase tracking-widest">Vale por una salida a</h4>
                          <h2 className="text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>KARTS</h2>
                          <p className="text-[10px] italic">¡Prepárate para perder! 🏎️💨</p>
                        </div>
                        <div className="absolute right-2 h-full flex items-center">
                            <span className="text-[#9d174d] text-[8px] rotate-90 font-bold opacity-50">CUPÓN 002</span>
                        </div>
                      </motion.div>

                      {/* CUPÓN 3: BESOS */}
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="relative w-80 h-32 bg-[#f472b6] border-2 border-[#831843] flex items-center shadow-xl overflow-hidden"
                      >
                        <div className="absolute -left-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#831843]"></div>
                        <div className="absolute -right-4 w-8 h-8 bg-pink-100 rounded-full border-2 border-[#831843]"></div>
                        <div className="w-full text-center px-8 text-white">
                          <h4 className="text-xs font-bold uppercase tracking-widest">Vale por</h4>
                          <h2 className="text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-playfair)' }}>BESOS</h2>
                          <p className="text-[10px] italic">Ilimitados y acumulables 💋</p>
                        </div>
                        <div className="absolute right-2 h-full flex items-center">
                            <span className="text-white text-[8px] rotate-90 font-bold opacity-50">CUPÓN 003</span>
                        </div>
                      </motion.div>

                      {/* Frase Final de Cita */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="mt-12 mb-6 p-4 border-2 border-dashed border-red-400 rounded-lg bg-red-50"
                        >
                          <motion.p
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-2xl md:text-3xl font-bold text-red-600 text-center italic"
                            style={{ fontFamily: 'var(--font-allura)' }}
                          >
                            Nos vemos este 14 de febrero ❤️
                          </motion.p>
                          
                          {/* Detalles extra debajo de la frase */}
                          <p className="text-[10px] text-red-400 text-center uppercase tracking-[0.2em] mt-2 font-bold">
                            Reserva confirmada • No se aceptan cancelaciones
                          </p>
                        </motion.div>
                    </motion.div>
                    
                  )}

                </AnimatePresence>

              {!yesClicked && (
                
                <motion.button
                  // Movimos la lógica del contador y el movimiento al onClick
                  onClick={() => {
                    setNoCount(prev => prev + 1);
                    setNoHovered(true);
                    // Opcional: un pequeño timeout para que el estado de "movimiento" se resetee
                    setTimeout(() => setNoHovered(false), 500);
                  }}
                  animate={noHovered ? { 
                    x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200], 
                    y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100] 
                  } : { x: 0, y: 0 }}
                  className="px-8 py-3 rounded-full font-bold text-lg bg-white text-gray-400 border border-gray-200 shadow-sm"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {noCount > 0 ? '¿Por qué le das no? 🥺' : 'No'}
                </motion.button>
              )}
            </div>

            {/* Mensaje que aparece al aceptar */}
            <AnimatePresence>
              {yesClicked && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl text-red-600 font-bold italic mt-4"
                  style={{ fontFamily: 'var(--font-allura)' }}
                >
                  ¡Sabía que dirías que sí! ❤️
                </motion.p>
              )}
            </AnimatePresence>
          </div>


        {/* Footer */}
        <div className="bg-gradient-to-r from-pink-100 to-red-100 px-8 py-4 text-center border-t-2 border-pink-200">
          <p className="text-sm text-red-500 tracking-widest">
            14 de Febrero • Chicle News • 2026
          </p>
        </div>
      </div>

        {/* Decorative Hearts */}
        <div className="flex justify-center gap-8 mt-8">
          <Heart className="w-8 h-8 text-red-400 fill-red-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-8 h-8 text-red-400 fill-red-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </motion.main>



      
  )
}
