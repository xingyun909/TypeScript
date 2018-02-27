import * as React from "react";

import {Hello} from "./components/Hello";
import Greeting from "./components/greeting";
export interface Props extends React.Props < App > {

}

export default class App extends React.Component < Props, {} > {
    render() {
        return (
            <div>
                <Hello compiler = "TypeScript" framework = "React" />
                <Greeting name={'lily'} enthusiasmLevel={4}/>
            </div>
        )
    }
}