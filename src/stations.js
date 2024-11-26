const stations= [
"Acton Town",
"Aldgate",
"Aldgate East",
"Alperton",
"Amersham",
"Angel",
"Archway",
"Arnos Grove",
"Arsenal",
"Baker Street",
"Balham",
"Bank",
"Barbican",
"Barking",
"Barkingside",
"Barons Court",
"Bayswater",
"Becontree",
"Belsize Park",
"Bermondsey",
"Bethnal Green",
"Blackfriars",
"Blackhorse Road",
"Bond Street",
"Borough",
"Boston Manor",
"Bounds Green",
"Bow Road",
"Brent Cross",
"Brixton",
"Bromley-by-Bow",
"Buckhurst Hill",
"Burnt Oak",
"Caledonian Road",
"Camden Town",
"Canada Water",
"Canary Wharf",
"Canning Town",
"Cannon Street",
"Canons Park",
"Chalfont & Latimer",
"Chalk Farm",
"Chancery Lane",
"Charing Cross",
"Chesham",
"Chigwell",
"Chiswick Park",
"Chorleywood",
"Clapham Common",
"Clapham North",
"Clapham South",
"Cockfosters",
"Colindale",
"Colliers Wood",
"Covent Garden",
"Croxley",
"Dagenham East",
"Dagenham Heathway",
"Debden",
"Dollis Hill",
"Ealing Broadway",
"Ealing Common",
"Earl's Court",
"East Acton",
"East Finchley",
"East Ham",
"East Putney",
"Eastcote",
"Edgware",
"Edgware Road",
"Edgware Road",
"Elephant & Castle",
"Elm Park",
"Embankment",
"Epping",
"Euston",
"Euston Square",
"Fairlop",
"Farringdon",
"Finchley Central",
"Finchley Road",
"Finsbury Park",
"Fulham Broadway",
"Gants Hill",
"Gloucester Road",
"Golders Green",
"Goldhawk Road",
"Goodge Street",
"Grange Hill",
"Great Portland Street",
"Greenford",
"Green Park",
"Gunnersbury",
"Hainault",
"Hammersmith",
"Hammersmith",
"Hampstead",
"Hanger Lane",
"Harlesden",
"Harrow & Wealdstone",
"Harrow-on-the-Hill",
"Hatton Cross",
"Heathrow Terminals 1, 2, 3",
"Heathrow Terminal 4",
"Heathrow Terminal 5",
"Hendon Central",
"High Barnet",
"Highbury & Islington",
"Highgate",
"High Street Kensington",
"Hillingdon",
"Holborn",
"Holland Park",
"Holloway Road",
"Hornchurch",
"Hounslow Central",
"Hounslow East",
"Hounslow West",
"Hyde Park Corner",
"Ickenham",
"Kennington",
"Knightsbridge",
"Kensal Green",
"Lambeth North",
"Kensington (Olympia)",
"Latimer Road",
"Kentish Town",
"Kenton",
"Kew Gardens",
"Kilburn",
"London Bridge",
"Kilburn Park",
"Kingsbury",
"King's Cross & St. Pancras",
"Ladbroke Grove",
"Lancaster Gate",
"Leicester Square",
"Leyton",
"Leytonstone",
"Liverpool Street",
"Loughton",
"Maida Vale",
"Manor House",
"Mansion House",
"Marble Arch",
"Marylebone",
"Mile End",
"Mill Hill East",
"Monument",
"Moorgate",
"Moor Park",
"Morden",
"Mornington Crescent",
"Neasden",
"Newbury Park",
"North Acton",
"North Ealing",
"North Greenwich",
"North Harrow",
"North Wembley",
"Northfields",
"Northolt",
"Northwick Park",
"Northwood",
"Northwood Hills",
"Notting Hill Gate",
"Oakwood",
"Old Street",
"Osterley",
"Oval",
"Oxford Circus",
"Paddington",
"Park Royal",
"Parsons Green",
"Perivale",
"Piccadilly Circus",
"Pimlico",
"Pinner",
"Plaistow",
"Preston Road",
"Putney Bridge",
"Queen's Park",
"Queensbury",
"Queensway",
"Ravenscourt Park",
"Rayners Lane",
"Redbridge",
"Regent's Park",
"Richmond",
"Rickmansworth",
"Roding Valley",
"Royal Oak",
"Ruislip",
"Ruislip Gardens",
"Ruislip Manor",
"Russell Square",
"St. James's Park",
"St. John's Wood",
"St. Paul's",
"Seven Sisters",
"Shepherd's Bush",
"Shepherd's Bush Market",
"Sloane Square",
"Snaresbrook",
"South Ealing",
"South Harrow",
"South Kensington",
"South Kenton",
"South Ruislip",
"South Wimbledon",
"South Woodford",
"Southfields",
"Southgate",
"Southwark",
"Stamford Brook",
"Stanmore",
"Stepney Green",
"Stockwell",
"Stonebridge Park",
"Stratford",
"Sudbury Hill",
"Sudbury Town",
"Swiss Cottage",
"Temple",
"Theydon Bois",
"Tooting Bec",
"Tooting Broadway",
"Tottenham Court Road",
"Tottenham Hale",
"Totteridge & Whetstone",
"Tower Hill",
"Tufnell Park",
"Turnham Green",
"Turnpike Lane",
"Upminster",
"Upminster Bridge",
"Upney",
"Upton Park",
"Uxbridge",
"Vauxhall",
"Victoria",
"Walthamstow Central",
"Wanstead",
"Warren Street",
"Warwick Avenue",
"Waterloo",
"Watford",
"Wembley Central",
"Wembley Park",
"West Acton",
"West Finchley",
"West Brompton",
"West Ham",
"West Hampstead",
"West Harrow",
"West Kensington",
"West Ruislip",
"Westbourne Park",
"Westminster",
"White City",
"Whitechapel",
"Willesden Green",
"Willesden Junction",
"Wimbledon",
"Wimbledon Park",
"Wood Green",
"Wood Lane",
"Woodford",
"Woodside Park" ]

