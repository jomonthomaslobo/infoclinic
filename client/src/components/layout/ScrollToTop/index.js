import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname || this.props.location.search !== prevProps.location.search) {
            document.body.scrollTop = 0;
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);