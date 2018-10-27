import React from 'react';
import {connect } from 'react-redux';
class Header extends React.PureComponent {


    render() {
        console.log('gg', this.props);
        return (
            <p>
                Whatever
            </p>
        )
    }
}
const mapStateToProps = (state) => {
    state
}

export default connect(mapStateToProps)(Header);