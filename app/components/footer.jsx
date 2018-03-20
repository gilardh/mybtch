import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import './style.css'

import FAHome from 'react-icons/lib/fa/home'
import FARedditAlien from 'react-icons/lib/fa/reddit-alien'
import FATwitter from 'react-icons/lib/fa/twitter'
import FABitcoin from 'react-icons/lib/fa/bitcoin'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FAGithub from 'react-icons/lib/fa/github'
import FAComments from 'react-icons/lib/fa/comments'


export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div className="footerstyle">
        <br/>
        <Container> 
<div className="outer">
<div className="contact-text links">     
        <Row>
          <Col md="12">
            <p><span className="f1">MAKE SURE YOU ARE ON</span><b> THETRUNK.GITHUB.IO</b></p>

            <p className="f2">Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p><span className="f3">Donations are highly appreciated!</span><br/>
              <span className="f4">BTCH: RSU4Szx5z9hs9wWwhEF6G67Pd7LH4xDuBd </span><br/>
              <span className="f4">HUSH: t1b4UNpUwMegtgaCeAV56JNt77W4mDtgbn3 </span><br/>
              <span className="f4">BTC: 3LGXxwn7nEimYg1PBfJWEC3a6Q2Cr9Rba9 </span><br/>
              <br/>
            </p>
          </Col>
              </Row>

<a href="https://btchush.org" target="_blank" data-toggle="tooltip" title="Website">  <FAHome size={28}/>  </a>
<a href="https://myhush.org/discord" target="_blank" data-toggle="tooltip" title="Discord">  <FAComments size={28}/>  </a>
<a href="https://twitter.com/BTCHush" target="_blank" data-toggle="tooltip" title="Twitter">  <FATwitter size={28}/>  </a>
<a href="https://github.com/TheTrunk/mybtch" target="_blank" data-toggle="tooltip" title="Source Code">  <FAGithub size={28}/> </a>
<a href="mailto:tessjonesie@gmail.com" target="_blank" data-toggle="tooltip" title="tessjonesie@gmail.com">  <FaEnvelopeO size={28}/>  </a>
    <br/>
</div>
    </div>
        </Container>
      </div>
    )
  }
}