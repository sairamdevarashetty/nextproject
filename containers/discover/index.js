
import React from 'react';
import { connect } from 'react-redux'
import { getDiscoverModule } from './dynamicStore';
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Head from 'next/head'
import Header from '../../components/header';
import StaticImage from '../../components/header/StaticImage';
import FeaturedPlaces from '../../components/FeaturedPlaces';

import actions from './actions';

function NoSSH(props) {
  if(typeof(window) === "undefined") {
    return <div>Loading....</div>
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

class DiscoverContainer extends React.Component {

  componentDidMount() {
    console.log("this.props", this.props);
    this.props.fetchDiscoverPhotos();
  }

  render() {
    return (
      <DynamicModuleLoader modules={[getDiscoverModule()]}>
        <div id="page-top">
          <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <StaticImage />
          <FeaturedPlaces />
        </div> 
       </DynamicModuleLoader>
    )
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ...state
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDiscoverPhotos: () => { dispatch(actions.fetchDiscoverPhotosApi()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverContainer)