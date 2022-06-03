import React from "react"
import Memes from "./MemesData"

export default function(){

    var [meme, setMemeImg] = React.useState({topText:"", bottomText:"", randomImage:""})
    var [allMemesImages, setAllMemesImages] = React.useState(Memes)

    function pick (){
        var pickRandom = Math.floor(Math.random() * allMemesImages.length)
        setMemeImg(function(forLaugh){
            return {...forLaugh, randomImage: allMemesImages[pickRandom].url}
        })
    }
    
    function hold(event){
        setMemeImg(function(prev){
            return {...prev, [event.target.name]: event.target.value}
        })
    }

    return (
        <div>
            <div className="form">
                <input className="formInput" placeholder="Top Text" value = {meme.topText} name ="topText" onChange={hold}/>
                <input className="formInput" placeholder="Bottom Text" value = {meme.bottomText} name ="bottomText" onChange={hold}/>
                <button className="button" onClick={pick}>Get a New Meme Image</button>
            </div>
            <div className="holdimg"> 
                <img src={meme.randomImage} className="mainMeme"/>
                <h2 className="memetext top">{meme.topText}</h2>
                <h2 className="memetext bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}