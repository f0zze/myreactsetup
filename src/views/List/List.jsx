import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import range from 'lodash/range';
import ListItem from './ListItem';

const listItems = range(5);

const List = () => {
    return (
        <Row>
            {listItems.map(item =>
                <Col md={3}>
                    <ListItem>
                        {`Item ${item}`}
                    </ListItem>
                </Col>
            )}
        </Row>
    );
};

export default List;
