import * as React from "react";
import { inject, observer } from 'mobx-react';

/**
 * Components
 */

import Button from "../../components/Button/";

/** 
 * Style
 */

const s = require("./style.scss");

@inject("timerStore")
@observer
export default class TimerView extends React.Component<any, {}> {
    render() {
        return (
            <div className={s.timerView}>
                <div>
                    Timer: {this.props.timerStore.timer}
                </div>
                <Button onClick={this.onReset}>
                    Resetar timer
                </Button>
            </div>
        );
     }

     onReset = () => {
         this.props.timerStore.resetTimer();
     }
};