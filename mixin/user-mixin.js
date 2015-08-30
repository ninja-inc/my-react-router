var React = require('react'),
    User = require('../component/user'),
    {Jumbotron, Col} = require('react-bootstrap')
;

module.exports = {
  getDefaultProps() {
    return {
      params: {
        users: []
      }
    };
  },
  renderUser() {
  	console.log(JSON.stringify(this.props.params));
    return this.props.params.users.users.map( user => {
      return (
        <Col md={6} md={6} key={user.id}>
          <Jumbotron>
            <User id={user.id} />
            <p>{user.name}</p>
          </Jumbotron>
        </Col>
      );
    });
  }
};