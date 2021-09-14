<script>
import { onMount } from "svelte";

    export let song = {};
    export let isRented = false;
    export let newRentStatus = "";

    onMount(() => {
        isRented = song.isRented;
    });

    const handleClick = (evt) => {
        // console.log("klickat id", Number(evt.target.id));
        // console.log("song.id", song.id);
        // console.log("klickad klass", evt.target.className;

        if (evt.target.className === "false" && song.id === Number(evt.target.id)) {
            // console.log("sätt till true");
            newRentStatus = true;
        } else {
            // console.log("sätt till falskt");
            newRentStatus = false;
        }

        let updateSong = {
            "id" : song.id,
            "title": "title",
            "artist": "artist",
            "isRented": newRentStatus,
            "img": ""
        }

        console.log("updateSong:", updateSong);
        //uppdatera db
        // fetch('http://localhost:3000/songs', {
        //     method: "post",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(updateSong)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log("data from post updateSong", data);
        // })
        // // .catch(err => console.log("Error i post:", err));
        
    };

        


</script>

<style>
    div {
        margin: 10px;
        padding: 10px;
        max-width: 400px;
        border: 1px solid gold;
    }
</style>

<div>
    <h2>{song.artist} sjunger {song.title}</h2>

    <button on:click={handleClick} id={song.id} class={song.isRented}>
        <!-- {isRented ? "Låna sång" : "Utlånad"} -->
        {#if isRented === false}
            Låna sång
            <!-- sätt till true -->
        {:else}
            Utlånad
        {/if}
        
    </button>
    <p>Visa bild</p>
    
</div>

<!-- child till Bibliotek, fyller kort med info om artist och titel (samt checkbox??)-->