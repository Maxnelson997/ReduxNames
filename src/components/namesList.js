import React, { Component } from 'react';

import * as actions from '../actions';
import { connect } from 'react-redux';

class NamesList extends Component {

    fetchItems() {
        this.props.fetchItems()
    }

    render() {
    
        return (
          <ul>
                {this.props.namesToRender.map( (name, index) => <li key={index} className="name-item">{name}</li> )}
                {/* {this.state.defaultNames.map( (name, index) => <li key={index} className="name-item default">{name}</li> )} */}
                <a onClick={() => this.fetchItems() }>Fetch</a>
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
        namesToRender: state.names.instructors
    }
}

export default connect(mapStateToProps, actions)(NamesList);