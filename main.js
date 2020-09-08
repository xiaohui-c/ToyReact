import {createElement,Component,render} from './toy-react.js'
class MyComponent extends Component{
  constructor() {
    super();
    this.state = {
      a: 1,
      b:2
    }
  }
    render() {
        return <div>
          <h1>My component</h1>
          <span>{this.state.a.toString()}</span>
          <span>{this.state.b.toString()}</span>
            {this.children}
          <button onclick={() => { this.setState({ a: this.state.a +1}) }}>add</button>
        </div>
   }
 }

render(
  <MyComponent id="b" class="c">
    <div>好好学习</div>
    <div>天天向上</div>
  </MyComponent>,document.body
);
