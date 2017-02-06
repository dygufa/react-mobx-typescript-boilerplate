import * as React from "react";
import { inject, observer } from 'mobx-react';

@inject("timerStore")
@observer
export default class TimerView extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.timerStore.timer}
                </button>
            </div>
        );
     }

     onReset = () => {
         this.props.timerStore.resetTimer();
     }
};