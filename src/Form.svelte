<script>
    export let title = "";
    export let artist = "";
 

    const onSubmit = (evt) => {
        console.log("title", evt.target.title.value);
        console.log("artist", evt.target.artist.value);

        let newSong = {
            "title": evt.target.title.value,
            "artist": evt.target.artist.value,
            "isRented": false,
            "img": ""
        };

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
            console.log("data from post newSong", data);
        })
        .catch(err => console.log("Error i post:", err))
    }

</script>

<style>

</style>

<form on:submit|preventDefault={onSubmit}>
    <input placeholder="Artist..." type="text" id="artist" bind:value={title}/>
    <input placeholder="Låt..." type="text" id="title" bind:value={artist}/>
    <button>Lägg till</button>
</form>