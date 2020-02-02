<script>
  import Router from 'svelte-spa-router'
  import Home from './Home.svelte';
  import Add from './Add.svelte';
  import Edit from './Edit.svelte';
	
  const routes = {
	  '/': Home,
	  '/add': Add,
	  '/edit/:id': Edit,
	  '*': Home
  };
</script>

<main>
  <Router routes={routes}></Router>
</main>

<style>
	main {
		background-color: rgb(255, 251, 246);
		padding: 2em;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
</style>