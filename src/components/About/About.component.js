import React from 'react';

import HeadlineComponent from '../Headline/Headline.component';
import './About.css'

interface Props {
}

class About extends React.Component {
  render() {
    return (
      <div className="about"> 
          <HeadlineComponent title="About"/>
      </div>
    )
  }
}
export default About;