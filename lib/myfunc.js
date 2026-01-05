// Library: Utility Functions
export function formatPhone(phone) {
  return phone.replace(/\D/g, '');
}

export function isValidJid(jid) {
  return jid.includes('@s.whatsapp.net') || jid.includes('@g.us');
}

export function getJid(phone) {
  const cleaned = formatPhone(phone);
  return `${cleaned}@s.whatsapp.net`;
}

export function getGroupJid(groupId) {
  return `${groupId}@g.us`;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await sleep(delay);
    }
  }
}
