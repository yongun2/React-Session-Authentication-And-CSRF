import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/templates/AuthTemplate.css';

function AuthTemplate({children}) {
    return (
        <div className={"auth-template"}>
            {children}
        </div>
    );
}

AuthTemplate.propTypes = {
    children: PropTypes.objectOf(React.Component),
};

export default AuthTemplate;
