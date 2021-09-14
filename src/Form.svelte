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
        // console.log("hur är newSong", newSong);

        //sparas i db:
        fetch('http://localhost:3000/songs', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newSong)
        })
        .then(res => res.json())
        .then(data => {
            console.log("newSong from post, newSong har fått id", data);

            //cb App som uppdaterar songs-statet med newSong så även newSong printas ut:
            setSong(data)
        })
        .catch(err => console.log("Error i post:", err))


    }

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