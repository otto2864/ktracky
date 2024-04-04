
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors=require("cors");

app.use(bodyParser.json());
  app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'reactdb'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

app.post('/Add', (req, res) => {
  const { ho_ten, gioi_tinh, ngay_sinh1, ngay_sinh2, thang_sinh1, thang_sinh2, nam_sinh1, nam_sinh2, noi_sinh, dan_toc, ton_giao, so_cmnd, noi_cap, ho_khau, dien_thoai, email,noi_tot_nghiep, nam_tot_nghiep1, nam_tot_nghiep2, nam_tot_nghiep3, nam_tot_nghiep4, ngay_cap, dien_thoai_phu_huynh, nganh_hoc } = req.body; 
  const dateString = `20${nam_sinh1}${nam_sinh2}-${thang_sinh1}${thang_sinh2}-${ngay_sinh1}${ngay_sinh2}`;

  // Convert concatenated string to 'YYYY-MM-DD' format
  const ngay_sinh = dateString.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  let new_gioi_tinh;
  if(gioi_tinh===1){
    new_gioi_tinh="Nữ";
  }else{
    new_gioi_tinh="Nam";
  }
  const nam_tot_nghiep=`${nam_tot_nghiep1}${nam_tot_nghiep2}${nam_tot_nghiep3}${nam_tot_nghiep4}`;
  const sql = 'INSERT INTO thong_tin_thi_sinh ( `ho_ten`, `gioi_tinh`, `ngay_sinh`, `noi_sinh`, `dan_toc`, `ton_giao`, `so_cmnd`, `noi_cap`, `ho_khau`,  `dien_thoai`, `email`, `noi_tot_nghiep`, `nam_tot_nghiep`, `ngay_cap`, `dien_thoai_phu_huynh`, `nganh_hoc`) VALUES (?, ?, ?,?,?, ?, ?,?,?, ?, ?,?,?, ?, ?,?)';
  connection.query(sql, [ho_ten, new_gioi_tinh, ngay_sinh, noi_sinh, dan_toc, ton_giao, so_cmnd, noi_cap, ho_khau,  dien_thoai, email, noi_tot_nghiep, nam_tot_nghiep, ngay_cap, dien_thoai_phu_huynh, nganh_hoc], (error, results, fields) => {
    if (error) {
     
      console.error('Error adding info:', error);
      res.status(500).json({ error: 'Failed to add info' });
      return;
    }
    res.json({ message: 'Info added successfully' });
  });
});
app.get('/Info', (req, res) => {
  const sql = 'SELECT * FROM thong_tin_thi_sinh';

  connection.query(sql, (error, results, fields) => {
    if (error) {
      
      console.error('Error fetching infoes:', error);
      res.status(500).json({ error: 'Failed to fetch infoes' });
      return;
    }

    res.json(results);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});