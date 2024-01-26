import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { ClientDetailsModule } from "./client/details/client-details-module";

@NgModule({
  imports: [ClientModule, ClientDetailsModule],
})
export class PagesModule {}
