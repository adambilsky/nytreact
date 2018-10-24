import React, { Component } from "react";
import API from "../../utils/API";

class Query extends Component {
    state = {
        search: "",
        start: "",
        end: ""
    }

    componentDidMount() {
        // load saved articles?
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        /*  what do we want it to do here?
            it has to hit the NYT API here
            or import the result of that hit here */
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Articles To Find</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="topic"
                                placeholder="Search Term (required)"
                            />
                            <Input
                                value={this.state.start}
                                onChange={this.handleInputChange}
                                name="startDate"
                                placeholder="Start Date"
                            />
                            <Input
                                value={this.state.end}
                                onChange={this.handleInputChange}
                                name="endDate"
                                placeholder="End Date"
                            />
                            <FormBtn
                                disabled={!(this.state.search)}
                                onClick={this.handleFormSubmit}
                            >
                                Start Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>

        )
    }
}