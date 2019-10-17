<h1>jbui</h1>
jbui allows you to create layouts in HTML and turn them into reusable DOM nodes.

<h2>How-to</h2>
It couldn't be easier.
<ol>
  <li>Create a component or layout you would like to re-use</li>
  <li>Put it inside a wrapper div with the class <code>jbui</code> and the dataset <code>jbui.name</code></li>
  <li>Call <code>jbui.init();</code></li>
  <li>Use <code>jbui.create([the jbui.name you gave it], {"id":"myFirstBui", "value":"Hello, World", [other valid HTML/CSS properties]});</code> to create a node.</li>
  <li>Add the node to your web page using [etc].appendChild, etc.</li>
</ol>

<h2>Why?</h2>
I was populating pages using AJAX and doing insane things with DOM node creation. This makes it a lot easier and nicer to work with. I realize there's frameworks that do the same thing probably better, all I need is this element reusability, not MVVM or any other niceties.

<h2>What's jbui stand for?</h2>
Something like Just Build User Interfaces. I like to throw B's into my software names because I'm a narcisist and also because adding random letters to acronyms makes them less likely to collide with other acronyms (my statastician tells me this is correct, trust me).

<h2>Danger Will Robinson!</h2>
I'm putting this here so strangers can play with it. This is probably going to change with reckless abandon for backwards compatibility. At some point I will turn this into something that is stable and useful, but we'll cross that bridge when we come to it.
