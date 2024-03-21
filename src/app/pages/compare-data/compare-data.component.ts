import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-compare-data',
  templateUrl: './compare-data.component.html',
  styleUrls: ['./compare-data.component.scss']
})
export class CompareComponent {
  yearRange = {
    lower: 1961,
    upper: 2050
  };
 
  groups: Group[] = [
    {
      name: 'Land, Inputs and Sustainability',
      domains: [
        // Populate this with the relevant domains and areas for this group
        { name: 'Domain 1', areas: ['Area 1.1', 'Area 1.2'] },
        { name: 'Domain 2', areas: ['Area 2.1', 'Area 2.2'] }
      ]
    },
    {
      name: 'Forestry',
      domains: [
        // Populate this with the relevant domains and areas for this group
        { name: 'Forest Domain 1', areas: ['Forest Area 1.1', 'Forest Area 1.2'] }
      ]
    },
    {
      name: 'Climate Change: Agrifood systems emissions',
      domains: [
        // Populate this with the relevant domains and areas for this group
        { name: 'Emissions Domain 1', areas: ['Emission Area 1.1', 'Emission Area 1.2'] }
      ]
    }
  ];
  selectedGroup: Group | null = null;
  selectedDomain: Domain | null = null;

  onGroupChange() {
    this.selectedDomain = null; // Reset domain when group changes
  }

  onDomainChange() {
    // Handle logic when domain changes, if necessary
  }
  // Fonction pour lancer la comparaison des données
  compareData() {
    // Implémenter la logique de comparaison
  }

    // Ajoutez cette méthode
    onInput(value: string, slider: string) {
      const intValue = parseInt(value, 10);
      if (slider === 'lower') {
        this.yearRange.lower = intValue;
        // Ajouter une vérification pour ne pas dépasser la valeur supérieure
        if (this.yearRange.lower > this.yearRange.upper) {
          this.yearRange.lower = this.yearRange.upper;
        }
      } else if (slider === 'upper') {
        this.yearRange.upper = intValue;
        // Ajouter une vérification pour ne pas aller en dessous de la valeur inférieure
        if (this.yearRange.upper < this.yearRange.lower) {
          this.yearRange.upper = this.yearRange.lower;
        }
      }
    }
    getLeftPercent(): number {
      return ((this.yearRange.lower - 1961) / (2050 - 1961)) * 100;
    }
  
    getRightPercent(): number {
      return ((2050 - this.yearRange.upper) / (2050 - 1961)) * 100;
    }

  
 
}
export interface Group {
  name: string;
  domains: Domain[];
}

export interface Domain {
  name: string;
  areas: string[];
}