//should i do 2d array or lists 
// decide herustic that will be in the list/matrix 

Acton_Town =  ["Ealing Common", "Chiswick Park", "South Ealing", "Turnham Green"]
Aldgate =  ["Aldgate East", "Liverpool Street", "Tower Hill"] //idk full 
Algate_East = ["Liverpool Street","Whitechapel"]
Alperton  = ["Park Royal","Sudbury Town"]
Amersham  = ["Chesham","Chalfont & Latimer"]
Angel = ["Old Street", "King's Cross & St Pancras"]
Archway =  ["Highgate","Tufnell Park", "Upper Holloway"]
Arnos_Grove = ["Southgate", "Bounds Green"]
Arsenal = ["Finsbury Park","Holloway Road"]
Baker_Street = ["Great Portland Street","Finchley Road", "EdgeWare Road",  "St John's Wood",  "Marylebone", "Regent's Park", "Bond Street"]
Balham= ["Clapham South", "Tooting Bec"]
Bank  = ["Liverpool Street","Monument"]

Bakerloo = ["Elephant & Castle", "Lambeth North","Waterloo", "Embankment", "Charing Cross","Piccadilly","Oxford Circus","Regent's Park", "Baker Street","Marylebone","Edgware","Paddington", "Warwick Avenue","Maida Vale","Kilburn Park","Queen's Park","Kensal Green", "Willesden Junction","Harlesden","Stonebridge Park","Wembley Central","North Wembley","South Kenton","Kenton", "Harrow & Wealdstone"]
Central = ["West Ruislip","Ruislip Gardens","South Ruislip","Northolt","Greenford","Perivale","Hangerlane"]
Central_West = ["West Acton","Ealing Broadway"]
Central_East = ["North Acton","East Acton","White City","Shepherd's Bush","Holland Park","Notting Hill Gate", "Queensway","Lancaster Gate","Marble Arch","Bond Street","Oxford Circus", "Tottenham Court Road", "Holborn", "Chancery Lane","St Paul's","Bank","Liverpool Street", "Bethnal Green","Mile End","Stratford","Leyton","Leytonstone"]
Central_Branch = ["Wanstead","Redbridge","Gants Hill","Newbury Park","Barkingside","Fairlop","Hainault", "Grange Hill", "Chigwell", "Roding Valley"]
Central_Straight= ["Snaresbrook", "South Woodford", "Woodford"]
Central_After_Branch = ["Buckhurst Hill", "Loughton","Debden","Theydon Bois", "Epping"]
Circle = ["Hammersmith", "Goldhawk Road","Shepherd's Bush Market", "Wood Lane", "Latimer Road", "Ladbroke Grove","Westbourne Park", "Royal Oak", "Paddington", "Edgeware Road","Baker Street", "Great Portland Street", "Euston Square", "King's Cross & St Pancras", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate", "Tower Hill", "Monument", "Cannon Street", "Mansion House", "Blackfriars", "Temple", "Embankment", "Westminster", "St James's Park", "Victoria", "Sloane Square","South Kensington", "High Street Kensington", "Notting Hill Gate", "Bayswater"]
// note a circle for the circle line 
District = ["Ealing Broadway", "Ealing Common", "Chiswik Park"]
Distrcit_SouthWest = ["Gunnersburt", "Kew Gardens", "Richmond"]
//District not sure what to do 
Hammersmith = ["Hammersmith", "Goldhawk Road", "Shepherd's Bush Market", "Wood Lane", "Latimer Road", "Ladbroke Grove", "Westbourne Park", "Royal Oak", "Paddington", "Edgware Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross & St Pancras", "Farrington", "Barbican", "Moorgate", "Liverpool Street", "Aldgate East", "Whitechapel", "Stepney Green", "Mile End", "Bow Road", "Bromley-by-Bow", "West Ham", "Plaistow", "Upton Park", "East Ham", "Barking"]
Jubilee = ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill", "Willesden", "Kilburn", "Finchley Road", "Swiss Cottage", "St John's Wood", "Baker Street", "Bond Street", "Green Park", "Westminister", "Southwark", "London Bridge", "Bermondsey", "Canada Water", "Canary Wharf", "North Greenwich", "Canning Town", "West Ham", "Stratford"]
Metropolitan_AfterBranch
Metropolitan_AfterBranch  = []

// northern is too crazy rn 
Northern = []
Piccadilly = []
Victoria = ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Westminister", "Green Park", "Oxford Circus","Warren Street", "Euston", "King's Cross & St Pancras", "Highbury & Islington", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow"]
Waterloo = ["Waterloo", "Bank"]
//ignoring Heathrow and Reading dirrections 
Elizabeth = ["West Drayton", "Hayes & Harlington", "Southall", "Hanwell", "West Ealing", "Ealing Broadway", "Acton Main Line", "Paddington", "Bond Street", "Tottenham Court Road", "Farrington", "Liverpool Street", "Whitechapel"]
Elizabeth_Up = ["Stratford", "Maryland", "Forest Gate", "Manor Park", "Ilford", "Seven Kings", "Goodmayes", "Chadwell Health","Romford", "Gidea Park", "Harold Wood", "Brentwood", "Shenfield" ]
Elizabeth_Down = ["West India Quay", "Custom House", "Woolwich", "Abbey Wood"]

chosen_start = ""
chosen_end = ""
//accessibiliy = false 
least_change_overs = false 
if (accessibility == true){
    //non accessible edges = 9999
    //do this
}

//heurustics 
var distance = sqrt(start_long_lat - end_long_lat)
var speed = av_speed_of_line 
var time = distance/time * 60 
//*60 for hours to mins bc km/h 

if(least_change_overs == false && accessibility == false){
    var heuristic = time 
}
else if (least_change_overs == true){
    var heuristic = time + (changeovers*3)
}
else if (accessible == true){
    var heuristic = time + (inaccessible * 999) 
}

