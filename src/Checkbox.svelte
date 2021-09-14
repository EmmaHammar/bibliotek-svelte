<script>

    let updateSong = {
                "id" : song.id,
                "title": "title",
                "artist": "artist",
                "isRented": newRentStatus,
                "img": ""
        }

        if (evt.target.className === "false" && song.id === Number(evt.target.id)) {
            newRentStatus = true;

            console.log("sätt till true");
        } else {
            console.log("sätt till falskt");
            newRentStatus = false;
        }

        // //sparas i db:
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


</script>

<style>

</style>


<div>

</div>