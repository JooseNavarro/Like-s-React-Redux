import React, { Component } from 'react';
import LikeComponent from "../component/home.component";

class LikeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.addLike = this.addLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
    }

    componentWillMount(){
        const { store } = this.props;

        store.subscribe(() => {
            const { likeUser } = store.getState();
            this.setState({counter: likeUser})
        });

    }

    addLike(){
        const { store } = this.props;

        store.dispatch({ type: 'LIKE' });
    }

    removeLike(){
        const { store } = this.props;

        store.dispatch({ type: 'SAD' });
    }
    render() {
        return <LikeComponent
            addLike={this.addLike}
            removeLike={this.removeLike}
            counter={this.state.counter}
        />
    }
}

export default LikeContainer;
