// Terms: Component, Render Function, State, Props, etc.

// Component
// Mini portion of code.
//  - Contains JavaScript and HTML
//  - Controls a section of the DOM
//  - Kolache of the web
//  - Functional - receives arguments (props), outputs UI
//  - Kind of like Angular Directives



// Render
// Main method of a component
//  - What actually creates UI
//  - Like pressing 'print' on a printer
//  - function - Takes state and prop, outputs UI
//  - Initial render, when state changes, when props change



// State
// The State of being of a component
//  - Kind of like $scope
//  - Handle change over time
//  - Passed to render, to represent via UI the current state of the app
//  - only use this.setState(), NEVER manually change state
//  - this.setState causes the component (and nested components) to update




// Props
// Attribute on a component - A way of passing state down the tree
//  - <Child propOne={this.state.someState} />
//  - Passed from parent to child
//  - Props cannot (SHOULD not) be altered
//  - To change props, use setState wherever the props originate from


// Lifecycle Hooks
//  - componentWillMount
//  - componentDidMount
//  - componentWillUnmount























