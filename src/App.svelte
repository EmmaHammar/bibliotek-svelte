<script>
	import { onMount } from "svelte";

	import Bibliotek from './Bibliotek.svelte';
	import Form from './Form.svelte';

	export let songs = [];

    onMount(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/songs')
            .then(res => res.json()) 
            .then(data => {
                // console.log("data from fetch", data);
                songs = data; //om songs uppdateras, o songs kommer fr app, borde inte alla som har songs som props också få songs uppdaterad i respektive komponent? 
           
            })
        }, 1000)
    });
	// $: console.log("songs i App", songs);

	const setSong = (newSong) => {

		fetch('http://localhost:3000/songs', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newSong)
        })
        .then(res => res.json())
        .then(data => {
            // console.log("newSong from post, newSong har fått id", data);
            //uppdaterar songs-statet med newSong så även newSong får med sig id o printas ut:
            songs.push(newSong);
			//fylla songs med pushad songs men får man ändra statet så direkt? Varför fylls det inte automatiskt när songs är pushad med newSong?
			songs = songs;
        })
        .catch(err => console.log("Error i post:", err))

		
	}
	$: console.log("songs i App utanför push-funktion", songs);



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
	<Form {songs} {setSong}/>
	<Bibliotek {songs}/> 
	
</main>

<!-- printar Bibliotek (och ev Form) -->
<!-- behöver Bibliotek setSong eller räcker det med songs? 
	<Bibliotek {songs} {setSong}/> 
-->