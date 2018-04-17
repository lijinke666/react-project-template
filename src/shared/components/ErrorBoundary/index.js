import React, { Component } from "react"
import { Alert } from 'antd'
import {getDisplayName} from "libs/component"

/**
 * @name ErrorBoundary
 * @use  @ErrorBoundary
 */

export default function ErrorBoundary(WrappedComponent) {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <Alert
                    message="ERROR:"
                    description={
                        <div>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </div>
                    }
                    type="error"
                    showIcon
                />
            )

        }
        return <WrappedComponent {...this.props}/>
    }
  }
}