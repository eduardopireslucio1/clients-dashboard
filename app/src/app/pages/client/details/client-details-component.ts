import { Component, OnInit } from "@angular/core";
import { ClientService } from '../../../services/client.service';
import { EnterpriseService } from '../../../services/enterprise.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Enterprise } from "../../../interfaces/enterprise";
import { Client } from "src/app/interfaces/client";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details-component.html",
  styleUrls: ["./client-details-component.scss"],
})

export class ClientDetailsComponent implements OnInit {
  id: number;
  enterprises: MatTableDataSource<Enterprise>;
  displayedColumns: string[] = ['image_src', '_id', 'name', 'realties'];
  client: Client = {
    _id: 0,
    name: '',
    image_src: '',
    total_enterprises: 0,
    total_realties: 0,
  }

  constructor(private clientService: ClientService, private enterpriseService: EnterpriseService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: number = params['id'];
      if (id) {
        this.clientService.getById(id).subscribe((clientData: Client) => {
          this.client = clientData;
        });
        this.enterpriseService.getEnterprisesByCompany(id).subscribe((enterprisesData: Enterprise[]) => {
          this.enterprises = new MatTableDataSource(enterprisesData);
        });
      }
    });
  }
}

