import { DepartementService } from './../service/departement.service';
import { Departement } from './../../model/Departement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  departements!: Departement[];
  constructor(private departementService : DepartementService) { }

  ngOnInit(): void {
    this.departementService.listDepartement().subscribe((data)=> {
      this.departements = data;
      console.log(this.departements);
    })
  }
  deletedep(id:number){
    this.departementService.deleteDepartement(id).subscribe((data)=>{
      console.log(data);
      this.departementService.listDepartement().subscribe((data)=>{
        this.departements = data;
        console.log(this.departements);
    });
  });}

}
