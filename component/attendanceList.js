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
    const parent = {position: "relative"};
		return (
      <Grid style={parent}>
        <Row>
        {this.renderAttendances(attendances)}
        </Row>
        {this.renderLoadingNow(this.props.isLoading)}
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
  renderLoadingNow(isLoading) {
    const backgroundStyle = {
      zIndex: '1500',
      position: 'absolute',
      background: '#000000',
      filter: 'alpha(opacity=0)',
      display: 'block',
      opacity: 0.8,
      top: '0%',
      right: '0%',
      bottom: '0%',
      left: '0%'
    };
    const loadingImgStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto'
    };

    if(isLoading) {
      return (
        <div style={backgroundStyle}>
          <img border="0" src="loading.gif" style={loadingImgStyle} />
        </div>
      );
    } else {
      return (
        <div />
      )
    }
  }
}
AttendanceList.defaultProps = {}