import { Component } from '@angular/core';
@Component({
  selector: 'app-compare-data',
  templateUrl: './compare-data.component.html',
  styleUrls: ['./compare-data.component.scss']
})
export class CompareComponent {
  startYear: number;
  endYear: number;
  filters: any[] = []; // Array to hold filter containers
  // Method to add a new filter container
  addFilter() {
    this.filters.push({}); // Push an empty object to the filters array
  }
  removeFilter(index: number) {
    this.filters.splice(index, 1); // Supprimer le filtre à l'index donné
  }
  
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
}
export interface Group {
  name: string;
  domains: Domain[];
}
export interface Domain {
  name: string;
  areas: string[];
}