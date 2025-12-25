import { Calendar, Camera, Heart, Music, Stars } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// ==========================================
// 💌 ZONA DE EDICIÓN (CAMBIA ESTO AQUÍ) 💌
// ==========================================

const CONFIG = {
  nombrePareja: "Mi Amor, luis.",
  tituloPrincipal: "Feliz Aniversario",
  fechaAniversario: "2024-12-25",
  cancionEspecial: "Fonseca - Simples Corazones",
  audioUrl: "src/assets/Fonseca - Simples Corazones _ Colombia, Land of  Sabrosura.mp3",
  carta: `Desde el momento en que entraste en mi vida, todo cambió para mejor.
No necesito un día especial para decirte lo mucho que te amo, pero hoy,
en nuestro aniversario, quiero recordarte que eres mi persona favorita en el mundo.

Gracias por cada risa, por cada abrazo y por ser mi refugio.
Espero que este pequeño detalle te saque una sonrisa.

Te amo hoy y siempre.`,
  fotos: [
    "src/assets/corazon.jpeg",
    "src/assets/WhatsApp Image 2025-12-24 at 6.50.10 PM.jpeg",
    "src/assets/enamorados.jpeg"
  ],
  firma: "Con todo mi amor, Yuli💗"
};

// ==========================================
// 🎵 Componente de Audio
// ==========================================

const BackgroundAudio = ({ audioRef, src }) => (
  <audio ref={audioRef} src={src} loop preload="auto" />
);

// ==========================================
// 💌 Modal de Bienvenida
// ==========================================

const WelcomeModal = ({ nombrePareja, onOpen }) => (
  <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4 relative overflow-hidden">
    <Heart className="absolute top-10 left-10 text-rose-300 animate-bounce w-6 h-6" />
    <Heart className="absolute bottom-20 right-10 text-rose-300 animate-bounce w-8 h-8" />
    <Stars className="absolute top-1/2 left-4 text-rose-200 animate-pulse w-5 h-5" />

    <div
      onClick={onOpen}
      className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center transform transition hover:scale-105 cursor-pointer border-2 border-rose-100"
    >
      <Heart className="text-rose-500 w-24 h-24 mx-auto mb-6 fill-rose-500 animate-pulse" />
      <h1 className="text-2xl font-serif text-slate-800 mb-2">Para {nombrePareja}</h1>
      <p className="text-rose-400 text-sm mb-6 uppercase tracking-widest">
        Tienes una carta nueva
      </p>
      <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition shadow-lg">
        Abrir Carta
      </button>
    </div>
  </div>
);

// ==========================================
// 🎨 Header con Imagen
// ==========================================

const Header = ({ foto, titulo }) => (
  <header className="relative w-full h-96 md:h-screen md:max-h-[600px]">
    <div className="absolute inset-0 bg-black/20 z-10" />
    <img src={foto} alt="Principal" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 bg-gradient-to-t from-stone-900/80 to-transparent text-white">
      <p className="text-rose-200 text-sm uppercase tracking-widest mb-2">Aniversario</p>
      <h1 className="text-4xl md:text-6xl font-serif font-bold">{titulo}</h1>
    </div>
  </header>
);

// ==========================================
// 🎵 Card de Canción
// ==========================================

const SongCard = ({ cancion }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 flex items-center justify-between border border-stone-100">
    <div className="flex items-center gap-4">
      <div className="bg-rose-100 p-3 rounded-full text-rose-500">
        <Music size={24} />
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase font-bold">Nuestra Canción</p>
        <p className="text-slate-800 font-medium">{cancion}</p>
      </div>
    </div>
    <div className="flex gap-1">
      <span className="w-1 h-4 bg-rose-400 rounded-full animate-bounce" />
      <span className="w-1 h-6 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <span className="w-1 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>
  </div>
);

// ==========================================
// 📝 Carta de Amor
// ==========================================

