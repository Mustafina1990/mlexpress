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

const PRESET_HOURS = [2, 3, 4, 5, 8, 10];

// ── EmailJS IDs ─────────────────────────────────────────────────────────────
const SERVICE_ID   = 'service_b54jta9';
const NOTIFY_TPL   = 'template_veo5rgk';   // existing — sends order to company
const CERT_TPL     = 'template_zuvt0sa';  // Gift Card Certificate template
const PUBLIC_KEY   = 'RZkbfClXLJeqyJY_Q';

// ── Helpers ──────────────────────────────────────────────────────────────────
function makeCertNumber() {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ML-${ts}-${rand}`;
}

function makeValidUntil() {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
}

function buildCertificateHTML({ hours, senderName, recipientName, personalMessage, certNumber, validUntil }) {
  const recipient = recipientName || 'Mottagaren';
  const msgBlock = personalMessage ? `
    <tr>
      <td style="padding:0 48px 32px 48px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background-color:#EFF6FF;border-left:4px solid #3B82F6;border-radius:0 6px 6px 0;padding:18px 22px;">
              <p style="color:#6B7280;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px 0;font-family:Arial,sans-serif;">Personligt meddelande</p>
              <p style="color:#1E3A8A;font-size:15px;line-height:1.8;margin:0;font-style:italic;">&ldquo;${personalMessage}&rdquo;</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>` : '';

  return `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Presentkort – ML Expresstäd AB</title>
</head>
<body style="margin:0;padding:0;background-color:#FEF9EE;font-family:Georgia,'Times New Roman',serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FEF9EE;padding:40px 20px;">
  <tr><td align="center">

    <table role="presentation" width="580" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E5E7EB;">

      <!-- Top gold bar -->
      <tr><td style="background-color:#F59E0B;height:6px;font-size:0;line-height:0;">&nbsp;</td></tr>

      <!-- Header -->
      <tr>
        <td style="background-color:#1E3A8A;padding:44px 48px 36px 48px;text-align:center;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="border:1px solid rgba(245,158,11,0.55);border-radius:10px;padding:26px 20px;">
                <p style="color:#FCD34D;font-size:11px;letter-spacing:5px;margin:0 0 10px 0;text-transform:uppercase;font-family:Arial,sans-serif;">Professionell städexcellens</p>
                <h1 style="color:#FFFFFF;font-size:34px;margin:0 0 8px 0;font-weight:normal;letter-spacing:1px;font-family:Georgia,serif;">ML Expresstäd AB</h1>
                <p style="color:#93C5FD;font-size:12px;letter-spacing:5px;margin:0;text-transform:uppercase;font-family:Arial,sans-serif;">Presentkort &bull; Städtjänst</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Hours -->
      <tr>
        <td style="background-color:#FEFCE8;padding:44px 48px 28px 48px;text-align:center;">
          <table role="presentation" cellpadding="0" cellspacing="0" align="center">
            <tr>
              <td style="background-color:#1E40AF;border-radius:50%;width:130px;height:130px;text-align:center;vertical-align:middle;">
                <span style="color:#FFFFFF;font-size:50px;font-weight:bold;font-family:Georgia,serif;display:block;line-height:130px;">${hours}</span>
              </td>
            </tr>
          </table>
          <p style="color:#374151;font-size:12px;letter-spacing:5px;text-transform:uppercase;margin:16px 0 0 0;font-family:Arial,sans-serif;">Timmar städning</p>
        </td>
      </tr>

      <!-- Gold divider -->
      <tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:#F59E0B;font-size:0;">&nbsp;</td></tr></table></td></tr>

      <!-- To / From -->
      <tr>
        <td style="background-color:#FEFCE8;padding:32px 48px;text-align:center;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" style="text-align:center;padding-right:20px;border-right:1px solid #E5E7EB;">
                <p style="color:#9CA3AF;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px 0;font-family:Arial,sans-serif;">Till</p>
                <p style="color:#111827;font-size:20px;margin:0;font-family:Georgia,serif;">${recipient}</p>
              </td>
              <td width="50%" style="text-align:center;padding-left:20px;">
                <p style="color:#9CA3AF;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px 0;font-family:Arial,sans-serif;">Från</p>
                <p style="color:#111827;font-size:20px;margin:0;font-family:Georgia,serif;">${senderName}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Personal message (conditional) -->
      ${msgBlock}

      <!-- Gold divider -->
      <tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:#F59E0B;font-size:0;">&nbsp;</td></tr></table></td></tr>

      <!-- Cert number & validity -->
      <tr>
        <td style="padding:24px 48px;text-align:center;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" style="text-align:center;padding-right:16px;border-right:1px solid #E5E7EB;">
                <p style="color:#9CA3AF;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px 0;font-family:Arial,sans-serif;">Certifikatnummer</p>
                <p style="color:#1E3A8A;font-size:13px;font-family:monospace;margin:0;font-weight:bold;letter-spacing:1px;">${certNumber}</p>
              </td>
              <td width="50%" style="text-align:center;padding-left:16px;">
                <p style="color:#9CA3AF;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px 0;font-family:Arial,sans-serif;">Giltigt till</p>
                <p style="color:#374151;font-size:13px;font-family:Arial,sans-serif;margin:0;font-weight:bold;">${validUntil}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Redemption instructions -->
      <tr>
        <td style="background-color:#F8FAFC;padding:22px 48px;text-align:center;">
          <p style="color:#6B7280;font-size:12px;line-height:1.9;margin:0;font-family:Arial,sans-serif;">
            För att lösa in presentkortet, kontakta oss och uppge ditt certifikatnummer.<br>
            <strong style="color:#1E40AF;">contact@mlexpress.se</strong>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<strong style="color:#1E40AF;">+46 76 552 31 87</strong>
          </p>
        </td>
      </tr>

      <!-- Bottom gold bar -->
      <tr><td style="background-color:#F59E0B;height:6px;font-size:0;line-height:0;">&nbsp;</td></tr>

    </table>

    <!-- Footer -->
    <table role="presentation" width="580" cellpadding="0" cellspacing="0" style="max-width:580px;margin-top:20px;">
      <tr>
        <td style="text-align:center;padding:0 20px;">
          <p style="color:#9CA3AF;font-size:11px;line-height:1.8;margin:0;font-family:Arial,sans-serif;">
            &copy; ML Expresstäd AB &bull; Stockholm &bull; mlexpress.se<br>
            Presentkortet är personligt och kan ej bytas mot kontanter.
          </p>
        </td>
      </tr>
    </table>

  </td></tr>
</table>
</body>
</html>`;
}

const GiftCard = () => {
  const [selectedHours, setSelectedHours] = useState(3);
  const [customHours, setCustomHours] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'success', 'error'

  const finalHours = useCustom ? (parseInt(customHours) || 0) : selectedHours;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (finalHours < 1) return;
    setFormStatus('sending');

    const certNumber = makeCertNumber();
    const validUntil = makeValidUntil();

    try {
      // ── 1. Notify the company ──────────────────────────────────────────────
      await emailjs.send(SERVICE_ID, NOTIFY_TPL, {
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
• Namn: ${formData.recipientName || '–'}<br><br>
<strong>⏱ ANTAL TIMMAR:</strong><br>
• ${finalHours} timmar städning<br><br>
<strong>🔖 CERTIFIKATNUMMER:</strong><br>
• ${certNumber}<br><br>
<strong>💬 PERSONLIGT MEDDELANDE:</strong><br>
${formData.message || '(inget meddelande)'}<br><br>
<hr>
<em>Skickat automatiskt från ML Expresstäd AB webbplats</em>`
      }, PUBLIC_KEY);

      // ── 2. Send certificate to client ────────────────────────────────────
      //  Requires "template_certificate" in EmailJS with:
      //    To email  →  {{to_email}}
      //    Subject   →  {{subject}}
      //    Body HTML →  {{message_html}}   (HTML mode ON)
      await emailjs.send(SERVICE_ID, CERT_TPL, {
        email:       formData.email,
        subject:     `Ditt presentkort från ML Expresstäd AB – ${certNumber}`,
        message_html: buildCertificateHTML({
          hours:           finalHours,
          senderName:      formData.senderName,
          recipientName:   formData.recipientName,
          personalMessage: formData.message,
          certNumber,
          validUntil
        })
      }, PUBLIC_KEY);

      setFormStatus('success');
      setTimeout(() => {
        setFormData({ senderName: '', recipientName: '', email: '', phone: '', message: '' });
        setSelectedHours(3);
        setCustomHours('');
        setUseCustom(false);
        setFormStatus('');
      }, 6000);
    } catch {
      // Fallback mailto
      const body = `Presentkortsbeställning\n\nAvsändare: ${formData.senderName}\nE-post: ${formData.email}\nTelefon: ${formData.phone}\nMottagare: ${formData.recipientName}\nAntal timmar: ${finalHours} timmar städning\nCertifikatnummer: ${certNumber}\n\nMeddelande:\n${formData.message}`;
      window.location.href = `mailto:contact@mlexpress.se?subject=Presentkortsbeställning&body=${encodeURIComponent(body)}`;
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 4000);
    }
  };

  const steps = [
    {
      icon: GiftIcon,
      step: '01',
      title: 'Välj antal timmar',
      description: 'Välj ett av våra förinställda alternativ eller ange ett valfritt antal timmar som passar dina önskemål.'
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
    { icon: CheckCircleIcon, text: 'Flexibelt antal timmar efter behov' },
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

          {/* Hours picker */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
              Välj antal timmar städning
            </label>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
              {PRESET_HOURS.map(h => (
                <button
                  key={h}
                  type="button"
                  onClick={() => { setSelectedHours(h); setUseCustom(false); setCustomHours(''); }}
                  className={`py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2 ${
                    !useCustom && selectedHours === h
                      ? 'royal-gradient text-white border-transparent shadow-lg scale-105'
                      : 'border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-700 bg-white'
                  }`}
                >
                  {h} tim
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => { setUseCustom(true); setSelectedHours(null); }}
                className={`text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-all ${
                  useCustom
                    ? 'royal-gradient text-white border-transparent'
                    : 'border-gray-200 text-gray-600 hover:border-blue-400 bg-white'
                }`}
              >
                Valfritt antal timmar
              </button>
              {useCustom && (
                <input
                  type="number"
                  min="1"
                  placeholder="Ange antal timmar"
                  value={customHours}
                  onChange={e => setCustomHours(e.target.value)}
                  className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 text-sm font-medium focus:border-blue-500 focus:outline-none"
                />
              )}
            </div>

            {finalHours >= 1 && (
              <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-yellow-50 border border-yellow-200 rounded-xl px-5 py-3">
                <GiftIcon className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-gray-800">
                  Presentkort på {finalHours} timmar städning
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
              disabled={formStatus === 'sending' || finalHours < 1}
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
                  Beställ presentkort på {finalHours >= 1 ? `${finalHours} timmar` : '…'}
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
