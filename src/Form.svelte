<script>
    import { afterUpdate } from "svelte";

    export let title = "";
    export let artist = "";

    export let songs = []; //props fr app
    export let newSong = {};
    export let setSong; //props fr app
 
    const onSubmit = (evt) => {
        // console.log("title", evt.target.title.value);
        // console.log("artist", evt.target.artist.value);

        newSong = {
            "title": evt.target.title.value,
            "artist": evt.target.artist.value,
            "isRented": false,
            "img": ""
        };
        console.log("hur är newSong", newSong);

        //sparas i db + uppdat statet g cb App:
        setSong(newSong);
    };

    //denna körs varje gång inputfältet förändras - varför? o inte varje gång songs eller newSong har förändrats?
    afterUpdate(() => {
        // console.log("ny sång har lagts till", songs);
        // console.log("ny sång har skapats", newSong);

    });

</script>

<style>

</style>

<form on:submit|preventDefault={onSubmit}>
    <input placeholder="Artist..." type="text" id="artist" bind:value={title}/>
    <input placeholder="Låt..." type="text" id="title" bind:value={artist}/>
    <button>Lägg till</button>
</form>