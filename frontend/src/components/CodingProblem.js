import { React, Fragment, Component } from "react";

class CodingProblem extends Component {
  constructor(props) {
    super(props);
    // Refactor with props
    this.state = {
      questionTitle: "FizzBuzz",
      questionPrompt: `Write a program that outputs the string representation of numbers
                      from 1 to n. But for multiples of three it should output “Fizz”
                      instead of the number and for the multiples of five output “Buzz”.
                      For numbers which are multiples of both three and five output
                      “FizzBuzz”. Example: n = 15, Return: [ "1", "2", "Fizz", "4",
                      "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13",
                      "14", "FizzBuzz" ]`,
      userInput: "",
      testCases: `testOutput(fizzBuzz(1), '1');
                  testOutput(fizzBuzz(2), '2');
                  testOutput(fizzBuzz(3), 'Fizz');
                  testOutput(fizzBuzz(5), 'Buzz');
                  testOutput(fizzBuzz(15), 'Fizz Buzz');
                  `,
      success: ""
    };
    this.update = this.update.bind(this);
    this.runCode = this.runCode.bind(this);
  }

  // Use for testing
  // function fizzBuzz(num){
  //   if (num % 3 === 0 && num % 5 === 0) {
  //     return "Fizz Buzz";
  //   } else if (num % 3 === 0) {
  //     return "Fizz";
  //   } else if (num % 5 === 0) {
  //     return "Buzz";
  //   }
  //   return num.toString;
  // }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  runCode(e) {
    e.preventDefault();

    let concatenated = `
        ${this.state.userInput}

        let successStatus = true;

        function testOutput(actual, expected) {
          console.log(actual === expected);
          if (actual !== expected) {
            successStatus = false;
          } 
        }

        ${this.state.testCases}
        
        successStatus;
    `;

    let pass = eval(concatenated);

    if (pass) {
      this.setState({ success: "All test cases passed!" });
    } else {
      this.setState({ success: "1 or more test cases failed." });
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>Header</h1>
        </div>

        <div>
          <h1>Splash Content</h1>
        </div>

        <div>
          <div>
            <h1>Coding Question</h1>
            <h2>{this.state.questionTitle}</h2>
            <div>{this.state.questionPrompt}</div>
          </div>

          <div>
            <form>
              <h1>User Code</h1>
              <div>
                <textarea
                  rows="15"
                  cols="50"
                  onChange={this.update("userInput")}
                ></textarea>
                <button onClick={this.runCode}>Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <h2>Results: </h2>
          {this.state.success}
        </div>

        <div>
          <h1>Footer</h1>
        </div>
      </Fragment>
    );
  }
}

export default CodingProblem;
