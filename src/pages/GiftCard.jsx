import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  GiftIcon,
  SparklesIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  HeartIcon,
  StarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import FloralSideDecoration from '../components/FloralSideDecoration';
import GoldenDivider from '../components/GoldenDivider';

const PRESET_AMOUNTS = [500, 1000, 1500, 2000, 3000, 5000];

const GiftCard = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'success', 'error'

  const finalAmount = useCustom ? (parseInt(customAmount) || 0) : selectedAmount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (finalAmount < 100) return;
    setFormStatus('sending');

    try {
      const serviceID = 'service_b54jta9';
      const templateID = 'template_veo5rgk';
      const publicKey = 'RZkbfClXLJeqyJY_Q';

      const templateParams = {
        subject: 'Presentkortsbeställning – ML Expresstäd AB',
        company_name: 'ML Expresstäd AB',
        name: formData.senderName,
        email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        message_html: `
<strong>🎁 NY PRESENTKORTSBESTÄLLNING</strong><br><br>

<strong>📧 AVSÄNDARE:</strong><br>
• Namn: ${formData.senderName}<br>
• E-post: ${formData.email}<br>
• Telefon: ${formData.phone}<br><br>

<strong>🎀 MOTTAGARE:</strong><br>
• Namn: ${formData.recipientName}<br><br>

<strong>💰 BELOPP:</strong><br>
• ${finalAmount} kr<br><br>

<strong>💬 PERSONLIGT MEDDELANDE:</strong><br>
${formData.message || '(inget meddelande)'}<br><br>

<hr>
<em>Skickat automatiskt från ML Expresstäd AB webbplats – presentkortsformulär</em>
        `
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (result.status === 200) {
        setFormStatus('success');
        setTimeout(() => {
          setFormData({ senderName: '', recipientName: '', email: '', phone: '', message: '' });
          setSelectedAmount(1000);
          setCustomAmount('');
          setUseCustom(false);
          setFormStatus('');
        }, 6000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      // Fallback mailto
      const body = `Presentkortsbeställning\n\nAvsändare: ${formData.senderName}\nE-post: ${formData.email}\nTelefon: ${formData.phone}\nMottagare: ${formData.recipientName}\nBelopp: ${finalAmount} kr\n\nMeddelande:\n${formData.message}`;
      window.location.href = `mailto:contact@mlexpress.se?subject=Presentkortsbeställning&body=${encodeURIComponent(body)}`;
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 4000);
    }
  };

  const steps = [
    {
      icon: GiftIcon,
      step: '01',
      title: 'Välj belopp',
      description: 'Välj ett av våra förinställda belopp eller ange ett valfritt belopp som passar din budget.'
    },
    {
      icon: EnvelopeIcon,
      step: '02',
      title: 'Fyll i uppgifter',
      description: 'Ange dina kontaktuppgifter och mottagarens namn. Vi skickar bekräftelse direkt till din e-post.'
    },
    {
      icon: HeartIcon,
      step: '03',
      title: 'Vi skickar presentkortet',
      description: 'Vi bekräftar din beställning och skickar presentkortet till dig eller direkt till mottagaren.'
    }
  ];

  const highlights = [
    { icon: SparklesIcon, text: 'Gäller alla våra städtjänster' },
    { icon: StarIcon, text: 'Giltigt i 12 månader' },
    { icon: CheckCircleIcon, text: 'Ingen utgångsgräns för outnyttjat belopp' },
    { icon: HeartIcon, text: 'Perfekt för alla tillfällen' }
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg,
            rgba(254,252,232,0.95) 0%,
            rgba(254,243,199,0.9) 25%,
            rgba(255,255,255,0.95) 50%,
            rgba(254,243,199,0.9) 75%,
            rgba(254,252,232,0.95) 100%)`
        }}
      >
        <FloralSideDecoration />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-3 luxury-card px-6 py-3 rounded-full text-sm font-semibold mb-8 border-2 border-yellow-200">
            <GiftIcon className="w-5 h-5 text-yellow-500" />
            <span className="luxury-text-gradient">Ge bort lyxig städning</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">
            <span className="text-gray-800 block mb-2">Köp</span>
            <span className="luxury-text-gradient block">Presentkort</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Ge bort något verkligt värdefullt — ett skinande rent hem.
            Perfekta presenten för <span className="font-bold gold-accent">alla tillfällen</span>.
          </p>
        </div>
      </section>

      <GoldenDivider />

      {/* ── Highlights ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, text }, i) => (
            <div key={i} className="luxury-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 royal-gradient rounded-xl mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] luxury-text-gradient mb-4">
            Så här fungerar det
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">Tre enkla steg för att ge bort en lyxig städupplevelse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div key={step} className="luxury-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-6xl font-bold font-['Playfair_Display'] text-gray-100 select-none">
                {step}
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 royal-gradient rounded-2xl mb-6 relative z-10">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-['Playfair_Display'] mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <GoldenDivider />

      {/* ── Order form ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="bestall">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] luxury-text-gradient mb-4">
            Beställ presentkort
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fyll i formuläret så kontaktar vi dig för att bekräfta beställningen och ordna betalning.
          </p>
        </div>

        <div className="luxury-card rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Amount picker */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
              Välj belopp (kr)
            </label>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
              {PRESET_AMOUNTS.map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => { setSelectedAmount(amt); setUseCustom(false); setCustomAmount(''); }}
                  className={`py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2 ${
                    !useCustom && selectedAmount === amt
                      ? 'royal-gradient text-white border-transparent shadow-lg scale-105'
                      : 'border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-700 bg-white'
                  }`}
                >
                  {amt.toLocaleString('sv-SE')}:-
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => { setUseCustom(true); setSelectedAmount(null); }}
                className={`text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-all ${
                  useCustom
                    ? 'royal-gradient text-white border-transparent'
                    : 'border-gray-200 text-gray-600 hover:border-blue-400 bg-white'
                }`}
              >
                Valfritt belopp
              </button>
              {useCustom && (
                <input
                  type="number"
                  min="100"
                  placeholder="Ange belopp i kr"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 text-sm font-medium focus:border-blue-500 focus:outline-none"
                />
              )}
            </div>

            {finalAmount >= 100 && (
              <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-yellow-50 border border-yellow-200 rounded-xl px-5 py-3">
                <GiftIcon className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-gray-800">
                  Presentkort på {finalAmount.toLocaleString('sv-SE')} kr
                </span>
              </div>
            )}
          </div>

          {/* Contact fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ditt namn <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="senderName"
                  required
                  value={formData.senderName}
                  onChange={handleInputChange}
                  placeholder="Ditt för- och efternamn"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mottagarens namn
                </label>
                <input
                  type="text"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  placeholder="Mottagarens namn (valfritt)"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-post <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="din@epost.se"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+46 70 000 00 00"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Personligt meddelande (skrivs på presentkortet)
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="T.ex. Grattis! Hoppas du njuter av ett skinande rent hem 🎉"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending' || finalAmount < 100}
              className="luxury-button w-full text-base py-4 font-bold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Skickar beställning…
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <GiftIcon className="w-5 h-5" />
                  Beställ presentkort på {finalAmount >= 100 ? `${finalAmount.toLocaleString('sv-SE')} kr` : '…'}
                </span>
              )}
            </button>

            <p className="text-center text-xs text-gray-500 mt-2">
              Vi bekräftar din beställning via e-post och kontaktar dig för betalning. Inga kortuppgifter lagras på denna webbplats.
            </p>
          </form>
        </div>
      </section>

      {/* ── Success popup ── */}
      {formStatus === 'success' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="luxury-card rounded-3xl p-10 max-w-md w-full text-center shadow-2xl relative">
            <button
              onClick={() => setFormStatus('')}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="inline-flex items-center justify-center w-20 h-20 royal-gradient rounded-full mb-6">
              <CheckCircleIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] luxury-text-gradient mb-3">
              Beställning mottagen!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tack för din beställning! Vi återkommer till dig inom kort med bekräftelse och betalningsinformation.
            </p>
          </div>
        </div>
      )}

      <GoldenDivider />

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-gray-800 mb-4">
          Frågor om presentkort?
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Kontakta oss gärna direkt — vi hjälper dig välja rätt belopp och ser till att presentkortet levereras perfekt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="luxury-button text-base px-8 py-4 font-bold"
          >
            Kontakta oss
          </Link>
          <Link
            to="/services"
            className="border-2 border-blue-600 text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base"
          >
            Se alla tjänster
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GiftCard;
