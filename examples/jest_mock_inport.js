// === component.js ===

// @flow
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { anImport } from '../../../some/file';

type Props = {
  // ...
};

/**
* A component
*/
export class MyComponent extends Component<Props> {
  props: Props;

  render() {
    // ...
  }
}

const mapStateToProps = (state: Object, props: Props) => {
  return {
    aProp: anImport(state, props),
  };
};


export default connect(mapStateToProps)(MyComponent);



// === component.test.js ===

// @flow
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { anImport } from '../../../some/file';
import MyComponent from './MyComponent';

configure({ adapter: new Adapter() });

jest.mock('../../../some/file', () => {
  return {
    anImport: jest.fn(()=>{
      return // ...
    })
  }
});

describe('<MyComponent />', () => {
  test('<Some test...', () => {
    const wrapper = shallow(<MyComponent />);
  });
});