const LoveLetter = ({ carta, firma }) => (
  <article className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12 mb-12 relative">
    <Stars className="absolute top-4 right-4 text-rose-100 w-12 h-12" />
    <p className="text-lg leading-relaxed text-slate-600 whitespace-pre-line first-letter:text-5xl first-letter:text-rose-500 first-letter:mr-3 first-letter:float-left">
      {carta}
    </p>
    <p className="mt-12 text-right text-2xl text-rose-500 font-serif italic">{firma}</p>
  </article>
);

// ==========================================
// 📸 Galería de Fotos
// ==========================================

const PhotoGallery = ({ fotos }) => (
  <div className="mb-16">
    <div className="flex items-center gap-2 mb-6 text-rose-400">
      <Camera size={20} />
      <h2 className="text-sm uppercase tracking-widest font-bold">Nuestros Momentos</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {fotos.map((foto, index) => (
        <div
          key={index}
          className={`col-span-2 md:col-span-1 rounded-2xl overflow-hidden h-64 shadow-md ${
            index % 2 === 0 ? 'rotate-1' : '-rotate-1'
          } hover:rotate-0 transition-transform`}
        >
          <img
            src={foto}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            alt={`Recuerdo ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// 📅 Contador de Tiempo
// ==========================================

const TimeCounter = ({ fechaAniversario, days, hours }) => (
  <div className="bg-rose-50 rounded-3xl p-8 text-center border-2 border-rose-100 mb-12">
    <Calendar className="mx-auto text-rose-400 mb-4" size={32} />
    <h3 className="text-xl font-serif text-slate-800 mb-2">
      Juntos desde {fechaAniversario}
    </h3>
    <p className="text-rose-500 font-medium">
      Han pasado <span className="text-2xl font-bold text-slate-800">{days}</span> días
      y <span className="text-2xl font-bold text-slate-800">{hours}</span> horas de felicidad.
    </p>
  </div>
);

// ==========================================
// 🎯 Hook Personalizado para Calcular Tiempo
// ==========================================

const useTimeSince = (fecha) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const start = new Date(fecha).getTime();
    const now = Date.now();
    const diff = now - start;

    setDays(Math.floor(diff / 86400000));
    setHours(Math.floor((diff % 86400000) / 3600000));
  }, [fecha]);

  return { days, hours };
};

// ==========================================
// 🎯 Hook Personalizado para Audio
// ==========================================

const useAudioPlayer = () => {
  const audioRef = useRef(null);

  const play = () => {
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 1; // Adelanta 1 segundo
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir audio:', error);
        });
      }
    }, 100);
  };

  return { audioRef, play };
};

// ==========================================
// 🏠 Componente Principal
// ==========================================

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { days, hours } = useTimeSince(CONFIG.fechaAniversario);
  const { audioRef, play } = useAudioPlayer();

  const handleOpenCard = () => {
    setIsOpen(true);
    play();
  };

  if (!isOpen) {
    return <WelcomeModal nombrePareja={CONFIG.nombrePareja} onOpen={handleOpenCard} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <BackgroundAudio audioRef={audioRef} src={CONFIG.audioUrl} />
      
      <Header foto={CONFIG.fotos[0]} titulo={CONFIG.tituloPrincipal} />

      <main className="max-w-3xl mx-auto p-6 md:p-12 -mt-10 relative z-30">
        <SongCard cancion={CONFIG.cancionEspecial} />
        <LoveLetter carta={CONFIG.carta} firma={CONFIG.firma} />
        <PhotoGallery fotos={CONFIG.fotos.slice(1)} />
        <TimeCounter 
          fechaAniversario={CONFIG.fechaAniversario} 
          days={days} 
          hours={hours} 
        />

        <footer className="text-center text-slate-400 text-sm pb-8">
          <p>Hecho con ❤️ para ti.</p>
        </footer>
      </main>
    </div>
  );
}