import { Calendar, Camera, Heart, Music, Stars } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';

import corazon from './assets/corazon.jpeg';
import whatsapp from './assets/WhatsApp-Image.jpeg';
import enamorados from './assets/enamorados.jpeg';
import graduacion from './assets/graduacion.jpeg';
import imagen1 from './assets/imagen1.jpeg'
import imagen2 from './assets/imagen2.jpeg'
import imagen3 from './assets/imagen3.jpeg'
import imagenFea4 from './assets/imagenFea4.jpeg'
import imagenFea5 from './assets/imagenFea5.jpeg'
import imagenFea6 from './assets/imagenFea6.jpeg'
import imagenAsquerosa7 from './assets/imagenAsquerosa7.jpeg'
import simplesCorazones from './assets/simples-corazones.mp3'


// ==========================================
// 💌 ZONA DE EDICIÓN (CAMBIA ESTO AQUÍ) 💌
// ==========================================

const CONFIG = {
  nombrePareja: "Mi Amor, luis.",
  tituloPrincipal: "Feliz Aniversario",
  fechaAniversario: "2024-12-25",
  cancionEspecial: "Fonseca - Simples Corazones",
  carta: `Hoy es nuestro aniversario, se escucha muy lindo. Eres la primera persona con la que más he compartido que no lleve mi sangre y es que, aunque a veces difiero, no hay nadie que me conozca más que mi familia pero ahora estás tú, y me atrevo a decir que conoces una parte de mi que ellos no, y es que te he entregado mi mejor versión, sé que no permito que me conozcan cuando estoy mal, o de forma poética se puede decir que no dejo conocer mi corazón, no es por confianza y menos por seguridad en ti, en ese sentido soy afortunada.

Y es aquí donde confesaré qué; lo nuestro no empezó conmigo siendo plenamente consciente de mis sentimientos, de hecho diría que solo me gustabas, no había amor, solo me gustaba como me hacías sentir y muy dentro de mi sabía que no quería dejarte pasar como cualquier otra cosa en mi vida y es por eso que, en un atisbo de valentía combinado con mi madre preguntándome a dónde íbamos, decidí hacerte la pregunta, el resto es historia pero fue así como comenzó, yo permitiendo que algo nuevo sucediera y por supuesto brindándote a ti el privilegio de ayudarme a conocer otro yo. 

Luego de tu pedida y año nuevo, llegó el 25 de enero, un día importante no sólo por nuestro primer mes sino porque fue el día en que me dí cuenta que no sabía qué me sucedía, me sentí abrumada, triste, feliz, nostálgica y no sé qué más no sabía que sentía solo estaba sintiendo y lloré, lloré mucho y por primera vez lo hice frente a mi madre y no porque quería sino porque me desbordaba, los girasoles de aquel entonces fueron testigos de como yo estaba cambiando, porque algo nuevo estaba conmigo y no eran las flores o el frío que hacía esa noche, eran mis sentimientos floreciendo de una forma que no lo habia hecho antes, me dijeron que eso era señal de que me estaba enamorando, pero qué es amar? No lo sé. 

Pero hay algo que si sé, siempre en qué pienso en que puedas dejarme e irte lejos siento que me ahogo, siento que el aire no llega a mis pulmones, mi garganta se cierra y sé que voy a llorar, no quiero volver a estar sola, no quiero estar sin ti y son cosas que no pronuncio porque no quiero ser egoísta y sé que si alguna vez me quieres dejar atrás, lo aceptaré y quizás parezca que no luché porque te quedes pero no es así, es simplemente que no puedo ser la causa de que no seas feliz, no puedo ser quien te obstaculice y si nuestro amor no es para nosotros, está bien, sé que dices muchas cosas de que seré la última pero sé que sin importar qué serás feliz sea o no sea conmigo, ese es mi mayor deseo para ti, quiero que tengas una vida larga y feliz y que ames, ama con locura amistades o lo que sea, abraza la vida con fervor. 

Deseo que te levantes, mires el cielo, escuches alguna canción y logres ver luz, así como alguna vez me pasó a mi cuando más mal me sentía, quiero que sonrías, quiero que alcances todas las metas que siempre me cuentas porque eres alguien así, alguien que quiere crecer y superarse, admiro y envidio eso de ti porque te proyectas como alguien que sabe qué quiere y a dónde quiere llegar, tienes un camino definido y yo solo me dejó llevar, es por eso que muchas veces no nos entendemos pero está bien.

Está bien porque si esto, tu y yo, es para nosotros, lo seremos, y sobre todo si ambos queremos ser nosotros, lo lograremos. Es entonces cuando vuelvo a preguntarme ¿Qué se siente al estar enamorada? Y vuelvo a decir "no lo sé" sé que me gusta cada vez que cruzas el umbral de mi puerta, verte me hace sonreír, el olor de tu aliento sube mi temperatura, eres con quien más sé hablar, quiero reír al rededor tuyo y quiero que estés en todos lados en los que estoy, me siento segura contigo, siento que puedo confiar en tu palabra y accionar, tú cercanía es mi lugar de paz, me gusta abrazarte y sentirte cerca a mi piel e incluso eso en ocasiones no es suficiente, sigues poniéndome nerviosa y sabes sonrojarme, soy inexperta pero estoy dispuesta a aprender todo de ti, amo que me beses y jales hacia tí, amo que agarres mi mano y la beses, amo que beses mi mejilla y mi frente, amo que seas caballeroso, atento y detallista, en fin solo sé que quiero estar contigo, te escojo a ti y solo a ti. Y si me lo vuelves a preguntar no, aún no sé por qué te amo, solo lo hago y lo hago profundamente.

Y así con la misma canción que todo empezó, quiero que hoy también nos acompañe, es por eso que es la que acompaña está carta, Te amo y te agradezco infinitamente todo lo que haces por mi, no merezco todo tu amor pero estoy feliz de tenerlo. Feliz aniversario mi amor, por este y muchos años más.`,
  fotos: [
    corazon,
    whatsapp,
    enamorados,
    graduacion,
    imagen1,
    imagen2,
    imagen3,
    imagenFea4,
    imagenFea5,
    imagenFea6,
    imagenAsquerosa7
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
      <p className="text-rose-200 text-sm uppercase tracking-widest mb-2">💑</p>
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
          className={`col-span-2 md:col-span-1 rounded-2xl overflow-hidden h-64 shadow-md ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'
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
    const start = dayjs(fecha);
    const now = dayjs();
    const days = now.diff(start, 'days')
    const hours = (now.diff(start, 'hours') % 24)

    setDays(days);
    setHours(hours);
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
      <BackgroundAudio audioRef={audioRef} src={simplesCorazones} />

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