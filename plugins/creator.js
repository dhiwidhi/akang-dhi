let handler = function (m) {
  // this.sendContact(m.chat, '6285807174320', 'Bot', m)
  this.sendContact(m.chat, '628819547416', 'Owner tampan', m)
Itu nomor pacarku jangan kamu ambil nanti aku nangis ಥ_ಥ
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
