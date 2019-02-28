


window.onload = function () {
    $('#set-date').click(() => {
        var startDate = $('#start-date').val()
        var endDate = $(`#end-date`).val()
        var currency = $(`#currency`).val()
        axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}&start=${startDate}&end=${endDate}`)
            .then(henk => { 
                dates = Object.keys(henk.data.bpi)
                for (var i = 0; i < dates.length; i++) {

                    $('#data-ul').append(`<li>${dates[i]} - ${henk.data.bpi[dates[i]]} </li>`)

                }

            })
    })
}