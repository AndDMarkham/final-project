import React from 'react';
import Searchbar from './Searchbar';
import Map from '../Map.js';
import { Container, Row, Col } from 'reactstrap';

const Search = props => {
    return (
        <Row>
            <Col sm="12" md="6"><Searchbar /></Col>
                
        </Row>
    )
}

export default Search;