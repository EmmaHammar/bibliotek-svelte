<script>
    import { onMount } from "svelte";

    export let song = {};
    export let newRentStatus = "";
    export let setUpdateSong; //props fr app

    const handleClick = (evt) => {

        //om klickad klass är falskt och klick sångid är samma som songid för knappen:
        if (evt.target.className === "false" && Number(evt.target.id) === song.id ) {
            newRentStatus = true;
        } 
        if (evt.target.className === "true" && Number(evt.target.id) === song.id ){
            newRentStatus = false; 
        }

        let updateSong = {
            "id" : song.id,
            "title": song.title,
            "artist": song.artist,
            "isRented": newRentStatus,
            "img": ""
        }

        //uppdatera songs-statet + i db -> cb i App:
        setUpdateSong(updateSong);
    };

</script>

<style>
    div {
        margin: 10px;
        padding: 10px;
        max-width: 400px;
        border: 2px solid #E27D60;
        border-radius: 5px;
    }

    img {
        max-width: 60%;
    }

    button {
        border: 3px solid #E27D60;
        border-radius: 5px;
        color: #E27D60;
    }

    button:hover {
        background: #E27D60;
        color: #fff;
    }
</style>

<div>
    <h2>{song.artist} sjunger {song.title}</h2>
    <img src='{song.img}' alt="Visar bild på {song.artist}s {song.title}"><br><br>
    <button on:click={handleClick} id={song.id} class={song.isRented}>
        {song.isRented ? "Utlånad" : "Låna sång"} 
    </button>
</div>

<!-- child till Bibliotek, fyller kort med info om artist och titel (samt checkbox??)-->