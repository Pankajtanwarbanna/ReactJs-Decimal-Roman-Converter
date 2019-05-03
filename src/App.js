import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            decimal : '',
            error : '',
            roman : ''
        };

        this.convertRoman = this.convertRoman.bind(this);
    };

    convertRoman(e) {

        if(isNaN(e.target.value)) {
            this.setState({ error : 'Please enter a valid number.' });
        } else {
            this.setState({ error : '' });
            this.setState({ roman : '' });

            if(e.target.value === '0') {
                this.setState({ error : 'Value must be in range 1 to 1000.' });
            } else if (e.target.value === ''){
                this.setState({ roman : ''});
            } else {
                //console.log(e.target.value);
                //console.log(DecimalToRoman(e.target.value));
                this.setState({ roman : DecimalToRoman(e.target.value) })
            }
        }

        this.setState({ decimal : e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="frame">
                    <div className="nav">
                        <ul className="links">
                            <li className="signin-active"><a className="btn">Decimal to Roman Converter</a></li>
                        </ul>
                    </div>

                    <form className="form-signin">
                        <label>Decimal </label>
                        <input className="form-styling" type="text" value={this.state.decimal} onChange={this.convertRoman}/>
                        <label className="errorLabel"> { this.state.error}</label>

                        <label>Roman </label>
                        <input className="form-styling" type="text" value={this.state.roman} disabled/>

                    </form>


                </div>


            </div>
        );
    }
}

function DecimalToRoman(num) {

    var romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    for (var i = 0; i < romanMatrix.length; i++) {
        if(num === 0) {
            return '';
        }

        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + DecimalToRoman(num - romanMatrix[i][0]);
        }
    }
}

export default App;