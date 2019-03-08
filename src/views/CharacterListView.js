import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from "../actions";

class CharacterListView extends React.Component {
    
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        if( this.props.fetching ) {
            // return something here to indicate that you are fetching data
        }
        return (
            <div className="CharactersList_wrapper">
                <CharacterList characters={ this.props.characters } />
            </div>
        );
    }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
    debugger;
    return {
        characters: state.charsReducer.characters,
        fetching: state.charsReducer.fetching
    };
};

export default connect(
    mapStateToProps,
    {
        fetchData
    }
)( CharacterListView );
