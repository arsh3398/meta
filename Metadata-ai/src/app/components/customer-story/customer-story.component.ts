import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-customer-story',
  templateUrl: './customer-story.component.html',
  styleUrls: ['./customer-story.component.scss']
})

export class CustomerStoryComponent {
  activeTab:number = 0;
  makeActive(index:number){
    this.activeTab=index;
  }
  stylesTab={
    'filter':'grayscale(0%)',
    'border-bottom': '3px solid black',
  }
  stylesPanel={
    'display':'flex',
    'align-items': 'center'
  }
  TabName=['Overview','App Creation','BI and Analytics','Data Foundation']
  tablePanels=[{'headLine':'Metadata Data Experience Platform','img':'assets/blur-1.png','contentPara':'Put data to work for everyone with intuitive experiences and a secure foundation that connects across your data systems.'},
  {'headLine':'App Creation','img':'assets/blur-2.png','contentPara':'Create low-code and pro-code Business Apps that automate processes and insights and streamline decision-making.'},
  {'headLine':'BI and Analytics','img':'assets/blur-3.png','contentPara':'Our intuitive custom data views and reporting capabilities enable better, faster decision-making for all kinds of users.'},
  {'headLine':'Data Foundation','img':'assets/blur-4.png','contentPara':'Our secure data foundation provides the infrastructure, data integration, and governance that underpins your data experiences.'},]
}