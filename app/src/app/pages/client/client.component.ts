import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { Client } from "src/app/interfaces/client";
import { GeneralTotals } from "src/app/interfaces/generalTotals";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  clients: MatTableDataSource<Client>;
  private filterSubject = new Subject<string>();
  displayedColumns: string[] = ['image_src', '_id', 'name', 'total_enterprises', 'total_realties', 'actions'];
  generalTotals: GeneralTotals = {
    clients: 0,
    enterprises: 0,
    realties: 0,
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.filterSubject
      .pipe(debounceTime(2000))
      .subscribe((filterValue) => {
        this.clients.filter = filterValue;
    });
    this.clientService.getAll().subscribe((clientsData: Client[]) => {
      this.clients = new MatTableDataSource(clientsData);
    });
    this.clientService.getGeneralTotals().subscribe((generalTotalsData: GeneralTotals) => {
      this.generalTotals = generalTotalsData;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterSubject.next(filterValue.trim().toLowerCase());
  }

  goToDetails(client: Client) {
    this.router.navigate(['client', client._id]);
  }
}
