<script>
    import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/Home/Home.svelte';
  import Pharmacy from './pages/Pharmacy/Pharmacy.svelte';
  import About from './pages/About/About.svelte';

  export let url = "";
</script>

<Router {url}>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/pharmacy">Pharmacy</Link>
        <Link to="/about">About</Link>
    </nav>

    <div>
        <!-- 3 different syntax for defining routes -->
        <Route path="/"><Home/></Route> <!--  cant define properties such as slots cant put other components inside the Home component -->
        <Route path="/pharmacy"><Pharmacy></Pharmacy></Route>
        <Route path="/about"> <About></About></Route>
        
        <!-- This does not work, you have to double click on the link tag, to render the component for some reason -->
        <!-- <Route path="/about" component={About} /> This syntax way it cant take other props --> 
    </div>
</Router>