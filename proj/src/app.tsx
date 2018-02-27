import * as React from "react";

import {Hello} from "./components/Hello";
import Greeting from "./components/greeting";


export default class App extends React.Component < {}, {} > {
    render() {
        return (
            <div>
                <Hello compiler = "TypeScript" framework = "React" />
                {/* <Greeting name={'lily'}/> */}
            </div>
        )
    }
}