import React from 'react';
import Header from './Header.js';
import PersonalData from './PersonalData.js';
import Presentation from './Presentation.js';
import ProfesionalStudies from './ProfessionalStudies.js';
import Philosophy from './Philosophy.js';
import Skills from './Skills.js';
import WorkExperience from './WorkExperience.js';
import Certifications from './Certifications.js';

import data from '../data.json';


const App = () => {
  return (
    <div className="container-fluid d-flex flex-wrap p-0">
      <section className="mx-auto px-0 col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"> 
        <Header />
        <PersonalData data={data} />
        <Presentation data={data} />
        <WorkExperience data={data} />
      </section>
      <section className="mx-0 px-0 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
        <Philosophy data={data} />
        <ProfesionalStudies data={data} />
        <Skills data={data} />
        <Certifications data={data} />
      </section>
    </div>
  )
}

export default App;