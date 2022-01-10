$(() => {
    const GetDataFromServer = () => {
        $.ajax({
            url: "https://api.coingecko.com/api/v3/coins/list",
            success: data => {
                first100coins = []
                for (let i = 0; i < 102; i++) {
                    let element = data[i]
                    first100coins.push(element)
                }
                displayAllCoins(first100coins)
            }
        })
    }


    const displayAllCoins = (first100coins) => {
        let coinCard = ``
        first100coins.forEach(element => {
            coinCard += `
        <div class="card border-primary mb-3">
            <div class="card-header">
                <h5>${element.name}</h5>
                 <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                </div>
            </div>
            <div class="card-body text-primary">
                <h6 class="card-title">${element.symbol}</h6>
            </div>
        </div>
        `});
        $('#coins-display').append(coinCard)
    }
    GetDataFromServer()

    $('#home-btn').click(() => {
        $('#coins-display').show()
    });
    $('#reports-btn').click(() => {
        $('#coins-display').hide()
    });
    $('#about-btn').click(() => {
        $('#coins-display').hide()
    });
});









