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
import logoUrl from '../assets/logo.png';

const PRESET_HOURS = [2, 3, 4, 5, 8, 10];

// ── EmailJS IDs ─────────────────────────────────────────────────────────────
const SERVICE_ID   = 'service_b54jta9';
const NOTIFY_TPL   = 'template_veo5rgk';   // existing — sends order to company
const CERT_TPL     = 'template_zuvt0sa';  // Gift Card Certificate template
const PUBLIC_KEY   = 'RZkbfClXLJeqyJY_Q';

// ── Helpers ──────────────────────────────────────────────────────────────────
// replaceWhite: [r, g, b] to swap near-white pixels (logo bg → card cream)
function imageToBase64(url, replaceWhite = null) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      if (replaceWhite) {
        const [r, g, b] = replaceWhite;
        const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = id.data;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i] > 252 && d[i + 1] > 252 && d[i + 2] > 252) {
            d[i] = r; d[i + 1] = g; d[i + 2] = b;
          }
        }
        ctx.putImageData(id, 0, 0);
      }
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

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

function buildCertificateHTML({ hours, senderName, recipientName, personalMessage, certNumber, validUntil, logoDataUri }) {
  const recipient = recipientName || 'Mottagaren';

  // ── SVG corner ornaments and divider (base64 data URIs) ────────────────────
  const GOLD  = '#C09B3A';
  const CREAM = '#F5EDD8';

  // Corner ornament — TL orientation; other corners use SVG transforms
  const corner = (transform) => {
    const inner = [
      `<path d="M5,5 C5,33 22,50 40,45 C58,40 62,23 52,15 C42,7 28,13 28,23 C28,33 40,36 46,30" stroke="${GOLD}" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
      `<path d="M46,30 C49,27 50,22 47,18" stroke="${GOLD}" stroke-width="1.3" fill="none" stroke-linecap="round"/>`,
      `<path d="M5,5 Q0,14 1,23 Q9,18 11,10 Q8,6 5,5Z" fill="${GOLD}" opacity="0.85"/>`,
      `<path d="M5,5 Q14,0 23,1 Q18,9 10,11 Q6,8 5,5Z" fill="${GOLD}" opacity="0.85"/>`,
      `<circle cx="5" cy="5" r="5" fill="${GOLD}"/>`,
      `<circle cx="5" cy="5" r="2" fill="${CREAM}"/>`,
    ].join('');
    const g = transform ? `<g transform="${transform}">${inner}</g>` : inner;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">${g}</svg>`;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  };

  const TL = corner('');
  const TR = corner('translate(80,0) scale(-1,1)');
  const BL = corner('translate(0,80) scale(1,-1)');
  const BR = corner('rotate(180,40,40)');

  // Decorative wave divider
  const divSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="30" viewBox="0 0 400 30"><line x1="0" y1="15" x2="155" y2="15" stroke="${GOLD}" stroke-width="1.2"/><line x1="245" y1="15" x2="400" y2="15" stroke="${GOLD}" stroke-width="1.2"/><path d="M155,15 C163,7 173,7 181,15 C189,23 199,23 207,15 C215,7 225,7 245,15" stroke="${GOLD}" stroke-width="1.6" fill="none"/><circle cx="200" cy="4" r="4" fill="${GOLD}"/><circle cx="38" cy="15" r="3" fill="${GOLD}"/><circle cx="362" cy="15" r="3" fill="${GOLD}"/></svg>`;
  const DIV = 'data:image/svg+xml;base64,' + btoa(divSVG);

  // 1 px gold rule
  const rule = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:1px;background-color:${GOLD};font-size:0;">&nbsp;</td></tr></table>`;

  // Shared top corner row (logo between TL / TR)
  const logoImg = logoDataUri
    ? `<img src="${logoDataUri}" width="36" height="36" style="display:inline-block;vertical-align:middle;margin-right:9px;border-radius:4px;" alt=""/>`
    : '';

  const topRow = `
  <tr>
    <td width="80" style="width:80px;height:80px;padding:0;vertical-align:top;">
      <img src="${TL}" width="80" height="80" style="display:block;" alt=""/>
    </td>
    <td style="vertical-align:middle;text-align:center;padding:0 20px;">
      <p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:13px;font-weight:700;color:#1B2A54;letter-spacing:3px;text-transform:uppercase;margin:0;">${logoImg}ML Expresst&auml;d AB</p>
    </td>
    <td width="80" style="width:80px;height:80px;padding:0;vertical-align:top;text-align:right;">
      <img src="${TR}" width="80" height="80" style="display:block;margin-left:auto;" alt=""/>
    </td>
  </tr>`;

  // Bottom corner row factory (optional center content, e.g. cert number)
  const bottomRow = (mid = '') => `
  <tr>
    <td width="80" style="width:80px;height:80px;padding:0;vertical-align:bottom;">
      <img src="${BL}" width="80" height="80" style="display:block;" alt=""/>
    </td>
    <td style="vertical-align:middle;text-align:center;padding:0 16px;">${mid}</td>
    <td width="80" style="width:80px;height:80px;padding:0;vertical-align:bottom;text-align:right;">
      <img src="${BR}" width="80" height="80" style="display:block;margin-left:auto;" alt=""/>
    </td>
  </tr>`;

  // Content row with 80 px side gutters that align with the corner images
  const row = (html, pad = '0 50px 24px') => `
  <tr>
    <td style="width:80px;"></td>
    <td style="padding:${pad};">${html}</td>
    <td style="width:80px;"></td>
  </tr>`;

  // Labelled field row used on the back card (FRÅN / TILL / GÅR UT)
  const field = (label, val) => row(
    `<p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:10px;font-weight:700;color:#1B2A54;letter-spacing:3px;text-transform:uppercase;margin:0 0 5px 0;">${label}</p>` +
    `<p style="font-family:'EB Garamond',Georgia,'Times New Roman',serif;font-size:20px;color:#2C1E0F;margin:0 0 10px 0;">${val}</p>` +
    rule,
    '16px 50px 0'
  );

  // Outer card table wrapper
  const card = (rows) =>
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:${CREAM};border:2.5px solid ${GOLD};border-collapse:collapse;">${rows}</table>`;

  // ── FRONT card ─────────────────────────────────────────────────────────────
  const frontCard = card(
    topRow +
    row(
      `<h1 style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:50px;font-weight:700;color:#1B2A54;letter-spacing:9px;text-transform:uppercase;margin:0 0 10px 0;line-height:1.1;text-align:center;">PRESENTKORT</h1>` +
      `<p style="font-family:'EB Garamond',Georgia,'Times New Roman',serif;font-size:22px;color:#B8943F;font-style:italic;margin:0;line-height:1.5;text-align:center;">p&aring; ${hours} timmars professionell st&auml;dning</p>`,
      '8px 30px 16px'
    ) +
    row(`<img src="${DIV}" width="400" height="30" style="display:block;margin:0 auto;" alt=""/>`, '0 0 12px') +
    row(
      `<p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:11px;color:#1B2A54;letter-spacing:4px;text-transform:uppercase;margin:0 0 8px 0;text-align:center;">Vi tar hand om st&auml;dningen.</p>` +
      `<p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:11px;color:#1B2A54;letter-spacing:4px;text-transform:uppercase;margin:0;text-align:center;">Du tar hand om dig sj&auml;lv.</p>`,
      '0 40px 20px'
    ) +
    bottomRow()
  );

  // ── BACK card ──────────────────────────────────────────────────────────────
  const msgContent = personalMessage
    ? `<p style="font-family:'EB Garamond',Georgia,'Times New Roman',serif;font-size:17px;color:#3A2E22;font-style:italic;line-height:1.8;margin:0;">&ldquo;${personalMessage}&rdquo;</p>`
    : `<p style="font-family:'EB Garamond',Georgia,'Times New Roman',serif;font-size:17px;color:#B8943F;font-style:italic;line-height:1.8;margin:0;text-align:center;">&ldquo;Grattis! Du f&ouml;rtj&auml;nar ett skinande rent hem &ndash; nu kan du koppla av medan vi tar hand om resten.&rdquo;</p>`;

  const backCard = card(
    topRow +
    field('Fr&aring;n', senderName) +
    field('Till', recipient) +
    field('G&aring;r ut', validUntil) +
    row(
      `<p style="font-size:22px;color:${GOLD};margin:0 0 8px 0;text-align:center;">&#9829;</p>` +
      `<p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:10px;font-weight:700;color:#1B2A54;letter-spacing:3px;text-transform:uppercase;margin:0 0 4px 0;text-align:center;">Personliga h&auml;lsningen</p>` +
      `<p style="font-family:'Cinzel',Georgia,'Times New Roman',serif;font-size:10px;font-weight:700;color:#1B2A54;letter-spacing:3px;text-transform:uppercase;margin:0;text-align:center;">fr&aring;n avs&auml;ndaren:</p>`,
      '22px 40px 14px'
    ) +
    row(msgContent, '0 50px 12px') +
    bottomRow(`<p style="font-family:monospace;font-size:11px;color:#9C8A6A;letter-spacing:2px;margin:0;">${certNumber}</p>`)
  );

  return `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Presentkort &ndash; ML Expresst&auml;d AB</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@1,400;1,600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background-color:#E8E1D1;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#E8E1D1;padding:40px 20px;">
  <tr><td align="center">

    ${frontCard}

    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;">
      <tr><td style="height:28px;"></td></tr>
    </table>

    ${backCard}

    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;margin-top:18px;">
      <tr>
        <td style="text-align:center;padding:0 20px;">
          <p style="color:#8C7A5A;font-size:11px;line-height:1.8;margin:0;font-family:Arial,Helvetica,sans-serif;">
            &copy; ML Expresst&auml;d AB &bull; Stockholm &bull; mlexpress.se<br>
            Presentkortet &auml;r personligt och kan ej bytas mot kontanter.
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
      const logoDataUri = await imageToBase64(logoUrl, [245, 237, 216]); // #F5EDD8 = card cream
      await emailjs.send(SERVICE_ID, CERT_TPL, {
        email:       formData.email,
        subject:     `Ditt presentkort från ML Expresstäd AB – ${certNumber}`,
        message_html: buildCertificateHTML({
          hours:           finalHours,
          senderName:      formData.senderName,
          recipientName:   formData.recipientName,
          personalMessage: formData.message,
          certNumber,
          validUntil,
          logoDataUri
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
