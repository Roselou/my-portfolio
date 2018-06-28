import React, {Component} from 'react';
import '../styles/portfolio.css';
import Particles from 'react-particles-js';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import av from '../videos/avbands.mov';
import space from '../videos/space.mp4';
import star from '../videos/stardust.mov';
import light from '../videos/light.mov';


class Portfolio extends Component {


    render(){
        return(
            <div className="portfolio">
                <div className="nav">
                    <Navbar /> 
                </div>
                <div className="particles">
                        <Particles />
                </div>
                    <h1> Portfolio </h1>
                        <div className = "container">
                            <div >
                                <a href="https://sheltered-wildwood-57874.herokuapp.com/">
                                <video muted loop autoPlay width="480" height="360" type="video/mp4"  alt="soundtube icon" ><source src={av}/></video>
                               
                                <h4 >SoundTube</h4> </a>
                                <p><a className ="links" href="https://sheltered-wildwood-57874.herokuapp.com/">- Project Site -</a></p>
                                <br />
                                <p><a className ="links" href="https://github.com/dchuong09/soundtube-frontend">+ GitHub +</a></p>
                            </div>

                            <br />

                            <div >
                                <a href="https://spaceboard-front.herokuapp.com/">
                                <video muted loop autoPlay width="480" height="360" type="video/mp4"  alt="spaceboard icon" ><source src={space}/></video>
                               
                                <h4>Spaceboard</h4> </a>
                                <p><a className="links" href="https://spaceboard-front.herokuapp.com/">- Project Site -</a></p>
                                <br />
                                <p><a className="links" href="https://github.com/Roselou/spaceboard">+ GitHub +</a></p>
                            </div>

                            <br />

                            <div >
                                <a href="http://threejsplaygnd.brangerbriz.com/editor/?id=id6107#B/5Vdtb9s2EP6c/Ao2xVC5cWg5nYvMcQKkiRd/SNagLmbsIy2dLGYSqZF0HLvwfx+PkmxLUZKtGLABY2K98O65V/KOGry5+nz59be7IYlNmpzvD/Lb3iAGFtr73iAFw0gQM6XBnB3MTXR0cuAI2iwTwKe9qQyX5Bs+7U1Z8PtMybkIjwKZSNUnbyM3Th05ZWrGRZ/4+at8ABUlctEnMQ9DEG52jcI7pfRBp7BkgFpQndMdKJ4ZolVwdhAbk/U7HRMrgHudJWw5EyGdKiZmoKaKr6gA07nXOQdNuaD3+uDcqnBCzr9b3hUYCIxUz4k730d3eEQ88oZsmBcwnSWktZ1gYXgNZgLT65tb0JrNwGu5QODvgSkSsBQUaxMdgIA2USBCUKBOS/oMpE2SWrZJygwozhL7BDo+dfqjuQgMl4LY/M0zr2UT5WKPyAk5IwsuQrmgXAhQEx6auE1GtekR8Fls8pSV2i2LgAX5OvoyHFJn/JeCUli/4aRW8ZivwCMTFF1QQxnMUxCGYlopyzLLfRnzJPQ2DtJQpsMEkAtRDpbHoqL8DpTObCj5A1w6qkd6fptMOqM26dp/345Saw6nmdQcY0JXVlLP9wvhLsAV2WOcKR3aXsqIV3g/B4bFECoprguy10VDfAsnO6NMUgVsMx//IlXKktuC7H2roHDomIVczPqlcamUJh7nkxXmdV2llf5Enfd03TTAqA5YAvTRwndel9VXDGOXHjegA6YNWigXlsWoOVR5XMRxB3jIXVP/H4xy+wn3giuIlF1WfefeCww33BqCG6xPTv71bP3TuZrOLKa6p10Fr3PRbYOwgHdvT37Ev3dVtm3lcNbcsmwo2DSBsNEulk65VXqDNaoStosdguc/fvzpODgOWs85tSvm/+Rc4y7b7K0acyQV8bhl9U8JJwOsnfh0eIhthdQGdhjb4A08VmT/6treh7poh3Dcbvli2Sbvid2nMbWt17YC27qO8mL9DGz5fbDV34SVAaOI5wFoms3t/syl1Zxav16T7hhKSeAT0zx4qSzZFtonvacFBgkXxoCYM+xpfRKxRDcUImMd0xmz68/kterlIlRYQt0xDnv4CB7tQosi34+iGnNW+KAbPRsvtYH09QK2kUK1VOZuR+ZLxWiD2pG23ncNvXr+CRVbbI8/Cv6YgzYXgqcubD9jifYcE9nt964yKmkck1uZV9Z6KiTKek98aldOr6GYbiDLRkhT/d1AVk2Q7nPBekVT3TrclYan8Fc8wTbkffiIW8PrUp8cOmSL/EDsZIt08PbqshnfePZM6dOeu5QHuU0ZzB+88nRbHPAKtrW7FidXl5U8i466e+TGD4X8A8F+MOAnzJ8=">
                                <video muted loop autoPlay width="480" height="360" type="video/mp4"  alt="octahedon movie" ><source src={star}/></video>
                              
                                <h4>Octahedron</h4>  </a>
                                <p><a className="links" href="http://threejsplaygnd.brangerbriz.com/editor/?id=id6107#B/5Vdtb9s2EP6c/Ao2xVC5cWg5nYvMcQKkiRd/SNagLmbsIy2dLGYSqZF0HLvwfx+PkmxLUZKtGLABY2K98O65V/KOGry5+nz59be7IYlNmpzvD/Lb3iAGFtr73iAFw0gQM6XBnB3MTXR0cuAI2iwTwKe9qQyX5Bs+7U1Z8PtMybkIjwKZSNUnbyM3Th05ZWrGRZ/4+at8ABUlctEnMQ9DEG52jcI7pfRBp7BkgFpQndMdKJ4ZolVwdhAbk/U7HRMrgHudJWw5EyGdKiZmoKaKr6gA07nXOQdNuaD3+uDcqnBCzr9b3hUYCIxUz4k730d3eEQ88oZsmBcwnSWktZ1gYXgNZgLT65tb0JrNwGu5QODvgSkSsBQUaxMdgIA2USBCUKBOS/oMpE2SWrZJygwozhL7BDo+dfqjuQgMl4LY/M0zr2UT5WKPyAk5IwsuQrmgXAhQEx6auE1GtekR8Fls8pSV2i2LgAX5OvoyHFJn/JeCUli/4aRW8ZivwCMTFF1QQxnMUxCGYlopyzLLfRnzJPQ2DtJQpsMEkAtRDpbHoqL8DpTObCj5A1w6qkd6fptMOqM26dp/345Saw6nmdQcY0JXVlLP9wvhLsAV2WOcKR3aXsqIV3g/B4bFECoprguy10VDfAsnO6NMUgVsMx//IlXKktuC7H2roHDomIVczPqlcamUJh7nkxXmdV2llf5Enfd03TTAqA5YAvTRwndel9VXDGOXHjegA6YNWigXlsWoOVR5XMRxB3jIXVP/H4xy+wn3giuIlF1WfefeCww33BqCG6xPTv71bP3TuZrOLKa6p10Fr3PRbYOwgHdvT37Ev3dVtm3lcNbcsmwo2DSBsNEulk65VXqDNaoStosdguc/fvzpODgOWs85tSvm/+Rc4y7b7K0acyQV8bhl9U8JJwOsnfh0eIhthdQGdhjb4A08VmT/6treh7poh3Dcbvli2Sbvid2nMbWt17YC27qO8mL9DGz5fbDV34SVAaOI5wFoms3t/syl1Zxav16T7hhKSeAT0zx4qSzZFtonvacFBgkXxoCYM+xpfRKxRDcUImMd0xmz68/kterlIlRYQt0xDnv4CB7tQosi34+iGnNW+KAbPRsvtYH09QK2kUK1VOZuR+ZLxWiD2pG23ncNvXr+CRVbbI8/Cv6YgzYXgqcubD9jifYcE9nt964yKmkck1uZV9Z6KiTKek98aldOr6GYbiDLRkhT/d1AVk2Q7nPBekVT3TrclYan8Fc8wTbkffiIW8PrUp8cOmSL/EDsZIt08PbqshnfePZM6dOeu5QHuU0ZzB+88nRbHPAKtrW7FidXl5U8i466e+TGD4X8A8F+MOAnzJ8=">- Project Site -</a></p>
                                <br />
                                <p><a className="links" href="https://github.com/Roselou/octahedron/blob/master/three.html">+ GitHub +</a></p>
                            </div>

                            <br />
                            

                             <div >
                                <a href="http://amazing-bell-ea5aff.bitballoon.com/">
                                <video muted loop autoPlay width="480" height="360" type="video/mp4"  alt="speed of light movie" ><source src={light}/></video>
                              
                                <h4>Speed of Light</h4>  </a>
                                <p><a className="links" href="http://amazing-bell-ea5aff.bitballoon.com/">- Project Site -</a></p>
                                <br />
                                <p><a className="links" href="https://github.com/Roselou/project-0">+ GitHub +</a></p>
                            </div>

                            <br />
                            


                        </div>      
            </div>
          
        )
    }
}

export default Portfolio;