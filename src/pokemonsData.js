const pokemonsData = [
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
        "name": "ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        "name": "arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
        "name": "pikachu",
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        "name": "raichu",
        "url": "https://pokeapi.co/api/v2/pokemon/26/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
        "name": "sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        "name": "sandslash",
        "url": "https://pokeapi.co/api/v2/pokemon/28/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
        "name": "nidoran-f",
        "url": "https://pokeapi.co/api/v2/pokemon/29/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        "name": "nidorina",
        "url": "https://pokeapi.co/api/v2/pokemon/30/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
        "name": "nidoqueen",
        "url": "https://pokeapi.co/api/v2/pokemon/31/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
        "name": "nidoran-m",
        "url": "https://pokeapi.co/api/v2/pokemon/32/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        "name": "nidorino",
        "url": "https://pokeapi.co/api/v2/pokemon/33/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
        "name": "nidoking",
        "url": "https://pokeapi.co/api/v2/pokemon/34/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
        "name": "clefairy",
        "url": "https://pokeapi.co/api/v2/pokemon/35/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        "name": "clefable",
        "url": "https://pokeapi.co/api/v2/pokemon/36/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
        "name": "vulpix",
        "url": "https://pokeapi.co/api/v2/pokemon/37/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        "name": "ninetales",
        "url": "https://pokeapi.co/api/v2/pokemon/38/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
        "name": "jigglypuff",
        "url": "https://pokeapi.co/api/v2/pokemon/39/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        "name": "wigglytuff",
        "url": "https://pokeapi.co/api/v2/pokemon/40/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
        "name": "zubat",
        "url": "https://pokeapi.co/api/v2/pokemon/41/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        "name": "golbat",
        "url": "https://pokeapi.co/api/v2/pokemon/42/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
        "name": "oddish",
        "url": "https://pokeapi.co/api/v2/pokemon/43/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        "name": "gloom",
        "url": "https://pokeapi.co/api/v2/pokemon/44/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
        "name": "vileplume",
        "url": "https://pokeapi.co/api/v2/pokemon/45/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
        "name": "paras",
        "url": "https://pokeapi.co/api/v2/pokemon/46/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        "name": "parasect",
        "url": "https://pokeapi.co/api/v2/pokemon/47/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
        "name": "venonat",
        "url": "https://pokeapi.co/api/v2/pokemon/48/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        "name": "venomoth",
        "url": "https://pokeapi.co/api/v2/pokemon/49/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
        "name": "diglett",
        "url": "https://pokeapi.co/api/v2/pokemon/50/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
        "name": "dugtrio",
        "url": "https://pokeapi.co/api/v2/pokemon/51/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
        "name": "meowth",
        "url": "https://pokeapi.co/api/v2/pokemon/52/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        "name": "persian",
        "url": "https://pokeapi.co/api/v2/pokemon/53/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
        "name": "psyduck",
        "url": "https://pokeapi.co/api/v2/pokemon/54/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        "name": "golduck",
        "url": "https://pokeapi.co/api/v2/pokemon/55/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
        "name": "mankey",
        "url": "https://pokeapi.co/api/v2/pokemon/56/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
        "name": "primeape",
        "url": "https://pokeapi.co/api/v2/pokemon/57/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
        "name": "growlithe",
        "url": "https://pokeapi.co/api/v2/pokemon/58/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
        "name": "arcanine",
        "url": "https://pokeapi.co/api/v2/pokemon/59/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
        "name": "poliwag",
        "url": "https://pokeapi.co/api/v2/pokemon/60/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
        "name": "poliwhirl",
        "url": "https://pokeapi.co/api/v2/pokemon/61/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
        "name": "poliwrath",
        "url": "https://pokeapi.co/api/v2/pokemon/62/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
        "name": "abra",
        "url": "https://pokeapi.co/api/v2/pokemon/63/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
        "name": "kadabra",
        "url": "https://pokeapi.co/api/v2/pokemon/64/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
        "name": "alakazam",
        "url": "https://pokeapi.co/api/v2/pokemon/65/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        "name": "machop",
        "url": "https://pokeapi.co/api/v2/pokemon/66/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
        "name": "machoke",
        "url": "https://pokeapi.co/api/v2/pokemon/67/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
        "name": "machamp",
        "url": "https://pokeapi.co/api/v2/pokemon/68/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
        "name": "bellsprout",
        "url": "https://pokeapi.co/api/v2/pokemon/69/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
        "name": "weepinbell",
        "url": "https://pokeapi.co/api/v2/pokemon/70/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
        "name": "victreebel",
        "url": "https://pokeapi.co/api/v2/pokemon/71/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
        "name": "tentacool",
        "url": "https://pokeapi.co/api/v2/pokemon/72/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
        "name": "tentacruel",
        "url": "https://pokeapi.co/api/v2/pokemon/73/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
        "name": "geodude",
        "url": "https://pokeapi.co/api/v2/pokemon/74/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        "name": "graveler",
        "url": "https://pokeapi.co/api/v2/pokemon/75/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
        "name": "golem",
        "url": "https://pokeapi.co/api/v2/pokemon/76/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
        "name": "ponyta",
        "url": "https://pokeapi.co/api/v2/pokemon/77/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
        "name": "rapidash",
        "url": "https://pokeapi.co/api/v2/pokemon/78/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
        "name": "slowpoke",
        "url": "https://pokeapi.co/api/v2/pokemon/79/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
        "name": "slowbro",
        "url": "https://pokeapi.co/api/v2/pokemon/80/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
        "name": "magnemite",
        "url": "https://pokeapi.co/api/v2/pokemon/81/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
        "name": "magneton",
        "url": "https://pokeapi.co/api/v2/pokemon/82/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
        "name": "farfetchd",
        "url": "https://pokeapi.co/api/v2/pokemon/83/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
        "name": "doduo",
        "url": "https://pokeapi.co/api/v2/pokemon/84/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
        "name": "dodrio",
        "url": "https://pokeapi.co/api/v2/pokemon/85/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
        "name": "seel",
        "url": "https://pokeapi.co/api/v2/pokemon/86/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
        "name": "dewgong",
        "url": "https://pokeapi.co/api/v2/pokemon/87/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
        "name": "grimer",
        "url": "https://pokeapi.co/api/v2/pokemon/88/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
        "name": "muk",
        "url": "https://pokeapi.co/api/v2/pokemon/89/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
        "name": "shellder",
        "url": "https://pokeapi.co/api/v2/pokemon/90/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
        "name": "cloyster",
        "url": "https://pokeapi.co/api/v2/pokemon/91/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
        "name": "gastly",
        "url": "https://pokeapi.co/api/v2/pokemon/92/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
        "name": "haunter",
        "url": "https://pokeapi.co/api/v2/pokemon/93/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
        "name": "gengar",
        "url": "https://pokeapi.co/api/v2/pokemon/94/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        "name": "onix",
        "url": "https://pokeapi.co/api/v2/pokemon/95/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
        "name": "drowzee",
        "url": "https://pokeapi.co/api/v2/pokemon/96/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
        "name": "hypno",
        "url": "https://pokeapi.co/api/v2/pokemon/97/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
        "name": "krabby",
        "url": "https://pokeapi.co/api/v2/pokemon/98/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
        "name": "kingler",
        "url": "https://pokeapi.co/api/v2/pokemon/99/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
        "name": "voltorb",
        "url": "https://pokeapi.co/api/v2/pokemon/100/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
        "name": "electrode",
        "url": "https://pokeapi.co/api/v2/pokemon/101/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
        "name": "exeggcute",
        "url": "https://pokeapi.co/api/v2/pokemon/102/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
        "name": "exeggutor",
        "url": "https://pokeapi.co/api/v2/pokemon/103/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
        "name": "cubone",
        "url": "https://pokeapi.co/api/v2/pokemon/104/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
        "name": "marowak",
        "url": "https://pokeapi.co/api/v2/pokemon/105/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
        "name": "hitmonlee",
        "url": "https://pokeapi.co/api/v2/pokemon/106/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
        "name": "hitmonchan",
        "url": "https://pokeapi.co/api/v2/pokemon/107/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
        "name": "lickitung",
        "url": "https://pokeapi.co/api/v2/pokemon/108/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
        "name": "koffing",
        "url": "https://pokeapi.co/api/v2/pokemon/109/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
        "name": "weezing",
        "url": "https://pokeapi.co/api/v2/pokemon/110/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
        "name": "rhyhorn",
        "url": "https://pokeapi.co/api/v2/pokemon/111/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
        "name": "rhydon",
        "url": "https://pokeapi.co/api/v2/pokemon/112/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
        "name": "chansey",
        "url": "https://pokeapi.co/api/v2/pokemon/113/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
        "name": "tangela",
        "url": "https://pokeapi.co/api/v2/pokemon/114/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
        "name": "kangaskhan",
        "url": "https://pokeapi.co/api/v2/pokemon/115/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
        "name": "horsea",
        "url": "https://pokeapi.co/api/v2/pokemon/116/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
        "name": "seadra",
        "url": "https://pokeapi.co/api/v2/pokemon/117/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
        "name": "goldeen",
        "url": "https://pokeapi.co/api/v2/pokemon/118/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
        "name": "seaking",
        "url": "https://pokeapi.co/api/v2/pokemon/119/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
        "name": "staryu",
        "url": "https://pokeapi.co/api/v2/pokemon/120/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
        "name": "starmie",
        "url": "https://pokeapi.co/api/v2/pokemon/121/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
        "name": "mr-mime",
        "url": "https://pokeapi.co/api/v2/pokemon/122/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
        "name": "scyther",
        "url": "https://pokeapi.co/api/v2/pokemon/123/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
        "name": "jynx",
        "url": "https://pokeapi.co/api/v2/pokemon/124/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
        "name": "electabuzz",
        "url": "https://pokeapi.co/api/v2/pokemon/125/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
        "name": "magmar",
        "url": "https://pokeapi.co/api/v2/pokemon/126/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
        "name": "pinsir",
        "url": "https://pokeapi.co/api/v2/pokemon/127/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
        "name": "tauros",
        "url": "https://pokeapi.co/api/v2/pokemon/128/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
        "name": "magikarp",
        "url": "https://pokeapi.co/api/v2/pokemon/129/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
        "name": "gyarados",
        "url": "https://pokeapi.co/api/v2/pokemon/130/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        "name": "lapras",
        "url": "https://pokeapi.co/api/v2/pokemon/131/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon/132/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
        "name": "eevee",
        "url": "https://pokeapi.co/api/v2/pokemon/133/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        "name": "vaporeon",
        "url": "https://pokeapi.co/api/v2/pokemon/134/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
        "name": "jolteon",
        "url": "https://pokeapi.co/api/v2/pokemon/135/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
        "name": "flareon",
        "url": "https://pokeapi.co/api/v2/pokemon/136/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
        "name": "porygon",
        "url": "https://pokeapi.co/api/v2/pokemon/137/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
        "name": "omanyte",
        "url": "https://pokeapi.co/api/v2/pokemon/138/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
        "name": "omastar",
        "url": "https://pokeapi.co/api/v2/pokemon/139/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
        "name": "kabuto",
        "url": "https://pokeapi.co/api/v2/pokemon/140/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
        "name": "kabutops",
        "url": "https://pokeapi.co/api/v2/pokemon/141/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
        "name": "aerodactyl",
        "url": "https://pokeapi.co/api/v2/pokemon/142/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
        "name": "snorlax",
        "url": "https://pokeapi.co/api/v2/pokemon/143/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        "name": "articuno",
        "url": "https://pokeapi.co/api/v2/pokemon/144/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
        "name": "zapdos",
        "url": "https://pokeapi.co/api/v2/pokemon/145/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
        "name": "moltres",
        "url": "https://pokeapi.co/api/v2/pokemon/146/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
        "name": "dratini",
        "url": "https://pokeapi.co/api/v2/pokemon/147/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
        "name": "dragonair",
        "url": "https://pokeapi.co/api/v2/pokemon/148/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
        "name": "dragonite",
        "url": "https://pokeapi.co/api/v2/pokemon/149/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        "name": "mewtwo",
        "url": "https://pokeapi.co/api/v2/pokemon/150/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
        "name": "mew",
        "url": "https://pokeapi.co/api/v2/pokemon/151/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    },
    {
        "name": "chikorita",
        "url": "https://pokeapi.co/api/v2/pokemon/152/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    },
    {
        "name": "bayleef",
        "url": "https://pokeapi.co/api/v2/pokemon/153/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png"
    },
    {
        "name": "meganium",
        "url": "https://pokeapi.co/api/v2/pokemon/154/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png"
    },
    {
        "name": "cyndaquil",
        "url": "https://pokeapi.co/api/v2/pokemon/155/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
    },
    {
        "name": "quilava",
        "url": "https://pokeapi.co/api/v2/pokemon/156/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png"
    },
    {
        "name": "typhlosion",
        "url": "https://pokeapi.co/api/v2/pokemon/157/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"
    },
    {
        "name": "totodile",
        "url": "https://pokeapi.co/api/v2/pokemon/158/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
    },
    {
        "name": "croconaw",
        "url": "https://pokeapi.co/api/v2/pokemon/159/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
    },
    {
        "name": "feraligatr",
        "url": "https://pokeapi.co/api/v2/pokemon/160/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
    },
    {
        "name": "sentret",
        "url": "https://pokeapi.co/api/v2/pokemon/161/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png"
    },
    {
        "name": "furret",
        "url": "https://pokeapi.co/api/v2/pokemon/162/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
    },
    {
        "name": "hoothoot",
        "url": "https://pokeapi.co/api/v2/pokemon/163/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png"
    },
    {
        "name": "noctowl",
        "url": "https://pokeapi.co/api/v2/pokemon/164/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png"
    },
    {
        "name": "ledyba",
        "url": "https://pokeapi.co/api/v2/pokemon/165/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
    },
    {
        "name": "ledian",
        "url": "https://pokeapi.co/api/v2/pokemon/166/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png"
    },
    {
        "name": "spinarak",
        "url": "https://pokeapi.co/api/v2/pokemon/167/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
    },
    {
        "name": "ariados",
        "url": "https://pokeapi.co/api/v2/pokemon/168/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png"
    },
    {
        "name": "crobat",
        "url": "https://pokeapi.co/api/v2/pokemon/169/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
    },
    {
        "name": "chinchou",
        "url": "https://pokeapi.co/api/v2/pokemon/170/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png"
    },
    {
        "name": "lanturn",
        "url": "https://pokeapi.co/api/v2/pokemon/171/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
    },
    {
        "name": "pichu",
        "url": "https://pokeapi.co/api/v2/pokemon/172/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
    },
    {
        "name": "cleffa",
        "url": "https://pokeapi.co/api/v2/pokemon/173/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png"
    },
    {
        "name": "igglybuff",
        "url": "https://pokeapi.co/api/v2/pokemon/174/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
    },
    {
        "name": "togepi",
        "url": "https://pokeapi.co/api/v2/pokemon/175/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
    },
    {
        "name": "togetic",
        "url": "https://pokeapi.co/api/v2/pokemon/176/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png"
    },
    {
        "name": "natu",
        "url": "https://pokeapi.co/api/v2/pokemon/177/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png"
    },
    {
        "name": "xatu",
        "url": "https://pokeapi.co/api/v2/pokemon/178/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png"
    },
    {
        "name": "mareep",
        "url": "https://pokeapi.co/api/v2/pokemon/179/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png"
    },
    {
        "name": "flaaffy",
        "url": "https://pokeapi.co/api/v2/pokemon/180/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png"
    },
    {
        "name": "ampharos",
        "url": "https://pokeapi.co/api/v2/pokemon/181/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png"
    },
    {
        "name": "bellossom",
        "url": "https://pokeapi.co/api/v2/pokemon/182/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png"
    },
    {
        "name": "marill",
        "url": "https://pokeapi.co/api/v2/pokemon/183/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png"
    },
    {
        "name": "azumarill",
        "url": "https://pokeapi.co/api/v2/pokemon/184/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png"
    },
    {
        "name": "sudowoodo",
        "url": "https://pokeapi.co/api/v2/pokemon/185/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
    },
    {
        "name": "politoed",
        "url": "https://pokeapi.co/api/v2/pokemon/186/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png"
    },
    {
        "name": "hoppip",
        "url": "https://pokeapi.co/api/v2/pokemon/187/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
    },
    {
        "name": "skiploom",
        "url": "https://pokeapi.co/api/v2/pokemon/188/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png"
    },
    {
        "name": "jumpluff",
        "url": "https://pokeapi.co/api/v2/pokemon/189/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png"
    },
    {
        "name": "aipom",
        "url": "https://pokeapi.co/api/v2/pokemon/190/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png"
    },
    {
        "name": "sunkern",
        "url": "https://pokeapi.co/api/v2/pokemon/191/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png"
    },
    {
        "name": "sunflora",
        "url": "https://pokeapi.co/api/v2/pokemon/192/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png"
    },
    {
        "name": "yanma",
        "url": "https://pokeapi.co/api/v2/pokemon/193/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "name": "wooper",
        "url": "https://pokeapi.co/api/v2/pokemon/194/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
    },
    {
        "name": "quagsire",
        "url": "https://pokeapi.co/api/v2/pokemon/195/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
    },
    {
        "name": "espeon",
        "url": "https://pokeapi.co/api/v2/pokemon/196/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
    },
    {
        "name": "umbreon",
        "url": "https://pokeapi.co/api/v2/pokemon/197/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
    },
    {
        "name": "murkrow",
        "url": "https://pokeapi.co/api/v2/pokemon/198/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png"
    },
    {
        "name": "slowking",
        "url": "https://pokeapi.co/api/v2/pokemon/199/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png"
    },
    {
        "name": "misdreavus",
        "url": "https://pokeapi.co/api/v2/pokemon/200/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png"
    },
    {
        "name": "unown",
        "url": "https://pokeapi.co/api/v2/pokemon/201/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
    },
    {
        "name": "wobbuffet",
        "url": "https://pokeapi.co/api/v2/pokemon/202/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
    },
    {
        "name": "girafarig",
        "url": "https://pokeapi.co/api/v2/pokemon/203/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png"
    },
    {
        "name": "pineco",
        "url": "https://pokeapi.co/api/v2/pokemon/204/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png"
    },
    {
        "name": "forretress",
        "url": "https://pokeapi.co/api/v2/pokemon/205/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png"
    },
    {
        "name": "dunsparce",
        "url": "https://pokeapi.co/api/v2/pokemon/206/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png"
    },
    {
        "name": "gligar",
        "url": "https://pokeapi.co/api/v2/pokemon/207/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png"
    },
    {
        "name": "steelix",
        "url": "https://pokeapi.co/api/v2/pokemon/208/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
    },
    {
        "name": "snubbull",
        "url": "https://pokeapi.co/api/v2/pokemon/209/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png"
    },
    {
        "name": "granbull",
        "url": "https://pokeapi.co/api/v2/pokemon/210/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png"
    },
    {
        "name": "qwilfish",
        "url": "https://pokeapi.co/api/v2/pokemon/211/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png"
    },
    {
        "name": "scizor",
        "url": "https://pokeapi.co/api/v2/pokemon/212/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
    },
    {
        "name": "shuckle",
        "url": "https://pokeapi.co/api/v2/pokemon/213/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
    },
    {
        "name": "heracross",
        "url": "https://pokeapi.co/api/v2/pokemon/214/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png"
    },
    {
        "name": "sneasel",
        "url": "https://pokeapi.co/api/v2/pokemon/215/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png"
    },
    {
        "name": "teddiursa",
        "url": "https://pokeapi.co/api/v2/pokemon/216/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png"
    },
    {
        "name": "ursaring",
        "url": "https://pokeapi.co/api/v2/pokemon/217/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png"
    },
    {
        "name": "slugma",
        "url": "https://pokeapi.co/api/v2/pokemon/218/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"
    },
    {
        "name": "magcargo",
        "url": "https://pokeapi.co/api/v2/pokemon/219/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png"
    },
    {
        "name": "swinub",
        "url": "https://pokeapi.co/api/v2/pokemon/220/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png"
    },
    {
        "name": "piloswine",
        "url": "https://pokeapi.co/api/v2/pokemon/221/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png"
    },
    {
        "name": "corsola",
        "url": "https://pokeapi.co/api/v2/pokemon/222/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
    },
    {
        "name": "remoraid",
        "url": "https://pokeapi.co/api/v2/pokemon/223/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png"
    },
    {
        "name": "octillery",
        "url": "https://pokeapi.co/api/v2/pokemon/224/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png"
    },
    {
        "name": "delibird",
        "url": "https://pokeapi.co/api/v2/pokemon/225/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png"
    },
    {
        "name": "mantine",
        "url": "https://pokeapi.co/api/v2/pokemon/226/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png"
    },
    {
        "name": "skarmory",
        "url": "https://pokeapi.co/api/v2/pokemon/227/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png"
    },
    {
        "name": "houndour",
        "url": "https://pokeapi.co/api/v2/pokemon/228/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"
    },
    {
        "name": "houndoom",
        "url": "https://pokeapi.co/api/v2/pokemon/229/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png"
    },
    {
        "name": "kingdra",
        "url": "https://pokeapi.co/api/v2/pokemon/230/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
    },
    {
        "name": "phanpy",
        "url": "https://pokeapi.co/api/v2/pokemon/231/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"
    },
    {
        "name": "donphan",
        "url": "https://pokeapi.co/api/v2/pokemon/232/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png"
    },
    {
        "name": "porygon2",
        "url": "https://pokeapi.co/api/v2/pokemon/233/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png"
    },
    {
        "name": "stantler",
        "url": "https://pokeapi.co/api/v2/pokemon/234/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png"
    },
    {
        "name": "smeargle",
        "url": "https://pokeapi.co/api/v2/pokemon/235/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png"
    },
    {
        "name": "tyrogue",
        "url": "https://pokeapi.co/api/v2/pokemon/236/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png"
    },
    {
        "name": "hitmontop",
        "url": "https://pokeapi.co/api/v2/pokemon/237/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png"
    },
    {
        "name": "smoochum",
        "url": "https://pokeapi.co/api/v2/pokemon/238/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png"
    },
    {
        "name": "elekid",
        "url": "https://pokeapi.co/api/v2/pokemon/239/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png"
    },
    {
        "name": "magby",
        "url": "https://pokeapi.co/api/v2/pokemon/240/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"
    },
    {
        "name": "miltank",
        "url": "https://pokeapi.co/api/v2/pokemon/241/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
    },
    {
        "name": "blissey",
        "url": "https://pokeapi.co/api/v2/pokemon/242/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
    },
    {
        "name": "raikou",
        "url": "https://pokeapi.co/api/v2/pokemon/243/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png"
    },
    {
        "name": "entei",
        "url": "https://pokeapi.co/api/v2/pokemon/244/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
    },
    {
        "name": "suicune",
        "url": "https://pokeapi.co/api/v2/pokemon/245/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
    },
    {
        "name": "larvitar",
        "url": "https://pokeapi.co/api/v2/pokemon/246/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png"
    },
    {
        "name": "pupitar",
        "url": "https://pokeapi.co/api/v2/pokemon/247/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png"
    },
    {
        "name": "tyranitar",
        "url": "https://pokeapi.co/api/v2/pokemon/248/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png"
    },
    {
        "name": "lugia",
        "url": "https://pokeapi.co/api/v2/pokemon/249/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    },
    {
        "name": "ho-oh",
        "url": "https://pokeapi.co/api/v2/pokemon/250/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
    },
    {
        "name": "celebi",
        "url": "https://pokeapi.co/api/v2/pokemon/251/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png"
    },
    {
        "name": "treecko",
        "url": "https://pokeapi.co/api/v2/pokemon/252/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
    },
    {
        "name": "grovyle",
        "url": "https://pokeapi.co/api/v2/pokemon/253/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png"
    },
    {
        "name": "sceptile",
        "url": "https://pokeapi.co/api/v2/pokemon/254/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png"
    },
    {
        "name": "torchic",
        "url": "https://pokeapi.co/api/v2/pokemon/255/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
    },
    {
        "name": "combusken",
        "url": "https://pokeapi.co/api/v2/pokemon/256/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png"
    },
    {
        "name": "blaziken",
        "url": "https://pokeapi.co/api/v2/pokemon/257/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
    },
    {
        "name": "mudkip",
        "url": "https://pokeapi.co/api/v2/pokemon/258/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
    },
    {
        "name": "marshtomp",
        "url": "https://pokeapi.co/api/v2/pokemon/259/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png"
    },
    {
        "name": "swampert",
        "url": "https://pokeapi.co/api/v2/pokemon/260/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"
    },
    {
        "name": "poochyena",
        "url": "https://pokeapi.co/api/v2/pokemon/261/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png"
    },
    {
        "name": "mightyena",
        "url": "https://pokeapi.co/api/v2/pokemon/262/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png"
    },
    {
        "name": "zigzagoon",
        "url": "https://pokeapi.co/api/v2/pokemon/263/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png"
    },
    {
        "name": "linoone",
        "url": "https://pokeapi.co/api/v2/pokemon/264/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png"
    },
    {
        "name": "wurmple",
        "url": "https://pokeapi.co/api/v2/pokemon/265/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png"
    },
    {
        "name": "silcoon",
        "url": "https://pokeapi.co/api/v2/pokemon/266/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png"
    },
    {
        "name": "beautifly",
        "url": "https://pokeapi.co/api/v2/pokemon/267/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png"
    },
    {
        "name": "cascoon",
        "url": "https://pokeapi.co/api/v2/pokemon/268/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png"
    },
    {
        "name": "dustox",
        "url": "https://pokeapi.co/api/v2/pokemon/269/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png"
    },
    {
        "name": "lotad",
        "url": "https://pokeapi.co/api/v2/pokemon/270/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png"
    },
    {
        "name": "lombre",
        "url": "https://pokeapi.co/api/v2/pokemon/271/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png"
    },
    {
        "name": "ludicolo",
        "url": "https://pokeapi.co/api/v2/pokemon/272/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png"
    },
    {
        "name": "seedot",
        "url": "https://pokeapi.co/api/v2/pokemon/273/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png"
    },
    {
        "name": "nuzleaf",
        "url": "https://pokeapi.co/api/v2/pokemon/274/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png"
    },
    {
        "name": "shiftry",
        "url": "https://pokeapi.co/api/v2/pokemon/275/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png"
    },
    {
        "name": "taillow",
        "url": "https://pokeapi.co/api/v2/pokemon/276/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png"
    },
    {
        "name": "swellow",
        "url": "https://pokeapi.co/api/v2/pokemon/277/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png"
    },
    {
        "name": "wingull",
        "url": "https://pokeapi.co/api/v2/pokemon/278/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png"
    },
    {
        "name": "pelipper",
        "url": "https://pokeapi.co/api/v2/pokemon/279/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
    },
    {
        "name": "ralts",
        "url": "https://pokeapi.co/api/v2/pokemon/280/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png"
    },
    {
        "name": "kirlia",
        "url": "https://pokeapi.co/api/v2/pokemon/281/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png"
    },
    {
        "name": "gardevoir",
        "url": "https://pokeapi.co/api/v2/pokemon/282/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    },
    {
        "name": "surskit",
        "url": "https://pokeapi.co/api/v2/pokemon/283/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png"
    },
    {
        "name": "masquerain",
        "url": "https://pokeapi.co/api/v2/pokemon/284/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png"
    },
    {
        "name": "shroomish",
        "url": "https://pokeapi.co/api/v2/pokemon/285/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png"
    },
    {
        "name": "breloom",
        "url": "https://pokeapi.co/api/v2/pokemon/286/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png"
    },
    {
        "name": "slakoth",
        "url": "https://pokeapi.co/api/v2/pokemon/287/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png"
    },
    {
        "name": "vigoroth",
        "url": "https://pokeapi.co/api/v2/pokemon/288/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png"
    },
    {
        "name": "slaking",
        "url": "https://pokeapi.co/api/v2/pokemon/289/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png"
    },
    {
        "name": "nincada",
        "url": "https://pokeapi.co/api/v2/pokemon/290/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png"
    },
    {
        "name": "ninjask",
        "url": "https://pokeapi.co/api/v2/pokemon/291/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png"
    },
    {
        "name": "shedinja",
        "url": "https://pokeapi.co/api/v2/pokemon/292/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png"
    },
    {
        "name": "whismur",
        "url": "https://pokeapi.co/api/v2/pokemon/293/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png"
    },
    {
        "name": "loudred",
        "url": "https://pokeapi.co/api/v2/pokemon/294/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png"
    },
    {
        "name": "exploud",
        "url": "https://pokeapi.co/api/v2/pokemon/295/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png"
    },
    {
        "name": "makuhita",
        "url": "https://pokeapi.co/api/v2/pokemon/296/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
    },
    {
        "name": "hariyama",
        "url": "https://pokeapi.co/api/v2/pokemon/297/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png"
    },
    {
        "name": "azurill",
        "url": "https://pokeapi.co/api/v2/pokemon/298/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png"
    },
    {
        "name": "nosepass",
        "url": "https://pokeapi.co/api/v2/pokemon/299/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png"
    },
    {
        "name": "skitty",
        "url": "https://pokeapi.co/api/v2/pokemon/300/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png"
    },
    {
        "name": "delcatty",
        "url": "https://pokeapi.co/api/v2/pokemon/301/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png"
    },
    {
        "name": "sableye",
        "url": "https://pokeapi.co/api/v2/pokemon/302/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
    },
    {
        "name": "mawile",
        "url": "https://pokeapi.co/api/v2/pokemon/303/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png"
    },
    {
        "name": "aron",
        "url": "https://pokeapi.co/api/v2/pokemon/304/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png"
    },
    {
        "name": "lairon",
        "url": "https://pokeapi.co/api/v2/pokemon/305/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png"
    },
    {
        "name": "aggron",
        "url": "https://pokeapi.co/api/v2/pokemon/306/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
    },
    {
        "name": "meditite",
        "url": "https://pokeapi.co/api/v2/pokemon/307/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png"
    },
    {
        "name": "medicham",
        "url": "https://pokeapi.co/api/v2/pokemon/308/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png"
    },
    {
        "name": "electrike",
        "url": "https://pokeapi.co/api/v2/pokemon/309/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png"
    },
    {
        "name": "manectric",
        "url": "https://pokeapi.co/api/v2/pokemon/310/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png"
    },
    {
        "name": "plusle",
        "url": "https://pokeapi.co/api/v2/pokemon/311/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png"
    },
    {
        "name": "minun",
        "url": "https://pokeapi.co/api/v2/pokemon/312/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png"
    },
    {
        "name": "volbeat",
        "url": "https://pokeapi.co/api/v2/pokemon/313/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png"
    },
    {
        "name": "illumise",
        "url": "https://pokeapi.co/api/v2/pokemon/314/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png"
    },
    {
        "name": "roselia",
        "url": "https://pokeapi.co/api/v2/pokemon/315/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png"
    },
    {
        "name": "gulpin",
        "url": "https://pokeapi.co/api/v2/pokemon/316/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png"
    },
    {
        "name": "swalot",
        "url": "https://pokeapi.co/api/v2/pokemon/317/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png"
    },
    {
        "name": "carvanha",
        "url": "https://pokeapi.co/api/v2/pokemon/318/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png"
    },
    {
        "name": "sharpedo",
        "url": "https://pokeapi.co/api/v2/pokemon/319/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png"
    },
    {
        "name": "wailmer",
        "url": "https://pokeapi.co/api/v2/pokemon/320/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
    },
    {
        "name": "wailord",
        "url": "https://pokeapi.co/api/v2/pokemon/321/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png"
    },
    {
        "name": "numel",
        "url": "https://pokeapi.co/api/v2/pokemon/322/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png"
    },
    {
        "name": "camerupt",
        "url": "https://pokeapi.co/api/v2/pokemon/323/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png"
    },
    {
        "name": "torkoal",
        "url": "https://pokeapi.co/api/v2/pokemon/324/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
    },
    {
        "name": "spoink",
        "url": "https://pokeapi.co/api/v2/pokemon/325/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png"
    },
    {
        "name": "grumpig",
        "url": "https://pokeapi.co/api/v2/pokemon/326/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png"
    },
    {
        "name": "spinda",
        "url": "https://pokeapi.co/api/v2/pokemon/327/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png"
    },
    {
        "name": "trapinch",
        "url": "https://pokeapi.co/api/v2/pokemon/328/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png"
    },
    {
        "name": "vibrava",
        "url": "https://pokeapi.co/api/v2/pokemon/329/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png"
    },
    {
        "name": "flygon",
        "url": "https://pokeapi.co/api/v2/pokemon/330/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png"
    },
    {
        "name": "cacnea",
        "url": "https://pokeapi.co/api/v2/pokemon/331/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png"
    },
    {
        "name": "cacturne",
        "url": "https://pokeapi.co/api/v2/pokemon/332/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png"
    },
    {
        "name": "swablu",
        "url": "https://pokeapi.co/api/v2/pokemon/333/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png"
    },
    {
        "name": "altaria",
        "url": "https://pokeapi.co/api/v2/pokemon/334/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png"
    },
    {
        "name": "zangoose",
        "url": "https://pokeapi.co/api/v2/pokemon/335/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png"
    },
    {
        "name": "seviper",
        "url": "https://pokeapi.co/api/v2/pokemon/336/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png"
    },
    {
        "name": "lunatone",
        "url": "https://pokeapi.co/api/v2/pokemon/337/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png"
    },
    {
        "name": "solrock",
        "url": "https://pokeapi.co/api/v2/pokemon/338/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png"
    },
    {
        "name": "barboach",
        "url": "https://pokeapi.co/api/v2/pokemon/339/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png"
    },
    {
        "name": "whiscash",
        "url": "https://pokeapi.co/api/v2/pokemon/340/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png"
    },
    {
        "name": "corphish",
        "url": "https://pokeapi.co/api/v2/pokemon/341/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png"
    },
    {
        "name": "crawdaunt",
        "url": "https://pokeapi.co/api/v2/pokemon/342/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
    },
    {
        "name": "baltoy",
        "url": "https://pokeapi.co/api/v2/pokemon/343/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png"
    },
    {
        "name": "claydol",
        "url": "https://pokeapi.co/api/v2/pokemon/344/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png"
    },
    {
        "name": "lileep",
        "url": "https://pokeapi.co/api/v2/pokemon/345/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png"
    },
    {
        "name": "cradily",
        "url": "https://pokeapi.co/api/v2/pokemon/346/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png"
    },
    {
        "name": "anorith",
        "url": "https://pokeapi.co/api/v2/pokemon/347/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png"
    },
    {
        "name": "armaldo",
        "url": "https://pokeapi.co/api/v2/pokemon/348/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png"
    },
    {
        "name": "feebas",
        "url": "https://pokeapi.co/api/v2/pokemon/349/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png"
    },
    {
        "name": "milotic",
        "url": "https://pokeapi.co/api/v2/pokemon/350/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
    },
    {
        "name": "castform",
        "url": "https://pokeapi.co/api/v2/pokemon/351/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png"
    },
    {
        "name": "kecleon",
        "url": "https://pokeapi.co/api/v2/pokemon/352/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png"
    },
    {
        "name": "shuppet",
        "url": "https://pokeapi.co/api/v2/pokemon/353/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png"
    },
    {
        "name": "banette",
        "url": "https://pokeapi.co/api/v2/pokemon/354/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"
    },
    {
        "name": "duskull",
        "url": "https://pokeapi.co/api/v2/pokemon/355/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png"
    },
    {
        "name": "dusclops",
        "url": "https://pokeapi.co/api/v2/pokemon/356/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png"
    },
    {
        "name": "tropius",
        "url": "https://pokeapi.co/api/v2/pokemon/357/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png"
    },
    {
        "name": "chimecho",
        "url": "https://pokeapi.co/api/v2/pokemon/358/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png"
    },
    {
        "name": "absol",
        "url": "https://pokeapi.co/api/v2/pokemon/359/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png"
    },
    {
        "name": "wynaut",
        "url": "https://pokeapi.co/api/v2/pokemon/360/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png"
    },
    {
        "name": "snorunt",
        "url": "https://pokeapi.co/api/v2/pokemon/361/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png"
    },
    {
        "name": "glalie",
        "url": "https://pokeapi.co/api/v2/pokemon/362/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png"
    },
    {
        "name": "spheal",
        "url": "https://pokeapi.co/api/v2/pokemon/363/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png"
    },
    {
        "name": "sealeo",
        "url": "https://pokeapi.co/api/v2/pokemon/364/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png"
    },
    {
        "name": "walrein",
        "url": "https://pokeapi.co/api/v2/pokemon/365/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png"
    },
    {
        "name": "clamperl",
        "url": "https://pokeapi.co/api/v2/pokemon/366/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png"
    },
    {
        "name": "huntail",
        "url": "https://pokeapi.co/api/v2/pokemon/367/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png"
    },
    {
        "name": "gorebyss",
        "url": "https://pokeapi.co/api/v2/pokemon/368/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png"
    },
    {
        "name": "relicanth",
        "url": "https://pokeapi.co/api/v2/pokemon/369/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png"
    },
    {
        "name": "luvdisc",
        "url": "https://pokeapi.co/api/v2/pokemon/370/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png"
    },
    {
        "name": "bagon",
        "url": "https://pokeapi.co/api/v2/pokemon/371/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png"
    },
    {
        "name": "shelgon",
        "url": "https://pokeapi.co/api/v2/pokemon/372/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png"
    },
    {
        "name": "salamence",
        "url": "https://pokeapi.co/api/v2/pokemon/373/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
    },
    {
        "name": "beldum",
        "url": "https://pokeapi.co/api/v2/pokemon/374/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png"
    },
    {
        "name": "metang",
        "url": "https://pokeapi.co/api/v2/pokemon/375/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png"
    },
    {
        "name": "metagross",
        "url": "https://pokeapi.co/api/v2/pokemon/376/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png"
    },
    {
        "name": "regirock",
        "url": "https://pokeapi.co/api/v2/pokemon/377/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png"
    },
    {
        "name": "regice",
        "url": "https://pokeapi.co/api/v2/pokemon/378/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png"
    },
    {
        "name": "registeel",
        "url": "https://pokeapi.co/api/v2/pokemon/379/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png"
    },
    {
        "name": "latias",
        "url": "https://pokeapi.co/api/v2/pokemon/380/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
    },
    {
        "name": "latios",
        "url": "https://pokeapi.co/api/v2/pokemon/381/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
    },
    {
        "name": "kyogre",
        "url": "https://pokeapi.co/api/v2/pokemon/382/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
    },
    {
        "name": "groudon",
        "url": "https://pokeapi.co/api/v2/pokemon/383/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png"
    },
    {
        "name": "rayquaza",
        "url": "https://pokeapi.co/api/v2/pokemon/384/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
    },
    {
        "name": "jirachi",
        "url": "https://pokeapi.co/api/v2/pokemon/385/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png"
    },
    {
        "name": "deoxys-normal",
        "url": "https://pokeapi.co/api/v2/pokemon/386/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png"
    },
    {
        "name": "turtwig",
        "url": "https://pokeapi.co/api/v2/pokemon/387/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
    },
    {
        "name": "grotle",
        "url": "https://pokeapi.co/api/v2/pokemon/388/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png"
    },
    {
        "name": "torterra",
        "url": "https://pokeapi.co/api/v2/pokemon/389/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"
    },
    {
        "name": "chimchar",
        "url": "https://pokeapi.co/api/v2/pokemon/390/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
    },
    {
        "name": "monferno",
        "url": "https://pokeapi.co/api/v2/pokemon/391/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png"
    },
    {
        "name": "infernape",
        "url": "https://pokeapi.co/api/v2/pokemon/392/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
    },
    {
        "name": "piplup",
        "url": "https://pokeapi.co/api/v2/pokemon/393/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
    },
    {
        "name": "prinplup",
        "url": "https://pokeapi.co/api/v2/pokemon/394/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png"
    },
    {
        "name": "empoleon",
        "url": "https://pokeapi.co/api/v2/pokemon/395/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png"
    },
    {
        "name": "starly",
        "url": "https://pokeapi.co/api/v2/pokemon/396/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png"
    },
    {
        "name": "staravia",
        "url": "https://pokeapi.co/api/v2/pokemon/397/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png"
    },
    {
        "name": "staraptor",
        "url": "https://pokeapi.co/api/v2/pokemon/398/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png"
    },
    {
        "name": "bidoof",
        "url": "https://pokeapi.co/api/v2/pokemon/399/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png"
    },
    {
        "name": "bibarel",
        "url": "https://pokeapi.co/api/v2/pokemon/400/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png"
    },
    {
        "name": "kricketot",
        "url": "https://pokeapi.co/api/v2/pokemon/401/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png"
    },
    {
        "name": "kricketune",
        "url": "https://pokeapi.co/api/v2/pokemon/402/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png"
    },
    {
        "name": "shinx",
        "url": "https://pokeapi.co/api/v2/pokemon/403/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png"
    },
    {
        "name": "luxio",
        "url": "https://pokeapi.co/api/v2/pokemon/404/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png"
    },
    {
        "name": "luxray",
        "url": "https://pokeapi.co/api/v2/pokemon/405/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png"
    },
    {
        "name": "budew",
        "url": "https://pokeapi.co/api/v2/pokemon/406/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png"
    },
    {
        "name": "roserade",
        "url": "https://pokeapi.co/api/v2/pokemon/407/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png"
    },
    {
        "name": "cranidos",
        "url": "https://pokeapi.co/api/v2/pokemon/408/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png"
    },
    {
        "name": "rampardos",
        "url": "https://pokeapi.co/api/v2/pokemon/409/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png"
    },
    {
        "name": "shieldon",
        "url": "https://pokeapi.co/api/v2/pokemon/410/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png"
    },
    {
        "name": "bastiodon",
        "url": "https://pokeapi.co/api/v2/pokemon/411/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png"
    },
    {
        "name": "burmy",
        "url": "https://pokeapi.co/api/v2/pokemon/412/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png"
    },
    {
        "name": "wormadam-plant",
        "url": "https://pokeapi.co/api/v2/pokemon/413/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png"
    },
    {
        "name": "mothim",
        "url": "https://pokeapi.co/api/v2/pokemon/414/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png"
    },
    {
        "name": "combee",
        "url": "https://pokeapi.co/api/v2/pokemon/415/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png"
    },
    {
        "name": "vespiquen",
        "url": "https://pokeapi.co/api/v2/pokemon/416/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png"
    },
    {
        "name": "pachirisu",
        "url": "https://pokeapi.co/api/v2/pokemon/417/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png"
    },
    {
        "name": "buizel",
        "url": "https://pokeapi.co/api/v2/pokemon/418/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png"
    },
    {
        "name": "floatzel",
        "url": "https://pokeapi.co/api/v2/pokemon/419/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png"
    },
    {
        "name": "cherubi",
        "url": "https://pokeapi.co/api/v2/pokemon/420/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png"
    },
    {
        "name": "cherrim",
        "url": "https://pokeapi.co/api/v2/pokemon/421/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png"
    },
    {
        "name": "shellos",
        "url": "https://pokeapi.co/api/v2/pokemon/422/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png"
    },
    {
        "name": "gastrodon",
        "url": "https://pokeapi.co/api/v2/pokemon/423/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png"
    },
    {
        "name": "ambipom",
        "url": "https://pokeapi.co/api/v2/pokemon/424/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png"
    },
    {
        "name": "drifloon",
        "url": "https://pokeapi.co/api/v2/pokemon/425/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png"
    },
    {
        "name": "drifblim",
        "url": "https://pokeapi.co/api/v2/pokemon/426/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png"
    },
    {
        "name": "buneary",
        "url": "https://pokeapi.co/api/v2/pokemon/427/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png"
    },
    {
        "name": "lopunny",
        "url": "https://pokeapi.co/api/v2/pokemon/428/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png"
    },
    {
        "name": "mismagius",
        "url": "https://pokeapi.co/api/v2/pokemon/429/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png"
    },
    {
        "name": "honchkrow",
        "url": "https://pokeapi.co/api/v2/pokemon/430/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png"
    },
    {
        "name": "glameow",
        "url": "https://pokeapi.co/api/v2/pokemon/431/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png"
    },
    {
        "name": "purugly",
        "url": "https://pokeapi.co/api/v2/pokemon/432/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png"
    },
    {
        "name": "chingling",
        "url": "https://pokeapi.co/api/v2/pokemon/433/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png"
    },
    {
        "name": "stunky",
        "url": "https://pokeapi.co/api/v2/pokemon/434/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png"
    },
    {
        "name": "skuntank",
        "url": "https://pokeapi.co/api/v2/pokemon/435/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png"
    },
    {
        "name": "bronzor",
        "url": "https://pokeapi.co/api/v2/pokemon/436/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png"
    },
    {
        "name": "bronzong",
        "url": "https://pokeapi.co/api/v2/pokemon/437/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png"
    },
    {
        "name": "bonsly",
        "url": "https://pokeapi.co/api/v2/pokemon/438/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png"
    },
    {
        "name": "mime-jr",
        "url": "https://pokeapi.co/api/v2/pokemon/439/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png"
    },
    {
        "name": "happiny",
        "url": "https://pokeapi.co/api/v2/pokemon/440/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png"
    },
    {
        "name": "chatot",
        "url": "https://pokeapi.co/api/v2/pokemon/441/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png"
    },
    {
        "name": "spiritomb",
        "url": "https://pokeapi.co/api/v2/pokemon/442/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png"
    },
    {
        "name": "gible",
        "url": "https://pokeapi.co/api/v2/pokemon/443/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png"
    },
    {
        "name": "gabite",
        "url": "https://pokeapi.co/api/v2/pokemon/444/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png"
    },
    {
        "name": "garchomp",
        "url": "https://pokeapi.co/api/v2/pokemon/445/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
    },
    {
        "name": "munchlax",
        "url": "https://pokeapi.co/api/v2/pokemon/446/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png"
    },
    {
        "name": "riolu",
        "url": "https://pokeapi.co/api/v2/pokemon/447/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png"
    },
    {
        "name": "lucario",
        "url": "https://pokeapi.co/api/v2/pokemon/448/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    },
    {
        "name": "hippopotas",
        "url": "https://pokeapi.co/api/v2/pokemon/449/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png"
    },
    {
        "name": "hippowdon",
        "url": "https://pokeapi.co/api/v2/pokemon/450/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png"
    },
    {
        "name": "skorupi",
        "url": "https://pokeapi.co/api/v2/pokemon/451/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png"
    },
    {
        "name": "drapion",
        "url": "https://pokeapi.co/api/v2/pokemon/452/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png"
    },
    {
        "name": "croagunk",
        "url": "https://pokeapi.co/api/v2/pokemon/453/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png"
    },
    {
        "name": "toxicroak",
        "url": "https://pokeapi.co/api/v2/pokemon/454/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png"
    },
    {
        "name": "carnivine",
        "url": "https://pokeapi.co/api/v2/pokemon/455/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png"
    },
    {
        "name": "finneon",
        "url": "https://pokeapi.co/api/v2/pokemon/456/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png"
    },
    {
        "name": "lumineon",
        "url": "https://pokeapi.co/api/v2/pokemon/457/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png"
    },
    {
        "name": "mantyke",
        "url": "https://pokeapi.co/api/v2/pokemon/458/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png"
    },
    {
        "name": "snover",
        "url": "https://pokeapi.co/api/v2/pokemon/459/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png"
    },
    {
        "name": "abomasnow",
        "url": "https://pokeapi.co/api/v2/pokemon/460/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png"
    },
    {
        "name": "weavile",
        "url": "https://pokeapi.co/api/v2/pokemon/461/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png"
    },
    {
        "name": "magnezone",
        "url": "https://pokeapi.co/api/v2/pokemon/462/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png"
    },
    {
        "name": "lickilicky",
        "url": "https://pokeapi.co/api/v2/pokemon/463/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png"
    },
    {
        "name": "rhyperior",
        "url": "https://pokeapi.co/api/v2/pokemon/464/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png"
    },
    {
        "name": "tangrowth",
        "url": "https://pokeapi.co/api/v2/pokemon/465/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png"
    },
    {
        "name": "electivire",
        "url": "https://pokeapi.co/api/v2/pokemon/466/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png"
    },
    {
        "name": "magmortar",
        "url": "https://pokeapi.co/api/v2/pokemon/467/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png"
    },
    {
        "name": "togekiss",
        "url": "https://pokeapi.co/api/v2/pokemon/468/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png"
    },
    {
        "name": "yanmega",
        "url": "https://pokeapi.co/api/v2/pokemon/469/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png"
    },
    {
        "name": "leafeon",
        "url": "https://pokeapi.co/api/v2/pokemon/470/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png"
    },
    {
        "name": "glaceon",
        "url": "https://pokeapi.co/api/v2/pokemon/471/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png"
    },
    {
        "name": "gliscor",
        "url": "https://pokeapi.co/api/v2/pokemon/472/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png"
    },
    {
        "name": "mamoswine",
        "url": "https://pokeapi.co/api/v2/pokemon/473/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png"
    },
    {
        "name": "porygon-z",
        "url": "https://pokeapi.co/api/v2/pokemon/474/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png"
    },
    {
        "name": "gallade",
        "url": "https://pokeapi.co/api/v2/pokemon/475/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png"
    },
    {
        "name": "probopass",
        "url": "https://pokeapi.co/api/v2/pokemon/476/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png"
    },
    {
        "name": "dusknoir",
        "url": "https://pokeapi.co/api/v2/pokemon/477/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png"
    },
    {
        "name": "froslass",
        "url": "https://pokeapi.co/api/v2/pokemon/478/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png"
    },
    {
        "name": "rotom",
        "url": "https://pokeapi.co/api/v2/pokemon/479/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png"
    },
    {
        "name": "uxie",
        "url": "https://pokeapi.co/api/v2/pokemon/480/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png"
    },
    {
        "name": "mesprit",
        "url": "https://pokeapi.co/api/v2/pokemon/481/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png"
    },
    {
        "name": "azelf",
        "url": "https://pokeapi.co/api/v2/pokemon/482/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png"
    },
    {
        "name": "dialga",
        "url": "https://pokeapi.co/api/v2/pokemon/483/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"
    },
    {
        "name": "palkia",
        "url": "https://pokeapi.co/api/v2/pokemon/484/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
    },
    {
        "name": "heatran",
        "url": "https://pokeapi.co/api/v2/pokemon/485/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png"
    },
    {
        "name": "regigigas",
        "url": "https://pokeapi.co/api/v2/pokemon/486/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png"
    },
    {
        "name": "giratina-altered",
        "url": "https://pokeapi.co/api/v2/pokemon/487/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png"
    },
    {
        "name": "cresselia",
        "url": "https://pokeapi.co/api/v2/pokemon/488/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png"
    },
    {
        "name": "phione",
        "url": "https://pokeapi.co/api/v2/pokemon/489/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png"
    },
    {
        "name": "manaphy",
        "url": "https://pokeapi.co/api/v2/pokemon/490/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png"
    },
    {
        "name": "darkrai",
        "url": "https://pokeapi.co/api/v2/pokemon/491/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png"
    },
    {
        "name": "shaymin-land",
        "url": "https://pokeapi.co/api/v2/pokemon/492/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png"
    },
    {
        "name": "arceus",
        "url": "https://pokeapi.co/api/v2/pokemon/493/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"
    },
    {
        "name": "victini",
        "url": "https://pokeapi.co/api/v2/pokemon/494/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
    },
    {
        "name": "snivy",
        "url": "https://pokeapi.co/api/v2/pokemon/495/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png"
    },
    {
        "name": "servine",
        "url": "https://pokeapi.co/api/v2/pokemon/496/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png"
    },
    {
        "name": "serperior",
        "url": "https://pokeapi.co/api/v2/pokemon/497/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png"
    },
    {
        "name": "tepig",
        "url": "https://pokeapi.co/api/v2/pokemon/498/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png"
    },
    {
        "name": "pignite",
        "url": "https://pokeapi.co/api/v2/pokemon/499/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png"
    },
    {
        "name": "emboar",
        "url": "https://pokeapi.co/api/v2/pokemon/500/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png"
    },
    {
        "name": "oshawott",
        "url": "https://pokeapi.co/api/v2/pokemon/501/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"
    },
    {
        "name": "dewott",
        "url": "https://pokeapi.co/api/v2/pokemon/502/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png"
    },
    {
        "name": "samurott",
        "url": "https://pokeapi.co/api/v2/pokemon/503/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png"
    },
    {
        "name": "patrat",
        "url": "https://pokeapi.co/api/v2/pokemon/504/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png"
    },
    {
        "name": "watchog",
        "url": "https://pokeapi.co/api/v2/pokemon/505/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png"
    },
    {
        "name": "lillipup",
        "url": "https://pokeapi.co/api/v2/pokemon/506/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png"
    },
    {
        "name": "herdier",
        "url": "https://pokeapi.co/api/v2/pokemon/507/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png"
    },
    {
        "name": "stoutland",
        "url": "https://pokeapi.co/api/v2/pokemon/508/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png"
    },
    {
        "name": "purrloin",
        "url": "https://pokeapi.co/api/v2/pokemon/509/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png"
    },
    {
        "name": "liepard",
        "url": "https://pokeapi.co/api/v2/pokemon/510/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png"
    },
    {
        "name": "pansage",
        "url": "https://pokeapi.co/api/v2/pokemon/511/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png"
    },
    {
        "name": "simisage",
        "url": "https://pokeapi.co/api/v2/pokemon/512/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png"
    },
    {
        "name": "pansear",
        "url": "https://pokeapi.co/api/v2/pokemon/513/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png"
    },
    {
        "name": "simisear",
        "url": "https://pokeapi.co/api/v2/pokemon/514/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png"
    },
    {
        "name": "panpour",
        "url": "https://pokeapi.co/api/v2/pokemon/515/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png"
    },
    {
        "name": "simipour",
        "url": "https://pokeapi.co/api/v2/pokemon/516/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png"
    },
    {
        "name": "munna",
        "url": "https://pokeapi.co/api/v2/pokemon/517/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png"
    },
    {
        "name": "musharna",
        "url": "https://pokeapi.co/api/v2/pokemon/518/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png"
    },
    {
        "name": "pidove",
        "url": "https://pokeapi.co/api/v2/pokemon/519/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png"
    },
    {
        "name": "tranquill",
        "url": "https://pokeapi.co/api/v2/pokemon/520/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png"
    },
    {
        "name": "unfezant",
        "url": "https://pokeapi.co/api/v2/pokemon/521/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png"
    },
    {
        "name": "blitzle",
        "url": "https://pokeapi.co/api/v2/pokemon/522/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png"
    },
    {
        "name": "zebstrika",
        "url": "https://pokeapi.co/api/v2/pokemon/523/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png"
    },
    {
        "name": "roggenrola",
        "url": "https://pokeapi.co/api/v2/pokemon/524/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png"
    },
    {
        "name": "boldore",
        "url": "https://pokeapi.co/api/v2/pokemon/525/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png"
    },
    {
        "name": "gigalith",
        "url": "https://pokeapi.co/api/v2/pokemon/526/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png"
    },
    {
        "name": "woobat",
        "url": "https://pokeapi.co/api/v2/pokemon/527/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png"
    },
    {
        "name": "swoobat",
        "url": "https://pokeapi.co/api/v2/pokemon/528/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png"
    },
    {
        "name": "drilbur",
        "url": "https://pokeapi.co/api/v2/pokemon/529/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png"
    },
    {
        "name": "excadrill",
        "url": "https://pokeapi.co/api/v2/pokemon/530/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png"
    },
    {
        "name": "audino",
        "url": "https://pokeapi.co/api/v2/pokemon/531/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png"
    },
    {
        "name": "timburr",
        "url": "https://pokeapi.co/api/v2/pokemon/532/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png"
    },
    {
        "name": "gurdurr",
        "url": "https://pokeapi.co/api/v2/pokemon/533/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png"
    },
    {
        "name": "conkeldurr",
        "url": "https://pokeapi.co/api/v2/pokemon/534/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png"
    },
    {
        "name": "tympole",
        "url": "https://pokeapi.co/api/v2/pokemon/535/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png"
    },
    {
        "name": "palpitoad",
        "url": "https://pokeapi.co/api/v2/pokemon/536/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png"
    },
    {
        "name": "seismitoad",
        "url": "https://pokeapi.co/api/v2/pokemon/537/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png"
    },
    {
        "name": "throh",
        "url": "https://pokeapi.co/api/v2/pokemon/538/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png"
    },
    {
        "name": "sawk",
        "url": "https://pokeapi.co/api/v2/pokemon/539/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png"
    },
    {
        "name": "sewaddle",
        "url": "https://pokeapi.co/api/v2/pokemon/540/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png"
    },
    {
        "name": "swadloon",
        "url": "https://pokeapi.co/api/v2/pokemon/541/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png"
    },
    {
        "name": "leavanny",
        "url": "https://pokeapi.co/api/v2/pokemon/542/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png"
    },
    {
        "name": "venipede",
        "url": "https://pokeapi.co/api/v2/pokemon/543/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png"
    },
    {
        "name": "whirlipede",
        "url": "https://pokeapi.co/api/v2/pokemon/544/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png"
    },
    {
        "name": "scolipede",
        "url": "https://pokeapi.co/api/v2/pokemon/545/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png"
    },
    {
        "name": "cottonee",
        "url": "https://pokeapi.co/api/v2/pokemon/546/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png"
    },
    {
        "name": "whimsicott",
        "url": "https://pokeapi.co/api/v2/pokemon/547/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png"
    },
    {
        "name": "petilil",
        "url": "https://pokeapi.co/api/v2/pokemon/548/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png"
    },
    {
        "name": "lilligant",
        "url": "https://pokeapi.co/api/v2/pokemon/549/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png"
    },
    {
        "name": "basculin-red-striped",
        "url": "https://pokeapi.co/api/v2/pokemon/550/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png"
    },
    {
        "name": "sandile",
        "url": "https://pokeapi.co/api/v2/pokemon/551/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png"
    },
    {
        "name": "krokorok",
        "url": "https://pokeapi.co/api/v2/pokemon/552/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png"
    },
    {
        "name": "krookodile",
        "url": "https://pokeapi.co/api/v2/pokemon/553/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"
    },
    {
        "name": "darumaka",
        "url": "https://pokeapi.co/api/v2/pokemon/554/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png"
    },
    {
        "name": "darmanitan-standard",
        "url": "https://pokeapi.co/api/v2/pokemon/555/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png"
    },
    {
        "name": "maractus",
        "url": "https://pokeapi.co/api/v2/pokemon/556/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png"
    },
    {
        "name": "dwebble",
        "url": "https://pokeapi.co/api/v2/pokemon/557/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png"
    },
    {
        "name": "crustle",
        "url": "https://pokeapi.co/api/v2/pokemon/558/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png"
    },
    {
        "name": "scraggy",
        "url": "https://pokeapi.co/api/v2/pokemon/559/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png"
    },
    {
        "name": "scrafty",
        "url": "https://pokeapi.co/api/v2/pokemon/560/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png"
    },
    {
        "name": "sigilyph",
        "url": "https://pokeapi.co/api/v2/pokemon/561/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png"
    },
    {
        "name": "yamask",
        "url": "https://pokeapi.co/api/v2/pokemon/562/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png"
    },
    {
        "name": "cofagrigus",
        "url": "https://pokeapi.co/api/v2/pokemon/563/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png"
    },
    {
        "name": "tirtouga",
        "url": "https://pokeapi.co/api/v2/pokemon/564/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png"
    },
    {
        "name": "carracosta",
        "url": "https://pokeapi.co/api/v2/pokemon/565/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png"
    },
    {
        "name": "archen",
        "url": "https://pokeapi.co/api/v2/pokemon/566/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png"
    },
    {
        "name": "archeops",
        "url": "https://pokeapi.co/api/v2/pokemon/567/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png"
    },
    {
        "name": "trubbish",
        "url": "https://pokeapi.co/api/v2/pokemon/568/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png"
    },
    {
        "name": "garbodor",
        "url": "https://pokeapi.co/api/v2/pokemon/569/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png"
    },
    {
        "name": "zorua",
        "url": "https://pokeapi.co/api/v2/pokemon/570/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png"
    },
    {
        "name": "zoroark",
        "url": "https://pokeapi.co/api/v2/pokemon/571/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png"
    },
    {
        "name": "minccino",
        "url": "https://pokeapi.co/api/v2/pokemon/572/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png"
    },
    {
        "name": "cinccino",
        "url": "https://pokeapi.co/api/v2/pokemon/573/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png"
    },
    {
        "name": "gothita",
        "url": "https://pokeapi.co/api/v2/pokemon/574/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png"
    },
    {
        "name": "gothorita",
        "url": "https://pokeapi.co/api/v2/pokemon/575/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png"
    },
    {
        "name": "gothitelle",
        "url": "https://pokeapi.co/api/v2/pokemon/576/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png"
    },
    {
        "name": "solosis",
        "url": "https://pokeapi.co/api/v2/pokemon/577/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png"
    },
    {
        "name": "duosion",
        "url": "https://pokeapi.co/api/v2/pokemon/578/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png"
    },
    {
        "name": "reuniclus",
        "url": "https://pokeapi.co/api/v2/pokemon/579/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png"
    },
    {
        "name": "ducklett",
        "url": "https://pokeapi.co/api/v2/pokemon/580/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png"
    },
    {
        "name": "swanna",
        "url": "https://pokeapi.co/api/v2/pokemon/581/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png"
    },
    {
        "name": "vanillite",
        "url": "https://pokeapi.co/api/v2/pokemon/582/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png"
    },
    {
        "name": "vanillish",
        "url": "https://pokeapi.co/api/v2/pokemon/583/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png"
    },
    {
        "name": "vanilluxe",
        "url": "https://pokeapi.co/api/v2/pokemon/584/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png"
    },
    {
        "name": "deerling",
        "url": "https://pokeapi.co/api/v2/pokemon/585/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png"
    },
    {
        "name": "sawsbuck",
        "url": "https://pokeapi.co/api/v2/pokemon/586/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png"
    },
    {
        "name": "emolga",
        "url": "https://pokeapi.co/api/v2/pokemon/587/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png"
    },
    {
        "name": "karrablast",
        "url": "https://pokeapi.co/api/v2/pokemon/588/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png"
    },
    {
        "name": "escavalier",
        "url": "https://pokeapi.co/api/v2/pokemon/589/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png"
    },
    {
        "name": "foongus",
        "url": "https://pokeapi.co/api/v2/pokemon/590/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png"
    },
    {
        "name": "amoonguss",
        "url": "https://pokeapi.co/api/v2/pokemon/591/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png"
    },
    {
        "name": "frillish",
        "url": "https://pokeapi.co/api/v2/pokemon/592/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png"
    },
    {
        "name": "jellicent",
        "url": "https://pokeapi.co/api/v2/pokemon/593/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png"
    },
    {
        "name": "alomomola",
        "url": "https://pokeapi.co/api/v2/pokemon/594/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png"
    },
    {
        "name": "joltik",
        "url": "https://pokeapi.co/api/v2/pokemon/595/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png"
    },
    {
        "name": "galvantula",
        "url": "https://pokeapi.co/api/v2/pokemon/596/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png"
    },
    {
        "name": "ferroseed",
        "url": "https://pokeapi.co/api/v2/pokemon/597/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png"
    },
    {
        "name": "ferrothorn",
        "url": "https://pokeapi.co/api/v2/pokemon/598/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png"
    },
    {
        "name": "klink",
        "url": "https://pokeapi.co/api/v2/pokemon/599/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png"
    },
    {
        "name": "klang",
        "url": "https://pokeapi.co/api/v2/pokemon/600/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png"
    },
    {
        "name": "klinklang",
        "url": "https://pokeapi.co/api/v2/pokemon/601/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png"
    },
    {
        "name": "tynamo",
        "url": "https://pokeapi.co/api/v2/pokemon/602/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png"
    },
    {
        "name": "eelektrik",
        "url": "https://pokeapi.co/api/v2/pokemon/603/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png"
    },
    {
        "name": "eelektross",
        "url": "https://pokeapi.co/api/v2/pokemon/604/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png"
    },
    {
        "name": "elgyem",
        "url": "https://pokeapi.co/api/v2/pokemon/605/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png"
    },
    {
        "name": "beheeyem",
        "url": "https://pokeapi.co/api/v2/pokemon/606/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png"
    },
    {
        "name": "litwick",
        "url": "https://pokeapi.co/api/v2/pokemon/607/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png"
    },
    {
        "name": "lampent",
        "url": "https://pokeapi.co/api/v2/pokemon/608/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png"
    },
    {
        "name": "chandelure",
        "url": "https://pokeapi.co/api/v2/pokemon/609/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png"
    },
    {
        "name": "axew",
        "url": "https://pokeapi.co/api/v2/pokemon/610/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png"
    },
    {
        "name": "fraxure",
        "url": "https://pokeapi.co/api/v2/pokemon/611/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png"
    },
    {
        "name": "haxorus",
        "url": "https://pokeapi.co/api/v2/pokemon/612/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png"
    },
    {
        "name": "cubchoo",
        "url": "https://pokeapi.co/api/v2/pokemon/613/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png"
    },
    {
        "name": "beartic",
        "url": "https://pokeapi.co/api/v2/pokemon/614/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png"
    },
    {
        "name": "cryogonal",
        "url": "https://pokeapi.co/api/v2/pokemon/615/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png"
    },
    {
        "name": "shelmet",
        "url": "https://pokeapi.co/api/v2/pokemon/616/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png"
    },
    {
        "name": "accelgor",
        "url": "https://pokeapi.co/api/v2/pokemon/617/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png"
    },
    {
        "name": "stunfisk",
        "url": "https://pokeapi.co/api/v2/pokemon/618/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png"
    },
    {
        "name": "mienfoo",
        "url": "https://pokeapi.co/api/v2/pokemon/619/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png"
    },
    {
        "name": "mienshao",
        "url": "https://pokeapi.co/api/v2/pokemon/620/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png"
    },
    {
        "name": "druddigon",
        "url": "https://pokeapi.co/api/v2/pokemon/621/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png"
    },
    {
        "name": "golett",
        "url": "https://pokeapi.co/api/v2/pokemon/622/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png"
    },
    {
        "name": "golurk",
        "url": "https://pokeapi.co/api/v2/pokemon/623/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png"
    },
    {
        "name": "pawniard",
        "url": "https://pokeapi.co/api/v2/pokemon/624/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png"
    },
    {
        "name": "bisharp",
        "url": "https://pokeapi.co/api/v2/pokemon/625/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png"
    },
    {
        "name": "bouffalant",
        "url": "https://pokeapi.co/api/v2/pokemon/626/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png"
    },
    {
        "name": "rufflet",
        "url": "https://pokeapi.co/api/v2/pokemon/627/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png"
    },
    {
        "name": "braviary",
        "url": "https://pokeapi.co/api/v2/pokemon/628/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png"
    },
    {
        "name": "vullaby",
        "url": "https://pokeapi.co/api/v2/pokemon/629/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png"
    },
    {
        "name": "mandibuzz",
        "url": "https://pokeapi.co/api/v2/pokemon/630/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png"
    },
    {
        "name": "heatmor",
        "url": "https://pokeapi.co/api/v2/pokemon/631/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png"
    },
    {
        "name": "durant",
        "url": "https://pokeapi.co/api/v2/pokemon/632/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png"
    },
    {
        "name": "deino",
        "url": "https://pokeapi.co/api/v2/pokemon/633/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png"
    },
    {
        "name": "zweilous",
        "url": "https://pokeapi.co/api/v2/pokemon/634/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png"
    },
    {
        "name": "hydreigon",
        "url": "https://pokeapi.co/api/v2/pokemon/635/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png"
    },
    {
        "name": "larvesta",
        "url": "https://pokeapi.co/api/v2/pokemon/636/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png"
    },
    {
        "name": "volcarona",
        "url": "https://pokeapi.co/api/v2/pokemon/637/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png"
    },
    {
        "name": "cobalion",
        "url": "https://pokeapi.co/api/v2/pokemon/638/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png"
    },
    {
        "name": "terrakion",
        "url": "https://pokeapi.co/api/v2/pokemon/639/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png"
    },
    {
        "name": "virizion",
        "url": "https://pokeapi.co/api/v2/pokemon/640/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png"
    },
    {
        "name": "tornadus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/641/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png"
    },
    {
        "name": "thundurus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/642/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png"
    },
    {
        "name": "reshiram",
        "url": "https://pokeapi.co/api/v2/pokemon/643/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png"
    },
    {
        "name": "zekrom",
        "url": "https://pokeapi.co/api/v2/pokemon/644/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png"
    },
    {
        "name": "landorus-incarnate",
        "url": "https://pokeapi.co/api/v2/pokemon/645/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png"
    },
    {
        "name": "kyurem",
        "url": "https://pokeapi.co/api/v2/pokemon/646/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png"
    },
    {
        "name": "keldeo-ordinary",
        "url": "https://pokeapi.co/api/v2/pokemon/647/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png"
    },
    {
        "name": "meloetta-aria",
        "url": "https://pokeapi.co/api/v2/pokemon/648/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png"
    },
    {
        "name": "genesect",
        "url": "https://pokeapi.co/api/v2/pokemon/649/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png"
    },
    {
        "name": "chespin",
        "url": "https://pokeapi.co/api/v2/pokemon/650/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
    },
    {
        "name": "quilladin",
        "url": "https://pokeapi.co/api/v2/pokemon/651/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png"
    },
    {
        "name": "chesnaught",
        "url": "https://pokeapi.co/api/v2/pokemon/652/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png"
    },
    {
        "name": "fennekin",
        "url": "https://pokeapi.co/api/v2/pokemon/653/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png"
    },
    {
        "name": "braixen",
        "url": "https://pokeapi.co/api/v2/pokemon/654/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png"
    },
    {
        "name": "delphox",
        "url": "https://pokeapi.co/api/v2/pokemon/655/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png"
    },
    {
        "name": "froakie",
        "url": "https://pokeapi.co/api/v2/pokemon/656/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png"
    },
    {
        "name": "frogadier",
        "url": "https://pokeapi.co/api/v2/pokemon/657/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png"
    },
    {
        "name": "greninja",
        "url": "https://pokeapi.co/api/v2/pokemon/658/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png"
    },
    {
        "name": "bunnelby",
        "url": "https://pokeapi.co/api/v2/pokemon/659/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png"
    },
    {
        "name": "diggersby",
        "url": "https://pokeapi.co/api/v2/pokemon/660/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png"
    },
    {
        "name": "fletchling",
        "url": "https://pokeapi.co/api/v2/pokemon/661/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png"
    },
    {
        "name": "fletchinder",
        "url": "https://pokeapi.co/api/v2/pokemon/662/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png"
    },
    {
        "name": "talonflame",
        "url": "https://pokeapi.co/api/v2/pokemon/663/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png"
    },
    {
        "name": "scatterbug",
        "url": "https://pokeapi.co/api/v2/pokemon/664/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png"
    },
    {
        "name": "spewpa",
        "url": "https://pokeapi.co/api/v2/pokemon/665/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png"
    },
    {
        "name": "vivillon",
        "url": "https://pokeapi.co/api/v2/pokemon/666/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png"
    },
    {
        "name": "litleo",
        "url": "https://pokeapi.co/api/v2/pokemon/667/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png"
    },
    {
        "name": "pyroar",
        "url": "https://pokeapi.co/api/v2/pokemon/668/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png"
    },
    {
        "name": "flabebe",
        "url": "https://pokeapi.co/api/v2/pokemon/669/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png"
    },
    {
        "name": "floette",
        "url": "https://pokeapi.co/api/v2/pokemon/670/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png"
    },
    {
        "name": "florges",
        "url": "https://pokeapi.co/api/v2/pokemon/671/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png"
    },
    {
        "name": "skiddo",
        "url": "https://pokeapi.co/api/v2/pokemon/672/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png"
    },
    {
        "name": "gogoat",
        "url": "https://pokeapi.co/api/v2/pokemon/673/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png"
    },
    {
        "name": "pancham",
        "url": "https://pokeapi.co/api/v2/pokemon/674/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png"
    },
    {
        "name": "pangoro",
        "url": "https://pokeapi.co/api/v2/pokemon/675/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png"
    },
    {
        "name": "furfrou",
        "url": "https://pokeapi.co/api/v2/pokemon/676/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png"
    },
    {
        "name": "espurr",
        "url": "https://pokeapi.co/api/v2/pokemon/677/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png"
    },
    {
        "name": "meowstic-male",
        "url": "https://pokeapi.co/api/v2/pokemon/678/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png"
    },
    {
        "name": "honedge",
        "url": "https://pokeapi.co/api/v2/pokemon/679/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png"
    },
    {
        "name": "doublade",
        "url": "https://pokeapi.co/api/v2/pokemon/680/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png"
    },
    {
        "name": "aegislash-shield",
        "url": "https://pokeapi.co/api/v2/pokemon/681/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png"
    },
    {
        "name": "spritzee",
        "url": "https://pokeapi.co/api/v2/pokemon/682/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png"
    },
    {
        "name": "aromatisse",
        "url": "https://pokeapi.co/api/v2/pokemon/683/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png"
    },
    {
        "name": "swirlix",
        "url": "https://pokeapi.co/api/v2/pokemon/684/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png"
    },
    {
        "name": "slurpuff",
        "url": "https://pokeapi.co/api/v2/pokemon/685/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png"
    },
    {
        "name": "inkay",
        "url": "https://pokeapi.co/api/v2/pokemon/686/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png"
    },
    {
        "name": "malamar",
        "url": "https://pokeapi.co/api/v2/pokemon/687/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png"
    },
    {
        "name": "binacle",
        "url": "https://pokeapi.co/api/v2/pokemon/688/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png"
    },
    {
        "name": "barbaracle",
        "url": "https://pokeapi.co/api/v2/pokemon/689/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png"
    },
    {
        "name": "skrelp",
        "url": "https://pokeapi.co/api/v2/pokemon/690/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png"
    },
    {
        "name": "dragalge",
        "url": "https://pokeapi.co/api/v2/pokemon/691/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png"
    },
    {
        "name": "clauncher",
        "url": "https://pokeapi.co/api/v2/pokemon/692/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png"
    },
    {
        "name": "clawitzer",
        "url": "https://pokeapi.co/api/v2/pokemon/693/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png"
    },
    {
        "name": "helioptile",
        "url": "https://pokeapi.co/api/v2/pokemon/694/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png"
    },
    {
        "name": "heliolisk",
        "url": "https://pokeapi.co/api/v2/pokemon/695/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png"
    },
    {
        "name": "tyrunt",
        "url": "https://pokeapi.co/api/v2/pokemon/696/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png"
    },
    {
        "name": "tyrantrum",
        "url": "https://pokeapi.co/api/v2/pokemon/697/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png"
    },
    {
        "name": "amaura",
        "url": "https://pokeapi.co/api/v2/pokemon/698/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png"
    },
    {
        "name": "aurorus",
        "url": "https://pokeapi.co/api/v2/pokemon/699/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png"
    },
    {
        "name": "sylveon",
        "url": "https://pokeapi.co/api/v2/pokemon/700/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
    },
    {
        "name": "hawlucha",
        "url": "https://pokeapi.co/api/v2/pokemon/701/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png"
    },
    {
        "name": "dedenne",
        "url": "https://pokeapi.co/api/v2/pokemon/702/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png"
    },
    {
        "name": "carbink",
        "url": "https://pokeapi.co/api/v2/pokemon/703/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png"
    },
    {
        "name": "goomy",
        "url": "https://pokeapi.co/api/v2/pokemon/704/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png"
    },
    {
        "name": "sliggoo",
        "url": "https://pokeapi.co/api/v2/pokemon/705/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png"
    },
    {
        "name": "goodra",
        "url": "https://pokeapi.co/api/v2/pokemon/706/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png"
    },
    {
        "name": "klefki",
        "url": "https://pokeapi.co/api/v2/pokemon/707/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png"
    },
    {
        "name": "phantump",
        "url": "https://pokeapi.co/api/v2/pokemon/708/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png"
    },
    {
        "name": "trevenant",
        "url": "https://pokeapi.co/api/v2/pokemon/709/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png"
    },
    {
        "name": "pumpkaboo-average",
        "url": "https://pokeapi.co/api/v2/pokemon/710/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png"
    },
    {
        "name": "gourgeist-average",
        "url": "https://pokeapi.co/api/v2/pokemon/711/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png"
    },
    {
        "name": "bergmite",
        "url": "https://pokeapi.co/api/v2/pokemon/712/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png"
    },
    {
        "name": "avalugg",
        "url": "https://pokeapi.co/api/v2/pokemon/713/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png"
    },
    {
        "name": "noibat",
        "url": "https://pokeapi.co/api/v2/pokemon/714/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png"
    },
    {
        "name": "noivern",
        "url": "https://pokeapi.co/api/v2/pokemon/715/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png"
    },
    {
        "name": "xerneas",
        "url": "https://pokeapi.co/api/v2/pokemon/716/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png"
    },
    {
        "name": "yveltal",
        "url": "https://pokeapi.co/api/v2/pokemon/717/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png"
    },
    {
        "name": "zygarde",
        "url": "https://pokeapi.co/api/v2/pokemon/718/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png"
    },
    {
        "name": "diancie",
        "url": "https://pokeapi.co/api/v2/pokemon/719/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png"
    },
    {
        "name": "hoopa",
        "url": "https://pokeapi.co/api/v2/pokemon/720/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png"
    },
    {
        "name": "volcanion",
        "url": "https://pokeapi.co/api/v2/pokemon/721/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png"
    },
    {
        "name": "rowlet",
        "url": "https://pokeapi.co/api/v2/pokemon/722/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
    },
    {
        "name": "dartrix",
        "url": "https://pokeapi.co/api/v2/pokemon/723/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png"
    },
    {
        "name": "decidueye",
        "url": "https://pokeapi.co/api/v2/pokemon/724/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png"
    },
    {
        "name": "litten",
        "url": "https://pokeapi.co/api/v2/pokemon/725/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png"
    },
    {
        "name": "torracat",
        "url": "https://pokeapi.co/api/v2/pokemon/726/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png"
    },
    {
        "name": "incineroar",
        "url": "https://pokeapi.co/api/v2/pokemon/727/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png"
    },
    {
        "name": "popplio",
        "url": "https://pokeapi.co/api/v2/pokemon/728/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png"
    },
    {
        "name": "brionne",
        "url": "https://pokeapi.co/api/v2/pokemon/729/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png"
    },
    {
        "name": "primarina",
        "url": "https://pokeapi.co/api/v2/pokemon/730/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png"
    },
    {
        "name": "pikipek",
        "url": "https://pokeapi.co/api/v2/pokemon/731/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png"
    },
    {
        "name": "trumbeak",
        "url": "https://pokeapi.co/api/v2/pokemon/732/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png"
    },
    {
        "name": "toucannon",
        "url": "https://pokeapi.co/api/v2/pokemon/733/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png"
    },
    {
        "name": "yungoos",
        "url": "https://pokeapi.co/api/v2/pokemon/734/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png"
    },
    {
        "name": "gumshoos",
        "url": "https://pokeapi.co/api/v2/pokemon/735/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png"
    },
    {
        "name": "grubbin",
        "url": "https://pokeapi.co/api/v2/pokemon/736/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png"
    },
    {
        "name": "charjabug",
        "url": "https://pokeapi.co/api/v2/pokemon/737/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png"
    },
    {
        "name": "vikavolt",
        "url": "https://pokeapi.co/api/v2/pokemon/738/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png"
    },
    {
        "name": "crabrawler",
        "url": "https://pokeapi.co/api/v2/pokemon/739/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png"
    },
    {
        "name": "crabominable",
        "url": "https://pokeapi.co/api/v2/pokemon/740/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png"
    },
    {
        "name": "oricorio-baile",
        "url": "https://pokeapi.co/api/v2/pokemon/741/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png"
    },
    {
        "name": "cutiefly",
        "url": "https://pokeapi.co/api/v2/pokemon/742/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png"
    },
    {
        "name": "ribombee",
        "url": "https://pokeapi.co/api/v2/pokemon/743/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png"
    },
    {
        "name": "rockruff",
        "url": "https://pokeapi.co/api/v2/pokemon/744/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png"
    },
    {
        "name": "lycanroc-midday",
        "url": "https://pokeapi.co/api/v2/pokemon/745/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png"
    },
    {
        "name": "wishiwashi-solo",
        "url": "https://pokeapi.co/api/v2/pokemon/746/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png"
    },
    {
        "name": "mareanie",
        "url": "https://pokeapi.co/api/v2/pokemon/747/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png"
    },
    {
        "name": "toxapex",
        "url": "https://pokeapi.co/api/v2/pokemon/748/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png"
    },
    {
        "name": "mudbray",
        "url": "https://pokeapi.co/api/v2/pokemon/749/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png"
    },
    {
        "name": "mudsdale",
        "url": "https://pokeapi.co/api/v2/pokemon/750/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png"
    },
    {
        "name": "dewpider",
        "url": "https://pokeapi.co/api/v2/pokemon/751/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png"
    },
    {
        "name": "araquanid",
        "url": "https://pokeapi.co/api/v2/pokemon/752/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png"
    },
    {
        "name": "fomantis",
        "url": "https://pokeapi.co/api/v2/pokemon/753/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png"
    },
    {
        "name": "lurantis",
        "url": "https://pokeapi.co/api/v2/pokemon/754/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png"
    },
    {
        "name": "morelull",
        "url": "https://pokeapi.co/api/v2/pokemon/755/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png"
    },
    {
        "name": "shiinotic",
        "url": "https://pokeapi.co/api/v2/pokemon/756/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png"
    },
    {
        "name": "salandit",
        "url": "https://pokeapi.co/api/v2/pokemon/757/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png"
    },
    {
        "name": "salazzle",
        "url": "https://pokeapi.co/api/v2/pokemon/758/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png"
    },
    {
        "name": "stufful",
        "url": "https://pokeapi.co/api/v2/pokemon/759/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png"
    },
    {
        "name": "bewear",
        "url": "https://pokeapi.co/api/v2/pokemon/760/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png"
    },
    {
        "name": "bounsweet",
        "url": "https://pokeapi.co/api/v2/pokemon/761/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png"
    },
    {
        "name": "steenee",
        "url": "https://pokeapi.co/api/v2/pokemon/762/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png"
    },
    {
        "name": "tsareena",
        "url": "https://pokeapi.co/api/v2/pokemon/763/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png"
    },
    {
        "name": "comfey",
        "url": "https://pokeapi.co/api/v2/pokemon/764/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png"
    },
    {
        "name": "oranguru",
        "url": "https://pokeapi.co/api/v2/pokemon/765/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png"
    },
    {
        "name": "passimian",
        "url": "https://pokeapi.co/api/v2/pokemon/766/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png"
    },
    {
        "name": "wimpod",
        "url": "https://pokeapi.co/api/v2/pokemon/767/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png"
    },
    {
        "name": "golisopod",
        "url": "https://pokeapi.co/api/v2/pokemon/768/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png"
    },
    {
        "name": "sandygast",
        "url": "https://pokeapi.co/api/v2/pokemon/769/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png"
    },
    {
        "name": "palossand",
        "url": "https://pokeapi.co/api/v2/pokemon/770/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png"
    },
    {
        "name": "pyukumuku",
        "url": "https://pokeapi.co/api/v2/pokemon/771/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png"
    },
    {
        "name": "type-null",
        "url": "https://pokeapi.co/api/v2/pokemon/772/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png"
    },
    {
        "name": "silvally",
        "url": "https://pokeapi.co/api/v2/pokemon/773/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png"
    },
    {
        "name": "minior-red-meteor",
        "url": "https://pokeapi.co/api/v2/pokemon/774/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png"
    },
    {
        "name": "komala",
        "url": "https://pokeapi.co/api/v2/pokemon/775/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png"
    },
    {
        "name": "turtonator",
        "url": "https://pokeapi.co/api/v2/pokemon/776/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png"
    },
    {
        "name": "togedemaru",
        "url": "https://pokeapi.co/api/v2/pokemon/777/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png"
    },
    {
        "name": "mimikyu-disguised",
        "url": "https://pokeapi.co/api/v2/pokemon/778/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"
    },
    {
        "name": "bruxish",
        "url": "https://pokeapi.co/api/v2/pokemon/779/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png"
    },
    {
        "name": "drampa",
        "url": "https://pokeapi.co/api/v2/pokemon/780/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png"
    },
    {
        "name": "dhelmise",
        "url": "https://pokeapi.co/api/v2/pokemon/781/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png"
    },
    {
        "name": "jangmo-o",
        "url": "https://pokeapi.co/api/v2/pokemon/782/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png"
    },
    {
        "name": "hakamo-o",
        "url": "https://pokeapi.co/api/v2/pokemon/783/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png"
    },
    {
        "name": "kommo-o",
        "url": "https://pokeapi.co/api/v2/pokemon/784/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png"
    },
    {
        "name": "tapu-koko",
        "url": "https://pokeapi.co/api/v2/pokemon/785/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png"
    },
    {
        "name": "tapu-lele",
        "url": "https://pokeapi.co/api/v2/pokemon/786/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png"
    },
    {
        "name": "tapu-bulu",
        "url": "https://pokeapi.co/api/v2/pokemon/787/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png"
    },
    {
        "name": "tapu-fini",
        "url": "https://pokeapi.co/api/v2/pokemon/788/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png"
    },
    {
        "name": "cosmog",
        "url": "https://pokeapi.co/api/v2/pokemon/789/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png"
    },
    {
        "name": "cosmoem",
        "url": "https://pokeapi.co/api/v2/pokemon/790/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png"
    },
    {
        "name": "solgaleo",
        "url": "https://pokeapi.co/api/v2/pokemon/791/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png"
    },
    {
        "name": "lunala",
        "url": "https://pokeapi.co/api/v2/pokemon/792/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png"
    },
    {
        "name": "nihilego",
        "url": "https://pokeapi.co/api/v2/pokemon/793/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png"
    },
    {
        "name": "buzzwole",
        "url": "https://pokeapi.co/api/v2/pokemon/794/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png"
    },
    {
        "name": "pheromosa",
        "url": "https://pokeapi.co/api/v2/pokemon/795/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png"
    },
    {
        "name": "xurkitree",
        "url": "https://pokeapi.co/api/v2/pokemon/796/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png"
    },
    {
        "name": "celesteela",
        "url": "https://pokeapi.co/api/v2/pokemon/797/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png"
    },
    {
        "name": "kartana",
        "url": "https://pokeapi.co/api/v2/pokemon/798/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png"
    },
    {
        "name": "guzzlord",
        "url": "https://pokeapi.co/api/v2/pokemon/799/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png"
    },
    {
        "name": "necrozma",
        "url": "https://pokeapi.co/api/v2/pokemon/800/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png"
    },
    {
        "name": "magearna",
        "url": "https://pokeapi.co/api/v2/pokemon/801/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png"
    },
    {
        "name": "marshadow",
        "url": "https://pokeapi.co/api/v2/pokemon/802/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png"
    },
    {
        "name": "poipole",
        "url": "https://pokeapi.co/api/v2/pokemon/803/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png"
    },
    {
        "name": "naganadel",
        "url": "https://pokeapi.co/api/v2/pokemon/804/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png"
    },
    {
        "name": "stakataka",
        "url": "https://pokeapi.co/api/v2/pokemon/805/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png"
    },
    {
        "name": "blacephalon",
        "url": "https://pokeapi.co/api/v2/pokemon/806/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png"
    },
    {
        "name": "zeraora",
        "url": "https://pokeapi.co/api/v2/pokemon/807/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png"
    },
    {
        "name": "meltan",
        "url": "https://pokeapi.co/api/v2/pokemon/808/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png"
    },
    {
        "name": "melmetal",
        "url": "https://pokeapi.co/api/v2/pokemon/809/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png"
    },
    {
        "name": "grookey",
        "url": "https://pokeapi.co/api/v2/pokemon/810/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
    },
    {
        "name": "thwackey",
        "url": "https://pokeapi.co/api/v2/pokemon/811/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png"
    },
    {
        "name": "rillaboom",
        "url": "https://pokeapi.co/api/v2/pokemon/812/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png"
    },
    {
        "name": "scorbunny",
        "url": "https://pokeapi.co/api/v2/pokemon/813/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png"
    },
    {
        "name": "raboot",
        "url": "https://pokeapi.co/api/v2/pokemon/814/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png"
    },
    {
        "name": "cinderace",
        "url": "https://pokeapi.co/api/v2/pokemon/815/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png"
    },
    {
        "name": "sobble",
        "url": "https://pokeapi.co/api/v2/pokemon/816/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png"
    },
    {
        "name": "drizzile",
        "url": "https://pokeapi.co/api/v2/pokemon/817/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png"
    },
    {
        "name": "inteleon",
        "url": "https://pokeapi.co/api/v2/pokemon/818/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png"
    },
    {
        "name": "skwovet",
        "url": "https://pokeapi.co/api/v2/pokemon/819/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png"
    },
    {
        "name": "greedent",
        "url": "https://pokeapi.co/api/v2/pokemon/820/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png"
    },
    {
        "name": "rookidee",
        "url": "https://pokeapi.co/api/v2/pokemon/821/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png"
    },
    {
        "name": "corvisquire",
        "url": "https://pokeapi.co/api/v2/pokemon/822/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png"
    },
    {
        "name": "corviknight",
        "url": "https://pokeapi.co/api/v2/pokemon/823/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png"
    },
    {
        "name": "blipbug",
        "url": "https://pokeapi.co/api/v2/pokemon/824/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png"
    },
    {
        "name": "dottler",
        "url": "https://pokeapi.co/api/v2/pokemon/825/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png"
    },
    {
        "name": "orbeetle",
        "url": "https://pokeapi.co/api/v2/pokemon/826/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png"
    },
    {
        "name": "nickit",
        "url": "https://pokeapi.co/api/v2/pokemon/827/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png"
    },
    {
        "name": "thievul",
        "url": "https://pokeapi.co/api/v2/pokemon/828/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png"
    },
    {
        "name": "gossifleur",
        "url": "https://pokeapi.co/api/v2/pokemon/829/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png"
    },
    {
        "name": "eldegoss",
        "url": "https://pokeapi.co/api/v2/pokemon/830/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png"
    },
    {
        "name": "wooloo",
        "url": "https://pokeapi.co/api/v2/pokemon/831/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png"
    },
    {
        "name": "dubwool",
        "url": "https://pokeapi.co/api/v2/pokemon/832/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png"
    },
    {
        "name": "chewtle",
        "url": "https://pokeapi.co/api/v2/pokemon/833/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png"
    },
    {
        "name": "drednaw",
        "url": "https://pokeapi.co/api/v2/pokemon/834/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png"
    },
    {
        "name": "yamper",
        "url": "https://pokeapi.co/api/v2/pokemon/835/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png"
    },
    {
        "name": "boltund",
        "url": "https://pokeapi.co/api/v2/pokemon/836/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png"
    },
    {
        "name": "rolycoly",
        "url": "https://pokeapi.co/api/v2/pokemon/837/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png"
    },
    {
        "name": "carkol",
        "url": "https://pokeapi.co/api/v2/pokemon/838/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png"
    },
    {
        "name": "coalossal",
        "url": "https://pokeapi.co/api/v2/pokemon/839/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png"
    },
    {
        "name": "applin",
        "url": "https://pokeapi.co/api/v2/pokemon/840/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png"
    },
    {
        "name": "flapple",
        "url": "https://pokeapi.co/api/v2/pokemon/841/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png"
    },
    {
        "name": "appletun",
        "url": "https://pokeapi.co/api/v2/pokemon/842/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png"
    },
    {
        "name": "silicobra",
        "url": "https://pokeapi.co/api/v2/pokemon/843/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png"
    },
    {
        "name": "sandaconda",
        "url": "https://pokeapi.co/api/v2/pokemon/844/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png"
    },
    {
        "name": "cramorant",
        "url": "https://pokeapi.co/api/v2/pokemon/845/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png"
    },
    {
        "name": "arrokuda",
        "url": "https://pokeapi.co/api/v2/pokemon/846/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png"
    },
    {
        "name": "barraskewda",
        "url": "https://pokeapi.co/api/v2/pokemon/847/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png"
    },
    {
        "name": "toxel",
        "url": "https://pokeapi.co/api/v2/pokemon/848/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png"
    },
    {
        "name": "toxtricity-amped",
        "url": "https://pokeapi.co/api/v2/pokemon/849/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png"
    },
    {
        "name": "sizzlipede",
        "url": "https://pokeapi.co/api/v2/pokemon/850/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png"
    },
    {
        "name": "centiskorch",
        "url": "https://pokeapi.co/api/v2/pokemon/851/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png"
    },
    {
        "name": "clobbopus",
        "url": "https://pokeapi.co/api/v2/pokemon/852/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png"
    },
    {
        "name": "grapploct",
        "url": "https://pokeapi.co/api/v2/pokemon/853/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png"
    },
    {
        "name": "sinistea",
        "url": "https://pokeapi.co/api/v2/pokemon/854/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png"
    },
    {
        "name": "polteageist",
        "url": "https://pokeapi.co/api/v2/pokemon/855/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png"
    },
    {
        "name": "hatenna",
        "url": "https://pokeapi.co/api/v2/pokemon/856/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png"
    },
    {
        "name": "hattrem",
        "url": "https://pokeapi.co/api/v2/pokemon/857/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png"
    },
    {
        "name": "hatterene",
        "url": "https://pokeapi.co/api/v2/pokemon/858/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png"
    },
    {
        "name": "impidimp",
        "url": "https://pokeapi.co/api/v2/pokemon/859/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png"
    },
    {
        "name": "morgrem",
        "url": "https://pokeapi.co/api/v2/pokemon/860/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png"
    },
    {
        "name": "grimmsnarl",
        "url": "https://pokeapi.co/api/v2/pokemon/861/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png"
    },
    {
        "name": "obstagoon",
        "url": "https://pokeapi.co/api/v2/pokemon/862/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png"
    },
    {
        "name": "perrserker",
        "url": "https://pokeapi.co/api/v2/pokemon/863/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png"
    },
    {
        "name": "cursola",
        "url": "https://pokeapi.co/api/v2/pokemon/864/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png"
    },
    {
        "name": "sirfetchd",
        "url": "https://pokeapi.co/api/v2/pokemon/865/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png"
    },
    {
        "name": "mr-rime",
        "url": "https://pokeapi.co/api/v2/pokemon/866/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png"
    },
    {
        "name": "runerigus",
        "url": "https://pokeapi.co/api/v2/pokemon/867/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png"
    },
    {
        "name": "milcery",
        "url": "https://pokeapi.co/api/v2/pokemon/868/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png"
    },
    {
        "name": "alcremie",
        "url": "https://pokeapi.co/api/v2/pokemon/869/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png"
    },
    {
        "name": "falinks",
        "url": "https://pokeapi.co/api/v2/pokemon/870/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png"
    },
    {
        "name": "pincurchin",
        "url": "https://pokeapi.co/api/v2/pokemon/871/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png"
    },
    {
        "name": "snom",
        "url": "https://pokeapi.co/api/v2/pokemon/872/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png"
    },
    {
        "name": "frosmoth",
        "url": "https://pokeapi.co/api/v2/pokemon/873/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png"
    },
    {
        "name": "stonjourner",
        "url": "https://pokeapi.co/api/v2/pokemon/874/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png"
    },
    {
        "name": "eiscue-ice",
        "url": "https://pokeapi.co/api/v2/pokemon/875/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png"
    },
    {
        "name": "indeedee-male",
        "url": "https://pokeapi.co/api/v2/pokemon/876/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png"
    },
    {
        "name": "morpeko",
        "url": "https://pokeapi.co/api/v2/pokemon/877/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png"
    },
    {
        "name": "cufant",
        "url": "https://pokeapi.co/api/v2/pokemon/878/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png"
    },
    {
        "name": "copperajah",
        "url": "https://pokeapi.co/api/v2/pokemon/879/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png"
    },
    {
        "name": "dracozolt",
        "url": "https://pokeapi.co/api/v2/pokemon/880/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png"
    },
    {
        "name": "arctozolt",
        "url": "https://pokeapi.co/api/v2/pokemon/881/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png"
    },
    {
        "name": "dracovish",
        "url": "https://pokeapi.co/api/v2/pokemon/882/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png"
    },
    {
        "name": "arctovish",
        "url": "https://pokeapi.co/api/v2/pokemon/883/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png"
    },
    {
        "name": "duraludon",
        "url": "https://pokeapi.co/api/v2/pokemon/884/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png"
    },
    {
        "name": "dreepy",
        "url": "https://pokeapi.co/api/v2/pokemon/885/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png"
    },
    {
        "name": "drakloak",
        "url": "https://pokeapi.co/api/v2/pokemon/886/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png"
    },
    {
        "name": "dragapult",
        "url": "https://pokeapi.co/api/v2/pokemon/887/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png"
    },
    {
        "name": "zacian-hero",
        "url": "https://pokeapi.co/api/v2/pokemon/888/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png"
    },
    {
        "name": "zamazenta-hero",
        "url": "https://pokeapi.co/api/v2/pokemon/889/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png"
    },
    {
        "name": "eternatus",
        "url": "https://pokeapi.co/api/v2/pokemon/890/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png"
    },
    {
        "name": "kubfu",
        "url": "https://pokeapi.co/api/v2/pokemon/891/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png"
    },
    {
        "name": "urshifu-single-strike",
        "url": "https://pokeapi.co/api/v2/pokemon/892/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png"
    },
    {
        "name": "zarude",
        "url": "https://pokeapi.co/api/v2/pokemon/893/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png"
    },
    {
        "name": "regieleki",
        "url": "https://pokeapi.co/api/v2/pokemon/894/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png"
    },
    {
        "name": "regidrago",
        "url": "https://pokeapi.co/api/v2/pokemon/895/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png"
    },
    {
        "name": "glastrier",
        "url": "https://pokeapi.co/api/v2/pokemon/896/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png"
    },
    {
        "name": "spectrier",
        "url": "https://pokeapi.co/api/v2/pokemon/897/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png"
    },
    {
        "name": "calyrex",
        "url": "https://pokeapi.co/api/v2/pokemon/898/",
        "imgUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png"
    }
]

export default pokemonsData