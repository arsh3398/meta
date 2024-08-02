import { Component } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent {
  dataAnalyticsTools=[
    {'tagLine':'Converse with BI tools', 'logos':['assets/tableau.png','assets/qlik.png','assets/pbi.png'] },
    {'tagLine':'Converse with Enterprise', 'logos':['assets/salesforce.png','assets/sap.png','assets/oracle.png'] },
    {'tagLine':'Deal with data warehouse', 'logos':['assets/mysql.png','assets/snowflake.png','assets/redshift.png'] },
    {'tagLine':'Cloud package', 'logos':['assets/azurems.png','assets/amazonws.png','assets/gcloud.png'] },
  ]
}
