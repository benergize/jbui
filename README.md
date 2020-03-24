<h1>jbui</h1>
jbui allows you to create layouts in HTML and turn them into reusable DOM nodes.

<h2>Features</h2>
<ul>
  <li>Native HTML templating for creating reusable nodes</li>
  <li><i>Very</i> basic two way data binding</li>
  <li>Support for custom HTML elements</li>
  <li>Extreme simplicity. Templating that feels like vanilla HTML and JavaScript</li>
</ul> 

<h2>Basic Usage</h2>
It couldn't be easier.
<ol>
  <li>Create a component or layout you would like to re-use</li>
  <li>Put it inside a wrapper div with the class <code>jbui</code> and the dataset <code>data-jbui-name</code></li>
  <li>Create elements inside the <code>jbui</code> element with the class <code>jbuiElement</code> and the dataset <code>data-jbui-name</code></li>
  <li>Call <code>jbui.init();</code></li>
  <li>Use <code>jbui.create([the jbui-name you gave wrapper], {[jbui-name you gave element]:{"id":"myFirstBui", "value":"Hello, World", [other valid HTML/CSS properties]}});</code> to create a node.</li>
  <li>Add the node to your web page using [etc].appendChild, etc.</li>
</ol>
For more advanced uses, see example.html.

<h2>Why?</h2>
I wanted a way to create templates that didn't feel like I was writing a different language. jbui is an extension of HTML/JS, and it's not trying to invent any paradigms.

<h2>What's jbui stand for?</h2>
Something like Just Build User Interfaces. I like to throw B's into my software names because I'm a narcisist and also because adding random letters to acronyms makes them less likely to collide with other acronyms (my statistician tells me this is correct, trust me).

<h2>Danger Will Robinson!</h2>
I'm putting this here so strangers can play with it. This is probably going to change with reckless abandon for backwards compatibility. At some point I will turn this into something that is stable and useful, but we'll cross that bridge when we come to it.
