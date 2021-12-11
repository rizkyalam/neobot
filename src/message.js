const {decryptMedia} = require('@open-wa/wa-automate');
const mime = require('mime-types');
const info = require('./utils/info');

const help = `
==================================
            NEOBOT           
==================================

${info}

- Fitur: 
1. Mengubah gambar menjadi sticker

- Usage:
/help = informasi dan panduan tentang bot ini
/sticker = kirim gambar dengan caption /sticker untuk mengubah gambar menjadi sticker

`;

const sticker = async ({client, msg}) => {
  const filename = `${msg.t}.${mime.extension(
    msg.mimetype
  )}`;

  try {
    const mediaData = await decryptMedia(msg);
    const imgBase64 = `data:${
      msg.mimetype
    };base64,${mediaData.toString('base64')}`;

    client.sendImageAsSticker(msg.from, imgBase64);
  } catch (err) {
    console.log('gagal mengubah gambar menjadi sticker');
  }
}

module.exports = {
  help,
  sticker
};
