const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg ( SN|YOUR NUMBER )`
  if (!Reg.test(text)) throw `Format salah!\n*Harap daftar dengan Benar!\nDengan Ketik *${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong cukk... gak bisa :v\nHarus diisi dengan Benar dan tidak menipu *_OWNER/BOT!_*'
  if (!age) throw 'Umur tidak boleh kosong dan diisi dengan angka\nNote: Tidak menipu Umur Kamu di *_OWNER/BOT_*'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Anda sudah Berhasil register🎉

           ╔───────────────┐
           │ ABOUT YOU WITH BOT │
           └───────────────╝
           
╭ 乁[ ◕ ᴥ ◕ ]ㄏ [*INFO* ]  乁[ ◕ ᴥ ◕ ]ㄏ
│ ➢ Nama: ${name}
│ ➢ Umur: ${age}Tahun
│ ➢ SN: ${sn}
│ ➢ Command To Help *_#menu_*
│
╰➢ ⚠️ GUNAKAN BOT SEBAIK MUNGKIN⚠️

 SEMOGA HARI-HARI KALIAN BAHAGIA SELALU (◔‿◔)
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

