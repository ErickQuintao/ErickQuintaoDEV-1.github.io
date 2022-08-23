import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import './App.css';
class SectionMain extends React.Component {
    render(){
        return(
            <div>
        <SectionOne />
		<SectionTwo />
		<SectionThree />
        </div>
        );
    }
}
export default SectionMain