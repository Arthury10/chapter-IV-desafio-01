export interface Continent {
  id: number;
  slug: string;
  name: string;
  description: string;
  img: string;
  countries: Country[];
  num_countries: number;
  num_cities: number;
  num_languages: number;
}

export interface Country {
  name: string;
  capital: string;
  img: string;
  flag: string;
}

export interface ContinentsData {
  continents: Continent[];
}

export default ContinentsData;