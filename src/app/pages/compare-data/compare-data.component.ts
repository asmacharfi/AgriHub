import { Component } from '@angular/core';
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
        { name: 'Domain 1', areas: ['Area 1.1', 'Area 1.2'] },
        { name: 'Domain 2', areas: ['Area 2.1', 'Area 2.2'] }
      ]
    },
    {
      name: 'Forestry',
      domains: [
        { name: 'Forest Domain 1', areas: ['Forest Area 1.1', 'Forest Area 1.2'] }
      ]
    },
    {
      name: 'Climate Change: Agrifood systems emissions',
      domains: [
        { name: 'Emissions Domain 1', areas: ['Emission Area 1.1', 'Emission Area 1.2'] }
      ]
    }
  ];
  selectedGroup: Group | null = null;
  selectedDomain: Domain | null = null;
  onGroupChange() {
    this.selectedDomain = null; 
  }
  onDomainChange() {
  }
  compareData() {
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