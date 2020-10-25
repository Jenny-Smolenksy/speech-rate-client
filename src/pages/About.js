import React from 'react'

export default function About() {
    return (
        <div class="about">
        <div class="container">
           <div class="row d_flex">
              <div class="col-md-8">
                 <div class="titlepage">
                     <h2>Hey! We are Almog and Jenny</h2>
                     <p>
                     B.Sc students in Bar Ilan University at Computer Science faculty. <br/> <br/>
                     This app is a part of our graduation project. <br/>
                     In the project we trained a Neural Network to identify vowels in English speech. <br/>
                     For the training we used over 500 hours of speech, from libri-speech free database. <br/><br/>
                     The algorithm tries to predict how many vowels there are in an audio file. <br/>
                     And therefore predicts syllables per seconds for English speech in a given audio file. <br/>
                     Using this app you can upload an existing file or record a new one and check SPS.
                                          </p>
                    
                    </div>
              </div>
              <div class="col-md-4">
                 <div class="about_img" >
                    <figure><img src={require("./../assets/images/about-pic.jpg")} alt="#"/></figure>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}
