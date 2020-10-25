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
                     We are B.C.s students in Bar Ilan University at Computer Science faculty. <br/> <br/>
                     This app is part of our graduation project. <br/>
                     In the project we trained Neural Network to identify vowels in Enlish speech. <br/>
                     For the training we used over 500 hours of speech, from libri-speech free data base. <br/><br/>
                     The algorithm tries to predict how many vowels there are in an audio file. <br/>
                     and therefore predicts syllables per seconds for English speech in given audio file. <br/>
                     using this app you can uplaod existing file or record new one and check SPS.
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
