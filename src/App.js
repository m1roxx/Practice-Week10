import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p><strong>Framework:</strong> A framework is a pre-built code structure that helps organize and speed up software development by providing tools, components, and best practices.</p>
      <p><strong>Differences and Advantages:</strong></p>
      <ul>
        <li><strong>React</strong>:
          <ul>
            <li><strong>Advantages</strong>:
              <ul>
                <li>Component-based structure for reusability and modularity.</li>
                <li>Virtual DOM for efficient rendering and faster updates.</li>
                <li>Large ecosystem with tools like React Router and Redux.</li>
                <li>Flexibility to integrate with other libraries.</li>
              </ul>
            </li>
            <li><strong>Disadvantages</strong>:
              <ul>
                <li>No built-in routing or state management (needs third-party libraries).</li>
                <li>Learning curve for JSX and setup with additional tools.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Angular</strong>:
          <ul>
            <li><strong>Advantages</strong>:
              <ul>
                <li>Full-fledged MVC (Model-View-Controller) framework.</li>
                <li>Two-way data binding simplifies data handling.</li>
                <li>Comprehensive features out-of-the-box (routing, HTTP client, forms).</li>
              </ul>
            </li>
            <li><strong>Disadvantages</strong>:
              <ul>
                <li>Steeper learning curve due to TypeScript and complexity.</li>
                <li>Heavier framework, which may impact performance in small applications.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Vue</strong>:
          <ul>
            <li><strong>Advantages</strong>:
              <ul>
                <li>Easy to learn and integrate into existing projects.</li>
                <li>Flexible structure, supporting both simple and complex applications.</li>
                <li>Two-way data binding similar to Angular but simpler.</li>
              </ul>
            </li>
            <li><strong>Disadvantages</strong>:
              <ul>
                <li>Smaller ecosystem compared to React and Angular.</li>
                <li>Less widespread community and resources than React and Angular.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <p><strong>Choice (React):</strong> For front-end work, React is ideal due to its fast rendering, component-based structure, and vast ecosystem, making it perfect for building dynamic, interactive UIs.</p>
    </div>
  );
}

export default App;
