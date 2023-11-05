import { Pipe, PipeTransform } from '@angular/core';

interface DictionaryEntry {
  countryID: number
  frenchName: string
}

const dictionary: DictionaryEntry[] =
  [{
    countryID: 20,
    frenchName: "Andorre"
  },
  {
    countryID: 40,
    frenchName: "Autriche"
  },
  {
    countryID: 124,
    frenchName: "Canada"
  },
  {
    countryID: 156,
    frenchName: "Chine"
  },
  {
    countryID: 162,
    frenchName: "Île Christmas"
  },
  {
    countryID: 233,
    frenchName: "Estonie"
  },
  {
    countryID: 234,
    frenchName: "Îles Faroe"
  },
  {
    countryID: 250,
    frenchName: "France"
  },
  {
    countryID: 276,
    frenchName: "Allemagne"
  },
  {
    countryID: 296,
    frenchName: "Kiribati"
  },
  {
    countryID: 336,
    frenchName: "Vatican"
  },
  {
    countryID: 372,
    frenchName: "Irelande"
  },
  {
    countryID: 380,
    frenchName: "Italie"
  },
  {
    countryID: 492,
    frenchName: "Monaco"
  },
  {
    countryID: 528,
    frenchName: "Pays-Bas"
  },
  {
    countryID: 604,
    frenchName: "Perou"
  },
  {
    countryID: 634,
    frenchName: "Qatar"
  },
  {
    countryID: 690,
    frenchName: "Seychelles"
  },
  {
    countryID: 706,
    frenchName: "Somalie"
  },
  {
    countryID: 748,
    frenchName: "Eswatini"
  },
  {
    countryID: 826,
    frenchName: "Royaume-Uni"
  },
  {
    countryID: 840,
    frenchName: "États-Unis"
  },
  {
    countryID: 882,
    frenchName: "Samoa"
  }
  ]

@Pipe({
  name: 'frenchcountryname'
})
export class FrenchcountrynamePipe implements PipeTransform {

  transform(countryID: number): string {
    return (dictionary.find(entry => entry.countryID === countryID)!).frenchName;
  }

}

