import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

ListItem.propTypes = {
    children: PropTypes.string.isRequired
};

export default ListItem;
