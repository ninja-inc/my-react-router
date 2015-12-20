'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

export default class AttendanceList extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
    let attendances = this.props.attendances;

		return (
      <Grid>
        <Row>
        {this.renderAttendances(attendances)}
        </Row>
      </Grid>
		);
	}
  renderAttendances(attendances) {
    return attendances.map(attendance => {
      return (
        <Col xs={6} md={4}>
          <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png">
            <h3>{attendance.name}</h3>
            <p>{attendance.status}</p>
            <p>{attendance.reason}</p>
            <p>{attendance.updateDate}</p>
            <p>
              <Button bsStyle="default">Edit</Button>
            </p>
          </Thumbnail>
        </Col>
      );
    });
  }
}
AttendanceList.defaultProps = {}