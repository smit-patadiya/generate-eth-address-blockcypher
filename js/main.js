(function ($) {

    $(document).ready(function () {

        $('#generate').on('click', function (event) {
            event.preventdefault;

            //Your Block Cypher token here
            let token = '<Your Blockcypher token here>';

            let args = {}
            $.post('https://api.blockcypher.com/v1/eth/main/addrs?token=' + token, JSON.stringify(args))
                .then(function (data) {

                    // console.log(data);
                    let eth_address, private_key, public_key;

                    eth_address = '0x' + data.address;
                    public_key  = data.public;
                    private_key = data.private;

                    $('#eth-address').val(eth_address);
                    $('#pub-key').val(public_key);
                    $('#private-key').val(private_key);



                });
        });

    });
    

})(jQuery)
