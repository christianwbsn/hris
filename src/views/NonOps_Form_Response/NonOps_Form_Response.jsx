import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
 import Table from 'variables/TableNonopsForm.jsx';
// import Table from 'variables/Table.jsx';
// import {dataSetNonopsForm} from 'variables/Variables.jsx';

class NonOps_Form_Response extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Non-Ops Form Response"
                                category="data for Non-Ops Form Response"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table />
                                }
                            />
                        </Col>


                    </Row>
                </Grid>
            </div>
        );
    }
}

export default NonOps_Form_Response;
