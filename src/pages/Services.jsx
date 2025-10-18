import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import LaurelDecoration from '../components/LaurelDecoration';
import GoldenDivider from '../components/GoldenDivider';
import FloralSideDecoration from '../components/FloralSideDecoration';

const Services = () => {
  const mainServices = [
    {
      title: 'Hemstädning',
      description: 'Regelbunden hemstädning för att hålla ditt hem fräscht och rent. Vi tar hand om alla vardagsliga städuppgifter så att du kan fokusera på det som är viktigt för dig.',
      icon: HomeIcon,
      price: '350 kr/timme + moms',
      duration: '1-3 timmar',
      frequency: 'Veckovis, Varannan vecka, Månadsvis',
      features: [
        'Entré och alla rum - komplett rengöring',
        'Kök - vitvaror, spis, mikro, kakel och bänkar',
        'Badrum, toalett och tvättstuga - fullständig sanering',
        'Dammsugning och våtmoppning av alla golv',
        'Dammtorkning av lampor, tavlor och hyllor',
        'Rengöring av handfat, kranar och polering',
        'Tömning av sopkorgar',
        'Extra tjänster: tvättning, strykning, byten av lakan'
      ],
      detailedFeatures: {
        'Entré och alla rum': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Tavlor – dammtorkning',
          'Speglar – putsning',
          'Hyllor – dammtorkning',
          'Golvlister – avtorkning',
          'Mattor – dammsugning',
          'Golv – dammsugning och våttorkning'
        ],
        'Kök': [
          'Vitvaror – avtorkning av utsidor',
          'Fläkt – avtorkning av utsidor',
          'Spis – avtorkning av utsidor',
          'Mikro – avtorkning in och utvändig',
          'Skåpluckor – avtorkning',
          'Kakel – avtorkning',
          'Disk och blandare – rengöring och polering',
          'Köksbänk – avtorkning',
          'Skåp för sopor – rengöring invändig'
        ],
        'Badrum och tvättstuga': [
          'Badkar/dusch – rengöring',
          'Kakel – avtorkning',
          'Toalett – rengöring',
          'Skåp – avtorkning',
          'Handfat och blandare – rengöring och polering',
          'Vitvaror – avtorkning av utsidor'
        ],
        'Övrigt': [
          'Tömning av sopkorgar',
          'Tvättning',
          'Strykning',
          'Byte av lakan',
          'Byte av handdukar'
        ]
      },
      addOns: [
        { name: 'Fönsterputsning' },
        { name: 'Ugnsrengöring invändigt' },
        { name: 'Kylskåpsrengöring' },
        { name: 'Strykservice' }
      ]
    },
    {
      title: 'Företagsstädning & Trapphusstädning',
      description: 'Professionell kontors- och kommersiell lokalstädning samt trapphusstädning för företag och bostadsrättsföreningar. Vi säkerställer en ren och professionell miljö.',
      icon: BuildingOfficeIcon,
      price: '350 kr/timme + moms',
      duration: '2-4 timmar',
      frequency: 'Dagligen, Veckovis, Anpassat schema',
      features: [
        'Kontorsstädning - entré och alla rum',
        'Kök och personalutrymmen',
        'Toalett och sanitära utrymmen',
        'Trapphusstädning för bostadsrätter',
        'Fönsterputsning vid behov',
        'Specialstädning efter behov',
        'Flexibel schemaläggning',
        'Professionell utrustning'
      ],
      detailedFeatures: {
        'Kontorsstädning': [
          'Entré och alla rum - komplett rengöring',
          'Skrivbord och arbetsstationer',
          'Konferensrum och möteslokaler',
          'Reception och väntområden',
          'Dammsugning av mattor och golv',
          'Tömning av papperskorgar'
        ],
        'Kök och personalrum': [
          'Köksbänkar och diskhoar',
          'Mikrovågsugnar och kylskåp (utvändigt)',
          'Kakel och väggytor',
          'Golvrengöring',
          'Sophantering'
        ],
        'Toaletter': [
          'WC-stolar och tvättställ',
          'Kakel och spegelputsning',
          'Påfyllning av pappersprodukter',
          'Golvrengöring och desinfektion'
        ],
        'Trapphusstädning': [
          'Trappor och räcken',
          'Entréer och gemensamma utrymmen',
          'Hiss (invändigt)',
          'Soprum och återvinning'
        ]
      },
      addOns: [
        { name: 'Fönsterputsning (utvändigt)' },
        { name: 'Mattdjuprengöring' },
        { name: 'Parkettpolering' },
        { name: 'Kvällsstädning' }
      ]
    },
    {
      title: 'Storstädning',
      description: 'Grundlig storstädning som täcker alla detaljer som ofta missas i vardagsstädning. Perfekt för säsongsrengöring eller när ditt hem behöver extra omsorg.',
      icon: WrenchScrewdriverIcon,
      price: '350 kr/timme + moms',
      duration: '4-8 timmar',
      frequency: 'Säsongsvis, Efter behov',
      features: [
        'Komplett rengöring av alla rum och ytor',
        'Invändig rengöring av vitvaror',
        'Djuprengöring av kök och badrum',
        'Fönsterputsning ingår',
        'Rengöring av avlopp',
        'Extra grundlig dammtorkning',
        'Polering av kranar och handfat',
        'Specialrengöring efter dina önskemål'
      ],
      detailedFeatures: {
        'Entré och alla rum': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Tavlor – dammtorkning',
          'Speglar – putsning',
          'Hyllor – dammtorkning',
          'Golvlister – avtorkning',
          'Mattor – dammsugning',
          'Golv – dammsugning och våttorkning'
        ],
        'Kök (förstärkt)': [
          'Vitvaror – avtorkning av utsidor',
          'Fläkt – avtorkning av utsidor',
          'Spis – avtorkning utvändigt och invändigt',
          'Mikro – avtorkning in och utvändig',
          'Skåpluckor – avtorkning',
          'Kakel – avtorkning',
          'Disk och blandare – rengöring och polering',
          'Köksbänk – avtorkning',
          'Skåp för sopor – rengöring invändig'
        ],
        'Badrum (förstärkt)': [
          'Badkar/dusch – rengöring',
          'Kakel – avtorkning',
          'Toalett – rengöring',
          'Skåp – avtorkning',
          'Handfat och blandare – rengöring och polering',
          'Vitvaror – avtorkning av utsidor',
          'Avlopp – rengöring'
        ],
        'Övrigt': [
          'Tömning av sopkorgar',
          'Fönsterputsning'
        ]
      },
      addOns: [
        { name: 'Balkong/terrass rengöring' },
        { name: 'Garderob organisation' },
        { name: 'Köksluckor invändigt' },
        { name: 'Lampor (detalj)' }
      ]
    },
    {
      title: 'Byggstädning',
      description: 'Specialiserad städning efter renovering eller byggnadsarbete. Vi tar hand om byggdamm och återställer ditt hem till perfekt skick.',
      icon: ClipboardDocumentCheckIcon,
      price: '350 kr/timme + moms',
      duration: '4-6 timmar',
      frequency: 'Efter behov, Renovering',
      features: [
        'Specialiserad rengöring efter byggarbete',
        'Byggdamm och skräp borttagning',
        'Komplett rengöring alla ytor',
        'Fönsterputsning ingår',
        'Djuprengöring av kök och badrum',
        'Element och vägg dammtorkning',
        'Professionell utrustning',
        'Snabb och effektiv service'
      ],
      detailedFeatures: {
        'Entré och alla rum': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Garderober – avtorkning',
          'Väggar – dammtorkning',
          'Golvlister – avtorkning',
          'Golv – dammsugning och våttorkning',
          'Element – dammtorkning'
        ],
        'Kök': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Fläkt – avtorkning utvändigt',
          'Spis – avtorkning utvändigt',
          'Mikro – avtorkning',
          'Skåpluckor – avtorkning utvändigt och invändigt',
          'Kakel – avtorkning',
          'Disk och blandare – rengöring och polering',
          'Köksbänk – avtorkning',
          'Skåp för sopor – rengöring invändig',
          'Golvet – dammsugning och våttorkning'
        ],
        'Badrum, toalett och tvättstuga': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Badkar/dusch – rengöring',
          'Kakel – avtorkning',
          'Toalett – rengöring',
          'Skåp – avtorkning utvändigt och invändigt',
          'Handfat och blandare – rengöring och polering',
          'Vitvaror – avtorkning av utsidor',
          'Golvet – dammsugning och våttorkning',
          'Avlopp'
        ],
        'Övrigt': [
          'Fönsterputsning'
        ]
      },
      addOns: [
        { name: 'Balkong/terrass djuprengöring' },
        { name: 'Garageuppstädning' },
        { name: 'Exteriör fönsterputsning' },
        { name: 'Trädgårdsuppstädning' }
      ]
    },
    {
      title: 'Flyttstädning',
      description: 'Komplett städning för inflyttning eller utflyttning. Vi säkerställer att bostaden lämnas i perfekt skick.',
      icon: CalendarDaysIcon,
      price: '400 kr/timme + moms + städprodukter',
      duration: '6-8 timmar',
      frequency: 'Inflyttning, Utflyttning',
      features: [
        'Komplett genomgång hela bostaden',
        'Invändig rengöring alla vitvaror',
        'Djuprengöring kök och badrum',
        'Fönsterputsning ingår',
        'Garderober och skåp invändigt',
        'Avloppsrengöring',
        'Kvalitetsgaranti',
        'Godkänd för hyreskontrakt'
      ],
      detailedFeatures: {
        'Entré och alla rum': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Garderober – avtorkning',
          'Väggar – dammtorkning',
          'Golvlister – avtorkning',
          'Golv – dammsugning och våttorkning'
        ],
        'Kök': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Fläkt – avtorkning utvändigt och invändigt',
          'Spis – avtorkning utvändigt och invändigt',
          'Mikro – avtorkning in och utvändig',
          'Skåpluckor – avtorkning utvändigt och invändigt',
          'Kakel – avtorkning',
          'Disk och blandare – rengöring och polering',
          'Köksbänk – avtorkning',
          'Skåp för sopor – rengöring invändig',
          'Golvet – dammsugning och våttorkning'
        ],
        'Badrum, toalett och tvättstuga': [
          'Fönsterbrädor – avtorkning',
          'Dörrar och handtag – avtorkning',
          'Lampor – dammtorkning',
          'Badkar/dusch – rengöring',
          'Kakel – avtorkning',
          'Toalett – rengöring',
          'Skåp – avtorkning utvändigt och invändigt',
          'Handfat och blandare – rengöring och polering',
          'Vitvaror – avtorkning av utsidor',
          'Golvet – dammsugning och våttorkning',
          'Avlopp'
        ],
        'Övrigt': [
          'Tömning av sopkorgar',
          'Fönsterputsning'
        ]
      },
      addOns: [
        { name: 'Balkong/terrass rengöring' },
        { name: 'Källare eller vind' },
        { name: 'Garage eller förråd' },
        { name: 'Mattdjuprengöring' }
      ]
    }
  ];

  const cleaningProcess = [
    {
      step: 1,
      title: 'Första Konsultation',
      description: 'Vi bedömer ditt utrymme och diskuterar dina specifika städbehov och önskemål.'
    },
    {
      step: 2,
      title: 'Anpassad Städplan',
      description: 'Vi skapar en skräddarsydd städplan som passar ditt schema och din budget.'
    },
    {
      step: 3,
      title: 'Professionell Service',
      description: 'Vårt utbildade team kommer med all utrustning och levererar exceptionella resultat.'
    },
    {
      step: 4,
      title: 'Kvalitetssäkring',
      description: 'Vi utför en slutlig inspektion för att säkerställa att allt uppfyller våra höga standarder.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
            {/* Luxury Hero Section */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 30%, #1E3A8A 70%, #0F172A 100%)'
      }}>
        {/* Side Floral Decorations */}
        <FloralSideDecoration bottomPosition="8rem" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-300/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-4 rounded-full shadow-2xl">
                  <SparklesIcon className="h-16 w-16 text-blue-900" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-yellow-200/50 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-8">
              <span className="text-white">Våra Premium</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Städtjänster
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Från regelbundet hemunderhåll till djup kommersiell städning, vi erbjuder omfattande 
              lyxiga tjänster skräddarsydda för att möta dina specifika behov och överträffa dina förväntningar.
            </p>
            <Link
              to="/contact#contact-form"
              className="bg-white text-blue-900 px-10 py-5 text-xl font-semibold rounded-xl border-2 border-yellow-400 hover:bg-yellow-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Få Anpassad Offert
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Main Services */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6">
              Våra Huvudtjänster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Välj från vårt omfattande utbud av professionella lyxiga städtjänster
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="luxury-card p-10">
                    <div className="relative mb-8">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                        <service.icon className="h-10 w-10 text-blue-900" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-200/30 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl font-bold font-['Playfair_Display'] text-transparent bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text mb-6">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">{service.description}</p>
                    
                    {service.title === 'Flyttstädning' && (
                      <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-700">
                          <strong className="text-yellow-700">💡 Observera:</strong> Kostnaden för städprodukter tillkommer och faktureras separat baserat på användning.
                        </p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="luxury-card-small">
                        <div className="text-xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text">{service.price}</div>
                        <div className="text-sm text-gray-500 font-medium">Baspris</div>
                      </div>
                      <div className="luxury-card-small">
                        <div className="text-xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text">{service.frequency}</div>
                        <div className="text-sm text-gray-500 font-medium">Frekvens</div>
                      </div>
                    </div>

                    <Link
                      to={`/contact#contact-form?service=${encodeURIComponent(service.title)}`}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                    >
                      Boka Denna Tjänst
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Detta Ingår:</h4>
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Tilläggsservice:</h4>
                    <div className="space-y-2">
                      {service.addOns.map((addon, idx) => (
                        <div key={idx} className="flex items-center py-2 border-b border-gray-100">
                          <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{addon.name}</span>
                          <span className="text-sm text-gray-500 ml-auto">Inkluderat i timpris</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vår Städprocess
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi följer ett systematiskt tillvägagångssätt för att säkerställa konsekventa, högkvalitativa resultat varje gång
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner - Bring a Friend Discount */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-yellow-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-card bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl border-4 border-yellow-400 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 gold-gradient rounded-full mb-6 shadow-xl">
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
                  to="/contact#contact-form"
                  className="luxury-button text-lg px-8 py-4 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  📞 Boka Nu med Rabatt
                </Link>
                <a
                  href="sms:+46765523187?body=Hej! Jag vill ta del av er vän-rabatt på 15%"
                  className="px-8 py-4 border-2 border-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-50 transition-all duration-300 shadow-md hover:shadow-lg"
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Redo Att Komma Igång?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation och anpassad offert. Vi hjälper dig att välja 
            den perfekta städplanen för dina behov och budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#contact-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Få Kostnadsfri Offert
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

export default Services;