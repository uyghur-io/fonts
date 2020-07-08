import React from 'react';
import './App.css';
import UkijTuz from './components/UkijTuz.js'
import UKIJArabic from './components/UKIJArabic.js'
import UKIJBasma from './components/UKIJBasma.js'
import UKIJBasmaAqBold from './components/UKIJBasmaAqBold.js'
import UKIJChiwerKesme from './components/UKIJChiwerKesme.js'
import UKIJDiwani from './components/UKIJDiwani.js'
import UKIJEkran from './components/UKIJEkran.js'
import UKIJJelliy from './components/UKIJJelliy.js'
import UKIJKesme from './components/UKIJKesme.js'

function App() {
  return (
    <div className="App">
      <UkijTuz />
      <UKIJArabic />
      <UKIJBasma />
      <UKIJBasmaAqBold />
      <UKIJChiwerKesme />
      <UKIJDiwani />
      <UKIJEkran />
      <UKIJJelliy />
      <UKIJKesme />
    </div>
  );
}

export default App;