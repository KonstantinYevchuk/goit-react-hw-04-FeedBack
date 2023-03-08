// import PropTypes from 'prop-types';
import { SectionEl, Title } from './Section.slyled'; 
// import React from 'react';

export const Section = ({title, children}) => {
    return (
        <SectionEl>
        <Title>{title}</Title>
        {children}
        </SectionEl>
    )
}

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.object.isRequired
// }