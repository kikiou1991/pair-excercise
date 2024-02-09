function HomePage() {

    function foodPic() {
        fetch('https://foodish-api.com/api/')
            .then(function (res) {
                return res.json()
            }).then(function (data) {
                console.log(data)
            })
    }
    return (
        <div>Home page</div>
    )
}

export default HomePage