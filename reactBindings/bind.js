import React from 'react';

function bind(componentToBind) {
    return class extends React.Component {
        componentDidMount() {
            const {silo} = this.context.silo;
            this.unsubscribe = silo.subscribe(this.siloRender, componentToBind.prototype.constructor.name);
        }

        render() {
            const {silo} = this.context.silo;
            console.log(componentToBind.contextTypes);
            return (<componentToBind {...(!!updatedState && updatedState || {})}/>)
        }

        siloRender(updatedState) {
            this.render();
        }

        componentWillUnmount() {
            this.unsubscribe();
        }
    }
}