<script>
	import { onMount } from "svelte";

	import Bibliotek from './Bibliotek.svelte';
	import Form from './Form.svelte';

	export let songs = [];
	// export let isRented = false; //eller ""?

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
        .catch(err => console.log("Error i post add newSong:", err))
	}
	// $: console.log("songs i App utanför push-funktion", songs);

	const setUpdateSong = (updateSong) => {
		// console.log("update song från Song:", updateSong);
		// hämta, ändra spara
		for (let song in songs) {
			// console.log("songs[song]", songs[song].id);
			if (updateSong.id === songs[song].id) {
				// console.log("uppdatera rented-status i songs:", songs[song].id);
				songs[song].isRented = updateSong.isRented;
				songs = songs; //const newSongs -> songs = newSongs
			} 
		}
		// console.log("updateSong",updateSong);

		let updateInDb = {
			id: updateSong.id,
            title: updateSong.title,
            artist: updateSong.artist,            
			isRented: updateSong.isRented,
			img: ""
		};

		console.log("updateInDb", updateInDb);

		//uppdatera i db vid isRented-status förändring - leta på id -> uppdatera isRented
		fetch(`http://localhost:3000/songs/${updateSong.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateInDb)
        })
        .then(res => res.json())
        .then(data => {
            console.log("PUT fetch trying to update isRentedStatus", data);
           
        })
        .catch(err => console.log("Error i post updateSong:", err))
		
	}
	$: console.log("songs i App utanför uppdateraSongs-funktion", songs);


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
	<h1>Barnens Favoritlåtar</h1>
	<Form {songs} {setSong}/>
	<Bibliotek {songs} {setUpdateSong}/> 
	
</main>

<!-- printar Bibliotek (och ev Form) -->
<!-- behöver Bibliotek setSong eller räcker det med songs? 
	<Bibliotek {songs} {setSong}/> 
-->