import React, { Component } from 'react'

class KeyboardShortcuts extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        // Check if Ctrl (or Meta on Mac) + K was pressed
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            // Perform your custom action here
            alert('Ctrl + K was pressed!');
            // this.triggerSearch();
        }
    };

    // triggerSearch = () => {
    //     console.log('Trigger Search...!!!');
    // }

    render() {
        return
        <div>
            <input
                type="text"
                placeholder="Search..."
                ref={(input) => (this.searchInput = input)}     // Ref for focusing the input
            />
        </div>
    }
}

export default KeyboardShortcuts;
