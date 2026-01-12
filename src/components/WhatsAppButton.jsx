import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ data, type }) => {
  
  const generateMessage = () => {
    let text = "";

    if (type === 'area') {
      text = `
🚨 *INVESTMENT ANALYSIS: ${data.name.toUpperCase()}* 🚨

📍 *Category:* ${data.category}
💰 *Avg Price:* ${data.avgPrice || data.priceRange}
📈 *ROI:* ${data.roi}
⭐ *Overall Score:* ${data.overallScore}/10

📊 *KEY METRICS:*
• Cash Flow: ${data.scores?.cashFlow || 'N/A'}/10
• Appreciation: ${data.scores?.appreciation || 'N/A'}/10
• Risk Level: ${data.scores?.risk || 'N/A'}/10

💡 *WHY INVEST?*
${data.description}

🚀 *FUTURE OUTLOOK:*
${data.futureOutlook || "Stable growth expected based on market trends."}

✅ *PROS:*
${data.pros?.map(p => `• ${p}`).join('\n')}

🔗 *Full Report:* https://estateiq.com/area/${data.id}
`;
    } else {
      // BUILDER REPORT
      text = `
🏗️ *DEVELOPER REPORT: ${data.name.toUpperCase()}* 🏗️

🏆 *Tier:* ${data.tier}
🌍 *Origin:* ${data.origin || 'Dubai'}
📅 *Est:* ${data.established}

⭐ *TRUST SCORES:*
• Trust & Safety: ${data.scores?.trust}/10
• Delivery: ${data.deliveryTrackRecord?.onTime || 'High'}
• Quality: ${data.scores?.constructionQuality || data.scores?.quality}/10

💎 *SIGNATURE PROJECT:*
${data.signatureProject || 'N/A'}

💡 *INVESTOR VERDICT:*
${data.description}

✅ *WHY CHOOSE THEM?*
${data.usp}

🔗 *Full Profile:* https://estateiq.com/builder/${data.id}
`;
    }

    // Encode for URL
    return encodeURIComponent(text.trim());
  };

  const handleShare = () => {
    const msg = generateMessage();
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm w-full justify-center"
    >
      <MessageCircle size={18} /> Share Report
    </button>
  );
};

export default WhatsAppButton;