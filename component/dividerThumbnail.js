'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

export default class DividerThumbnail extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
  <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button host</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
		);
	}
}