import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-auto" style={{backgroundColor: '#75A47F', position: 'relative',marginTop: '50px'}}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center relative">
        <div className="w-full sm:w-1/3 mb-6">
          <img src={Logo} className="w-32 absolute top-3 left-10 transform -translate-x-1/2 -translate-y-full" alt="Logo" />
          <div>
          <h1 style={{ color: 'white', fontSize: '24px', fontFamily: 'Plus Jakarta Sans', fontWeight: '800', lineHeight: '1' }}>Comment</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet tend
              to repeat.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/6 mb-6">
          <h4 className="font-bold mb-2">NAVIGASI</h4>
          <ul>
            <li>Kebijakan Privasi</li>
            <li>Syarat dan Kebijakan</li>
            <li>Kebijakan Refund</li>
            <li>Daftar Volunteer</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/6 mb-6">
          <h4 className="font-bold mb-2">IKUTI KAMI</h4>
          <ul>
            <li>instagram</li>
            <li>X</li>
            <li>Tiktok</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/6 mb-6">
          <h4 className="font-bold mb-2">Hubungi Kami</h4>
          <ul>
            <li>Jalan Contoh No. 123</li>
            <li>Email: contoh@example.com</li>
            <li>Telepon: 08123456789</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-8 pt-6 text-center">
        <p className="mb-4">Copyright © 2022. All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <i className="icon-class-for-icon1"></i>
          <i className="icon-class-for-icon2"></i>
          <i className="icon-class-for-icon3"></i>
          <i className="icon-class-for-icon4"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
