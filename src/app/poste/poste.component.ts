import { DepartementService } from './../service/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/model/Departement.model';
import { Poste } from 'src/model/Poste.model';
import { PosteService } from '../service/poste.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  postes!: Poste[];
  departements!: Departement[];

  constructor(private posteService : PosteService,
    private departementService : DepartementService) { }

  ngOnInit(): void {
    this.posteService.listPoste().subscribe((data)=> {
      this.postes = data;
      console.log(this.postes);
    })
    this.posteService.listDepartement().subscribe((data)=> {
      this.departements = data;
      console.log(this.departements);
    }) 

  }
  deletepos(id:number){
    
    this.posteService.deletePoste(id).subscribe((data)=>{
      console.log(data);
      this.posteService.listPoste().subscribe((data)=>{
        this.postes = data;
        console.log(this.postes);
    });
  });}

}
