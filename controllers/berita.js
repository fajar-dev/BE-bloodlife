
exports.getBerita = async (req, res) => {
  connection.query(
    "SELECT tb_berita.id, tb_berita.gambar as foto, tb_berita.judul as judul_berita, DATE_FORMAT(tb_berita.tgl,'%d %b %y')as tanggal_posting,tb_berita.berita as isi_berita,tb_berita.penulis,tb_berita.aktif,udd.nama FROM tb_berita JOIN udd ON tb_berita.udd = udd.id ORDER BY tb_berita.tgl DESC limit 20", (err, result) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        result,
      });
    }
  });
};


exports.getBeritaByid = async (req, res) => {
  connection.query(
    "SELECT tb_berita.id, tb_berita.gambar as foto, tb_berita.judul as judul_berita, DATE_FORMAT(tb_berita.tgl,'%d %b %y')as tanggal_posting,tb_berita.berita as isi_berita,tb_berita.penulis,tb_berita.aktif,udd.nama FROM tb_berita JOIN udd ON tb_berita.udd = udd.id where tb_berita.id = ? ORDER BY tb_berita.tgl DESC limit 20", (err, result) => {
    if (err) {
      res.json({
        err,
      });
    } else {
      res.json({
        result,
      });
    }
  });
};
