    const dataSet = {
        "cities": [
          {
            "section": "cupertino",
            "label": "Cupertino"
          },
          {
            "section": "new-york-city",
            "label": "New York City"
          },
          {
            "section": "london",
            "label": "London"
          },
          {
            "section": "amsterdam",
            "label": "Amsterdam"
          },
          {
            "section": "tokyo",
            "label": "Tokyo"
          },
          {
            "section": "hong-kong",
            "label": "Hong Kong"
          },
          {
            "section": "sydney",
            "label": "Sydney"
          }
        ]
      }
      
    const citiesDOM = document.querySelector('.cities')

    citiesDOM.innerHTML = dataSet.cities.map((city, index) => {
      console.log(city, index)
      return '<a href="#">' + city.label + '</a>';
    }).join('');