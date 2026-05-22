export function createWhatsAppLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
