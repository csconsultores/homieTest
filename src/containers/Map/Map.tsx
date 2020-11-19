import React from 'react';

import { connect } from 'react-redux';
import MapSection from '../../components/MapSection/MapSection';
//import { MapSection } from '../../components/MapSection/MapSection';
interface IProps {
    dispatch: any;
    locations: any;
}

export class Map extends React.Component<IProps> {

    render() {
        return (
            <React.Fragment>
                <MapSection locations={this.props.locations}/>
            </React.Fragment> 
        )
    }
}

const mapState = (state: any) => {
    return {
      locations: state.locations
    }
  }
  
  export default connect(mapState)(Map);
