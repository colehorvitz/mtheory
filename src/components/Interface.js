import { Component } from "react";
import generate from '../generator.js'

const SPACE_DOWN = 32

class Interface extends Component {

    constructor(props){
        super(props);
        this.state={
            category: "ALL",
            dir: generate("ALL"),
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown)
    }

    render() {
        return (<div id="app-wrap">
            <div id="toggle-bar">
                <div className={this.state.category==="SCALES" ? 'active-cell' : 'toggle-cell'} onClick={() => this.setCategory("SCALES")}>
                    <p>SCALES</p>
                </div>
                <div className={this.state.category==="CHORDS" ? 'active-cell' : 'toggle-cell'}  onClick={() => this.setCategory("CHORDS")}>
                    <p>CHORDS</p>
                </div>
                <div className={this.state.category==="ARPEGGIOS" ? 'active-cell' : 'toggle-cell'} onClick={() => this.setCategory("ARPEGGIOS")}>
                    <p>ARPEGGIOS</p>
                </div>
                <div className={this.state.category==="INVERSIONS" ? 'active-cell' : 'toggle-cell'}  onClick={() => this.setCategory("INVERSIONS")}>
                    <p>INVERSIONS</p>
                </div>
                <div className={this.state.category==="ALL" ? 'active-cell' : 'toggle-cell'}  onClick={() => this.setCategory("ALL")}>
                    <p>ALL</p>
                </div>
            </div>
            <div id="directive-box"><p>{this.state.dir}</p></div>
            <div id="help-box">
                <p>Press <span>SPACE</span> to generate a new instruction.</p>
            </div>
        </div>);
    }

    setCategory = (s) => {
        if (s === this.state.category) return
        this.setState({
            category: s,
            dir: generate(s),
        })
    }

    _handleKeyDown = (event) => {
        switch (event.keyCode) {
            case SPACE_DOWN:
                this.setState({
                    dir: generate(this.state.category),
                })
                break;
            default:
                break;
        }
    }



}

export default Interface;