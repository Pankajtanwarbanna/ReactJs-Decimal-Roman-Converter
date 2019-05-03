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
            // If input is not a number
            this.setState({ error : 'Please enter a valid number.' });
        } else {
            // If input is a valid number
            this.setState({ error : '' });
            this.setState({ roman : '' });

            if (e.target.value === ''){
                // Nothing is input
                this.setState({ error : '' });
                this.setState({ roman : ''});
            } else if(Number(e.target.value) > 3999 || Number(e.target.value) <= 0) {
                // Value must be in [1,3999]
                this.setState({ error : 'Value must be in range 1 to 3999' });
            } else {
                //console.log(e.target.value);
                //console.log(DecimalToRoman(e.target.value));
                // Convert to Roman
                this.setState({ error : '' });
                this.setState({ roman : DecimalToRoman(e.target.value) })
            }
        }

        this.setState({ decimal : e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="MainFrame">
                    <div className="header">
                        <ul>
                            <li className="main-heading"><a>Decimal to Roman Converter</a></li>
                        </ul>
                    </div>

                    <form className="converter-form">
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

function DecimalToRoman(decimal) {

    let roman2DMatrix = [
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

    for (let i = 0; i < roman2DMatrix.length; i++) {
        if(decimal === 0) {
            return '';
        }

        if (decimal >= roman2DMatrix[i][0]) {
            return roman2DMatrix[i][1] + DecimalToRoman(decimal - roman2DMatrix[i][0]);
        }
    }
}

export default App;