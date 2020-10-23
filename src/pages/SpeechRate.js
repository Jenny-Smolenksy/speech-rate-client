import React from 'react'

export default function SpeechRate() {
    return (      
        <div class="about">
        <div class="container">
           <div class="row d_flex">
              <div class="col-md-8">
                 <div class="titlepage">
                 <h2>Speech rate - Syllables, Vowels</h2>
                     <p>Speech tempo is a measure of the number of speech units of a given type produced within a given amount of time. <br/>
                     Speakers vary their speed of speaking according to contextual and physical factors.<br/>
                     Counting syllables per second will result in differences caused by the different syllable structures found in different languages.<br/><br/>
                     A syllable is a unit of organization for a sequence of speech sounds. It is typically made up of a syllable nucleus (most often a vowel) with optional initial and final margins. <br/>
                         <br/>
                    Vowel is a speech sound produced without blocking the breath channel. <br/>
                    A vowel paired with a consonant makes a syllable.</p>
                    
                    </div>
              </div>
              <div class="col-md-4">
                 <div class="about_img" >
                    <figure><img src={require("./../assets/images/syllables.jpg")} alt="#"/></figure>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}
