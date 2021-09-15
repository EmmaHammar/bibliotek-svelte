<script>
    import { afterUpdate } from "svelte";

    export let title = "";
    export let artist = "";
    export let img = "";
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
            "img": evt.target.img.value
        };
        console.log("hur är newSong", newSong);

        //sparas i db + uppdat statet g cb App:
        setSong(newSong);
    };

</script>

<style>
    form {
        margin: 10px;
        padding: 10px;
        max-width: 60%;
    }
    button {
        border: 5px solid #E27D60;
        border-radius: 5px;
        background: #E27D60;
        color: #fff;
    }

    button:hover {
        color: #E27D60;
        background: #fff;
    }

</style>

<form on:submit|preventDefault={onSubmit}>
    <input placeholder="Artist..." type="text" id="artist" bind:value={title}/>
    <input placeholder="Låt..." type="text" id="title" bind:value={artist}/>
    <input placeholder="URL omslagsbild..." type="text" id="img" bind:value={img}/>

    <button>Lägg till</button>
</form>