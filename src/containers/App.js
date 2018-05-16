import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPerson: false
  };

  // switchNameHandler = () => {
  //   // console.log('Was clicked!');
  //   // DONT'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 },
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler= (personIndex) => {
    // const persons = this.state.persons.slice(); // slice（引数なし）で配列をコピー
    const persons = [...this.state.persons]; // spread operator で新しい配列を作る
    persons.splice(personIndex, 1);
    this.setState(({ persons }));
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons =  <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
