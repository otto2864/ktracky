
import React, { useState } from "react";
import axios from "axios";
// import "./Header.css"
const Header = () => {
  const [formData, setFormData] = useState({

  ho_ten :"",
  gioi_tinh:"",
  ngay_sinh1: "",  // Day
  ngay_sinh2: "", 
  thang_sinh1: "", // Month
  thang_sinh2: "",
  nam_sinh1: "",   // Year
  nam_sinh2: "",
  noi_sinh :"",
  dan_toc :"",
  nam_cap:"",
  nam_tot_nghiep1:"",
  nganh_hoc:"",
  nam_tot_nghiep2:"",
  nam_tot_nghiep3:"",
  nam_tot_nghiep4:"",
  ngay_cap:"",
  noi_tot_nghiep:"",
  ton_giao:"",
  so_cmnd :"",
  noi_cap :"",
  ho_khau :"",
  dia_chi :"",
  dien_thoai :"",
  dien_thoai_phu_huynh :"",
  email :""
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const day1 = formData.ngay_sinh1;
  const day2 = formData.ngay_sinh2;
  const day = day1.toString() + day2.toString();
  const month1 = formData.thang_sinh1;
  const month2 = formData.thang_sinh2;
  const month = month1.toString() + month2.toString();
  const year1 = formData.nam_sinh1;
  const year2 = formData.nam_sinh2;
  const year = year1.toString() + year2.toString();

  const dateString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  console.log('Date of Birth:', dateString);

  const nam_tot_nghiep1 = formData.nam_tot_nghiep1;
  const nam_tot_nghiep2 = formData.nam_tot_nghiep2;
  const nam_tot_nghiep3 = formData.nam_tot_nghiep3;
  const nam_tot_nghiep4 = formData.nam_tot_nghiep4;
  const namtt = nam_tot_nghiep1.toString() + nam_tot_nghiep2.toString()+nam_tot_nghiep3.toString() + nam_tot_nghiep4.toString();
  console.log( namtt);
  try {
      const response = await axios.post('http://localhost:3001/Add', formData);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
};
  return (
    <>
    
  <div className="main_wrapper main_wrapper_nhome">
    <div className=" container_main_wrapper">
      <div className="main-area main-area-1col main-area-full">
        <div className="wrapper_register_DLT">
          <div className="container">
            <div className="top_register">
              <div className="col-3 item-col">
                <div className="form_logo">
                  <a
                    href="https://caodangvietmyhanoi.edu.vn/"
                    title="caodangvietmyhanoi.edu.vn"
                    target="_blank"
                  >
                    <img
                      className="logo_pc"
                      alt="caodangvietmyhanoi.edu.vn"
                      width={210}
                      height={210}
                      src="https://caodangvietmyhanoi.edu.vn/images/config/logo-cao-dang-viet-my-ha-noi_1654826484.jpg"
                      srcSet="https://caodangvietmyhanoi.edu.vn/images/config/logo-cao-dang-viet-my-ha-noi_1654826484.jpg.webp"
                    />{" "}
                    <img
                      className="logo_mb"
                      alt="caodangvietmyhanoi.edu.vn"
                      width={163}
                      height={60}
                      src="https://caodangvietmyhanoi.edu.vn/images/config/logo-cao-dang-viet-my-07_1671158415.png"
                      srcSet="https://caodangvietmyhanoi.edu.vn/images/config/logo-cao-dang-viet-my-07_1671158415.png.webp"
                    />{" "}
                  </a>
                </div>
              </div>
              <div className="col-9 item-col">
                <ul className="code_company">
                  <li>MÃ TRƯỜNG: CDD0203</li>
                  <li>MÃ HỒ SƠ: </li>
                </ul>
                <div className="header_form">
                  <h3 className="name_cpn">Cao đẳng Việt Mỹ Hà Nội</h3>
                  <h4 className="name_cpn_en">Viet My College</h4>
                </div>
              </div>
            </div>
            
            <div className="form_register">
           
              <h1 className="name_register">
                HỒ SƠ XÉT TUYỂN CAO ĐẲNG TRỰC TUYẾN
              </h1>
              <p className="content_xt">
                Các hạng mục hồ sơ bên dưới, bạn vui lòng điền đầy đủ thông tin.
              </p>
              <h2 className="name_base">THÔNG TIN CÁ NHÂN</h2>
              <form
                action=""
                name="buy_register_form"
                id="buy_register_form"
                method="post"
                // onsubmit="javascript: return submit_form_buy_fast_register();"
                onSubmit={handleSubmit}
              >
                <div className="row_item">
                  <div className="col-xs-8  first_col">
                    <div
                      className="form-group _text_field flex-row"
                      id="item_form_name"
                    >
                      <label
                        htmlFor="input_name_register"
                        className="control-label flex-col"
                      >
                        1. Họ và tên của thí sinh:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          // id="input_name_register"
                          // name="input_name_register"
                          defaultValue=""
                          fdprocessedid="5dptv7"
                          id="ho_ten" name="ho_ten" value={formData.ho_ten} onChange={handleChange}
                        />
                        <span id="input_name_caption" className="help-block">
                          Viết đúng như giấy khai sinh bằng chữ in hoa có dấu
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4  last_col">
                    <div
                      className="form-group  square_input sex__ flex-row"
                      id="sex-wrap"
                    >
                      <label
                        id="sex_Label"
                        htmlFor="input_sex_register"
                        className="control-label flex-col"
                      >
                        Giới tính: <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                        
                        required=""
                        type="text"
                        className=" form-control"
                        // id="day_register_input1"
                        // name="day_register_input1"
                        defaultValue=""
                        fdprocessedid="vxc2u"
                        id="gioi_tinh" name="gioi_tinh" value={formData.gioi_tinh} onChange={handleChange}
                       
                        />
                        <span id="fld_sex_register" className="help-block">
                          Nữ ghi 1, Nam ghi 0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-8  first_col">
                    <div className="">
                      <div className="field_label">
                        2. Ngày, tháng và năm sinh
                      </div>
                      <div className="field_label_intro">
                        Nếu ngày và tháng nhỏ hơn 10 thì ghi số 0 vào ô đầu
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4  last_col wrap_coll">
                    <div className="wrap_itxs4">
                      <div
                        className="form-group _day  square_input flex-row"
                        id="day_1_wrap"
                      >
                        <label
                          id="date_register_label"
                          htmlFor="day_register_input1"
                          className="control-label flex-col"
                         
                        >
                          day1
                          <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            // id="day_register_input1"
                            // name="day_register_input1"
                            defaultValue=""
                            fdprocessedid="vxc2u"
                            id="ngay_sinh1" name="ngay_sinh1" value={formData.ngay_sinh1} onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _day square_input flex-row"
                        id="day_2_wrap"
                      >
                        <label
                          id="day2_Label"
                          htmlFor="day_register_input2"
                          className="control-label flex-col"
                        >
                          day2 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            // id="day_register_input2"
                            // name="day_register_input2"
                            defaultValue=""
                            fdprocessedid="1c61v"
                            id="ngay_sinh2" name="ngay_sinh2" value={formData.ngay_sinh2} onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _day square_input flex-row"
                        id="month_1_wrap"
                      >
                        <label
                          id="month1_label"
                          htmlFor="month_register_input1"
                          className="control-label flex-col"
                        >
                          day3 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="thang_sinh1" name="thang_sinh1" value={formData.thang_sinh1} onChange={handleChange}
                            defaultValue=""
                            data-type="text"
                            fdprocessedid="2p2hr"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _day square_input flex-row"
                        id="month_2_wrap"
                      >
                        <label
                          id="month2_label"
                          htmlFor="month_register_input2"
                          className="control-label flex-col"
                        >
                          day4
                          <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="thang_sinh2" name="thang_sinh2" value={formData.thang_sinh2} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="98os5s"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _day square_input flex-row"
                        id="year_1_wrap"
                      >
                        <label
                          id="year_label1"
                          htmlFor="year_register_input1"
                          className="control-label flex-col"
                        >
                          day5 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_sinh1" name="nam_sinh1" value={formData.nam_sinh1} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="7wyrmu"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _day square_input flex-row"
                        id="year_2_wrap"
                      >
                        <label
                          id="year_label2"
                          htmlFor="year_register_input2"
                          className="control-label flex-col"
                        >
                          day6 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_sinh2" name="nam_sinh2" value={formData.nam_sinh2} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="u7rus"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12 single">
                    <div className="form-group flex-row" id="place_birth_wrap">
                      <label
                        id="place_birth_label"
                        htmlFor="place_birth_register"
                        className="control-label flex-col"
                      >
                        3. Nơi Sinh:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="noi_sinh" name="noi_sinh" value={formData.noi_sinh} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="jwpxyh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item">
                  <div className="col-xs-6 first_col">
                    <div className="form-group flex-row" id="nation_wrap">
                      <label
                        id="nation_label"
                        htmlFor="nation_register"
                        className="control-label flex-col"
                      >
                        4. Dân tộc:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="dan_toc" name="dan_toc" value={formData.dan_toc} onChange={handleChange}
                          defaultValue=""
                          data-type="text"
                          fdprocessedid="5tov4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6  last_col">
                    <div className="form-group flex-row" id="religion_wrap">
                      <label
                        id="religion_label"
                        htmlFor="religion_register"
                        className="control-label flex-col"
                      >
                        Tôn giáo:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="ton_giao" name="ton_giao" value={formData.ton_giao} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="1wbwor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group  _hokhau_tt flex-row"
                      id="permanent_residence_wrap"
                    >
                      <label
                        id="permanent_residence_label"
                        className="control-label flex-col"
                      >
                        5. Hộ khẩu thường trú:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="ho_khau" name="ho_khau" value={formData.ho_khau} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="j640ic"
                        />
                        <span
                          id="permanent_residence_caption"
                          className="help-block"
                        >
                          Số nhà, đường, phường/xã , quận/huyện, tỉnh/thành phố
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item tn_item">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group truong_totnghiep flex-row"
                      id="graduation_place_wrap"
                    >
                      <label
                        id="graduation_place_label"
                        htmlFor="graduation_place_register"
                        className="control-label flex-col"
                      >
                        6. Nơi tốt nghiệp THCS hoặc THPT hoặc tương đương:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="noi_tot_nghiep" name="noi_tot_nghiep" value={formData.noi_tot_nghiep} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="4h5otg"
                        />
                        <span
                          id="graduation_place_Caption"
                          className="help-block"
                        >
                          Ghi rõ tên trường, địa chỉ nơi trường đóng:
                          xã(phường), huyện (quận), tỉnh (thành phố)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-8  first_col">
                    <div className="">
                      <div className="field_label">
                        7. Năm tốt nghiệp THCS hoặc THPT hoặc tương đương:
                      </div>
                      <div className="field_label_intro">
                        Ghi đủ 4 chữ số của năm tốt nghiệp vào ô
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4  last_col wrap_coll">
                    <div className="wrap_itxs4">
                      <div
                        className="form-group _nam square_input _day flex-row"
                        id="graduation_year_wrap"
                      >
                        <label
                          id="graduation_year_label"
                          htmlFor="graduation_year_register"
                          className="control-label flex-col"
                        >
                          Năm 1<span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_tot_nghiep1" name="nam_tot_nghiep1" value={formData.nam_tot_nghiep1} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="08ec"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _nam square_input _day flex-row"
                        id="graduation_year2_wrap"
                      >
                        <label
                          id="graduation_year2_label"
                          htmlFor="graduation_year2_register"
                          className="control-label flex-col"
                        >
                          Năm 2 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_tot_nghiep2" name="nam_tot_nghiep2" value={formData.nam_tot_nghiep2} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="5dqh6e"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _nam square_input _day flex-row"
                        id="graduation_year3_wrap"
                      >
                        <label
                          id="graduation_year3_label"
                          htmlFor="graduation_year3_register"
                          className="control-label flex-col"
                        >
                          Năm 3 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_tot_nghiep3" name="nam_tot_nghiep3" value={formData.nam_tot_nghiep3} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="hnj5ca"
                          />
                        </div>
                      </div>
                      <div
                        className="form-group _nam square_input _day flex-row"
                        id="graduation_year4_wrap"
                      >
                        <label
                          id="graduation_year4_label"
                          htmlFor="graduation_year4_register"
                          className="control-label flex-col"
                        >
                          Năm 4 <span className="field_required">*</span>
                        </label>
                        <div className=" flex-col flex-grow">
                          <input
                            required=""
                            type="text"
                            className=" form-control"
                            id="nam_tot_nghiep4" name="nam_tot_nghiep4" value={formData.nam_tot_nghiep4} onChange={handleChange}
                            defaultValue=""
                            fdprocessedid="f01gu"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group _cmnd flex-row"
                      id="citizen_identification_wrap"
                    >
                      <label
                        id="citizen_identification_label"
                        htmlFor="citizen_identification_register"
                        className="control-label flex-col"
                      >
                        8. Số CMND/ Thẻ căn cước công dân:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="so_cmnd" name="so_cmnd" value={formData.so_cmnd} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="qsbe1i"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-6  first_col">
                    <div className="form-group flex-row" id="date_range_wrap">
                      <label
                        id="date_range_label"
                        htmlFor="date_range_regiter"
                        className="control-label flex-col"
                      >
                        Ngày cấp:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          // id="input_name_register"
                          // name="input_name_register"
                          defaultValue=""
                          fdprocessedid="5dptv7"
                          id="ngay_cap" name="ngay_cap" value={formData.ngay_cap} onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6  last_col">
                    <div className="form-group flex-row" id="issued_by_wrap">
                      <label
                        id="issued_by_label"
                        htmlFor="issued_by_register"
                        className="control-label flex-col"
                      >
                        Nơi cấp:<span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="noi_cap" name="noi_cap" value={formData.noi_cap} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="86cg7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group  _dia_chi_gui flex-row"
                      id="mailing_address_wrap"
                    >
                      <label
                        id="mailing_address_label"
                        htmlFor="mailing_address_register"
                        className="control-label flex-col"
                      >
                        9. Địa chỉ gửi giấy báo nhập học cho ai, theo địa chỉ
                        nào?
                        <span aria-hidden="true" className="field_required">
                          *
                        </span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="email" name="email" value={formData.email} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="608p8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-6  first_col">
                    <div className="form-group flex-row" id="phone_wrap">
                      <label
                        id="phone_label"
                        htmlFor="phone_register"
                        className="control-label flex-col"
                      >
                        Điện thoại (bắt buộc):
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          data-inputmask="'mask': '[9{*}]'"
                          required=""
                          type="text"
                          className=" form-control"
                          id="dien_thoai" name="dien_thoai" value={formData.dien_thoai} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="uu7mkm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6  last_col">
                    <div className="form-group flex-row" id="parent_phone_wrap">
                      <label
                        id="parent_phone_label"
                        htmlFor="parent_phone_register"
                        className="control-label flex-col"
                      >
                        Điện thoại phụ huynh:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          data-inputmask="'mask': '[9{*}]'"
                          required=""
                          type="text"
                          className=" form-control"
                          id="dien_thoai_phu_huynh" name="dien_thoai_phu_huynh" value={formData.dien_thoai_phu_huynh} onChange={handleChange}
                          defaultValue=""
                          fdprocessedid="qf8mo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div className="">
                      <h2 className="name_base">NGÀNH ĐĂNG KÝ XÉT TUYỂN</h2>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group  nganh_dk_xt flex-row"
                      id="industry_group_wrap"
                    >
                      <label
                        id="findustry_group_label"
                        htmlFor="findustry_group_register_1"
                        className="control-label screen-reader-text sr-only flex-col"
                      >
                        nhóm ngành 1
                      </label>
                      <div className=" flex-col flex-grow">
                        <div className="radio">
                          <label htmlFor="industry_register1">
                            <input
                               type="radio"
                               id="nganh_hoc"
                               name="nganh_hoc"
                               value="Digital Marketing" // Set value directly
                               onChange={handleChange}
                               checked={formData.nganh_hoc === "Digital Marketing"} // Add checked attribute
                            />
                            Digital Marketing{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register2">
                            <input
                               type="radio"
                               id="nganh_hoc"
                               name="nganh_hoc"
                               value=" Thiết kế đồ họa" // Set value directly
                               onChange={handleChange}
                               checked={formData.nganh_hoc === " Thiết kế đồ họa"} // Add checked attribute
                            />
                            Thiết kế đồ họa{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register3">
                            <input
                               type="radio"
                               id="nganh_hoc"
                               name="nganh_hoc"
                               value=" Quản trị khách sạn" // Set value directly
                               onChange={handleChange}
                               checked={formData.nganh_hoc === " Quản trị khách sạn"} // Add checked attribute
                            />
                            Quản trị khách sạn{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register4">
                            <input
                              type="radio"
                              id="nganh_hoc"
                              name="nganh_hoc"
                              value=" Quản trị bán hàng" // Set value directly
                              onChange={handleChange}
                              checked={formData.nganh_hoc === " Quản trị bán hàng"} // Add checked attribute
                            />
                            Quản trị bán hàng{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register5">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value=" Phiên dịch Tiếng Anh thương mại" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === " Phiên dịch Tiếng Anh thương mại"} // Add checked attribute
                           />
                           
                            Phiên dịch Tiếng Anh thương mại{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register6">
                            <input
                            type="radio"
                            id="nganh_hoc"
                            name="nganh_hoc"
                            value="  Quản trị doanh nghiệp" // Set value directly
                            onChange={handleChange}
                            checked={formData.nganh_hoc === " Quản trị doanh nghiệp"} // Add checked attribute
                            />
                            Quản trị doanh nghiệp{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register7">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value="   CNTT- Ứng dụng phần mềm" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === "   CNTT- Ứng dụng phần mềm"} // Add checked attribute
                            />
                            CNTT- Ứng dụng phần mềm{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register8">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value="   Quản lý công nghiệp" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === " Quản lý công nghiệp"} // Add checked attribute
                            />
                            Quản lý công nghiệp{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register9">
                            <input
                              type="radio"
                              id="nganh_hoc"
                              name="nganh_hoc"
                              value="Tiếng Hàn" // Set value directly
                              onChange={handleChange}
                              checked={formData.nganh_hoc === "Tiếng Hàn"} // Add checked attribute
                            />
                            Tiếng Hàn{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register10">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value=" Tiếng Nhật" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === "Tiếng Nhật"} // Add checked attribute
                            />
                            Tiếng Nhật{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register13">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value="  Chăm sóc sắc đẹp" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === "    Chăm sóc sắc đẹp"} // Add checked attribute
                            />
                            Chăm sóc sắc đẹp{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register14">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value="  Logistics" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === "  Logistics"} // Add checked attribute
                            />
                            Logistics{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register15">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value=" Tài chính đầu tư" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === " Tài chính đầu tư"} // Add checked attribute
                            />
                            Tài chính đầu tư{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register16">
                            <input
                             type="radio"
                             id="nganh_hoc"
                             name="nganh_hoc"
                             value="  Tiếng Trung" // Set value directly
                             onChange={handleChange}
                             checked={formData.nganh_hoc === "  Tiếng Trung"} // Add checked attribute
                            />
                            Tiếng Trung{" "}
                          </label>
                        </div>
                        <div className="radio">
                          <label htmlFor="industry_register17">
                            <input
                              type="radio"
                              id="nganh_hoc"
                              name="nganh_hoc"
                              value="  Công nghệ ô tô" // Set value directly
                              onChange={handleChange}
                              checked={formData.nganh_hoc === " Công nghệ ô tô"} // Add checked attribute
                            />
                            Công nghệ ô tô{" "}
                          </label>
                        </div>
                        {/*  <div class="radio">
          <label data-label="DƯỢC" for="industry_register2">
              <input type="radio" id="industry_register2" class="fld_2189244_1" name="industry_register" value="DƯỢC" > DƯỢC
          </label>
      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-6  first_col">
                    <div
                      className="form-group  ca_hoc flex-row"
                      id="lesson_label_wrap"
                    >
                      <label
                        id="lesson_label"
                        htmlFor="lesson_label_register"
                        className="control-label flex-col"
                      >
                        Ca học:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <label
                          className="checkbox-inline"
                          htmlFor="lesson_register_01"
                        >
                          <input
                            type="checkbox"
                            id="lesson_register_01"
                            className="lesson_register option-required"
                            name="lesson_register[op01]"
                            defaultValue="Ban ngày"
                          />
                          Ban ngày
                        </label>
                        <label
                          className="checkbox-inline"
                          htmlFor="lesson_register_op02"
                        >
                          <input
                            type="checkbox"
                            data-label="Buổi tối"
                            id="lesson_register_op02"
                            className="lesson_register option-required"
                            name="lesson_register[op02]"
                            defaultValue="Buổi tối"
                          />
                          Buổi tối
                        </label>
                      </div>
                    </div>
                    <div
                      className="form-group  ca_hoc flex-row"
                      id="training_system_wrap"
                    >
                      <label
                        id="training_system_label"
                        htmlFor="training_system_register"
                        className="control-label flex-col"
                      >
                        Hệ đào tạo:
                        <span className="field_required">*</span>
                      </label>
                      <div className="flex-col flex-grow">
                        <label
                          className="checkbox-inline"
                          htmlFor="training_system_op01"
                        >
                          <input
                            type="checkbox"
                            id="training_system_op01"
                            className="training_system option-required"
                            name="training_system[op01]"
                            defaultValue="THCS"
                          />
                          THCS
                        </label>
                        <label
                          className="checkbox-inline"
                          htmlFor="training_system_op02"
                        >
                          <input
                            type="checkbox"
                            id="training_system_op02"
                            className="training_system option-required"
                            name="training_system[op02]"
                            defaultValue="THPT"
                          />
                          THPT
                        </label>
                        <label
                          className="checkbox-inline"
                          htmlFor="training_system_op03"
                        >
                          <input
                            type="checkbox"
                            id="training_system_op03"
                            className="training_system option-required"
                            name="training_system[op03]"
                            defaultValue="Văn bằng 2"
                          />
                          Văn bằng 2
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6  last_col">
                    <div
                      className="form-group flex-row"
                      id="entrance_exam_wrap"
                    >
                      <label
                        id="entrance_exam_label"
                        htmlFor="entrance_exam_register"
                        className="control-label flex-col"
                      >
                        Đợt Xét Tuyển:
                        <span className="field_required">*</span>
                      </label>
                      <div className=" flex-col flex-grow">
                        <input
                          required=""
                          type="text"
                          className=" form-control"
                          id="entrance_exam_register"
                          name="entrance_exam_register"
                          defaultValue=""
                          fdprocessedid="f6akwn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div className=" cam_ket">
                      <p style={{ textAlign: "center" }}>
                        <i>
                          <b>
                            Tôi cam đoan những lời khai trong phiếu ĐKXT này là
                            đúng sự thật, nếu sai tôi chấp chịu xử lý theo Quy
                            chế tuyển sinh.
                          </b>
                        </i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row_item ">
                  <div className="col-xs-12  single">
                    <div
                      className="form-group _dang_ki flex-row"
                      id="submit_register_wrap"
                    >
                      <div className=" flex-col flex-grow">
                        <input
                          className="btn btn-default"
                          type="submit"
                          name="submit_register"
                          id="submit_register"
                          defaultValue="Đăng Ký"
                          fdprocessedid="n693aa"
                        />
                      </div>
                    </div>
                    <input
                      className="button_trigger_1"
                      type="hidden"
                      name="submit_register_btn"
                      id="submit_register_btn"
                      defaultValue=""
                    />
                  </div>
                </div>
                <input type="hidden" name="module" defaultValue="users" />
                <input type="hidden" name="view" defaultValue="users" />
                <input
                  type="hidden"
                  name="task"
                  defaultValue="buy_fast_save_job2"
                />
                <input type="hidden" name="group3" defaultValue={1} />
                <input type="hidden" name="Itemid" defaultValue={10} />
                <input
                  type="hidden"
                  name="return"
                  defaultValue="L2Rhbmcta3kteGV0LXR1eWVuLmh0bWw="
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
  {/* end.Content */}
  <footer className="section" id="wrap1_footer">
    <div
      className="back_footer lazy after-lazy"
      style={{
        backgroundImage:
          'url("https://caodangvietmyhanoi.edu.vn/images/config/footer_back_1649069803.jpg.webp")',
        display: "block",
        opacity: 1
      }}
    >
      {" "}
      <div className="container">
        <div className="wrap_footer">
          <div className="ctn_logo">
            <div className="logo_footer">
              <div className="company_footer">Cao đẳng Việt Mỹ Hà Nội </div>
              <div className="address_bottom cls">
                <div className="item_add">
                  <div className="title">Trụ sở Hà Nội</div>
                  <div className="box_content">
                    <div className="address">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 34.398 34.398"
                        style={{ enableBackground: "new 0 0 34.398 34.398" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g id="c28_geolocalization">
                            <path
                              d="M17.202,0C10.749,0,5.515,5.197,5.515,11.607c0,3.281,3.218,9.156,3.218,9.156l8.039,13.635l8.386-13.477
                  c0,0,3.726-5.605,3.726-9.314C28.883,5.197,23.653,0,17.202,0z M17.147,18.002c-3.695,0-6.688-2.994-6.688-6.693
                  c0-3.693,2.993-6.686,6.688-6.686c3.693,0,6.69,2.992,6.69,6.686C23.837,15.008,20.84,18.002,17.147,18.002z"
                            />
                            <polygon
                              points="18.539,7.233 15.898,7.233 15.898,10.242 12.823,10.242 12.823,12.887 15.898,12.887 15.898,15.985 
                  18.539,15.985 18.539,12.887 21.576,12.887 21.576,10.242 18.539,10.242 		"
                            />
                          </g>
                        </g>
                        <g></g>
                      </svg>
                      Tòa nhà AMDI Group, Số 1 phố Trịnh Văn Bô, Phường Phương
                      Canh, Q. Nam Từ Liêm, TP. Hà Nội{" "}
                    </div>
                    <div className="phone">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 578.106 578.106"
                        style={{ enableBackground: "new 0 0 578.106 578.106" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M577.83,456.128c1.225,9.385-1.635,17.545-8.568,24.48l-81.396,80.781
                      c-3.672,4.08-8.465,7.551-14.381,10.404c-5.916,2.857-11.729,4.693-17.439,5.508c-0.408,0-1.635,0.105-3.676,0.309
                      c-2.037,0.203-4.689,0.307-7.953,0.307c-7.754,0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584
                      c-25.096-10.404-53.553-26.012-85.376-46.818c-31.823-20.805-65.688-49.367-101.592-85.68
                      c-28.56-28.152-52.224-55.08-70.992-80.783c-18.768-25.705-33.864-49.471-45.288-71.299
                      c-11.425-21.828-19.993-41.616-25.705-59.364S4.59,177.362,2.55,164.51s-2.856-22.95-2.448-30.294
                      c0.408-7.344,0.612-11.424,0.612-12.24c0.816-5.712,2.652-11.526,5.508-17.442s6.324-10.71,10.404-14.382L98.022,8.756
                      c5.712-5.712,12.24-8.568,19.584-8.568c5.304,0,9.996,1.53,14.076,4.59s7.548,6.834,10.404,11.322l65.484,124.236
                      c3.672,6.528,4.692,13.668,3.06,21.42c-1.632,7.752-5.1,14.28-10.404,19.584l-29.988,29.988c-0.816,0.816-1.53,2.142-2.142,3.978
                      s-0.918,3.366-0.918,4.59c1.632,8.568,5.304,18.36,11.016,29.376c4.896,9.792,12.444,21.726,22.644,35.802
                      s24.684,30.293,43.452,48.653c18.36,18.77,34.68,33.354,48.96,43.76c14.277,10.4,26.215,18.053,35.803,22.949
                      c9.588,4.896,16.932,7.854,22.031,8.871l7.648,1.531c0.816,0,2.145-0.307,3.979-0.918c1.836-0.613,3.162-1.326,3.979-2.143
                      l34.883-35.496c7.348-6.527,15.912-9.791,25.705-9.791c6.938,0,12.443,1.223,16.523,3.672h0.611l118.115,69.768
                      C571.098,441.238,576.197,447.968,577.83,456.128z"
                            />
                          </g>
                        </g>
                      </svg>
                      <a
                        href="tel:024 7305 1212"
                        title="Gọi ngay: 024 7305 1212"
                        className=""
                      >
                        024 7305 1212
                      </a>
                    </div>
                    <div className="email">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007
                      c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106
                      C512,99.077,510.301,92.593,507.496,86.728z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211
                      L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z"
                            />
                          </g>
                        </g>
                      </svg>
                      tuyensinh.hn@caodangvietmy.edu.vn{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="top-ft cls">
              <div className="top-ft-r itm_r">
                <div className="menu_footer">
                  <ul className="menu-bottom">
                    <li className="  level0  first-item">
                      <span className="click-mobile" data-id="menu-sub1" />{" "}
                      <span data-id="item_1"> HỆ ĐÀO TẠO </span>{" "}
                      <ul id="menu-sub1">
                        <li className="  level1  first-sitem ">
                          <a
                            href="https://caodangvietmyhanoi.edu.vn/tuyen-sinh-cao-dang-pc5.html"
                            title="Cao đẳng"
                          >
                            {" "}
                            Cao đẳng{" "}
                          </a>
                        </li>
                        <li className="  level1  mid-sitem ">
                          <a
                            href="https://caodangvietmyhanoi.edu.vn/tuyen-sinh-cao-dang-he-9--pc1.html"
                            title="Cao đẳng 9+"
                          >
                            {" "}
                            Cao đẳng 9+{" "}
                          </a>
                        </li>
                        <li className="  level1  mid-sitem ">
                          <a
                            href="https://caodangvietmyhanoi.edu.vn/tuyen-sinh-khoa-hoc-ngan-han-pc6.html"
                            title="Đào tạo ngắn hạn"
                          >
                            {" "}
                            Đào tạo ngắn hạn{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="  level0 menu-item">
                      <span className="click-mobile" data-id="menu-sub5" />{" "}
                      <span data-id="item_5"> Chương trình đào tạo </span>{" "}
                      <ul id="menu-sub5">
                        <li className="  level1  first-sitem ">
                          <a
                            href="https://caodangvietmyhanoi.edu.vn/cac-nganh-cao-dang-dang-tuyen-sinh-pc5.html"
                            title="Cao đẳng chính quy"
                          >
                            {" "}
                            Cao đẳng chính quy{" "}
                          </a>
                        </li>
                        <li className="  level1  mid-sitem ">
                          <a
                            href="https://caodangvietmyhanoi.edu.vn/tuyen-sinh-trung-cap-he-chinh-quy-pc1.html"
                            title="Cao đẳng 9+"
                          >
                            {" "}
                            Cao đẳng 9+{" "}
                          </a>
                        </li>
                      </ul>
                    </li>{" "}
                  </ul>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
          <div className="facebook">
            <div className="company_footer">Kết nối</div>
            <div className="top-ft-r itm_r">
              <div className="share_ft item">
                <div className="share_fast_small">
                  <div className="fb share_item">
                    <a
                      className="facebook-icon"
                      href="https://www.facebook.com/cdvietmyhanoi/"
                      title="Link Facebook"
                      rel="nofollow"
                      target="_blink"
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 264 512"
                        className="svg-inline--fa fa-facebook-f fa-w-9"
                      >
                        <path
                          d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"
                          className=""
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="tw share_item">
                    <a
                      className="twitter-icon"
                      href="https://www.instagram.com/"
                      title="Link twitter"
                      rel="nofollow"
                      target="_blink"
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-twitter fa-w-16"
                      >
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          className=""
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="prin share_item">
                    <a
                      className="pinterest-icon"
                      href="https://www.instagram.com/"
                      title="Link Pinterest"
                      rel="nofollow"
                      target="_blank"
                    >
                      <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 310.05 310.05"
                        style={{ enableBackground: "new 0 0 310.05 310.05" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            id=""
                            d="M245.265,31.772C223.923,11.284,194.388,0,162.101,0c-49.32,0-79.654,20.217-96.416,37.176
      c-20.658,20.9-32.504,48.651-32.504,76.139c0,34.513,14.436,61.003,38.611,70.858c1.623,0.665,3.256,1,4.857,1
      c5.1,0,9.141-3.337,10.541-8.69c0.816-3.071,2.707-10.647,3.529-13.936c1.76-6.495,0.338-9.619-3.5-14.142
      c-6.992-8.273-10.248-18.056-10.248-30.788c0-37.818,28.16-78.011,80.352-78.011c41.412,0,67.137,23.537,67.137,61.425
      c0,23.909-5.15,46.051-14.504,62.35c-6.5,11.325-17.93,24.825-35.477,24.825c-7.588,0-14.404-3.117-18.705-8.551
      c-4.063-5.137-5.402-11.773-3.768-18.689c1.846-7.814,4.363-15.965,6.799-23.845c4.443-14.392,8.643-27.985,8.643-38.83
      c0-18.55-11.404-31.014-28.375-31.014c-21.568,0-38.465,21.906-38.465,49.871c0,13.715,3.645,23.973,5.295,27.912
      c-2.717,11.512-18.865,79.953-21.928,92.859c-1.771,7.534-12.44,67.039,5.219,71.784c19.841,5.331,37.576-52.623,39.381-59.172
      c1.463-5.326,6.582-25.465,9.719-37.845c9.578,9.226,25,15.463,40.006,15.463c28.289,0,53.73-12.73,71.637-35.843
      c17.367-22.418,26.932-53.664,26.932-87.978C276.869,77.502,265.349,51.056,245.265,31.772z"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="zl share_item">
                    <a
                      className="zalo-icon"
                      href="https://oa.zalo.me/4025500906913966943"
                      title="Link zalo"
                      rel="nofollow"
                      target="_blink"
                    >
                      <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 512.007 512.007"
                        style={{ enableBackground: "new 0 0 512.007 512.007" }}
                        xmlSpace="preserve"
                      >
                        <circle
                          style={{ fill: "#E6EFF4" }}
                          cx="256.003"
                          cy="256.003"
                          r="256.003"
                        />
                        <path
                          style={{ fill: "#B6D1DD" }}
                          d="M385.581,107.256L385.581,107.256c-5.101-5.102-12.148-8.258-19.932-8.258H146.354
    c-15.567,0-28.187,12.619-28.187,28.187v219.295c0,7.785,3.156,14.832,8.258,19.933l0,0l145.105,145.105
    C405.682,503.489,512.001,392.169,512.001,256c0-8.086-0.393-16.081-1.126-23.976L385.581,107.256z"
                        />
                        <path
                          style={{ fill: "#41A0D7" }}
                          d="M365.647,98.999H146.353c-15.567,0-28.187,12.619-28.187,28.187v219.294
    c0,15.567,12.619,28.187,28.187,28.187h43.971v38.334l53.377-38.334h121.946c15.567,0,28.187-12.619,28.187-28.187V127.185
    C393.834,111.618,381.215,98.999,365.647,98.999z"
                        />
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M393.834,340.942v-44.17c-5.73-5.85-13.714-9.484-22.55-9.484h-64.188l86.738-118.175V131.24
    c-4.466-3.988-10.304-6.31-16.5-6.31h-131.2c-17.435,0-31.57,14.135-31.57,31.57s14.135,31.57,31.57,31.57h55.168L212,311.089
    c-5.474,7.539-6.255,17.512-2.024,25.812c4.231,8.3,12.76,13.526,22.077,13.526h139.232
    C380.121,350.426,388.104,346.792,393.834,340.942z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="yt share_item">
                    <a
                      className="youtube-icon"
                      href="https://www.youtube.com/channel/UCkMZWDj4Z06fJ-eU5TYhQpg"
                      title="Link youtube"
                      rel="nofollow"
                      target="_blink"
                    >
                      <svg
                        version="1.1"
                        width="15px"
                        height="15px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 310 310"
                        style={{ enableBackground: "new 0 0 310 310" }}
                        xmlSpace="preserve"
                      >
                        <g id="XMLID_822_">
                          <path
                            id="XMLID_823_"
                            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
  C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
  C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
  c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
  c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
  C204.394,157.263,202.325,160.684,199.021,162.41z"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="menu-chinh-sach">
          <ul className="menu-bottom">
            <li className="  level0  first-item">
              <span className="click-mobile" data-id="menu-sub1" />{" "}
              <a
                href="https://caodangvietmyhanoi.edu.vn/chinh-sach-quyen-rieng-tu"
                title="Chính sách quyền riêng tư"
              >
                {" "}
                Chính sách quyền riêng tư{" "}
              </a>
            </li>
            <li className="  level0 menu-item">
              <span className="click-mobile" data-id="menu-sub2" />{" "}
              <a
                href="https://caodangvietmyhanoi.edu.vn/chinh-sach-su-dung-ct14575.html"
                title="Chính sách sử dụng"
              >
                {" "}
                Chính sách sử dụng{" "}
              </a>
            </li>{" "}
          </ul>
          <div className="clear" />
        </div>
      </div>
    </div>
    <div className="footer_share">
      <div className="container">
        <div className="footer_item cls">
          <div className="cpy_ft item">
            Copyright 2022 © caodangvietmyhanoi.edu.vn{" "}
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div
    id="fixed-bar"
    style={{ position: "fixed", bottom: 30, display: "none" }}
  >
    <div id="bar-inner">
      <a className="go-top" href="#page-wrapper" title="Back to top"></a>
    </div>
  </div>
</>

 
  
  );
};

export default Header;
