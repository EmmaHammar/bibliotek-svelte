<script>
    import { onMount } from "svelte";

    export let song = {};
    export let newRentStatus = "";
    export let setUpdateSong; //props fr app

    const handleClick = (evt) => {
        // console.log("klickat id", Number(evt.target.id));
        // console.log("song.id", song.id);
        // console.log("klickad klass", evt.target.className;

        //om klickad klass är falskt och klick sångid är samma som songid för knappen:
        if (evt.target.className === "false" && Number(evt.target.id) === song.id ) {
            // console.log("sätt till true");
            newRentStatus = true;
        } 
        if (evt.target.className === "true" && Number(evt.target.id) === song.id ){
            // console.log("sätt till falskt");
            newRentStatus = false; 
        }

        let updateSong = {
            "id" : song.id,
            "title": song.title,
            "artist": song.title,
            "isRented": newRentStatus,
            "img": ""
        }
        // console.log("updateSong:", updateSong);

        //uppdatera songs-statet + i db -> cb i App:
        setUpdateSong(updateSong);
    
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
        {song.isRented ? "Utlånad" : "Låna sång"} 
    </button>
    <p>Visa bild</p>
    
</div>

<!-- child till Bibliotek, fyller kort med info om artist och titel (samt checkbox??)-->