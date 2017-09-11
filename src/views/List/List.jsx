import React from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'react-flexbox-grid';
import range from 'lodash/range';
import ListItem from './ListItem';

const listItems = range(5);

@observer
class List extends React.Component {
    render() {
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
    }
}
export default List;
