// @flow

import * as React from 'react'


/**
* A flowtyped HOC example.
*/
export default function hocName(WrappedComponent: React.ComponentType<any>) {
  return class extends React.Component<any> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
