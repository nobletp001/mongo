import React, { Component  } from 'react'

class FooterFixAd extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className="adsbygoogle"
     style= { { display:"block" } }
     data-ad-client="ca-pub-7538710692853306"
     data-ad-slot="3938403482"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </div>)
    }
}

export default FooterFixAd