import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public sectionsCombined = [];

  ngOnInit() {
    this.initSections();
  }

  getUrlForItem(item: any): string {
    return `/filtre`;
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
              { name: "Land Use", revision: "2024-02-15" },
              { name: "Land Cover", revision: "" }
            ]
          },
          {
            title: "Inputs",
            content: [
              { name: "Fertilizers by Nutrient", revision: "" },
              { name: "Fertilizers by Product", revision: "" },
              { name: "Livestock Manure", revision: "" },
              { name: "Pesticides Use", revision: "2024-03-04" },
              { name: "Pesticides Trade", revision: "" }
            ]
          },
          {
            title: "Sustainability Indicators",
            content: [
              { name: "Cropland Nutrient Balance", revision: "" },
              { name: "Livestock Patterns", revision: "" }
            ]
          },
          {
            title: "Climate Change Indicators",
            content: [
              { name: "Temperature change on land", revision: "" }
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
              { name: "Forestry Production and Trade", revision: "" },
              { name: "Land Cover", revision: "" }
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
              { name: "Emissions totals", revision: "" },
              { name: "Emissions indicators"},
              { name: "Emissions intensities"}
            ]
          },
          {
            title: "Farm gate",
            content: [
              { name: "Emissions from Crops" },
              { name: "Emissions from Livestock" },
              { name: "Emissions from Energy use in agriculture" }
            ]
          },
          {
            title: "Land use and change",
            content: [
              { name: "Emissions from Forests" },
              { name: "Emissions from Fires" },
              { name: "Emissions from Drained organic soils" }
            ]
          },
          {
            title: "Pre and post agricultural production",
            content: [
              { name: "Emissions from pre and post agricultural production", revision: null }
            ]
          }
        ]
      },
    ];
  }
}
