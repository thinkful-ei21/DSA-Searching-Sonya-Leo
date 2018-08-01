import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
        resultMessage:'',
        resultMessage2: 'test',
        dataset:'89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
    }
  }

linearSearch(list, num){
    let counter=0;
    for(let i=0; i<list.length;i++){
      counter=i+1;
      if(list[i]===num){
        return num +' is at '+counter;
      }
    }
    return 'not found';
  }

  
binarySearch(list, num, start=0, end=list.length-1) {
  // implement binary search with counter
  // const sortedList = list.sort((a ,b) => a < b);
  // console.log(sortedList);
  // find the mid point check for match, start point, end point
  let mid = Math.floor((start + end) / 2);
  if (start > end) {return -1};
  let item = list[mid];
  let counter = 1;
  if (item === num) {
    console.log('is this firing?');
    return (`you found ${num} with ${counter} tries`);
  } else if (item < num) {
    counter++;
    this.binarySearch(list, num, mid + 1, end);
  } else {
    counter++;
    this.binarySearch(list, num, start, mid-1);
  }
}

  onSubmit(e){
    e.preventDefault();
     this.setState({
      // resultMessage: this.linearSearch(this.state.dataset.split(' '), this.input.value),
      resultMessage2: this.binarySearch(this.state.dataset.split(' ').sort((a, b) => a < b), this.input.value)});
    this.input.value = ''; 
  }
  render() {
    const {resultMessage, resultMessage2}=this.state;
    return (
      <div className="App">
        <p className="App-intro">
          {resultMessage}
          {resultMessage2}
        </p>
        <form onClick={e=>this.onSubmit(e)}>
        <input type='text-box'
        ref={input => (this.input = input)}
        ></input>
        <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default App;


/*  
take a long string input. 
break up by space into an array.
loop through array until match is found. 
add to counter with each loop.
if no match print 'not found'.
else print counter.
*/



  // if it's smaller than modpoint, recursively reset search to the smaller values 
  // if it's larger than midpoint, recursively reset search to larger values
//return the found item or a 'not found' message

