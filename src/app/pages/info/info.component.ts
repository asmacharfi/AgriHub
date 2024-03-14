import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service'; // Import the service


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  constructor(private selectionService: SelectionService) { } 
  public sectionsCombined = [];

  ngOnInit() {
    this.initSections();
  }
  handleItemClick(item: any) {
    this.selectionService.selectedItemIndex = item.index;
    
  }
  
  initSections() {
    this.sectionsCombined = [
      {
        title: "Land, Inputs and Sustainability",
        icon: "fas fa-landmark",
        subsections: [
          {
            title: "Land",
            content: [
              { name: "Land Use", revision: "2024-02-15" ,index :1},
              { name: "Land Cover", revision: "" ,index :2}
            ]
          },
          {
            title: "Inputs",
            content: [
              { name: "Fertilizers by Nutrient", revision: "" ,index :3},
              { name: "Fertilizers by Product", revision: "" ,index :4},
              { name: "Livestock Manure", revision: "" ,index :5},
              { name: "Pesticides Use", revision: "2024-03-04" ,index :6},
              { name: "Pesticides Trade", revision: "" ,index :7}
            ]
          },
          {
            title: "Sustainability Indicators",
            content: [
              { name: "Cropland Nutrient Balance", revision: "" ,index :8},
              { name: "Livestock Patterns", revision: "" ,index :9}
            ]
          },
          {
            title: "Climate Change Indicators",
            content: [
              { name: "Temperature change on land", revision: "" ,index :10}
            ]
          }
        ]
      },
      {
        title: "Forestry",
        icon: "fas fa-tree", 
        subsections: [
          {
            content: [
              { name: "Forestry Production and Trade", revision: "" ,index :11},
              { name: "Land Cover", revision: "" ,index :12}
            ]
          }
        ]
      },
      {
        title: " Climate Change: Agrifood systems emissions",
        icon: "", 
        subsections: [
          {
            title: "Totals and Indicators",
            content: [
              { name: "Emissions totals", revision: "" ,index :13},
              { name: "Emissions indicators",index :14},
              { name: "Emissions intensities",index :15}
            ]
          },
          {
            title: "Farm gate",
            content: [
              { name: "Emissions from Crops" ,index :16},
              { name: "Emissions from Livestock" ,index :17},
              { name: "Emissions from Energy use in agriculture" ,index :18}
            ]
          },
          {
            title: "Land use and change",
            content: [
              { name: "Emissions from Forests" ,index :19},
              { name: "Emissions from Fires" ,index :20},
              { name: "Emissions from Drained organic soils" ,index :21}
            ]
          },
          {
            title: "Pre and post agricultural production",
            content: [
              { name: "Emissions from pre and post agricultural production", revision: null ,index :22}
            ]
          }
        ]
      },
    ];
    
  }
}
