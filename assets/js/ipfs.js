const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();


$(function () {
    
   $("#sub").on("click", function(e)
   {
    e.preventDefault(); 
    var udomains = $("#udomain").val(); 
    if( udomains=="" )
    {
        Swal.fire(
            {
                icon: "info",
                text: "The Unstoppable domain is required"
            }
        )
        return false; 
    }
    if(/\s/.test(udomains))
    {
        Swal.fire(
            {
                icon: "info",
                text: "The Unstoppable domain format is invalid "
            }
        )
        return false; 
    }
          
            resolution
            .ipfsHash(udomains)
            .then((hash) =>
            
            /*Swal.fire({
                icon: "success", 
                text: "Gotcha! You fetch it! You can visit it now"
            }), */
             
               /* setTimeout(() => {
                    window.open(url, '_blank')
                }, 2000), */

                window.open(`https://gateway.ipfs.io/ipfs/${hash}`)
               
            
            )
            .catch((error) => 
            Swal.fire(
                {
                    icon: "error", 
                    text: udomains +" web3 site is not yet configured! Sorry :("
                }
            ));

   })
});