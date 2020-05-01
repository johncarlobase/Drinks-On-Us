import React from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import Beer from "../components/Beer"

function App() {
  return (



    <div className="App">
     <Jumbotron />     
     <Nav />
    <div>
    <h4>ABV – Alcohol By Volume</h4>
    <p>Fans of highly alcoholic beers are well aware of what ABV means—or at least that a beer with an ABV above 10% has the potential to leave you with a buzz before the first pint’s finished. Determined with an instrument called a hydrometer, ABV is an indicator of how strong a beer is. But more specifically, it’s the portion of the entire volume of liquid that’s actually alcohol. </p>
    </div>
      
      <div>
      <h4>IBU – International Bitterness Units</h4>
    <p>Any hopheads reading this? Just like it sounds, IBU is a measurement of a beer’s bitterness, which comes from the hops used during the brewing process. It’s measured through the use of a spectrophotometer and solvent extraction. You’ve probably heard some beer geeks talk about the 80 IBU cutoff point. This is basically just a point on the IBU scale where things start getting noticeably bitter—think double IPAs and barleywines.</p>
      </div>

      <div>
      <h4>SRM – Standard Reference Method</h4>
      <p>SRM refers to a system used to specify beer color intensity. That’s right, there’s a beautiful rainbow of beer colors that each have a numerical value, from Pilsner (2, very light) through Imperial Stout (40+, very dark). Adopted by the American Society of Brewing Chemists in 1951, SRM is determined by measuring the absorptivity of a wavelength of 430 nanometers passing through one centimeter of beer.</p>
      </div>

     <div>
      <h4>OG/FG- Original Gravity/Final Gravity</h4>
      <p>When it comes to beer or other alcoholic beverages, gravity (referred to by brewers as specific gravity) has to do with the relative density of the wort at various stages of the fermentation process. OG refers to the specific gravity of the unfermented wort. FG—on the other hand—refers to the specific gravity of the fermented beer. In between OG and FG, some of the sugar in the wort is fermented into alcohol, while the remainder becomes part of the beer’s body (its taste).

Some trivia for you: FG is always lower than OG. Because sugars are converted into both alcohol and carbon dioxide during the fermentation process, the specific gravity reduces. Some sugar is gone, and then alcohol is naturally less dense than water.</p>
      </div>


     <Beer />
  

    </div>
  );
}

export default App;