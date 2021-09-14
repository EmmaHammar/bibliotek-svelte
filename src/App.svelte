<script>
	import Bibliotek from './Bibliotek.svelte';
	import Form from './Form.svelte';
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>


<main>
	<h1>Barnbibliotek</h1>
	<Form />
	<Bibliotek />
	
</main>

<!-- printar Bibliotek (och ev Form) -->