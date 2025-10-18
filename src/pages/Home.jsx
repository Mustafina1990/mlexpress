import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import LaurelDecoration from '../components/LaurelDecoration';
import FloralSideDecoration from '../components/FloralSideDecoration';

const Home = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Professionell Kvalitet',
      description: 'Våra utbildade proffs levererar exceptionella städresultat varje gång med uppmärksamhet på detaljer.'
    },
    {
      icon: SparklesIcon,
      title: 'Erfaren Personal',
      description: 'Vårt team består av utbildade och erfarna städproffs som vet hur man får varje utrymme att glänsa.'
    },
    {
      icon: ClockIcon,
      title: 'Pålitlig & Punktlig',
      description: 'Vi kommer i tid och slutför vårt arbete effektivt, respekterar din värdefulla tid.'
    }
  ];

  const services = [
    {
      title: 'Hemstädning',
      description: 'Regelbunden hemstädning med alla vardagsliga uppgifter - kök, badrum, dammsugning och våttorkning.',
      price: '350 kr/timme + moms',
      icon: HomeIcon,
      features: ['Veckovis/Varannan vecka', 'Tvättning & strykning', 'Byte av lakan & handdukar']
    },
    {
      title: 'Storstädning',
      description: 'Grundlig storstädning med invändig rengöring av vitvaror, fönsterputsning och avloppsrengöring.',
      price: '350 kr/timme + moms',
      icon: WrenchScrewdriverIcon,
      features: ['Komplett djuprengöring', 'Fönsterputsning ingår', 'Invändig vitvaror']
    },
    {
      title: 'Flyttstädning',
      description: 'Professionell flyttstädning för inflyttning eller utflyttning med garanti för godkännande.',
      price: '400 kr/timme + moms + städprodukter',
      icon: BuildingOfficeIcon,
      features: ['Garderober invändigt', 'Skåp in- & utvändigt', 'Komplett fönsterputsning']
    }
  ];

  const testimonials = [
    {
      name: 'Anna Andersson',
      location: 'Östermalm',
      rating: 5,
      text: 'ML Expresstäd AB förvandlade mitt hem! Deras team är professionellt, grundligt och alltid i tid. Jag rekommenderar starkt deras tjänster.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      location: 'Södermalm',
      rating: 5,
      text: 'Enastående kommersiell städservice. Vårt kontor har aldrig sett bättre ut. Teamet är pålitligt och uppmärksammar varje detalj.',
      image: '👨‍💻'
    },
    {
      name: 'Emily Johansson',
      location: 'Vasastan',
      rating: 5,
      text: 'Jag älskar att komma hem till ett fläckfritt hus! ML Expresstäd AB har gjort mitt liv så mycket enklare. Värt varenda krona!',
      image: '👩‍🏫'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Luxury Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
               style={{
                 background: `linear-gradient(135deg, 
                   rgba(254, 252, 232, 0.95) 0%, 
                   rgba(254, 243, 199, 0.9) 25%,
                   rgba(255, 255, 255, 0.95) 50%,
                   rgba(254, 243, 199, 0.9) 75%,
                   rgba(254, 252, 232, 0.95) 100%)`
               }}>
        {/* Side Floral Decorations */}
        <FloralSideDecoration />
        
        {/* Luxury Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-semibold mb-8 border-2 border-yellow-200">
              <div className="w-3 h-3 gold-gradient rounded-full animate-pulse"></div>
              <span className="luxury-text-gradient">Luxury Cleaning Services Since 2025</span>
            </div>
            
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-8 font-['Playfair_Display']">
              <span className="text-gray-800 block mb-2">Ditt Utrymme Förtjänar</span>
              <span className="luxury-text-gradient block relative">
                Exceptionell Excellens
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-yellow-500/20 blur-lg -z-10"></div>
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Förvandla din miljö med våra <span className="font-bold gold-accent">premium städtjänster</span>. 
              Vi levererar ojämförliga resultat med lyxig omsorg, ger dig ultimat sinnesro.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/contact#contact-form"
                className="luxury-button text-lg px-10 py-5 font-bold tracking-wide"
              >
                ✨ Få Premium Offert
              </Link>
              <a
                href="sms:+46765523187"
                className="flex items-center space-x-3 luxury-card px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 border border-yellow-200"
              >
                <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white">
                  �
                </div>
                <span className="text-gray-700">SMS: +46 76 552 31 87</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner - Bring a Friend */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-card bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-4 border-yellow-400 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-full mb-6">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-['Playfair_Display']">
                <span className="luxury-text-gradient">🎉 Spara 15% Rabatt! 🎉</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-800 font-bold mb-4">
                Ta med en vän och få 15% rabatt på en städning
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Dela glädjen med rena utrymmen! När du rekommenderar en vän får ni båda njuta av vår premium service med 15% rabatt på er nästa städning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="luxury-button text-lg px-8 py-4 font-bold"
                >
                  📞 Boka Nu med Rabatt
                </Link>
                <a
                  href="sms:+46765523187?body=Hej! Jag vill ta del av er vän-rabatt på 15%"
                  className="px-8 py-4 border-2 border-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-50 transition-all duration-300"
                >
                  💬 SMS: +46 76 552 31 87
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6 italic">
                * Erbjudandet gäller för både befintliga och nya kunder. Kontakta oss för mer information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display']">
              <span className="text-gray-800">Varför Välja </span>
              <span className="luxury-text-gradient">ML Expresstäd AB?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Upplev toppen av <span className="gold-accent font-bold">lyxiga städtjänster</span> 
              som förvandlar din miljö till en fristad av excellens
            </p>
          </div>
          
          <div className="grid-responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="service-card group text-center luxury-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-yellow-100">
                <div className="relative mb-6">
                  <div className="royal-gradient w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 elegant-shadow">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 gold-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 font-['Playfair_Display']">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                <div className="mt-4 h-1 w-0 gold-gradient mx-auto rounded-full group-hover:w-12 transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Decorative Laurel */}
          <LaurelDecoration />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våra Populära Tjänster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professionella städlösningar anpassade för att möta dina specifika behov och schema
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.title === 'Flyttstädning' && (
                  <p className="text-xs text-yellow-700 bg-yellow-50 p-2 rounded mb-4 border border-yellow-200">
                    💡 Städprodukter faktureras separat
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link
                    to="/contact#contact-form"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Boka Nu
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Se Alla Tjänster
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <SparklesIcon className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Våra Serviceområden</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display']">
              <span className="text-gray-800">Vi Täcker </span>
              <span className="luxury-text-gradient">Stockholm & Närområden</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professionella städtjänster i <span className="font-bold text-blue-600">Stockholm</span> och omkringliggande kommuner. 
              Vi levererar samma höga kvalitet överallt vi verkar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {[
              'Stockholm City', 'Östermalm', 'Södermalm', 'Vasastan', 'Norrmalm',
              'Gamla Stan', 'Kungsholmen', 'Djurgården', 'Bromma', 'Solna',
              'Sundbyberg', 'Nacka', 'Lidingö', 'Danderyd', 'Täby',
              'Sollentuna', 'Upplands Väsby', 'Järfälla', 'Huddinge', 'Tyresö'
            ].map((area, index) => (
              <div key={index} className="group luxury-card p-4 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  {area}
                </div>
                <div className="mt-2 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full group-hover:w-8 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="luxury-card p-8 max-w-2xl mx-auto border border-blue-200">
              <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ser du inte ditt område?
              </h3>
              <p className="text-gray-600 mb-6">
                Vi utökar ständigt våra serviceområden. Kontakta oss så berättar vi om vi kan hjälpa dig!
              </p>
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center luxury-button text-base px-6 py-3 font-semibold"
              >
                Kontakta Oss
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Redo att Uppleva ML Expresstäd AB Skillnaden?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Gå med hundratals nöjda kunder som litar på oss för sina städbehov. 
            Fyll i vårt formulär idag för din kostnadsfria offert och se varför vi är förstahandsvalet för professionella städtjänster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#contact-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Fyll i Formulär för Offert
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

export default Home;