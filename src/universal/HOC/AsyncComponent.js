import React, { Component } from 'react'

export default function asyncComponent(chunkName, getComponent) {
  return class AsyncComponent extends Component {
    static Component = null

    static loadComponent() {
      return getComponent().then(m => m.default).then((LoadedComponent) => {
        AsyncComponent.Component = LoadedComponent
        return LoadedComponent
      })
    }

    mounted = false
    state = { LoadedComponent: AsyncComponent.Component }

    componentWillMount() {
      if (this.state.LoadedComponent === null) {
        AsyncComponent.loadComponent().then((LoadedComponent) => {
          if (this.mounted) {
            this.setState({ LoadedComponent })
          }
        })
      }
    }

    componentDidMount() { this.mounted = true }
    componentWillUnmount() { this.mounted = false }

    render() {
      const { LoadedComponent } = this.state
      if (LoadedComponent) {
        return <LoadedComponent {...this.props} />
      }
      return <div>loading...component</div> // or <div /> with a loading spinner, etc..
    }
  }
}
