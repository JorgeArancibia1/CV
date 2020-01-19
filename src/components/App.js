import React from 'react';
import Header from './Header.js';
import PersonalData from './PersonalData.js';
import data from '../../data.json';
import Presentation from './Presentation.js';
import ProfesionalStudies from './ProfessionalStudies.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import WorkExperience from './WorkExperience.js';
import Certifications from './Certifications.js';

const App = () => {
  return (
    <div className="container-fluid d-flex flex-wrap p-0">
      <section className="mx-auto px-0 col-12 col-sm-12 col-md col-lG col-xl"> 
        <Header />
        <PersonalData data={data} />
        <Contact data={data} />
        <Skills data={data} />
      </section>
      <section className="mx-0 px-0 col-12 col-sm-12 col-md col-lg col-xl">
        <Presentation data={data} />
        <ProfesionalStudies data={data} />
        <WorkExperience data={data} />
        <Certifications data={data} />
      </section>
    </div>
  )
}

export default App;