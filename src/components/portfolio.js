import React, {Component} from 'react';
import '../styles/portfolio.css';
import tetrahedron from '../imgs/tetrahedron.svg';
import astronaut from '../imgs/astronaut-helmet.svg';
import octahedron from '../imgs/octahedron.svg';
import tic from '../imgs/tic-tac-toe.svg';
import pic from '../imgs/painting.svg';
import refraction from '../imgs/refraction.svg';

class Portfolio extends Component {
    render(){
        return(
            <div>
                <h1> Portfolio </h1>
                    <div className="cardcontainer">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={tetrahedron} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">SoundTube</span>
                                <p><a href="https://sheltered-wildwood-57874.herokuapp.com/">Project Site</a></p>
                                <p><a href="https://github.com/dchuong09/soundtube-frontend">GitHub</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator astronaut" src={astronaut}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">SpaceBoard</span>
                                <p><a href="https://spaceboard-front.herokuapp.com/">Project Site</a></p>
                                <p><a href="https://github.com/Roselou/spaceboard">GitHub</a></p>
                            </div>
                        </div>
                         <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator astronaut" src={octahedron}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Octahedron</span>
                                <p> < a href = "http://threejsplaygnd.brangerbriz.com/editor/?id=id6107#B/5Vdtb9s2EP6c/Ao2xVC5cWg5nYvMcQKkiRd/SNagLmbsIy2dLGYSqZF0HLvwfx+PkmxLUZKtGLABY2K98O65V/KOGry5+nz59be7IYlNmpzvD/Lb3iAGFtr73iAFw0gQM6XBnB3MTXR0cuAI2iwTwKe9qQyX5Bs+7U1Z8PtMybkIjwKZSNUnbyM3Th05ZWrGRZ/4+at8ABUlctEnMQ9DEG52jcI7pfRBp7BkgFpQndMdKJ4ZolVwdhAbk/U7HRMrgHudJWw5EyGdKiZmoKaKr6gA07nXOQdNuaD3+uDcqnBCzr9b3hUYCIxUz4k730d3eEQ88oZsmBcwnSWktZ1gYXgNZgLT65tb0JrNwGu5QODvgSkSsBQUaxMdgIA2USBCUKBOS/oMpE2SWrZJygwozhL7BDo+dfqjuQgMl4LY/M0zr2UT5WKPyAk5IwsuQrmgXAhQEx6auE1GtekR8Fls8pSV2i2LgAX5OvoyHFJn/JeCUli/4aRW8ZivwCMTFF1QQxnMUxCGYlopyzLLfRnzJPQ2DtJQpsMEkAtRDpbHoqL8DpTObCj5A1w6qkd6fptMOqM26dp/345Saw6nmdQcY0JXVlLP9wvhLsAV2WOcKR3aXsqIV3g/B4bFECoprguy10VDfAsnO6NMUgVsMx//IlXKktuC7H2roHDomIVczPqlcamUJh7nkxXmdV2llf5Enfd03TTAqA5YAvTRwndel9VXDGOXHjegA6YNWigXlsWoOVR5XMRxB3jIXVP/H4xy+wn3giuIlF1WfefeCww33BqCG6xPTv71bP3TuZrOLKa6p10Fr3PRbYOwgHdvT37Ev3dVtm3lcNbcsmwo2DSBsNEulk65VXqDNaoStosdguc/fvzpODgOWs85tSvm/+Rc4y7b7K0acyQV8bhl9U8JJwOsnfh0eIhthdQGdhjb4A08VmT/6treh7poh3Dcbvli2Sbvid2nMbWt17YC27qO8mL9DGz5fbDV34SVAaOI5wFoms3t/syl1Zxav16T7hhKSeAT0zx4qSzZFtonvacFBgkXxoCYM+xpfRKxRDcUImMd0xmz68/kterlIlRYQt0xDnv4CB7tQosi34+iGnNW+KAbPRsvtYH09QK2kUK1VOZuR+ZLxWiD2pG23ncNvXr+CRVbbI8/Cv6YgzYXgqcubD9jifYcE9nt964yKmkck1uZV9Z6KiTKek98aldOr6GYbiDLRkhT/d1AVk2Q7nPBekVT3TrclYan8Fc8wTbkffiIW8PrUp8cOmSL/EDsZIt08PbqshnfePZM6dOeu5QHuU0ZzB+88nRbHPAKtrW7FidXl5U8i466e+TGD4X8A8F+MOAnzJ8="> Project Site </a></p>
                                <p><a href="https://github.com/Roselou/octahedron/blob/master/three.html">GitHub</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator astronaut" src={tic}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Tic-Tac-Toe</span>
                                <p> <a href= "http://jovial-wiles-bfec81.bitballoon.com/"> Project Site </a></p>
                                <p><a href="https://github.com/Roselou/tic-tac-toe">GitHub</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator astronaut" src={pic}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">On The Wall</span>
                                <p> <a href="https://project-01-rose.herokuapp.com/"> Project Site </a></p>
                                <p><a href="https://github.com/Roselou/project-01">GitHub</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator astronaut" src={refraction} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Speed of Light</span>
                                <p> <a href="http://amazing-bell-ea5aff.bitballoon.com/"> Project Site </a></p>
                                <p><a href="https://github.com/Roselou/project-0">GitHub</a></p>
                            </div>
                        </div>
                    </div>
            </div>
          
        )
    }
}

export default Portfolio;