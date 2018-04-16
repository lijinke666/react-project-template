import React, { PureComponent } from "react"
import { Alert } from 'antd'

class ErrorBoundary extends PureComponent {
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
                    message="Something went wrong."
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
        return this.props.children
    }
}