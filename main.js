import {createElement,Component,render} from './toy-react.js'
class MyComponent extends Component{
    render() {
        return <div>
            <h1>My component</h1>
            {this.children}
        </div>
   }
 }

render(
  <MyComponent id="b" class="c">
    <div>好好学习</div>
    <div>天天向上</div>
    <div></div>
  </MyComponent>,document.body
);
