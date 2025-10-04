import { Link } from 'react-router-dom';
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  TrophyIcon,
  GlobeAltIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Kunden Först',
      description: 'Din tillfredsställelse är vår högsta prioritet. Vi går utöver för att överträffa dina förväntningar med varje tjänst.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Förtroende & Pålitlighet',
      description: 'All vår personal är bakgrundskontrollerad, försäkrad och bonded. Ditt hem och företag är säkert hos oss.'
    },
    {
      icon: SparklesIcon,
      title: 'Excellens',
      description: 'Vi upprätthåller högsta standard i allt vi gör, från våra städtekniker till kundservice.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Miljövänlig',
      description: 'Vi använder miljöansvariga städprodukter som är säkra för din familj, husdjur och planeten.'
    }
  ];

  const teamMembers = [
    {
      name: 'Anna Lindström',
      role: 'Grundare & VD',
      image: '👩‍💼',
      bio: 'Med över 10 års erfarenhet inom städbranschen grundade Anna ML expresstäd AB med en vision att erbjuda exceptionella städtjänster som upptagna familjer och företag kan lita på.',
      experience: '10+ år'
    },
    {
      name: 'Erik Johansson',
      role: 'Operationschef',
      image: '👨‍💻',
      bio: 'Mike ensures our cleaning teams are properly trained and equipped to deliver consistent, high-quality results. He oversees quality control and customer satisfaction.',
      experience: '7+ years'
    },
    {
      name: 'Emily Chen',
      role: 'Customer Success Manager',
      image: '👩‍💼',
      bio: 'Emily is dedicated to ensuring every customer has an exceptional experience. She handles scheduling, special requests, and maintains our high service standards.',
      experience: '5+ years'
    },
    {
      name: 'David Wilson',
      role: 'Head of Training',
      image: '👨‍🏫',
      bio: 'David develops our training programs and ensures all team members are equipped with the latest cleaning techniques and safety protocols.',
      experience: '8+ years'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '5,000+', label: 'Cleanings Completed' },
    { number: '5', label: 'Years in Business' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const achievements = [
    {
      icon: TrophyIcon,
      title: 'Best Cleaning Service 2024',
      description: 'Local Business Excellence Award'
    },
    {
      icon: StarIcon,
      title: '4.9/5 Customer Rating',
      description: 'Based on 200+ verified reviews'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Fully Licensed & Insured',
      description: 'Complete protection for our clients'
    },
    {
      icon: UserGroupIcon,
      title: 'Trained Professionals',
      description: 'All staff certified and background-checked'
    }
  ];

  const whyChooseUs = [
    'Erfarna och utbildade städproffs',
    'Miljövänliga och säkra städprodukter',
    'Flexibel schemaläggning som passar dina behov',
    'Tillfredsställelsegaranti på alla tjänster',
    'Konkurrenskraftiga priser utan dolda avgifter',
    'Fullt försäkrat och certifierat team',
    'Samma team för konsistens och förtroende',
    'Akut- och sista minuten-städning tillgänglig'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Luxury Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 30%, #1E3A8A 70%, #0F172A 100%)'
      }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-medium mb-8 border border-yellow-400/30">
              <SparklesIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400">Om ML expresstäd AB</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-8">
              <span className="text-white block mb-2">Pålitliga Städproffs</span>
              <span className="block relative" style={{
                background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #FBBF24 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Med Passion för Renhet
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-yellow-500/20 blur-lg -z-10"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Vi tror att renhet är mer än bara ordning i hemmet eller på kontoret. Det är ett friare andetag, 
              klarare tankar och en känsla av lugn. När omgivningen är välskött och fräsch finns det mer plats 
              i livet för glädje, inspiration och nya möjligheter.
            </p>
          </div>
        </div>

        {/* Decorative Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-yellow-400"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-blue-400"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-yellow-300"></path>
          </svg>
          
          {/* Floating Confetti Elements */}
          <div className="absolute bottom-4 left-0 w-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            <div className="absolute bottom-2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
            <div className="absolute bottom-1 left-1/2 w-4 h-1 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.8s'}}></div>
            <div className="absolute bottom-3 left-2/3 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
            <div className="absolute bottom-0 left-3/4 w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '2.7s'}}></div>
            <div className="absolute bottom-2 right-1/4 w-2 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.1s'}}></div>
            <div className="absolute bottom-1 right-1/3 w-3 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.2s', animationDuration: '2.9s'}}></div>
            <div className="absolute bottom-4 right-1/2 w-1 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.3s', animationDuration: '2.6s'}}></div>
          </div>
        </div>
      </section>

      {/* Vår Historia */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-8 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text">
                Vår Historia
              </h2>
              <div className="flex-shrink-0 relative top-2 left-4">
                <div className="relative">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="ML expresstäd AB" 
                    className="h-28 md:h-32 w-auto transition-all duration-300 hover:scale-105 shadow-2xl rounded-lg"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-blue-400/30 rounded-lg blur-lg opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-card p-10">
              <div className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
                <p>
                  Vårt uppdrag är enkelt: att städa snabbt, noggrant och utan onödigt besvär för dig. 
                  Vi värdesätter förtroende och gör allt för att varje kund ska vara nöjd. 
                  <span className="font-semibold gold-accent">Renlighet är vårt arbete, din komfort är vårt mål.</span>
                </p>
                <p>
                  Vår historia började med en liten dröm: att hjälpa människor leva i harmoni. 
                  Steg för steg växte denna dröm till vår livsuppgift. Vi insåg att varje städning 
                  inte bara handlar om borttagna fläckar eller rena golv.
                </p>
                <p>
                  Det är leendet hos en mamma som äntligen får tid för sina barn. Det är lättnaden 
                  hos en person som kommer hem efter jobbet till en ren och trivsam bostad. Det är 
                  kontoret där medarbetarna arbetar med energi eftersom ordningen inspirerar.
                </p>
              </div>
            </div>
            
            <div className="luxury-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-6xl mb-8 text-center">
                  <span className="luxury-text-gradient">✨</span>
                </div>
                <h3 className="text-3xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6 text-center">
                  Vårt Uppdrag
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
                  <p>
                    Vi har byggt ett team som tror att renhet inspirerar. Varje kund är för oss inte 
                    bara ett uppdrag, utan en människa vi ger komfort, lugn och mer tid för livet.
                  </p>
                  <p className="text-center font-semibold text-xl luxury-text-gradient">
                    "För ett rent utrymme är grunden för stora drömmar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Våra Värderingar */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6">
              Våra Kärnvärden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Dessa värderingar styr allt vi gör och formar hur vi betjänar våra kunder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="luxury-card text-center p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-10 w-10 text-blue-900" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför Välja Oss */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Varför Välja ML expresstäd AB?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Vi förstår att bjuda in någon i ditt hem eller företag är ett stort beslut. 
                Här är varför hundratals kunder litar på oss med sina städbehov:
              </p>
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <div className="text-center">
                <HandRaisedIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Tillfredsställelsegaranti</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi står bakom vårt arbete. Om du inte är helt nöjd med vår service 
                  återkommer vi inom 24 timmar för att göra det rätt utan extra kostnad.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">24-Timmar</div>
                  <div className="text-gray-600">Servicegaranti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Redo att Uppleva Skillnaden?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Gå med i vår familj av nöjda kunder och upptäck varför ML expresstäd AB är det 
            pålitliga valet för professionella städtjänster. Få din gratis offert idag!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Få Gratis Offert
            </Link>
            <a
              href="sms:+46765523187"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              SMS: +46 76 552 31 87
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;