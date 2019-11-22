const URL = window.location.href;

const scrape = async () => {
    try {
        const result = await fetch(URL, {
            method: 'GET',

        });
        console.log(await result.text())
    }
    catch (err) {
        console.log(err)
    }
}

scrape();
alert('Your article has been saved');