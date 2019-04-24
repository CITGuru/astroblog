import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Banner from '../Components/Banner';
import BreadBanner from '../Components/BreadBanner';
import Container from '../Layouts/Container';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BreadBanner />
        <Container />
      </div>
    )
  }
}

Home.protoTypes = {
    postsLoading: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
